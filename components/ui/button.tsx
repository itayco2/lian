import Link from "next/link";

type Variant = "primary" | "secondary";

interface CTAProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  ariaLabel?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-forest text-cream border border-forest hover:bg-forest-deep",
  secondary:
    "bg-cream text-espresso border border-forest/15 hover:bg-cream-deep hover:border-forest/30",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  external,
  ariaLabel,
}: CTAProps) {
  const cls = [
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-medium tracking-tight",
    "transition-all duration-500 ease-soft active:scale-[0.97]",
    "shadow-[0_18px_30px_-22px_rgba(31,61,43,0.45)]",
    variantStyles[variant],
  ].join(" ");

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} aria-label={ariaLabel} className={cls}>
      {children}
    </Link>
  );
}
