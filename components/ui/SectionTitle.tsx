interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A24F]">
          {eyebrow}
        </p>
      )}

      <h2 className="font-heading text-4xl leading-tight text-[#0A2342] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}