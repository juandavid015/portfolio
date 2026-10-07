import type { ComponentProps } from 'react';

/** "JDGR" monogram drawn on a 23×7 pixel grid. Inherits `currentColor`. */
export function Logo(props: ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 23 7" shapeRendering="crispEdges" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M2 0h3v1h-3zM3 1h1v5h-1zM0 4h1v2h-1zM1 6h2v1h-2zM6 0h3v1h-3zM6 1h1v5h-1zM9 1h1v1h-1zM10 2h1v3h-1zM9 5h1v1h-1zM6 6h3v1h-3zM13 0h3v1h-3zM12 1h1v5h-1zM16 1h1v1h-1zM14 3h3v1h-3zM16 4h1v2h-1zM13 6h3v1h-3zM18 0h1v7h-1zM19 0h3v1h-3zM22 1h1v2h-1zM19 3h3v1h-3zM20 4h1v1h-1zM21 5h1v1h-1zM22 6h1v1h-1z"
      />
    </svg>
  );
}
