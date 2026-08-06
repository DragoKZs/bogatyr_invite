import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300",
        variant === "primary"
          ? "bg-yellow-500 text-black hover:scale-105 hover:bg-yellow-400"
          : "border border-white/30 text-white hover:bg-white hover:text-black"
      )}
    >
      {children}
    </Link>
  );
}