import Image from "next/image";
import { HERO, HERO_BADGES, SITE } from "@/lib/content";
import { HERO_IMAGE } from "@/lib/images";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CTAButton } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden pt-32 md:pt-40 isolate">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-cream/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-8 md:pt-10">
            <Eyebrow>{HERO.eyebrow}</Eyebrow>

            <h1 className="display mt-7 text-[clamp(3rem,8vw,7.5rem)] font-medium text-espresso">
              {HERO.title}
            </h1>

            <p className="mt-7 max-w-[58ch] text-lg leading-relaxed text-espresso/80 md:text-xl">
              {HERO.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CTAButton href={`tel:${SITE.phone.replace(/-/g, "")}`} external>
                {HERO.primaryCta}
              </CTAButton>
              <CTAButton href="#services" variant="secondary">
                {HERO.secondaryCta}
              </CTAButton>
            </div>

            <div className="mt-14 flex items-center gap-6 text-sm text-espresso/65">
              <div className="flex items-center gap-2">
                <span className="block h-2 w-2 rounded-full bg-terracotta animate-pulse" aria-hidden />
                <span>זמינים השבוע</span>
              </div>
              <span className="h-4 w-px bg-espresso/20" aria-hidden />
              <span>שירות ב{SITE.serviceArea}</span>
            </div>
          </div>

          {/* Right-side trust badges (asymmetric editorial pull-out) */}
          <aside className="hidden md:col-span-4 md:flex md:items-end md:justify-end">
            <div className="bezel-outer w-full max-w-xs">
              <div className="bezel-inner p-6">
                <div className="text-[10px] uppercase tracking-[0.22em] text-espresso/60">
                  ההבטחה שלנו
                </div>
                <ul className="mt-4 space-y-4">
                  {HERO_BADGES.map((b, i) => (
                    <li key={b.title}>
                      <div className="display text-lg text-forest">{b.title}</div>
                      <p className="mt-1 text-[13px] leading-relaxed text-espresso/70">
                        {b.body}
                      </p>
                      {i < HERO_BADGES.length - 1 && (
                        <div className="mt-4 h-px bg-forest/10" aria-hidden />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
