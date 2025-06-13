export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="
        sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10001]
        bg-primary-700 text-white px-4 py-2 rounded-md font-medium
        transform transition-all duration-200
        focus:outline-none focus:ring-4 focus:ring-primary-300
        hover:bg-primary-800
        shadow-lg
      "
      tabIndex={0}
    >
      Skip to main content
    </a>
  );
}