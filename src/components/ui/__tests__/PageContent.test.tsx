import { render, screen } from '@testing-library/react';
import PageContent from '../PageContent';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}));

describe('PageContent', () => {
  beforeEach(() => {
    // Reset matchMedia mock
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('renders children', () => {
    render(
      <PageContent>
        <div>Test Content</div>
      </PageContent>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies transition classes', () => {
    const { container } = render(
      <PageContent>
        <div>Content</div>
      </PageContent>
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('transition-opacity', 'duration-300', 'ease-out');
  });

  it('maintains full opacity by default', () => {
    const { container } = render(
      <PageContent>
        <div>Content</div>
      </PageContent>
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('opacity-100');
  });

  it('skips transition when reduced motion is preferred', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    const { container } = render(
      <PageContent>
        <div>Content</div>
      </PageContent>
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('opacity-100');
  });

  it('preserves children content', () => {
    const { container } = render(
      <PageContent>
        <p>Paragraph</p>
      </PageContent>
    );
    expect(screen.getByText('Paragraph')).toBeInTheDocument();
    expect(container.querySelector('p')).toBeInTheDocument();
  });
});
