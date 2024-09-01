'use client';

import { formatRelativeDate } from '@/shared/lib';

interface PostRelativeDateProps {
  publishedAt: string;
}

function PostRelativeDate({ publishedAt }: PostRelativeDateProps) {
  return (
    <time className="mt-3 text-sm text-zinc-400 dark:text-zinc-500 xs:mt-auto">
      {formatRelativeDate(new Date(publishedAt))}
    </time>
  );
}

export default PostRelativeDate;
