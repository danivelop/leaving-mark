import { PostItem } from '@/entities/post';

import type { Markdown } from '@/shared/lib/markdownUtils';

interface PostListProps {
  posts: Markdown[];
}

function PostList({ posts }: PostListProps) {
  return (
    <ul className="layout-width space-y-16 xs:space-y-20 md:xs:space-y-24">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostList;
