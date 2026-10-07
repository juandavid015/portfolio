import { ImageResponse } from 'next/og';

import { MonogramTile } from '@/components/monogram';
import { edition } from '@/content/edition';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <MonogramTile
      size={size.width}
      background={edition.palette.ink}
      foreground={edition.palette.paper}
    />,
    size,
  );
}
