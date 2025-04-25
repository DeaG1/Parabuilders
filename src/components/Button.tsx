import { ButtonHTMLAttributes } from "react";

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function BaseButton({ children, className = "", ...props }: BaseButtonProps) {
  return (
    <button
      {...props}
      className={`text-[var(--color-button-text)] bg-[var(--color-button-bg)] 
        border border-[var(--color-button-border)] 
        shadow-[0_4px_0_0_var(--color-button-shadow)] 
        rounded-full transition-all 
        disabled:cursor-not-allowed disabled:opacity-50 
        active:translate-y-[2px]
        ${className}`}
    >
      {children}
    </button>
  );
}
