// Shared section heading: small pill label + title with a green accent word.
export default function SectionHeading({
  eyebrow,
  title,
  accent,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accent: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <span className="inline-flex items-center gap-2 rounded-full bg-light-green px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-[#4caf3d]" />
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0b1a10] sm:text-4xl">
        {title} <span className="text-[#4caf3d]">{accent}</span>
      </h2>
    </div>
  );
}
