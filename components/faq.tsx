"use client";
import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/content";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Plus } from "@phosphor-icons/react/dist/ssr";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 md:py-40 bg-cream-deep/30">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>שאלות נפוצות</Eyebrow>
            <h2 className="display mt-6 text-4xl md:text-6xl text-espresso">
              קצת תשובות לפני שמדברים.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-espresso/70 max-w-md">
              לא מצאתם תשובה? <a href="#contact" className="underline decoration-terracotta underline-offset-4 transition-colors hover:text-forest">צרו קשר</a> ונחזור אליכם.
            </p>
          </div>

          <ul className="lg:col-span-7 space-y-3">
            {FAQ_ITEMS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={f.q}
                  className={[
                    "overflow-hidden rounded-2xl border transition-colors duration-500 ease-soft",
                    isOpen
                      ? "border-forest/30 bg-cream"
                      : "border-forest/10 bg-cream-deep/40",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right transition-colors hover:bg-cream"
                  >
                    <span className="font-medium text-espresso text-lg">{f.q}</span>
                    <span
                      className={[
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest/8 text-forest transition-transform duration-500 ease-soft",
                        isOpen ? "rotate-45 bg-forest text-cream" : "",
                      ].join(" ")}
                      aria-hidden
                    >
                      <Plus size={16} weight="bold" />
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-700 ease-soft"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-espresso/75 max-w-prose">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
