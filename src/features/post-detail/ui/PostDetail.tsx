import { Post } from '@/entities/post';
import { ActionButtons } from '@/features/action-button';
import { Space } from '@/shared/ui';

interface PostDetailProps {
  slug: string;
}

function PostDetail({ slug }: PostDetailProps) {
  return (
    <div className="layout-width flex flex-col">
      <ActionButtons className="justify-start xs:justify-end" slug={slug} />
      <Space className="h-8" />
      <Post slug={slug} />
      <Space className="h-8" />
      <ActionButtons className="justify-start xs:justify-end" slug={slug} />
    </div>
  );
}

export default PostDetail;
