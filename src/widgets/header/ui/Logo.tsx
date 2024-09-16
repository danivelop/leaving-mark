'use client';

import { useStore } from '@/store';

function Logo() {
  const isDarkMode = useStore((state) => state.themeSlice.isDarkMode);

  const birthday = new Date('1993-06-15');
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear();

  const passedTime = Math.floor(360 * (age / 100));

  return (
    <div className="flex justify-center items-center size-8 rounded-full border-[3px] border-zinc-900 dark:border-zinc-100">
      <div
        className="size-5 bg-zinc-900 rounded-full border-transparent"
        style={{
          background: isDarkMode
            ? `conic-gradient(transparent 0deg ${passedTime}deg, #f4f4f5 ${passedTime}deg 360deg)`
            : `conic-gradient(transparent 0deg ${passedTime}deg, #18181b ${passedTime}deg 360deg)`,
        }}
      />
    </div>
  );
}

export default Logo;
