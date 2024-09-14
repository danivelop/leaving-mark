'use client';

import { useState, useEffect } from 'react';

import { formatRelativeDate } from '@/shared/lib/dateUtils';

interface PostRelativeDateProps {
  publishedAt: string;
}

function PostRelativeDate({ publishedAt }: PostRelativeDateProps) {
  const [isko, setIsKo] = useState(false);

  useEffect(() => {
    setIsKo(
      window.navigator.language === 'ko-KR' ||
        window.navigator.language === 'ko',
    );
  }, []);

  return (
    <time className="mt-3 text-sm text-zinc-400 dark:text-zinc-500 xs:mt-auto">
      {formatRelativeDate(new Date(publishedAt), isko)}
    </time>
  );
}

export default PostRelativeDate;
