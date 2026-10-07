'use client';

import { useSyncExternalStore } from 'react';

const PLACEHOLDER = '--:--:--';

function subscribe(onTick: () => void) {
  const interval = setInterval(onTick, 1000);
  return () => {
    clearInterval(interval);
  };
}

/** Current Unix second: stable between ticks, so React only re-renders once per second. */
function getSecond() {
  return Math.floor(Date.now() / 1000);
}

/** The server can't know the visitor's render time, so it renders the placeholder. */
function getServerSecond() {
  return null;
}

/** Live 24-hour clock for a given IANA time zone. */
export function LocalTime({ timeZone }: { timeZone: string }) {
  const second = useSyncExternalStore(subscribe, getSecond, getServerSecond);

  if (second === null) {
    return <span>{PLACEHOLDER}</span>;
  }

  const time = new Intl.DateTimeFormat('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  }).format(second * 1000);

  return <time dateTime={time}>{time}</time>;
}
