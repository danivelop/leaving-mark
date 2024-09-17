'use client';

import { useState, useEffect } from 'react';

import { formatAbsoluteDate } from '@/shared/lib/dateUtils';

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
    <time className="inline-block text-sm xs:text-base mb-4 text-zinc-500 dark:text-zinc-400">
      {formatAbsoluteDate(new Date(publishedAt), isko)}
    </time>
  );
}

export default PostAbsoluteDate;
