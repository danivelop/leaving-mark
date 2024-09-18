import Link from 'next/link';

import { getRelatedPosts } from '@/features/post-detail/lib';
import { getMarkdowns, type Markdown } from '@/shared/lib/markdownUtils';
import { Space } from '@/shared/ui';

interface RelatedPostsProps {
  post: Markdown;
}

function RelatedPosts({ post }: RelatedPostsProps) {
  const posts = getMarkdowns('posts');
  const relatedPosts = getRelatedPosts(post, posts);

  if (!relatedPosts.length) {
    return null;
  }

  return (
    <div>
      <p className="text-xl xs:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Related Posts
      </p>
      <Space className="h-4" />
      <ul className="space-y-3 xs:space-y-4">
        {relatedPosts.map((relatedPost) => (
          <li key={relatedPost.slug}>
            <Link
              href={`/posts/${relatedPost.slug}`}
              className="text-sm xs:text-base text-zinc-600 dark:text-zinc-400 hover:text-theme-700 transition-colors duration-200"
            >
              {relatedPost.slug}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RelatedPosts;
