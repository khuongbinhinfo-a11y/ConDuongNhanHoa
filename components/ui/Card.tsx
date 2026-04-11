import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`relative overflow-hidden rounded-[22px] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_10px_25px_rgba(36,76,99,0.06)] transition-all duration-200 ${className}`}
    >
      {children}
    </article>
  );
}
