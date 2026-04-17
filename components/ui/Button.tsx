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
    "bg-[var(--color-primary)] text-[#243447] shadow-[0_12px_24px_rgba(223,166,184,0.26)] hover:bg-[var(--color-primary-strong)] hover:shadow-[0_16px_28px_rgba(223,166,184,0.32)]",
  ghost:
    "border border-[var(--color-border)] bg-[rgba(255,253,253,0.92)] text-[var(--color-navy)] hover:bg-[rgba(191,221,226,0.3)]",
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
