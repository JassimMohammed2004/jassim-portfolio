import { profile, navSections } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-lg text-ink">
            JASSIM <span className="text-signal">//</span> AI &amp; DATA SCIENCE
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted">Building intelligent systems.</p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest2 text-muted">
          <a href={`mailto:${profile.email}`} className="hover:text-signal">
            {profile.email}
          </a>
          <span>{profile.location}</span>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-widest2 text-faint">
          {navSections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-ink">
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
