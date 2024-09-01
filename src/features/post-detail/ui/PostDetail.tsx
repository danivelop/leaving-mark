import { Post } from '@/entities/post';

interface PostDetailProps {
  slug: string;
}

function PostDetail({ slug }: PostDetailProps) {
  return <Post slug={slug} />;
}

export default PostDetail;
