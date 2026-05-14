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

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex flex-col items-center px-4 pt-5 md:pt-6">
      <nav
        className={[
          "pointer-events-auto flex items-center gap-2 rounded-full",
          "transition-all duration-500 ease-soft",
          scrolled
            ? "bg-cream/95 backdrop-blur-xl border border-forest/15 shadow-[0_14px_40px_-20px_rgba(31,61,43,0.45)]"
            : "bg-cream/85 backdrop-blur-2xl border border-forest/12 shadow-[0_10px_30px_-22px_rgba(31,61,43,0.4)]",
          "pr-2 pl-3 py-2 md:pr-3 md:pl-4",
        ].join(" ")}
      >
        <Link
          href="/"
          aria-label="Lian Gardens — חזרה לבית"
          className="font-body text-sm md:text-base font-medium tracking-[0.18em] uppercase text-forest px-3 pl-2"
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

      {/* Mobile dropdown menu — floats below the pill, doesn't take over the screen */}
      <div
        className={[
          "mt-3 w-[calc(100%-2rem)] max-w-sm overflow-hidden rounded-3xl border md:hidden",
          "transition-all duration-500 ease-soft",
          scrolled
            ? "bg-cream/95 backdrop-blur-xl border-forest/15"
            : "bg-cream/90 backdrop-blur-2xl border-forest/12",
          "shadow-[0_24px_60px_-20px_rgba(31,61,43,0.45)]",
          open
            ? "pointer-events-auto translate-y-0 opacity-100 max-h-[80vh]"
            : "pointer-events-none -translate-y-2 opacity-0 max-h-0",
        ].join(" ")}
        aria-hidden={!open}
      >
        <ul className="flex flex-col py-2">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-3.5 text-right text-base text-espresso transition-colors hover:bg-forest/5 hover:text-forest"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-t border-forest/10 p-3">
          <a
            href={`tel:${SITE.phone.replace(/-/g, "")}`}
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-cream transition-all duration-300 hover:bg-forest-deep active:scale-[0.97]"
          >
            <Phone size={16} weight="bold" />
            <span dir="ltr">{SITE.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
