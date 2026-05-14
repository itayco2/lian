import { TESTIMONIALS } from "@/lib/content";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Quotes } from "@phosphor-icons/react/dist/ssr";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>המלצות</Eyebrow>
            <h2 className="display mt-6 text-4xl md:text-6xl text-espresso">
              אנשים שגינתם <span className="text-forest">השתנתה.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="bezel-outer h-full">
                <blockquote className="bezel-inner h-full flex flex-col p-7 md:p-8">
                  <Quotes size={28} weight="fill" className="text-terracotta/80" />
                  <p className="mt-5 flex-1 text-lg leading-relaxed text-espresso/85">
                    "{t.quote}"
                  </p>
                  <figcaption className="mt-8 flex items-center gap-3 border-t border-forest/10 pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-cream display text-lg">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-medium text-espresso">{t.name}</div>
                      <div className="text-sm text-espresso/60">{t.location}</div>
                    </div>
                  </figcaption>
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
