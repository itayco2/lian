import { TESTIMONIALS } from "@/lib/content";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Quotes, Star } from "@phosphor-icons/react/dist/ssr";

export function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section id="testimonials" className="relative py-32 md:py-40 overflow-hidden">
      {/* Soft background blob */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-sage/15 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-terracotta/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>המלצות</Eyebrow>
            <h2 className="display mt-6 text-4xl md:text-6xl text-espresso">
              אנשים שגינתם <span className="text-forest">השתנתה.</span>
            </h2>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-espresso/70 max-w-md lg:ms-auto">
              לא הצהרות שיווקיות — אנשים אמיתיים מהיישובים שלנו, על העבודה של ליאן.
            </p>
          </Reveal>
        </div>

        {/* Featured editorial quote — no card, just typography with a terracotta accent line */}
        <Reveal delay={120}>
          <figure className="mt-16 md:mt-24 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
            {/* Quote mark + vertical accent line */}
            <div className="lg:col-span-1 flex lg:flex-col items-start gap-4">
              <Quotes size={48} weight="fill" className="text-terracotta shrink-0" />
              <span className="hidden lg:block h-32 w-px bg-gradient-to-b from-terracotta/60 to-transparent" aria-hidden />
            </div>

            <blockquote className="lg:col-span-11">
              <p className="display text-3xl md:text-5xl leading-[1.2] text-espresso max-w-[24ch]">
                {featured.quote}
              </p>
              <figcaption className="mt-8 flex flex-wrap items-center gap-5 text-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream display text-xl">
                    {featured.name[0]}
                  </span>
                  <div>
                    <div className="font-medium text-espresso text-base">{featured.name}</div>
                    <div className="text-espresso/60 text-sm">{featured.location} · {featured.service}</div>
                  </div>
                </div>
                <span className="h-5 w-px bg-espresso/15" aria-hidden />
                <div className="flex items-center gap-0.5 text-terracotta">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} weight="fill" />
                  ))}
                </div>
              </figcaption>
            </blockquote>
          </figure>
        </Reveal>

        {/* Smaller testimonial cards — 4 in a 2x2 grid */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {rest.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="group h-full rounded-3xl border border-forest/12 bg-cream/70 p-7 md:p-8 transition-all duration-700 ease-soft hover:bg-cream hover:border-forest/25 hover:-translate-y-1">
                <div className="flex items-start justify-between gap-3">
                  <Quotes size={22} weight="fill" className="text-terracotta/75" />
                  <div className="flex items-center gap-0.5 text-terracotta/80">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} weight="fill" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-4 text-[17px] leading-relaxed text-espresso/85">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-forest/10 pt-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-cream display text-lg">
                      {t.name[0]}
                    </span>
                    <div>
                      <div className="font-medium text-espresso text-sm">{t.name}</div>
                      <div className="text-espresso/55 text-xs">{t.location}</div>
                    </div>
                  </div>
                  <span className="rounded-full bg-forest/8 text-forest text-[11px] px-3 py-1 whitespace-nowrap">
                    {t.service}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
