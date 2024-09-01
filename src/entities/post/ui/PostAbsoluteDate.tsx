'use client';

import { formatAbsoluteDate } from '@/shared/lib';

interface PostAbsoluteDateProps {
  publishedAt: string;
}

function PostAbsoluteDate({ publishedAt }: PostAbsoluteDateProps) {
  return (
    <time className="text-zinc-500 dark:text-zinc-400">
      {formatAbsoluteDate(new Date(publishedAt))}
    </time>
  );
}

export default PostAbsoluteDate;
