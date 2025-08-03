import { NextRequest, NextResponse } from 'next/server';
import { securityHeaders, securityUtils } from './security';

/**
 * Security middleware for Next.js API routes
 * Implements OWASP best practices for API security
 */
export function withSecurity(handler: (req: NextRequest) => Promise<NextResponse>) {
  return async (req: NextRequest): Promise<NextResponse> => {
    // Add security headers
    const response = await handler(req);
    
    // Apply security headers
    Object.entries(securityHeaders()).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
    
    return response;
  };
}

/**
 * Rate limiting middleware
 * Simple in-memory rate limiting for API protection
 */
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function withRateLimit(
  handler: (req: NextRequest) => Promise<NextResponse>,
  options = { windowMs: 15 * 60 * 1000, max: 100 }
) {
  return async (req: NextRequest): Promise<NextResponse> => {
    const clientIP = req.ip || req.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    
    // Clean expired entries
    for (const [ip, data] of rateLimitStore.entries()) {
      if (now > data.resetTime) {
        rateLimitStore.delete(ip);
      }
    }
    
    // Get or create rate limit data
    let rateLimitData = rateLimitStore.get(clientIP);
    if (!rateLimitData || now > rateLimitData.resetTime) {
      rateLimitData = {
        count: 1,
        resetTime: now + options.windowMs
      };
      rateLimitStore.set(clientIP, rateLimitData);
    } else {
      rateLimitData.count++;
    }
    
    // Check if rate limit exceeded
    if (rateLimitData.count > options.max) {
      return NextResponse.json(
        { error: 'Too many requests', message: 'Rate limit exceeded' },
        { 
          status: 429,
          headers: {
            'Retry-After': Math.ceil((rateLimitData.resetTime - now) / 1000).toString(),
            'X-RateLimit-Limit': options.max.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitData.resetTime.toString()
          }
        }
      );
    }
    
    // Add rate limit headers
    const response = await handler(req);
    response.headers.set('X-RateLimit-Limit', options.max.toString());
    response.headers.set('X-RateLimit-Remaining', (options.max - rateLimitData.count).toString());
    response.headers.set('X-RateLimit-Reset', rateLimitData.resetTime.toString());
    
    return response;
  };
}

/**
 * Input validation middleware
 * Validates and sanitizes request inputs
 */
export function withValidation<T>(
  handler: (req: NextRequest, validatedData: T) => Promise<NextResponse>,
  schema: {
    validate: (data: any) => { success: boolean; data?: T; error?: string };
  }
) {
  return async (req: NextRequest): Promise<NextResponse> => {
    try {
      // Parse request body
      const body = await req.json();
      
      // Validate input
      const validation = schema.validate(body);
      if (!validation.success) {
        return NextResponse.json(
          { error: 'Validation failed', message: validation.error },
          { status: 400 }
        );
      }
      
      // Sanitize input
      const sanitizedData = securityUtils.sanitize(JSON.stringify(validation.data));
      const parsedData = JSON.parse(sanitizedData);
      
      return await handler(req, parsedData);
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid request', message: 'Unable to parse request body' },
        { status: 400 }
      );
    }
  };
}

/**
 * CSRF protection middleware
 * Implements double-submit cookie pattern for CSRF protection
 */
export function withCsrf(handler: (req: NextRequest) => Promise<NextResponse>) {
  return async (req: NextRequest): Promise<NextResponse> => {
    // Skip CSRF for GET, HEAD, OPTIONS requests
    if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
      return await handler(req);
    }
    
    const csrfToken = req.headers.get('x-csrf-token');
    const cookieToken = req.cookies.get('csrf-token')?.value;
    
    if (!csrfToken || !cookieToken || csrfToken !== cookieToken) {
      return NextResponse.json(
        { error: 'CSRF validation failed' },
        { status: 403 }
      );
    }
    
    return await handler(req);
  };
}

/**
 * Security logging middleware
 * Logs security events for monitoring and auditing
 */
export function withSecurityLogging(
  handler: (req: NextRequest) => Promise<NextResponse>,
  eventName: string
) {
  return async (req: NextRequest): Promise<NextResponse> => {
    const startTime = Date.now();
    const clientIP = req.ip || req.headers.get('x-forwarded-for') || 'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';
    
    try {
      const response = await handler(req);
      const duration = Date.now() - startTime;
      
      // Log successful request
      console.log(`[Security] ${eventName} - Success`, {
        ip: clientIP,
        method: req.method,
        url: req.url,
        userAgent,
        duration,
        status: response.status
      });
      
      return response;
    } catch (error) {
      const duration = Date.now() - startTime;
      
      // Log error
      console.error(`[Security] ${eventName} - Error`, {
        ip: clientIP,
        method: req.method,
        url: req.url,
        userAgent,
        duration,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      
      throw error;
    }
  };
}

/**
 * Combined security middleware
 * Applies all security measures in one go
 */
export function withSecurityMiddleware<T>(
  handler: (req: NextRequest, validatedData?: T) => Promise<NextResponse>,
  options?: {
    schema?: { validate: (data: any) => { success: boolean; data?: T; error?: string } };
    eventName?: string;
    enableRateLimit?: boolean;
    enableCsrf?: boolean;
  }
) {
  let securedHandler = handler;
  
  // Apply security headers
  securedHandler = withSecurity(securedHandler);
  
  // Apply rate limiting
  if (options?.enableRateLimit) {
    securedHandler = withRateLimit(securedHandler);
  }
  
  // Apply CSRF protection
  if (options?.enableCsrf) {
    securedHandler = withCsrf(securedHandler);
  }
  
  // Apply input validation
  if (options?.schema) {
    securedHandler = withValidation(securedHandler, options.schema);
  }
  
  // Apply security logging
  if (options?.eventName) {
    securedHandler = withSecurityLogging(securedHandler, options.eventName);
  }
  
  return securedHandler;
}

export {
  withSecurity,
  withRateLimit,
  withValidation,
  withCsrf,
  withSecurityLogging
};