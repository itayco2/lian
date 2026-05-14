import Image from "next/image";
import { HERO, HERO_BADGES, SITE } from "@/lib/content";
import { HERO_IMAGE } from "@/lib/images";
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
        {/* Soft bottom fade so CTAs blend into the page below */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/15 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8 lg:pt-10">
            {/* Glass card — keeps the garden image visible AROUND the text while ensuring readability */}
            <div className="rounded-3xl border border-cream/40 bg-cream/75 p-6 md:p-8 lg:p-10 backdrop-blur-xl shadow-[0_24px_60px_-20px_rgba(31,61,43,0.3)]">
              <h1 className="display text-[clamp(2.75rem,7.5vw,7rem)] font-medium text-espresso">
                {HERO.title}
              </h1>

              {/* Services strip — visual layer with terracotta dots between */}
              <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 md:gap-x-4">
                {HERO.services.map((s, i) => (
                  <li key={s} className="flex items-center gap-3 md:gap-4">
                    <span className="display text-lg md:text-xl text-forest font-medium">
                      {s}
                    </span>
                    {i < HERO.services.length - 1 && (
                      <span className="block h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden />
                    )}
                  </li>
                ))}
              </ul>

              {/* Pull-quote style subtitle with terracotta accent bar on the start (RTL right) */}
              <p className="mt-5 max-w-[58ch] border-r-2 border-terracotta/70 pr-4 text-base leading-relaxed text-espresso md:text-lg lg:text-xl">
                {HERO.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CTAButton href={`tel:${SITE.phone.replace(/-/g, "")}`} external>
                  {HERO.primaryCta}
                </CTAButton>
                <CTAButton href="#services" variant="secondary">
                  {HERO.secondaryCta}
                </CTAButton>
              </div>
            </div>
          </div>

          {/* Right-side trust badges (asymmetric editorial pull-out) */}
          <aside className="hidden lg:col-span-4 lg:flex lg:items-end lg:justify-end">
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
