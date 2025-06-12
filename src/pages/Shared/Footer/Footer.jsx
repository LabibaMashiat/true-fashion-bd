const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 min-h-32 relative">
      {/* Upper button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute right-4 top-4 bg-primary text-white p-2 rounded-full shadow-md hover:bg-primary-focus transition duration-300"
        aria-label="Back to top"
      >
        ↑
      </button>

      <aside>
        <p className=" text-center">
          Copyright © {new Date().getFullYear()} - TRUE FASHION BD
        </p>
      </aside>
    </footer>
  );
};
export default Footer;