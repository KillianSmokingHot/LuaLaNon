import { clsx } from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-brand-dark text-white hover:bg-brand-bright focus:ring-brand-dark shadow-md hover:shadow-lg active:scale-95",
    secondary:
      "bg-brand-sand text-brand-dark hover:bg-yellow-200 focus:ring-brand-sand shadow-md hover:shadow-lg active:scale-95",
    outline:
      "border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white focus:ring-brand-dark",
    ghost:
      "text-brand-dark hover:bg-brand-light focus:ring-brand-dark",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
