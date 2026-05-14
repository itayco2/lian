export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-forest/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-forest font-medium">
      <span className="h-1 w-1 rounded-full bg-terracotta" aria-hidden />
      {children}
    </span>
  );
}
