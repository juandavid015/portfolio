import { ImageResponse } from 'next/og';

import { MonogramTile } from '@/components/monogram';
import { edition } from '@/content/edition';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <MonogramTile
      size={size.width}
      background={edition.palette.ink}
      foreground={edition.palette.paper}
    />,
    size,
  );
}
