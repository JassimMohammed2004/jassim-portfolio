import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export default function Section({
  id,
  index,
  label,
  title,
  description,
  children,
  className,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative border-t border-line/70 px-6 py-28 md:px-12 md:py-36", className)}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 md:mb-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-olive">{index}</span>
            <span className="h-[1px] w-8 bg-olive/40" />
            <p className="section-label">{label}</p>
          </div>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tightest text-ivory sm:text-4xl md:text-5xl leading-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
              {description}
            </p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
