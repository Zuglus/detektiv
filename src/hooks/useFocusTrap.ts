'use client';

import { useEffect, useRef, useCallback } from 'react';

// Comprehensive selector for all focusable elements
const FOCUSABLE_ELEMENTS_SELECTOR = [
  'a[href]',
  'area[href]',
  'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
  'select:not([disabled]):not([aria-hidden])',
  'textarea:not([disabled]):not([aria-hidden])',
  'button:not([disabled]):not([aria-hidden])',
  'iframe',
  'object',
  'embed',
  '[contenteditable]',
  '[tabindex]:not([tabindex="-1"])',
  '[role="button"]',
  'details > summary',
  'audio[controls]',
  'video[controls]'
].join(', ');

export interface FocusTrapOptions {
  /** ID of the container element (default: 'mobile-menu') */
  containerId?: string;
  /** Callback when focus trap is activated */
  onActivate?: () => void;
  /** Callback when focus trap is deactivated */
  onDeactivate?: () => void;
  /** Callback when escape key is pressed */
  onEscape?: () => void;
  /** Element to focus when trap is activated (default: first focusable) */
  initialFocusRef?: React.RefObject<HTMLElement>;
  /** Element to return focus to when trap is deactivated */
  restoreFocusRef?: React.RefObject<HTMLElement>;
  /** Whether to set aria-hidden on background content (default: true) */
  hideBackground?: boolean;
  /** Whether to prevent scrolling when trap is active (default: false) */
  preventScroll?: boolean;
}

export function useFocusTrap(isActive: boolean, options: FocusTrapOptions = {}) {
  const {
    containerId = 'mobile-menu',
    onActivate,
    onDeactivate,
    onEscape,
    initialFocusRef,
    restoreFocusRef,
    hideBackground = true,
    preventScroll = false
  } = options;

  const containerRef = useRef<HTMLElement | null>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const focusableElements = useRef<HTMLElement[]>([]);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  // Memoized focusable elements finder for performance
  const findFocusableElements = useCallback((container: HTMLElement): HTMLElement[] => {
    const elements = Array.from(
      container.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR)
    ) as HTMLElement[];
    
    // Filter out elements that are not actually focusable
    return elements.filter(element => {
      const style = getComputedStyle(element);
      return (
        style.display !== 'none' &&
        style.visibility !== 'hidden' &&
        !element.hasAttribute('disabled') &&
        element.tabIndex >= 0
      );
    });
  }, []);

  // Handle background scroll prevention
  useEffect(() => {
    if (!preventScroll || !isActive) return;

    const originalStyle = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight
    };

    // Prevent scroll and compensate for scrollbar
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      // Match app behavior/tests: explicitly unset overflow on restore
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = originalStyle.paddingRight;
    };
  }, [isActive, preventScroll]);

  // Handle aria-hidden for background content
  useEffect(() => {
    if (!hideBackground || !isActive) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    // Get the navigation container that contains the hamburger button
    const navigationHeader = document.getElementById('navigation');
    
    // Find all siblings of the container and set aria-hidden
    const siblings = Array.from(document.body.children).filter(
      child => child !== container && child.tagName !== 'SCRIPT'
    ) as HTMLElement[];

    const originalAriaHidden = siblings.map(sibling => ({
      element: sibling,
      value: sibling.getAttribute('aria-hidden')
    }));

    // Apply aria-hidden to siblings, but exclude the navigation header
    siblings.forEach(sibling => {
      // Skip the navigation header to avoid hiding the hamburger button
      if (sibling === navigationHeader) {
        return;
      }
      sibling.setAttribute('aria-hidden', 'true');
    });

    return () => {
      originalAriaHidden.forEach(({ element, value }) => {
        if (value === null) {
          element.removeAttribute('aria-hidden');
        } else {
          element.setAttribute('aria-hidden', value);
        }
      });
    };
  }, [isActive, containerId, hideBackground]);

  // Main focus trap logic
  useEffect(() => {
    if (!isActive) {
      // Cleanup when deactivating
      if (restoreFocusRef?.current) {
        restoreFocusRef.current.focus();
      } else if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
      onDeactivate?.();
      return;
    }

    // Store the currently focused element
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Find the container
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn(`Focus trap container with id "${containerId}" not found`);
      return;
    }
    
    containerRef.current = container;
    
    // Find all focusable elements
    const elements = findFocusableElements(container);
    focusableElements.current = elements;

    if (elements.length === 0) {
      console.warn(`No focusable elements found in container "${containerId}"`);
      return;
    }

    // Focus initial element
    const initialElement = initialFocusRef?.current || elements[0];
    if (initialElement) {
      // Use setTimeout to ensure the element is rendered
      setTimeout(() => {
        initialElement.focus();
        lastFocusedElement.current = initialElement;
      }, 0);
    }

    onActivate?.();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        if (onEscape) {
          onEscape();
        } else {
          // Fallback: trigger close button if available
          const closeButton = container.querySelector('[data-close-on-escape]') as HTMLElement;
          closeButton?.click();
        }
        return;
      }

      if (e.key === 'Tab') {
        e.preventDefault();
        
        const currentElements = findFocusableElements(container);
        if (currentElements.length === 0) return;

        const currentIndex = currentElements.indexOf(document.activeElement as HTMLElement);
        let nextIndex: number;

        if (e.shiftKey) {
          // Shift + Tab (backwards)
          nextIndex = currentIndex <= 0 ? currentElements.length - 1 : currentIndex - 1;
        } else {
          // Tab (forwards)
          nextIndex = currentIndex >= currentElements.length - 1 ? 0 : currentIndex + 1;
        }

        currentElements[nextIndex]?.focus();
        lastFocusedElement.current = currentElements[nextIndex];
      }
    };

    // Handle focus events to ensure focus stays within trap
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      
      // If focus moved outside the container, bring it back
      if (!container.contains(target)) {
        e.preventDefault();
        const elementToFocus = lastFocusedElement.current || elements[0];
        elementToFocus?.focus();
      } else {
        lastFocusedElement.current = target;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, [isActive, containerId, onActivate, onDeactivate, onEscape, initialFocusRef, restoreFocusRef, findFocusableElements]);

  return containerRef;
}

// Legacy export for backward compatibility
export default useFocusTrap;
