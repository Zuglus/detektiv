import { render } from "@testing-library/react";
import PageTransition from "../PageTransition";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/"),
}));

describe("PageTransition", () => {
  beforeEach(() => {
    // Reset matchMedia mock
    Object.defineProperty(window, "matchMedia", {
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

  it("renders loading bar", () => {
    const { container } = render(<PageTransition />);
    const loadingBar = container.querySelector('[role="presentation"]');
    expect(loadingBar).toBeInTheDocument();
  });

  it("applies correct classes for transition", () => {
    const { container } = render(<PageTransition />);
    const loadingBar = container.querySelector('[role="presentation"]');
    expect(loadingBar).toHaveClass(
      "fixed",
      "top-0",
      "left-0",
      "right-0",
      "h-1",
    );
    expect(loadingBar).toHaveClass("bg-primary-600", "origin-left");
    expect(loadingBar).toHaveClass("transform-gpu", "will-change-transform");
  });

  it('has aria-hidden="true" for accessibility', () => {
    const { container } = render(<PageTransition />);
    const loadingBar = container.querySelector('[role="presentation"]');
    expect(loadingBar).toHaveAttribute("aria-hidden", "true");
  });

  it("returns null when reduced motion is preferred", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: query === "(prefers-reduced-motion: reduce)",
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    const { container } = render(<PageTransition />);
    expect(container.firstChild).toBeNull();
  });

  it("has high z-index class for visibility", () => {
    const { container } = render(<PageTransition />);
    const loadingBar = container.querySelector('[role="presentation"]');
    expect(loadingBar).toHaveClass("z-[9999]");
  });
});
