"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/content";
import { Phone } from "@phosphor-icons/react/dist/ssr";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 md:pt-6">
      <nav
        className={[
          "pointer-events-auto flex items-center gap-2 rounded-full",
          "border border-forest/10 transition-all duration-500 ease-soft",
          scrolled
            ? "bg-cream/85 backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(31,61,43,0.4)]"
            : "bg-cream/60 backdrop-blur-md",
          "pr-2 pl-3 py-2 md:pr-3 md:pl-4",
        ].join(" ")}
      >
        <Link
          href="/"
          aria-label="Lian Gardens — חזרה לבית"
          className="display text-lg md:text-xl tracking-tight px-3 pl-2 text-forest"
        >
          Lian Gardens
        </Link>

        <span className="hidden h-5 w-px bg-forest/15 md:block" aria-hidden />

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-espresso/75 transition-colors duration-300 hover:bg-forest/5 hover:text-forest"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={`tel:${SITE.phone.replace(/-/g, "")}`}
          className="ml-1 hidden items-center gap-2 rounded-full bg-forest px-4 py-2 text-sm text-cream transition-all duration-500 ease-soft hover:bg-forest-deep active:scale-[0.97] md:inline-flex"
        >
          <Phone size={15} weight="bold" />
          <span dir="ltr">{SITE.phoneDisplay}</span>
        </a>

        <button
          type="button"
          aria-label={open ? "סגור תפריט" : "פתח תפריט"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative h-10 w-10 rounded-full bg-forest/5 transition-colors duration-300 hover:bg-forest/10 md:hidden"
        >
          <span
            className={[
              "absolute left-1/2 top-1/2 block h-px w-5 -translate-x-1/2 bg-forest transition-transform duration-500 ease-soft",
              open ? "rotate-45" : "-translate-y-[5px]",
            ].join(" ")}
          />
          <span
            className={[
              "absolute left-1/2 top-1/2 block h-px w-5 -translate-x-1/2 bg-forest transition-transform duration-500 ease-soft",
              open ? "-rotate-45" : "translate-y-[5px]",
            ].join(" ")}
          />
        </button>
      </nav>

      {/* Mobile expanded overlay */}
      <div
        className={[
          "pointer-events-auto fixed inset-0 z-40 md:hidden",
          "transition-opacity duration-500 ease-soft",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-cream/95 backdrop-blur-2xl" />
        <div className="relative z-10 flex h-full flex-col items-end justify-center gap-1 px-8 pt-16 text-right">
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={[
                "display text-4xl text-espresso transition-all duration-700 ease-soft",
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0",
              ].join(" ")}
              style={{ transitionDelay: open ? `${100 + i * 80}ms` : "0ms" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phone.replace(/-/g, "")}`}
            onClick={() => setOpen(false)}
            className={[
              "mt-8 inline-flex items-center gap-3 rounded-full bg-forest px-6 py-3 text-cream transition-all duration-700 ease-soft",
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            ].join(" ")}
            style={{ transitionDelay: open ? `${100 + NAV_LINKS.length * 80}ms` : "0ms" }}
          >
            <Phone size={18} weight="bold" />
            <span dir="ltr">{SITE.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
