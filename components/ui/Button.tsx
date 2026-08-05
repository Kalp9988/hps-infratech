import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold transition ${
        variant === "primary"
          ? "bg-[#C8A24F] text-white hover:bg-[#b89038]"
          : "border border-white/20 text-white hover:bg-white hover:text-[#081321]"
      }`}
    >
      {children}
    </Link>
  );
}