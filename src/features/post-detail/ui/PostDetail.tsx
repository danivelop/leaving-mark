import { Post } from '@/entities/post';

interface PostDetailProps {
  slug: string;
}

function PostDetail({ slug }: PostDetailProps) {
  return (
    <div className="layout-width">
      <Post slug={slug} />
    </div>
  );
}

export default PostDetail;
