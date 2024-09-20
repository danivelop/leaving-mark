import PostItem from './PostItem';

import type { Post } from '@/entities/markdown';

interface PostListProps {
  posts: Post[];
  selectedTag?: string;
}

function PostList({ posts, selectedTag }: PostListProps) {
  return (
    <ul className="layout-width space-y-16 xs:space-y-20 md:xs:space-y-24">
      {posts
        .filter(
          (post) => !selectedTag || post.metadata.tags?.includes(selectedTag),
        )
        .map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
    </ul>
  );
}

export default PostList;
