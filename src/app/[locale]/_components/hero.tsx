import { useLocale, useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/button';
import { profile } from '@/content/profile';

import { LocalTime } from './local-time';

export function Hero() {
  const t = useTranslations('Hero');
  const locale = useLocale();

  return (
    <section className="grid gap-px lg:grid-cols-[minmax(0,1.6fr)_minmax(380px,1fr)]">
      <div className="flex flex-col gap-7 bg-background px-6 py-10 sm:px-8">
        <p className="type-label">{profile.headline[locale]}</p>
        <h1 className="text-[clamp(60px,11vw,164px)] leading-[0.86] type-display tracking-[-0.03em]">
          {profile.name.split(' ').map((word) => (
            <span key={word} className="block">
              {word}
            </span>
          ))}
        </h1>
        <p className="max-w-160 text-[clamp(18px,1.6vw,22px)] leading-[1.38] text-pretty">
          {profile.tagline[locale]}
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={profile.cv[locale]} download className={buttonVariants()}>
            {t('downloadCv')} <span aria-hidden="true">↓</span>
          </a>
          <a href="#contact" className={buttonVariants({ variant: 'outline' })}>
            {t('getInTouch')}
          </a>
        </div>
      </div>

      <div className="flex flex-col bg-background">
        <div className="p-6">
          <div className="flex flex-col gap-3 bg-inverse px-5 pt-4.5 pb-4 text-inverse-foreground">
            <p className="font-mono text-[11px] tracking-[0.08em] uppercase">
              {t('localTime', { country: profile.location.country[locale] })}
            </p>
            <p className="font-mono text-[clamp(40px,4vw,54px)] leading-none font-bold tracking-[0.04em] text-highlight tabular-nums">
              <LocalTime timeZone={profile.location.timeZone} />
            </p>
            <p className="font-mono text-[11px] leading-normal tracking-[0.04em]">
              {t('timeZoneNote')}
            </p>
          </div>
        </div>
        <ProfileFacts />
      </div>
    </section>
  );
}

function ProfileFacts() {
  const t = useTranslations('Profile');
  const locale = useLocale();

  const facts = [
    { label: t('role'), value: profile.role[locale] },
    { label: t('stack'), value: profile.stack.join(' · ') },
    { label: t('codingSince'), value: profile.codingSince },
    { label: t('english'), value: profile.englishLevel },
    { label: t('interests'), value: profile.interests[locale] },
    {
      label: t('availability'),
      value: (
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="size-2.25 rounded-full bg-primary" />
          {profile.availability[locale]}
        </span>
      ),
    },
  ];

  return (
    <dl className="mt-auto">
      {facts.map(({ label, value }) => (
        <div key={label} className="flex items-center justify-between gap-4 border-t px-6 py-3.25">
          <dt className="type-label">{label}</dt>
          <dd className="text-right text-[15px]">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
