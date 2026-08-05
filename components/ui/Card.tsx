import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(0,0,0,.12)] ${className}`}
    >
      {children}
    </div>
  );
}