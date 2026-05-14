import { VALUES } from "@/lib/content";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { HandHeart, Ruler, Sun } from "@phosphor-icons/react/dist/ssr";

const ICONS = { HandHeart, Ruler, Sun };

export function Values() {
  return (
    <section id="values" className="relative py-32 md:py-40 bg-forest text-cream">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cream/80">
              <span className="h-1 w-1 rounded-full bg-terracotta" aria-hidden />
              למה אנחנו
            </span>
            <h2 className="display mt-6 text-4xl md:text-6xl">
              שלוש הבטחות. <br />
              <span className="text-terracotta-soft">בלי כוכביות.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {VALUES.map((v, i) => {
            const Icon = ICONS[v.iconName as keyof typeof ICONS];
            return (
              <Reveal key={v.title} delay={i * 120}>
                <div className="group h-full rounded-3xl border border-cream/10 bg-cream/[0.03] p-8 transition-colors duration-700 ease-soft hover:bg-cream/[0.06] hover:border-cream/20">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-terracotta-soft transition-transform duration-700 ease-soft group-hover:scale-105">
                    <Icon size={22} weight="light" />
                  </span>
                  <h3 className="display mt-7 text-2xl text-cream">{v.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-cream/75 max-w-prose">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
