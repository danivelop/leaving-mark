import type { Post } from '@/entities/post';

interface PostItemProps {
  post: Post;
}

function PostItem({ post }: PostItemProps) {
  return <li>{post.metadata.title}</li>;
}

export default PostItem;
