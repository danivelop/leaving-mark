import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import type { Post } from '@/entities/markdown';

interface PreviousPostProps {
  post: Post;
}

function PreviousPost({ post }: PreviousPostProps) {
  return (
    <Link href={`/posts/${post.slug}`} className="group flex-grow">
      <div className="border dark:border-zinc-700 rounded-lg p-3 xs:p-4 transition-colors hover:border-theme-700 dark:hover:border-theme-700">
        <div className="flex items-center text-zinc-500 dark:text-zinc-400 mb-2">
          <ArrowLeft size={16} className="mr-2" />
          <span className="text-xs xs:text-sm">Previous Post</span>
        </div>
        <h3 className="text-base xs:text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {post.slug}
        </h3>
      </div>
    </Link>
  );
}

export default PreviousPost;
