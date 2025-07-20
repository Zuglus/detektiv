import { renderHook, act } from '@testing-library/react';
import { useFocusTrap } from '../useFocusTrap';

// Mock DOM methods
const mockAddEventListener = jest.fn();
const mockRemoveEventListener = jest.fn();
const mockGetElementById = jest.fn();

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

describe('useFocusTrap', () => {
  beforeEach(() => {
    mockAddEventListener.mockClear();
    mockRemoveEventListener.mockClear();
    mockGetElementById.mockReturnValue(null);
  });

  it('should not add keydown event listeners when isActive is false', () => {
    const initialCallCount = mockAddEventListener.mock.calls.length;
    
    renderHook(() => useFocusTrap(false));
    
    const keydownCalls = mockAddEventListener.mock.calls.filter(
      call => call[0] === 'keydown'
    );
    expect(keydownCalls).toHaveLength(0);
  });

  it('should not add keydown event listeners when mobile-menu element is not found', () => {
    mockGetElementById.mockReturnValue(null);
    
    renderHook(() => useFocusTrap(true));
    
    const keydownCalls = mockAddEventListener.mock.calls.filter(
      call => call[0] === 'keydown'
    );
    expect(keydownCalls).toHaveLength(0);
  });

  it('should add keydown event listeners when isActive is true and mobile-menu exists', () => {
    const mockContainer = {
      querySelectorAll: jest.fn().mockReturnValue([
        document.createElement('button'),
        document.createElement('a')
      ])
    };
    
    mockGetElementById.mockReturnValue(mockContainer);
    
    renderHook(() => useFocusTrap(true));
    
    const keydownCalls = mockAddEventListener.mock.calls.filter(
      call => call[0] === 'keydown'
    );
    expect(keydownCalls).toHaveLength(2);
  });

  it('should remove keydown event listeners on cleanup', () => {
    const mockContainer = {
      querySelectorAll: jest.fn().mockReturnValue([
        document.createElement('button')
      ])
    };
    
    mockGetElementById.mockReturnValue(mockContainer);
    
    const { unmount } = renderHook(() => useFocusTrap(true));
    
    act(() => {
      unmount();
    });
    
    const keydownCalls = mockRemoveEventListener.mock.calls.filter(
      call => call[0] === 'keydown'
    );
    expect(keydownCalls).toHaveLength(2);
  });

  it('should not add keydown event listeners when no focusable elements are found', () => {
    const mockContainer = {
      querySelectorAll: jest.fn().mockReturnValue([])
    };
    
    mockGetElementById.mockReturnValue(mockContainer);
    
    renderHook(() => useFocusTrap(true));
    
    const keydownCalls = mockAddEventListener.mock.calls.filter(
      call => call[0] === 'keydown'
    );
    expect(keydownCalls).toHaveLength(0);
  });
});