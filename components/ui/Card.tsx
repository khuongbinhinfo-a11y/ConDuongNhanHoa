import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`relative overflow-hidden rounded-[22px] border border-[var(--color-border)] bg-[linear-gradient(164deg,rgba(252,254,251,0.96),rgba(221,242,232,0.16),rgba(228,246,239,0.14))] shadow-[0_8px_22px_rgba(90,154,108,0.1)] transition-all duration-200 ${className}`}
    >
      {children}
    </article>
  );
}
