import Image from "next/image";
import { ABOUT } from "@/lib/content";
import { ABOUT_IMAGE } from "@/lib/images";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Check } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>{ABOUT.eyebrow}</Eyebrow>
              <h2 className="display mt-6 text-4xl md:text-6xl text-espresso">
                {ABOUT.title}
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-espresso/75 max-w-[60ch]">
              {ABOUT.paragraphs.map((p, i) => (
                <Reveal key={i} delay={120 + i * 80}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={350}>
              <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-2xl">
                {ABOUT.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 rounded-2xl border border-forest/10 bg-cream-deep/40 px-4 py-3 text-sm text-espresso/80"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest text-cream">
                      <Check size={14} weight="bold" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="bezel-outer">
              <div className="bezel-inner relative aspect-[4/5]">
                <Image
                  src={ABOUT_IMAGE.src}
                  alt={ABOUT_IMAGE.alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-cream/60 bg-cream/90 px-5 py-4 backdrop-blur-md flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-espresso/60">
                      מייסד
                    </div>
                    <div className="display mt-1 text-2xl text-forest">ליאן</div>
                    <div className="mt-1 text-xs text-espresso/65">גנן ראשי ומעצב גינות</div>
                  </div>
                  <div className="shrink-0 rounded-full bg-forest text-cream px-3 py-1.5 text-[11px] tracking-wide">
                    אישית, מהיום הראשון
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
