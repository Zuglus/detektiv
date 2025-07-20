import { render } from '@testing-library/react';
import CommonHead from '../CommonHead';

describe('CommonHead', () => {
  it('renders viewport meta tag', () => {
    const { container } = render(<CommonHead />);
    const viewport = container.querySelector('meta[name="viewport"]');
    expect(viewport).toBeInTheDocument();
    expect(viewport).toHaveAttribute('content', 'width=device-width, initial-scale=1, viewport-fit=cover');
  });

  it('renders favicon links', () => {
    const { container } = render(<CommonHead />);
    const favicon = container.querySelector('link[rel="icon"]');
    const appleTouchIcon = container.querySelector('link[rel="apple-touch-icon"]');
    
    expect(favicon).toBeInTheDocument();
    expect(favicon).toHaveAttribute('href', '/favicon.ico');
    expect(appleTouchIcon).toBeInTheDocument();
    expect(appleTouchIcon).toHaveAttribute('href', '/favicon.ico');
  });

  it('renders theme color meta tag', () => {
    const { container } = render(<CommonHead />);
    const themeColor = container.querySelector('meta[name="theme-color"]');
    expect(themeColor).toBeInTheDocument();
    expect(themeColor).toHaveAttribute('content', '#339955');
  });
});