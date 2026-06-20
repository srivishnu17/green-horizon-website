import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/919443052222"
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="wa-pulse fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+919443052222"
        aria-label="Call us"
        className="fixed bottom-24 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-card border border-border text-foreground shadow-[var(--shadow-card)] transition ${
          show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}