'use client';

import { useState, useEffect } from 'react';

import { formatAbsoluteDate } from '@/shared/lib';

interface PostAbsoluteDateProps {
  publishedAt: string;
}

function PostAbsoluteDate({ publishedAt }: PostAbsoluteDateProps) {
  const [isko, setIsKo] = useState(false);

  useEffect(() => {
    setIsKo(
      window.navigator.language === 'ko-KR' ||
        window.navigator.language === 'ko',
    );
  }, []);

  return (
    <time className="text-zinc-500 dark:text-zinc-400">
      {formatAbsoluteDate(new Date(publishedAt), isko)}
    </time>
  );
}

export default PostAbsoluteDate;
