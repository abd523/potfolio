interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : "text-left"}`}>
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mt-4 ${
          center ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}