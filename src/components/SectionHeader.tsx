type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mb-8">
      {eyebrow && <div className="pvv-pill mb-3 text-white/70">{eyebrow}</div>}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-white/70 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
