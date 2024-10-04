import { ImageResponse } from 'next/og';

import { getMetadata } from '@/entities/markdown';
import { BASE_URL } from '@/shared/consts';

interface OpenGraphImageProps {
  params: {
    slug: string;
  };
}

function OpenGraphImage({ params }: OpenGraphImageProps) {
  const metadata = getMetadata(params.slug, 'projects');
  const imageSrc = metadata.image ?? '/images/default.png';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE_URL}${imageSrc}`}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}

export default OpenGraphImage;
