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

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-40 bg-cream-deep/30">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 md:items-end">
          <Reveal className="lg:col-span-8">
            <Eyebrow>השירותים שלנו</Eyebrow>
            <h2 className="display mt-6 text-4xl md:text-6xl text-espresso">
              ארבעה תחומים. <br />
              <span className="text-forest">סטנדרט אחד.</span>
            </h2>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-4">
            <p className="text-lg leading-relaxed text-espresso/70 max-w-md md:ms-auto">
              כל שירות נבנה סביב הצרכים הייחודיים של הגינה שלכם. בלי שבלונות.
              בלי קיצורי דרך.
            </p>
          </Reveal>
        </div>

        {/* Editorial stripes — full-width rows, alternating image side */}
        <div className="mt-20 md:mt-28 divide-y divide-forest/12">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.iconName as keyof typeof ICONS];
            const imageLeft = i % 2 === 0; // 0,2 — image visually on the LEFT in RTL row

            return (
              <Reveal key={s.title} delay={i * 90}>
                <article
                  className={[
                    "group grid grid-cols-1 gap-8 py-12 md:py-20 lg:grid-cols-12 lg:gap-14 items-center",
                  ].join(" ")}
                >
                  {/* Image cell */}
                  <div
                    className={[
                      "lg:col-span-6 relative",
                      imageLeft ? "lg:order-2" : "lg:order-1",
                    ].join(" ")}
                  >
                    <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
                      <Image
                        src={SERVICE_IMAGES[s.imageKey]}
                        alt={s.title}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover transition-transform duration-[1200ms] ease-soft group-hover:scale-[1.05]"
                      />
                      {/* Accent corner badge with the service icon */}
                      <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-cream/90 text-forest backdrop-blur-md transition-transform duration-700 ease-soft group-hover:scale-110">
                        <Icon size={22} weight="light" />
                      </div>
                    </div>
                  </div>

                  {/* Content cell */}
                  <div
                    className={[
                      "lg:col-span-6",
                      imageLeft ? "lg:order-1" : "lg:order-2",
                    ].join(" ")}
                  >
                    {/* Big number eyebrow */}
                    <div className="flex items-baseline gap-4">
                      <span
                        className="display text-5xl md:text-6xl text-forest/15 font-medium"
                        dir="ltr"
                      >
                        0{i + 1}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-espresso/55">
                        מתחום ההתמחות שלנו
                      </span>
                    </div>

                    <h3 className="display mt-5 text-3xl md:text-5xl text-espresso leading-[1.05]">
                      {s.title}
                    </h3>

                    <p className="mt-6 text-lg leading-relaxed text-espresso/75 max-w-prose">
                      {s.blurb}
                    </p>

                    <ul className="mt-7 flex flex-wrap gap-2">
                      {s.items.map((it) => (
                        <li
                          key={it}
                          className="rounded-full border border-forest/15 bg-cream/60 px-3.5 py-1.5 text-[13px] text-espresso/80"
                        >
                          {it}
                        </li>
                      ))}
                    </ul>

                    {/* Hover accent line — draws under the title on hover */}
                    <div className="mt-8 flex items-center gap-3 text-sm text-forest/70 transition-colors duration-500 ease-soft group-hover:text-forest">
                      <span className="block h-px w-10 bg-forest/30 transition-all duration-700 ease-soft group-hover:w-20 group-hover:bg-forest" />
                      <span>שירות כלול בייעוץ הראשוני</span>
                      <ArrowUpLeft size={14} weight="light" className="transition-transform duration-500 ease-soft group-hover:-translate-x-1 group-hover:-translate-y-0.5" />
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
