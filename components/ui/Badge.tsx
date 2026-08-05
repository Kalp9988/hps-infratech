import { ReactNode } from "react";

export default function Badge({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="inline-flex rounded-full bg-[#C8A24F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A24F]">
      {children}
    </span>
  );
}