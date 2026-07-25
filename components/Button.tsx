import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg px-5 py-2.5 transition-all duration-300 cursor-pointer text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[44px]";

  const variants = {
    primary:
      "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5",
    secondary:
      "bg-cardBg border border-zinc-800 hover:border-zinc-700 text-white hover:bg-zinc-800/80 hover:-translate-y-0.5",
    outline:
      "border border-primary/50 text-white hover:bg-primary/10 hover:border-primary hover:-translate-y-0.5",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}