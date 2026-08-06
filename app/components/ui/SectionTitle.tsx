interface SectionTitleProps {
  overline?: string;
  title: string;
  text?: string;
  center?: boolean;
}

export default function SectionTitle({
  overline,
  title,
  text,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {overline && (
        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
          {overline}
        </span>
      )}

      <h2 className="text-4xl font-black uppercase leading-tight md:text-5xl">
        {title}
      </h2>

      {text && (
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          {text}
        </p>
      )}
    </div>
  );
}