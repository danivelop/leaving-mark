import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import type { Post } from '@/entities/markdown';

interface NextPostProps {
  post: Post;
}

function NextPost({ post }: NextPostProps) {
  return (
    <Link href={`/posts/${post.slug}`} className="group flex-grow">
      <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-3 xs:p-4 transition-colors hover:border-theme-700 dark:hover:border-theme-700">
        <div className="flex items-center justify-end text-zinc-500 dark:text-zinc-400 mb-2">
          <span className="text-xs xs:text-sm">Next Post</span>
          <ArrowRight size={16} className="ml-2" />
        </div>
        <h3 className="text-base xs:text-lg font-semibold text-right text-zinc-900 dark:text-zinc-100">
          {post.slug}
        </h3>
      </div>
    </Link>
  );
}

export default NextPost;
