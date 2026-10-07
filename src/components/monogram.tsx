/** "JD" from the JDGR logo, on the same pixel grid (11×7). */
export const MONOGRAM_PATH =
  'M2 0h3v1h-3zM3 1h1v5h-1zM0 4h1v2h-1zM1 6h2v1h-2zM6 0h3v1h-3zM6 1h1v5h-1zM9 1h1v1h-1zM10 2h1v3h-1zM9 5h1v1h-1zM6 6h3v1h-3z';

type MonogramTileProps = {
  background: string;
  foreground: string;
  size: number;
};

/** Square app icon: the monogram centered on a solid tile. Plain SVG, so it renders in `next/og`. */
export function MonogramTile({ background, foreground, size }: MonogramTileProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges">
      <rect width="16" height="16" fill={background} />
      <path transform="translate(2.5 4.5)" fill={foreground} d={MONOGRAM_PATH} />
    </svg>
  );
}
