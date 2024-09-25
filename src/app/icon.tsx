import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

function Icon() {
  return new ImageResponse(
    (
      <svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.837 0-16-7.163-16-16S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z"
          fill="currentColor"
        />
        <path
          d="M20 8c-6.627 0-12 5.373-12 12s5.373 12 12 12c3.314 0 6.314-1.343 8.485-3.515L20 20V8z"
          fill="currentColor"
        />
      </svg>
    ),
    {
      ...size,
    },
  );
}

export default Icon;
