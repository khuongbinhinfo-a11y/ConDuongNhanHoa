import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`relative overflow-hidden rounded-[22px] border border-[var(--color-border)] bg-[linear-gradient(164deg,rgba(252,250,246,0.94),rgba(227,236,226,0.56))] shadow-[0_10px_25px_rgba(36,76,99,0.06)] transition-all duration-200 ${className}`}
    >
      {children}
    </article>
  );
}
