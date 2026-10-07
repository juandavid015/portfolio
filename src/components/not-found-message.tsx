import type { ReactNode } from 'react';

type NotFoundMessageProps = {
  title: string;
  description: string;
  /** Link back home; its element depends on whether a locale is known. */
  action: ReactNode;
  lang?: string;
};

export function NotFoundMessage({ title, description, action, lang }: NotFoundMessageProps) {
  return (
    <section
      lang={lang}
      className="@container flex flex-col items-start gap-5 bg-background px-8 py-16"
    >
      <p className="type-label">404</p>
      {/* Sized by its own width, not the viewport: it may sit in a half-width column. */}
      <h1 className="text-[clamp(28px,9cqi,72px)] leading-[0.95] type-display tracking-[-0.03em]">
        {title}
      </h1>
      <p className="text-muted-foreground">{description}</p>
      {action}
    </section>
  );
}
