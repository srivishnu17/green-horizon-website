import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#benefits", label: "Benefits" },
  { href: "#project", label: "Project" },
  { href: "#sustainability", label: "Impact" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-[0_8px_30px_-12px_rgba(0,27,68,0.18)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-energy)] text-white shadow-[var(--shadow-glow)]">
            <Sun className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm font-bold tracking-tight text-foreground">SP Vijay Green Power</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Clean Energy. Strong Future.</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark((d) => !d)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground/80 transition hover:text-primary"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full btn-hero px-5 py-2.5 text-sm font-semibold lg:inline-flex"
          >
            Get in touch
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden">
          <div className="mx-4 mb-3 rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-card)]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full btn-hero px-5 py-2.5 text-center text-sm font-semibold"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}