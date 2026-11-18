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
    <section id={id} className={cn("relative border-t border-line px-6 py-24 md:px-12 md:py-32", className)}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 md:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-medium text-accent">{index}</span>
            <span className="h-[1px] w-6 bg-accent/40" />
            <p className="section-label">{label}</p>
          </div>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-2xl text-base text-muted leading-relaxed">
              {description}
            </p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
