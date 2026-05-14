import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

type Variant = "primary" | "secondary" | "ghost";

interface CTAProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  ariaLabel?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-forest text-cream hover:bg-forest-deep border border-forest/40",
  secondary:
    "bg-cream text-espresso hover:bg-cream-deep border border-espresso/10",
  ghost:
    "bg-transparent text-espresso hover:bg-espresso/5 border border-espresso/15",
};

const iconBgByVariant: Record<Variant, string> = {
  primary: "bg-cream/15 group-hover:bg-cream/25",
  secondary: "bg-espresso/8 group-hover:bg-terracotta group-hover:text-cream",
  ghost: "bg-espresso/5 group-hover:bg-espresso/10",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  external,
  ariaLabel,
}: CTAProps) {
  const inner = (
    <span
      className={[
        "group inline-flex items-center gap-3 rounded-full pl-1.5 pr-6 py-1.5",
        "transition-all duration-500 ease-soft active:scale-[0.98]",
        "shadow-[0_1px_0_rgba(255,255,255,0.4)_inset,0_18px_30px_-20px_rgba(31,61,43,0.4)]",
        variantStyles[variant],
      ].join(" ")}
    >
      <span
        className={[
          "flex h-10 w-10 items-center justify-center rounded-full",
          "transition-all duration-500 ease-soft",
          "group-hover:-translate-x-[2px]",
          iconBgByVariant[variant],
        ].join(" ")}
        aria-hidden
      >
        <ArrowLeft size={18} weight="light" />
      </span>
      <span className="text-[15px] font-medium tracking-tight pl-2">{children}</span>
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} aria-label={ariaLabel}>
      {inner}
    </Link>
  );
}
