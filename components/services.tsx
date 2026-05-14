import Image from "next/image";
import { SERVICES } from "@/lib/content";
import { SERVICE_IMAGES } from "@/lib/images";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import {
  ShieldCheck,
  PencilRuler,
  TreeEvergreen,
  Plant,
  ArrowUpLeft,
} from "@phosphor-icons/react/dist/ssr";

const ICONS = {
  ShieldCheck,
  PencilRuler,
  TreeEvergreen,
  Plant,
};

// Asymmetric bento spans (large, small, small, large)
const SPANS = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
];

const ASPECTS = [
  "aspect-[16/12]",
  "aspect-[16/10]",
  "aspect-[16/10]",
  "aspect-[16/9]",
];

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-40 bg-cream-deep/30">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-8">
            <Eyebrow>השירותים שלנו</Eyebrow>
            <h2 className="display mt-6 text-4xl md:text-6xl text-espresso">
              ארבעה תחומים. <br />
              <span className="text-forest">סטנדרט אחד.</span>
            </h2>
          </Reveal>
          <Reveal delay={150} className="md:col-span-4">
            <p className="text-lg leading-relaxed text-espresso/70 max-w-md">
              כל שירות נבנה סביב הצרכים הייחודיים של הגינה שלכם. בלי שבלונות.
              בלי קיצורי דרך.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.iconName as keyof typeof ICONS];
            return (
              <Reveal key={s.title} delay={i * 90} className={SPANS[i]}>
                <article className="bezel-outer h-full group">
                  <div className="bezel-inner relative h-full overflow-hidden">
                    <div className={`relative ${ASPECTS[i]}`}>
                      <Image
                        src={SERVICE_IMAGES[s.imageKey]}
                        alt={s.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-1000 ease-soft group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/15 to-transparent" />
                      <div className="absolute right-5 top-5">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/85 text-forest backdrop-blur-md">
                          <Icon size={20} weight="light" />
                        </span>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="display text-2xl md:text-3xl text-espresso">
                          {s.title}
                        </h3>
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-500 ease-soft group-hover:bg-forest group-hover:text-cream group-hover:-translate-x-1"
                          aria-hidden
                        >
                          <ArrowUpLeft size={16} weight="light" />
                        </span>
                      </div>
                      <p className="mt-3 text-[15px] leading-relaxed text-espresso/70 max-w-prose">
                        {s.blurb}
                      </p>

                      <ul className="mt-5 flex flex-wrap gap-2">
                        {s.items.map((it) => (
                          <li
                            key={it}
                            className="rounded-full border border-forest/12 bg-forest/[0.04] px-3 py-1 text-[12px] text-espresso/75"
                          >
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
