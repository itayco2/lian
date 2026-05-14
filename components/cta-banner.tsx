import Link from "next/link";
import { SITE } from "@/lib/content";
import { ArrowLeft, Phone } from "@phosphor-icons/react/dist/ssr";

export function CtaBanner() {
  return (
    <section
      aria-label="פעולה מהירה"
      className="relative overflow-hidden bg-terracotta py-20 md:py-28 text-cream"
    >
      {/* Decorative blurred shape */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-cream/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-forest/30 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-8">
            <div className="text-[10px] uppercase tracking-[0.22em] text-cream/70">
              מוכנים להתחיל?
            </div>
            <h2 className="display mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">
              גינה שמתאימה לכם בדיוק. <br />
              <span className="text-cream/80">שיחה קצרה ונראה איך מתחילים.</span>
            </h2>
          </div>
          <div className="md:col-span-4">
            <div className="flex flex-col gap-3 md:items-end">
              <a
                href={`tel:${SITE.phone.replace(/-/g, "")}`}
                className="group inline-flex items-center justify-between gap-3 rounded-full bg-cream pl-2 pr-6 py-2 text-espresso transition-all duration-500 ease-soft hover:bg-espresso hover:text-cream active:scale-[0.97] w-full md:w-auto"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta text-cream transition-transform duration-500 ease-soft group-hover:-translate-x-1">
                  <Phone size={18} weight="bold" />
                </span>
                <span className="display text-xl" dir="ltr">{SITE.phoneDisplay}</span>
              </a>
              <Link
                href="#contact"
                className="group inline-flex items-center justify-between gap-3 rounded-full border border-cream/40 pl-3 pr-6 py-2 text-cream transition-all duration-500 ease-soft hover:bg-cream/10 active:scale-[0.97] w-full md:w-auto"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/15 transition-transform duration-500 ease-soft group-hover:-translate-x-1">
                  <ArrowLeft size={16} weight="light" />
                </span>
                <span className="text-sm font-medium">שליחת פנייה</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
