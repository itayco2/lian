import { TESTIMONIALS } from "@/lib/content";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Quotes } from "@phosphor-icons/react/dist/ssr";

export function Testimonials() {
  const [featured, second] = TESTIMONIALS;

  return (
    <section id="testimonials" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <Eyebrow>המלצות</Eyebrow>
            <h2 className="display mt-6 text-4xl md:text-6xl text-espresso">
              אנשים שגינתם <span className="text-forest">השתנתה.</span>
            </h2>
          </Reveal>
          <Reveal delay={150} className="md:col-span-5">
            <p className="text-lg leading-relaxed text-espresso/70 max-w-md md:ms-auto">
              לא הצהרות שיווקיות — אנשים אמיתיים מהיישובים שלנו, על העבודה של ליאן.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-stretch">
          {/* Featured testimonial — large, dark, dramatic */}
          <Reveal className="md:col-span-7">
            <figure className="bezel-outer h-full">
              <blockquote className="bezel-inner h-full flex flex-col p-8 md:p-12 bg-forest text-cream relative overflow-hidden">
                <Quotes size={64} weight="fill" className="text-terracotta absolute -right-3 -top-3 opacity-30" />
                <div className="text-[10px] uppercase tracking-[0.22em] text-cream/55">
                  סיפור מהשטח
                </div>
                <p className="mt-6 flex-1 display text-3xl md:text-4xl leading-[1.25] text-cream">
                  "{featured.quote}"
                </p>
                <figcaption className="mt-10 flex items-center justify-between gap-3 border-t border-cream/15 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta text-cream display text-xl">
                      {featured.name[0]}
                    </div>
                    <div>
                      <div className="font-medium text-cream">{featured.name}</div>
                      <div className="text-sm text-cream/65">{featured.location}</div>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-1 text-terracotta-soft" aria-label="חמישה כוכבים">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                </figcaption>
              </blockquote>
            </figure>
          </Reveal>

          {/* Secondary testimonial */}
          <Reveal delay={120} className="md:col-span-5">
            <figure className="bezel-outer h-full">
              <blockquote className="bezel-inner h-full flex flex-col p-8 md:p-10">
                <Quotes size={28} weight="fill" className="text-terracotta/80" />
                <p className="mt-5 flex-1 text-[19px] leading-relaxed text-espresso/85">
                  "{second.quote}"
                </p>
                <figcaption className="mt-8 flex items-center justify-between gap-3 border-t border-forest/10 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-cream display text-lg">
                      {second.name[0]}
                    </div>
                    <div>
                      <div className="font-medium text-espresso">{second.name}</div>
                      <div className="text-sm text-espresso/60">{second.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-terracotta" aria-label="חמישה כוכבים">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-base">★</span>
                    ))}
                  </div>
                </figcaption>
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
