const NEIGHBORHOODS = [
  "מודיעין",
  "רעות",
  "מכבים",
  "חשמונאים",
  "מבוא חורון",
  "כפר רות",
  "שילת",
  "כפר דניאל",
  "נוף איילון",
  "בית עריף",
];

export function Neighborhoods() {
  // duplicate the list so the marquee loops seamlessly
  const items = [...NEIGHBORHOODS, ...NEIGHBORHOODS];
  return (
    <section
      aria-label="אזורי שירות"
      className="relative border-y border-forest/10 bg-cream-deep/40 py-6 overflow-hidden"
    >
      <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-cream-deep/95 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-cream-deep/95 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <div className="shrink-0 text-[10px] uppercase tracking-[0.22em] text-espresso/55">
            עובדים ב
          </div>
          <div className="relative w-full overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
              {items.map((n, i) => (
                <div key={i} className="flex items-center gap-12">
                  <span className="display text-2xl text-forest/85">{n}</span>
                  <span className="block h-1.5 w-1.5 rounded-full bg-terracotta/70" aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
