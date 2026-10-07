import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  /** Position on the page, shown as `01 — Title`. */
  index: number;
  title: string;
  /** Right-aligned metadata in the section band. */
  meta?: ReactNode;
  children: ReactNode;
};

/** Page section introduced by a full-width band: `01 — Title ··· meta`. */
export function Section({ id, index, title, meta, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="flex scroll-mt-4 flex-col gap-px">
      <div className="flex justify-between gap-4 bg-background px-5 py-3.5 type-label">
        <h2 id={headingId}>
          {String(index).padStart(2, '0')} — {title}
        </h2>
        {meta ? <span>{meta}</span> : null}
      </div>
      {children}
    </section>
  );
}
