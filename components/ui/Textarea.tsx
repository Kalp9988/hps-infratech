import { TextareaHTMLAttributes } from "react";

export default function Textarea(
  props: TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className="min-h-[180px] w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-[#C8A24F]"
    />
  );
}
