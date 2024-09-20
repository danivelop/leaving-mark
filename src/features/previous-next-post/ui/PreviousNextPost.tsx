import NextPost from './NextPost';
import PreviousPost from './PreviousPost';

import type { Post } from '@/entities/markdown';

interface PreviousNextPostProps {
  allPosts: Post[];
  currentPost: Post;
}

function PreviousNextPost({ currentPost, allPosts }: PreviousNextPostProps) {
  const currentPostIndex = allPosts.findIndex(
    (post) => post.slug === currentPost.slug,
  );
  const previousPost = allPosts[currentPostIndex - 1];
  const nextPost = allPosts[currentPostIndex + 1];

  return (
    <div className="w-full flex flex-col xs:flex-row gap-4">
      {previousPost && <PreviousPost post={previousPost} />}
      {nextPost && <NextPost post={nextPost} />}
    </div>
  );
}

export default PreviousNextPost;
