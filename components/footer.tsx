import { FOOTER } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-cream-deep/30 py-6">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:gap-3">
          <div className="text-xs text-espresso/55">{FOOTER.rights}</div>
          <div className="text-xs text-espresso/40">
            עוצב ופותח בקפידה
          </div>
        </div>
      </div>
    </footer>
  );
}
