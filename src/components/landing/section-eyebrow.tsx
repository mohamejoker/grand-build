interface SectionEyebrowProps {
  en: string;
  ar?: string;
}

export function SectionEyebrow({ en, ar }: SectionEyebrowProps) {
  return (
    <div className="mb-4 inline-flex items-center gap-2">
      <span className="h-px w-8 bg-accent" />
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs">
        {en}
      </span>
      {ar && <span className="text-xs text-foreground/40">— {ar}</span>}
    </div>
  );
}
