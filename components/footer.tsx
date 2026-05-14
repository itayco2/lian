import Link from "next/link";
import { FOOTER, NAV_LINKS, SITE } from "@/lib/content";
import { InstagramLogo, FacebookLogo, Phone } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="relative border-t border-forest/10 bg-cream-deep/50 py-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="display text-2xl text-forest">Lian Gardens</div>
            <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-espresso/70">
              {FOOTER.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.instagramUrl}
                aria-label="אינסטגרם"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 text-forest transition-all hover:bg-forest hover:text-cream"
              >
                <InstagramLogo size={18} weight="light" />
              </a>
              <a
                href={SITE.facebookUrl}
                aria-label="פייסבוק"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 text-forest transition-all hover:bg-forest hover:text-cream"
              >
                <FacebookLogo size={18} weight="light" />
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-espresso/55">
              ניווט
            </div>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[15px] text-espresso/80 transition-colors hover:text-forest"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-espresso/55">
              צרו קשר
            </div>
            <a
              href={`tel:${SITE.phone.replace(/-/g, "")}`}
              className="mt-4 inline-flex items-center gap-2 text-[15px] text-espresso transition-colors hover:text-forest"
            >
              <Phone size={14} weight="bold" />
              <span dir="ltr">{SITE.phoneDisplay}</span>
            </a>
            <div className="mt-2 text-[15px] text-espresso/75" dir="ltr">
              {SITE.email}
            </div>
            <div className="mt-2 text-[15px] text-espresso/75">
              {SITE.serviceArea}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-forest/10 pt-6 text-xs text-espresso/55 md:flex-row md:items-center">
          <div>{FOOTER.rights}</div>
          <div>
            עוצב ופותח בקפידה.
          </div>
        </div>
      </div>
    </footer>
  );
}
