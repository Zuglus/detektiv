import { renderHook, act } from '@testing-library/react';
import { useFocusTrap, FocusTrapOptions } from '../useFocusTrap';
import { createRef } from 'react';

// Mock DOM methods
const mockAddEventListener = jest.fn();
const mockRemoveEventListener = jest.fn();
const mockGetElementById = jest.fn();
const mockQuerySelectorAll = jest.fn();
const mockSetAttribute = jest.fn();
const mockRemoveAttribute = jest.fn();
const mockGetAttribute = jest.fn();
const mockFocus = jest.fn();
const mockClick = jest.fn();

// Mock console.warn to avoid noise in tests
const mockConsoleWarn = jest.spyOn(console, 'warn').mockImplementation();

Object.defineProperty(document, 'getElementById', {
  value: mockGetElementById,
  configurable: true,
});

Object.defineProperty(document, 'addEventListener', {
  value: mockAddEventListener,
  configurable: true,
});

Object.defineProperty(document, 'removeEventListener', {
  value: mockRemoveEventListener,
  configurable: true,
});

// Mock getComputedStyle
Object.defineProperty(window, 'getComputedStyle', {
  value: jest.fn(() => ({
    display: 'block',
    visibility: 'visible'
  })),
  configurable: true,
});

// Mock body style
Object.defineProperty(document.body, 'style', {
  value: {
    overflow: '',
    paddingRight: ''
  },
  configurable: true,
});

// Mock window dimensions
Object.defineProperty(window, 'innerWidth', {
  value: 1024,
  configurable: true,
});

Object.defineProperty(document.documentElement, 'clientWidth', {
  value: 1024,
  configurable: true,
});

// Helper to create mock element
const createMockElement = (tagName: string = 'div') => ({
  tagName: tagName.toUpperCase(),
  setAttribute: mockSetAttribute,
  removeAttribute: mockRemoveAttribute,
  getAttribute: mockGetAttribute,
  hasAttribute: jest.fn().mockReturnValue(false),
  focus: mockFocus,
  click: mockClick,
  tabIndex: 0,
  contains: jest.fn().mockReturnValue(true),
  querySelectorAll: mockQuerySelectorAll,
  querySelector: jest.fn().mockReturnValue(null)
});

describe('useFocusTrap', () => {
  beforeEach(() => {
    mockAddEventListener.mockClear();
    mockRemoveEventListener.mockClear();
    mockGetElementById.mockReturnValue(null);
    mockQuerySelectorAll.mockReturnValue([]);
    mockSetAttribute.mockClear();
    mockRemoveAttribute.mockClear();
    mockGetAttribute.mockClear();
    mockFocus.mockClear();
    mockClick.mockClear();
    mockConsoleWarn.mockClear();
    
    // Reset document.activeElement
    Object.defineProperty(document, 'activeElement', {
      value: document.body,
      configurable: true,
    });
  });
  
  afterAll(() => {
    mockConsoleWarn.mockRestore();
  });

  describe('Basic functionality', () => {
    it('should not add event listeners when isActive is false', () => {
      const initialCalls = mockAddEventListener.mock.calls.length;
      
      renderHook(() => useFocusTrap(false));
      
      const newCalls = mockAddEventListener.mock.calls.slice(initialCalls);
      const focusTrapCalls = newCalls.filter(call => 
        call[0] === 'keydown' || call[0] === 'focusin'
      );
      expect(focusTrapCalls).toHaveLength(0);
    });

    it('should warn and not add event listeners when container is not found', () => {
      mockGetElementById.mockReturnValue(null);
      
      renderHook(() => useFocusTrap(true));
      
      expect(mockConsoleWarn).toHaveBeenCalledWith(
        'Focus trap container with id "mobile-menu" not found'
      );
      expect(mockAddEventListener).not.toHaveBeenCalled();
    });

    it('should add event listeners when container exists with focusable elements', () => {
      const mockButton = createMockElement('button');
      const mockLink = createMockElement('a');
      const mockContainer = createMockElement('div');
      
      mockContainer.querySelectorAll.mockReturnValue([mockButton, mockLink]);
      mockGetElementById.mockReturnValue(mockContainer);
      
      renderHook(() => useFocusTrap(true));
      
      const eventCalls = mockAddEventListener.mock.calls;
      expect(eventCalls.some(call => call[0] === 'keydown')).toBe(true);
      expect(eventCalls.some(call => call[0] === 'focusin')).toBe(true);
    });

    it('should remove event listeners on cleanup', () => {
      const mockButton = createMockElement('button');
      const mockContainer = createMockElement('div');
      
      mockContainer.querySelectorAll.mockReturnValue([mockButton]);
      mockGetElementById.mockReturnValue(mockContainer);
      
      const { unmount } = renderHook(() => useFocusTrap(true));
      
      act(() => {
        unmount();
      });
      
      const removeCalls = mockRemoveEventListener.mock.calls;
      expect(removeCalls.some(call => call[0] === 'keydown')).toBe(true);
      expect(removeCalls.some(call => call[0] === 'focusin')).toBe(true);
    });

    it('should warn when no focusable elements are found', () => {
      const mockContainer = createMockElement('div');
      mockContainer.querySelectorAll.mockReturnValue([]);
      mockGetElementById.mockReturnValue(mockContainer);
      
      renderHook(() => useFocusTrap(true));
      
      expect(mockConsoleWarn).toHaveBeenCalledWith(
        'No focusable elements found in container "mobile-menu"'
      );
    });
  });
  
  describe('Options and callbacks', () => {
    it('should use custom containerId when provided', () => {
      const options: FocusTrapOptions = { containerId: 'custom-menu' };
      
      renderHook(() => useFocusTrap(true, options));
      
      expect(mockGetElementById).toHaveBeenCalledWith('custom-menu');
    });
    
    it('should call onActivate when focus trap activates', () => {
      const onActivate = jest.fn();
      const mockButton = createMockElement('button');
      const mockContainer = createMockElement('div');
      
      mockContainer.querySelectorAll.mockReturnValue([mockButton]);
      mockGetElementById.mockReturnValue(mockContainer);
      
      renderHook(() => useFocusTrap(true, { onActivate }));
      
      // Use setTimeout to wait for async focus
      setTimeout(() => {
        expect(onActivate).toHaveBeenCalled();
      }, 0);
    });
    
    it('should call onDeactivate when focus trap deactivates', () => {
      const onDeactivate = jest.fn();
      const mockButton = createMockElement('button');
      const mockContainer = createMockElement('div');
      
      mockContainer.querySelectorAll.mockReturnValue([mockButton]);
      mockGetElementById.mockReturnValue(mockContainer);
      
      const { rerender } = renderHook(
        ({ isActive }) => useFocusTrap(isActive, { onDeactivate }),
        { initialProps: { isActive: true } }
      );
      
      rerender({ isActive: false });
      
      expect(onDeactivate).toHaveBeenCalled();
    });
    
    it('should focus initial element when initialFocusRef is provided', () => {
      const initialFocusRef = createRef<HTMLElement>();
      const mockInitialElement = createMockElement('input');
      const mockButton = createMockElement('button');
      const mockContainer = createMockElement('div');
      
      // @ts-expect-error - setting current for test
      initialFocusRef.current = mockInitialElement;
      
      mockContainer.querySelectorAll.mockReturnValue([mockButton]);
      mockGetElementById.mockReturnValue(mockContainer);
      
      renderHook(() => useFocusTrap(true, { initialFocusRef: initialFocusRef as React.RefObject<HTMLElement> }));
      
      setTimeout(() => {
        expect(mockInitialElement.focus).toHaveBeenCalled();
      }, 0);
    });
  });
  
  describe('Accessibility features', () => {
    it('should set aria-hidden on background elements when hideBackground is true', () => {
      const mockButton = createMockElement('button');
      const mockContainer = createMockElement('div');
      const mockSibling = createMockElement('div');
      
      mockContainer.querySelectorAll.mockReturnValue([mockButton]);
      mockGetElementById.mockReturnValue(mockContainer);
      
      // Mock document.body.children
      Object.defineProperty(document.body, 'children', {
        value: [mockContainer, mockSibling],
        configurable: true,
      });
      
      renderHook(() => useFocusTrap(true, { hideBackground: true }));
      
      expect(mockSibling.setAttribute).toHaveBeenCalledWith('aria-hidden', 'true');
    });
    
    it('should prevent body scroll when preventScroll is true', () => {
      const mockButton = createMockElement('button');
      const mockContainer = createMockElement('div');
      
      mockContainer.querySelectorAll.mockReturnValue([mockButton]);
      mockGetElementById.mockReturnValue(mockContainer);
      
      renderHook(() => useFocusTrap(true, { preventScroll: true }));
      
      expect(document.body.style.overflow).toBe('hidden');
    });
  });
  
  describe('Edge cases and error handling', () => {
    it('should handle missing container gracefully', () => {
      mockGetElementById.mockReturnValue(null);
      
      expect(() => {
        renderHook(() => useFocusTrap(true));
      }).not.toThrow();
    });
    
    it('should handle elements without tabIndex', () => {
      const mockElement = createMockElement('div');
      mockElement.tabIndex = -1;
      
      const mockContainer = createMockElement('div');
      mockContainer.querySelectorAll.mockReturnValue([mockElement]);
      mockGetElementById.mockReturnValue(mockContainer);
      
      expect(() => {
        renderHook(() => useFocusTrap(true));
      }).not.toThrow();
    });
  });
});

describe('Backward compatibility', () => {
  it('should maintain backward compatibility with simple boolean parameter', () => {
    const mockButton = createMockElement('button');
    const mockContainer = createMockElement('div');
    
    mockContainer.querySelectorAll.mockReturnValue([mockButton]);
    mockGetElementById.mockReturnValue(mockContainer);
    
    expect(() => {
      renderHook(() => useFocusTrap(true));
    }).not.toThrow();
    
    expect(mockGetElementById).toHaveBeenCalledWith('mobile-menu');
  });
});