const NEIGHBORHOODS = [
  "מודיעין",
  "רעות",
  "כפר האורנים",
  "לפיד",
  "כפר רות",
  "שילת",
];

export function Neighborhoods() {
  return (
    <section
      aria-label="אזורי שירות"
      className="relative border-y border-forest/10 bg-cream-deep/40 py-8 md:py-10"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-espresso/55">
            <span className="block h-px w-6 bg-terracotta/60" aria-hidden />
            פעילים ביישובים
            <span className="block h-px w-6 bg-terracotta/60" aria-hidden />
          </span>

          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:gap-x-5">
            {NEIGHBORHOODS.map((n, i) => (
              <li key={n} className="flex items-center gap-3 md:gap-5">
                <span className="display text-xl md:text-2xl text-forest">{n}</span>
                {i < NEIGHBORHOODS.length - 1 && (
                  <span
                    className="block h-1.5 w-1.5 rounded-full bg-terracotta/70"
                    aria-hidden
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
