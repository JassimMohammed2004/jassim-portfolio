import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export default function Section({
  id,
  index,
  label,
  title,
  children,
  className,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative border-t border-line px-6 py-28 md:px-12 md:py-36", className)}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 flex items-baseline gap-4 md:mb-20">
          <span className="font-mono text-xs text-faint">{index}</span>
          <div>
            <p className="section-label mb-2">{label}</p>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink md:text-5xl">
              {title}
            </h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
