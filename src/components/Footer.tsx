const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Shreyan Sharma. Built with passion.
        </p>
        <div className="flex items-center gap-6">
          {["GitHub", "LinkedIn", "Email"].map((item) => (
            <a
              key={item}
              href="#contact"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
