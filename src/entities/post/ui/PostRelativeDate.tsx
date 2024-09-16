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
    <time className=" text-zinc-500 dark:text-zinc-400">
      {formatRelativeDate(new Date(publishedAt), isko)}
    </time>
  );
}

export default PostRelativeDate;
