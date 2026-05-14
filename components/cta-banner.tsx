import { SITE } from "@/lib/content";
import { Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function CtaBanner() {
  const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    SITE.whatsappMessage
  )}`;

  return (
    <section
      id="contact"
      aria-label="צרו קשר"
      className="relative overflow-hidden bg-terracotta py-24 md:py-32 text-cream"
    >
      {/* Decorative blurred shapes */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-cream/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-forest/30 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-[1100px] px-6 md:px-10 text-center">
        <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-cream/70">
          <span className="block h-px w-6 bg-cream/40" aria-hidden />
          בואו נדבר
          <span className="block h-px w-6 bg-cream/40" aria-hidden />
        </span>

        <h2 className="display mt-6 text-4xl md:text-6xl leading-[1.05] text-cream">
          מתכננים גינה? <br />
          <span className="text-cream/85">שיחה קצרה ונתחיל.</span>
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-cream/85 max-w-xl mx-auto">
          לחיצה אחת פותחת שיחת ווטסאפ עם ליאן — בלי טפסים, בלי המתנה.
          חוזרים תוך 24 שעות, גם לבירורים קטנים.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          {/* Primary: WhatsApp with pre-filled message */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-between gap-3 rounded-full bg-cream pl-2 pr-7 py-2 text-espresso transition-all duration-500 ease-soft hover:bg-espresso hover:text-cream active:scale-[0.97] shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)] w-full sm:w-auto"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-500 ease-soft group-hover:-translate-x-1 group-hover:scale-105">
              <WhatsappLogo size={22} weight="fill" />
            </span>
            <span className="display text-lg md:text-xl">שליחת הודעה בווטסאפ</span>
          </a>

          {/* Secondary: phone */}
          <a
            href={`tel:${SITE.phone.replace(/-/g, "")}`}
            className="group inline-flex items-center justify-between gap-3 rounded-full border border-cream/40 pl-3 pr-6 py-2 text-cream transition-all duration-500 ease-soft hover:bg-cream/10 active:scale-[0.97] w-full sm:w-auto"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/15 transition-transform duration-500 ease-soft group-hover:-translate-x-1">
              <Phone size={16} weight="bold" />
            </span>
            <span className="text-sm md:text-base font-medium" dir="ltr">
              {SITE.phoneDisplay}
            </span>
          </a>
        </div>

        <p className="mt-8 text-xs text-cream/65">
          {SITE.serviceAreaDetail}
        </p>
      </div>
    </section>
  );
}
