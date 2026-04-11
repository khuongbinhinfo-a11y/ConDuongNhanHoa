import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "text";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-navy)] text-[#F6F1E8] shadow-[0_12px_26px_rgba(36,76,99,0.20)] hover:bg-[#1f4256] hover:shadow-[0_16px_30px_rgba(36,76,99,0.28)]",
  ghost:
    "border border-[var(--color-border)] bg-[rgba(251,248,242,0.92)] text-[var(--color-navy)] hover:bg-[rgba(220,232,221,0.55)]",
  text: "bg-transparent text-[var(--color-navy)] hover:text-[#1f4256]",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
