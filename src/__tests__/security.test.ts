import { securityHeaders, securityUtils, validate, securityMonitoring } from '@/lib/security';

describe('Security Configuration', () => {
  describe('securityHeaders', () => {
    it('returns all required security headers', () => {
      const headers = securityHeaders();
      
      expect(headers).toHaveProperty('X-Frame-Options', 'DENY');
      expect(headers).toHaveProperty('X-Content-Type-Options', 'nosniff');
      expect(headers).toHaveProperty('Referrer-Policy', 'strict-origin-when-cross-origin');
      expect(headers).toHaveProperty('X-XSS-Protection', '1; mode=block');
      expect(headers).toHaveProperty('Permissions-Policy');
      expect(headers).toHaveProperty('Content-Security-Policy');
    });

    it('generates proper CSP header', () => {
      const headers = securityHeaders();
      const csp = headers['Content-Security-Policy'];
      
      expect(csp).toContain("default-src 'self'");
      expect(csp).toContain("script-src 'self' 'unsafe-inline' 'unsafe-eval'");
      expect(csp).toContain("style-src 'self' 'unsafe-inline'");
      expect(csp).toContain("font-src 'self'");
      expect(csp).toContain("img-src 'self' data: blob:");
      expect(csp).toContain("connect-src 'self'");
      expect(csp).toContain("frame-src 'none'");
      expect(csp).toContain("object-src 'none'");
      expect(csp).toContain("frame-ancestors 'none'");
    });

    it('includes modern security directives in CSP', () => {
      const headers = securityHeaders();
      const csp = headers['Content-Security-Policy'];
      
      expect(csp).toContain('upgrade-insecure-requests');
      expect(csp).toContain('block-all-mixed-content');
      expect(csp).toContain('require-trusted-types-for');
    });
  });

  describe('securityUtils', () => {
    describe('sanitize', () => {
      it('sanitizes HTML entities', () => {
        const input = '<script>alert("xss")</script>';
        const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;';
        
        expect(securityUtils.sanitize(input)).toBe(expected);
      });

      it('handles special characters correctly', () => {
        const input = 'Test & " \' < >';
        const expected = 'Test &amp; &quot; &#x27; &lt; &gt;';
        
        expect(securityUtils.sanitize(input)).toBe(expected);
      });

      it('leaves safe text unchanged', () => {
        const input = 'Hello World 123';
        expect(securityUtils.sanitize(input)).toBe(input);
      });
    });

    describe('isValidUrl', () => {
      it('accepts localhost URLs', () => {
        expect(securityUtils.isValidUrl('http://localhost:3000')).toBe(true);
        expect(securityUtils.isValidUrl('https://localhost/api')).toBe(true);
      });

      it('accepts trusted domain URLs', () => {
        expect(securityUtils.isValidUrl('https://detektive.com/page')).toBe(true);
        expect(securityUtils.isValidUrl('https://detektive.ru/contact')).toBe(true);
      });

      it('rejects untrusted domains', () => {
        expect(securityUtils.isValidUrl('https://evil.com')).toBe(false);
        expect(securityUtils.isValidUrl('https://phishing.ru')).toBe(false);
      });

      it('rejects invalid URLs', () => {
        expect(securityUtils.isValidUrl('javascript:alert(1)')).toBe(false);
        expect(securityUtils.isValidUrl('ftp://evil.com')).toBe(false);
        expect(securityUtils.isValidUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
      });
    });

    describe('generateToken', () => {
      it('generates tokens of specified length', () => {
        const token = securityUtils.generateToken(32);
        expect(token).toHaveLength(32);
      });

      it('generates different tokens on each call', () => {
        const token1 = securityUtils.generateToken();
        const token2 = securityUtils.generateToken();
        expect(token1).not.toBe(token2);
      });

      it('uses only safe characters', () => {
        const token = securityUtils.generateToken();
        expect(token).toMatch(/^[A-Za-z0-9]+$/);
      });
    });
  });

  describe('validate', () => {
    describe('email', () => {
      it('accepts valid email addresses', () => {
        expect(validate.email('test@example.com')).toBe(true);
        expect(validate.email('user.name@domain.co.uk')).toBe(true);
        expect(validate.email('user+tag@example.org')).toBe(true);
      });

      it('rejects invalid email addresses', () => {
        expect(validate.email('invalid-email')).toBe(false);
        expect(validate.email('@example.com')).toBe(false);
        expect(validate.email('test@')).toBe(false);
        expect(validate.email('test@.com')).toBe(false);
      });
    });

    describe('phone', () => {
      it('accepts valid Russian phone numbers', () => {
        expect(validate.phone('+7 (999) 123-45-67')).toBe(true);
        expect(validate.phone('8 999 123 45 67')).toBe(true);
        expect(validate.phone('89991234567')).toBe(true);
        expect(validate.phone('999-123-45-67')).toBe(true);
      });

      it('rejects invalid phone numbers', () => {
        expect(validate.phone('123')).toBe(false);
        expect(validate.phone('abc')).toBe(false);
        expect(validate.phone('+1 555 123 4567')).toBe(false);
      });
    });

    describe('name', () => {
      it('accepts valid names', () => {
        expect(validate.name('John Doe')).toBe(true);
        expect(validate.name('Иван Петров')).toBe(true);
        expect(validate.name('Mary-Jane')).toBe(true);
      });

      it('rejects invalid names', () => {
        expect(validate.name('A')).toBe(false); // Too short
        expect(validate.name('A'.repeat(51))).toBe(false); // Too long
        expect(validate.name('John123')).toBe(false); // Contains numbers
        expect(validate.name('John@Doe')).toBe(false); // Contains special characters
      });
    });

    describe('message', () => {
      it('accepts valid messages', () => {
        expect(validate.message('This is a valid message with sufficient length')).toBe(true);
      });

      it('rejects messages that are too short', () => {
        expect(validate.message('Short')).toBe(false);
      });

      it('rejects messages that are too long', () => {
        expect(validate.message('A'.repeat(1001))).toBe(false);
      });
    });
  });

  describe('securityMonitoring', () => {
    describe('logEvent', () => {
      let consoleLogSpy: jest.SpyInstance;

      beforeEach(() => {
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
      });

      afterEach(() => {
        consoleLogSpy.mockRestore();
      });

      it('logs security events in production', () => {
        // Mock process.env.NODE_ENV
        const originalEnv = process.env.NODE_ENV;
        Object.defineProperty(process, 'env', {
          value: { NODE_ENV: 'production' },
          configurable: true
        });

        securityMonitoring.logEvent('test-event', { detail: 'test' });
        
        expect(consoleLogSpy).toHaveBeenCalledWith(
          '[Security Event] test-event:',
          { detail: 'test' }
        );

        // Restore original env
        Object.defineProperty(process, 'env', {
          value: { NODE_ENV: originalEnv },
          configurable: true
        });
      });

      it('does not log in development', () => {
        // Mock process.env.NODE_ENV
        const originalEnv = process.env.NODE_ENV;
        Object.defineProperty(process, 'env', {
          value: { NODE_ENV: 'development' },
          configurable: true
        });

        securityMonitoring.logEvent('test-event', { detail: 'test' });
        
        expect(consoleLogSpy).not.toHaveBeenCalled();

        // Restore original env
        Object.defineProperty(process, 'env', {
          value: { NODE_ENV: originalEnv },
          configurable: true
        });
      });
    });

    describe('threats', () => {
      it('contains all expected threat types', () => {
        const expectedThreats = [
          'sql-injection',
          'xss-attempt',
          'csrf-suspected',
          'rate-limit-exceeded',
          'invalid-input',
          'suspicious-user-agent'
        ];

        expect(securityMonitoring.threats).toEqual(expectedThreats);
      });
    });
  });
});