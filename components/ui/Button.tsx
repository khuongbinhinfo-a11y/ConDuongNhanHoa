import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "text";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variantTokens: Record<ButtonVariant, string> = {
  primary: "calm-cta calm-cta--primary",
  ghost: "calm-cta calm-cta--ghost",
  text: "calm-cta calm-cta--text",
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white shadow-[0_8px_20px_rgba(90,154,108,0.2)] hover:bg-[var(--color-primary-strong)] hover:shadow-[0_10px_24px_rgba(90,154,108,0.26)]",
  ghost:
    "border border-[var(--color-border)] bg-[rgba(251,253,251,0.92)] text-[var(--color-navy)] hover:bg-[var(--color-accent-light)]",
  text: "bg-transparent text-[var(--color-navy)] hover:text-[var(--color-primary-strong)]",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${variantStyles[variant]} ${variantTokens[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
