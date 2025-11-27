import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PerformanceMonitor from '../PerformanceMonitor';

describe('PerformanceMonitor', () => {
  const originalEnv = process.env.NODE_ENV;

  beforeEach(() => {
    // Reset NODE_ENV before each test
    Object.defineProperty(process.env, 'NODE_ENV', {
      writable: true,
      value: 'development',
    });
  });

  afterEach(() => {
    // Restore original NODE_ENV
    Object.defineProperty(process.env, 'NODE_ENV', {
      writable: true,
      value: originalEnv,
    });
  });

  describe('rendering', () => {
    it('renders without crashing', () => {
      const { container } = render(<PerformanceMonitor />);
      expect(container).toBeInTheDocument();
    });

    it('does not display monitor initially', () => {
      render(<PerformanceMonitor />);
      expect(screen.queryByText('Performance Metrics')).not.toBeInTheDocument();
    });

    it('does not render in production environment', () => {
      Object.defineProperty(process.env, 'NODE_ENV', {
        writable: true,
        value: 'production',
      });

      render(<PerformanceMonitor />);
      expect(screen.queryByText('Performance Metrics')).not.toBeInTheDocument();
    });

    it('does not render in test environment', () => {
      Object.defineProperty(process.env, 'NODE_ENV', {
        writable: true,
        value: 'test',
      });

      render(<PerformanceMonitor />);
      expect(screen.queryByText('Performance Metrics')).not.toBeInTheDocument();
    });
  });

  describe('keyboard toggle', () => {
    it('toggles visibility on Ctrl+Shift+P', async () => {
      render(<PerformanceMonitor />);

      // Initially not visible
      expect(screen.queryByText('Performance Metrics')).not.toBeInTheDocument();

      // Press Ctrl+Shift+P
      fireEvent.keyDown(document, {
        key: 'P',
        ctrlKey: true,
        shiftKey: true,
      });

      // Should now be visible
      await waitFor(() => {
        expect(screen.getByText('Performance Metrics')).toBeInTheDocument();
      });

      // Press Ctrl+Shift+P again to toggle off
      fireEvent.keyDown(document, {
        key: 'P',
        ctrlKey: true,
        shiftKey: true,
      });

      // Should be hidden again
      await waitFor(() => {
        expect(screen.queryByText('Performance Metrics')).not.toBeInTheDocument();
      });
    });

    it('does not toggle without Ctrl key', () => {
      render(<PerformanceMonitor />);

      fireEvent.keyDown(document, {
        key: 'P',
        shiftKey: true,
      });

      expect(screen.queryByText('Performance Metrics')).not.toBeInTheDocument();
    });

    it('does not toggle without Shift key', () => {
      render(<PerformanceMonitor />);

      fireEvent.keyDown(document, {
        key: 'P',
        ctrlKey: true,
      });

      expect(screen.queryByText('Performance Metrics')).not.toBeInTheDocument();
    });

    it('does not toggle with wrong key', () => {
      render(<PerformanceMonitor />);

      fireEvent.keyDown(document, {
        key: 'Q',
        ctrlKey: true,
        shiftKey: true,
      });

      expect(screen.queryByText('Performance Metrics')).not.toBeInTheDocument();
    });
  });

  describe('cleanup', () => {
    it('removes event listener on unmount', () => {
      const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');

      const { unmount } = render(<PerformanceMonitor />);
      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));

      removeEventListenerSpy.mockRestore();
    });

    it('does not add event listener in production', () => {
      Object.defineProperty(process.env, 'NODE_ENV', {
        writable: true,
        value: 'production',
      });

      const addEventListenerSpy = jest.spyOn(document, 'addEventListener');

      render(<PerformanceMonitor />);

      expect(addEventListenerSpy).not.toHaveBeenCalledWith('keydown', expect.any(Function));

      addEventListenerSpy.mockRestore();
    });
  });

  describe('visual content', () => {
    it('displays heading when visible', async () => {
      render(<PerformanceMonitor />);

      fireEvent.keyDown(document, {
        key: 'P',
        ctrlKey: true,
        shiftKey: true,
      });

      await waitFor(() => {
        expect(screen.getByText('Performance Metrics')).toBeInTheDocument();
      });
    });

    it('displays toggle hint when visible', async () => {
      render(<PerformanceMonitor />);

      fireEvent.keyDown(document, {
        key: 'P',
        ctrlKey: true,
        shiftKey: true,
      });

      await waitFor(() => {
        expect(screen.getByText('Ctrl+Shift+P to toggle')).toBeInTheDocument();
      });
    });

    it('displays disabled message when visible', async () => {
      render(<PerformanceMonitor />);

      fireEvent.keyDown(document, {
        key: 'P',
        ctrlKey: true,
        shiftKey: true,
      });

      await waitFor(() => {
        expect(screen.getByText('Metric tracking disabled for testing.')).toBeInTheDocument();
      });
    });

    it('has proper styling when visible', async () => {
      const { container } = render(<PerformanceMonitor />);

      fireEvent.keyDown(document, {
        key: 'P',
        ctrlKey: true,
        shiftKey: true,
      });

      await waitFor(() => {
        const performanceDiv = container.querySelector('.fixed.bottom-4.right-4');
        expect(performanceDiv).toBeInTheDocument();
        expect(performanceDiv).toHaveClass('bg-white', 'rounded-lg', 'shadow-lg', 'p-4', 'z-50', 'max-w-sm');
      });
    });
  });

  describe('development mode check', () => {
    it('only works in development mode', () => {
      Object.defineProperty(process.env, 'NODE_ENV', {
        writable: true,
        value: 'development',
      });

      render(<PerformanceMonitor />);

      fireEvent.keyDown(document, {
        key: 'P',
        ctrlKey: true,
        shiftKey: true,
      });

      expect(screen.getByText('Performance Metrics')).toBeInTheDocument();
    });

    it('returns null when not in development and not visible', () => {
      Object.defineProperty(process.env, 'NODE_ENV', {
        writable: true,
        value: 'production',
      });

      const { container } = render(<PerformanceMonitor />);

      expect(container.firstChild).toBeNull();
    });
  });

  describe('multiple toggles', () => {
    it('handles rapid toggling correctly', async () => {
      render(<PerformanceMonitor />);

      // Toggle on
      fireEvent.keyDown(document, {
        key: 'P',
        ctrlKey: true,
        shiftKey: true,
      });

      await waitFor(() => {
        expect(screen.getByText('Performance Metrics')).toBeInTheDocument();
      });

      // Toggle off
      fireEvent.keyDown(document, {
        key: 'P',
        ctrlKey: true,
        shiftKey: true,
      });

      await waitFor(() => {
        expect(screen.queryByText('Performance Metrics')).not.toBeInTheDocument();
      });

      // Toggle on again
      fireEvent.keyDown(document, {
        key: 'P',
        ctrlKey: true,
        shiftKey: true,
      });

      await waitFor(() => {
        expect(screen.getByText('Performance Metrics')).toBeInTheDocument();
      });
    });
  });
});
