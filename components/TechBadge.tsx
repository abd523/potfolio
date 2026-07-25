interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cardBg border border-zinc-800 text-zinc-300 hover:border-primary/50 transition-colors">
      {name}
    </span>
  );
}