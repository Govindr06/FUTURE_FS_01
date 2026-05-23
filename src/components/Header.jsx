const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'Resume', href: '#resume' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Govindr06',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/govind-rajeshkumar-pillai-b3bb49321',
  },
];

function Header() {
  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"
      >
        <a
          href="#home"
          onClick={(event) => handleSmoothScroll(event, '#home')}
          className="text-lg font-bold text-slate-950"
        >
          <span className="sm:hidden">GRP</span>
          <span className="hidden sm:inline">Govind Rajeshkumar Pillai</span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="flex items-center gap-1 text-xs font-medium text-slate-700 sm:gap-5 sm:text-sm">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(event) => handleSmoothScroll(event, item.href)}
                  className="rounded-full px-2.5 py-2 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-teal-500 sm:px-3"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            aria-label="Social profile links"
            className="hidden items-center gap-2 border-l border-slate-200 pl-3 lg:flex"
          >
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-teal-600 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
