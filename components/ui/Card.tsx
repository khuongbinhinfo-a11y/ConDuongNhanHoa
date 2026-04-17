import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`relative overflow-hidden rounded-[22px] border border-[var(--color-border)] bg-[linear-gradient(164deg,rgba(255,253,253,0.96),rgba(191,221,226,0.16),rgba(233,183,195,0.14))] shadow-[0_10px_25px_rgba(223,166,184,0.14)] transition-all duration-200 ${className}`}
    >
      {children}
    </article>
  );
}
