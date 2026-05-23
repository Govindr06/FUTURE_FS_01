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

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-5 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold">Govind Rajeshkumar Pillai</p>
          <p className="mt-1 text-sm text-slate-400">
            Full Stack Web Developer & Computer Science Student at VIT Chennai.
          </p>
        </div>

        <nav aria-label="Footer social links" className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:border-teal-300 hover:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
