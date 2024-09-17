import { Post } from '@/entities/post';
import { ActionButtons } from '@/features/action-button';

interface PostDetailProps {
  slug: string;
}

function PostDetail({ slug }: PostDetailProps) {
  return (
    <div className="layout-width flex flex-col">
      <ActionButtons slug={slug} />
      <Post slug={slug} />
    </div>
  );
}

export default PostDetail;
