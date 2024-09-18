import { Post } from '@/entities/post';
import { ActionButtons } from '@/features/action-button';

interface PostDetailProps {
  slug: string;
}

function PostDetail({ slug }: PostDetailProps) {
  return (
    <div className="layout-width flex flex-col">
      <ActionButtons
        className="justify-start xs:justify-end mb-8"
        slug={slug}
      />
      <Post slug={slug} />
      <ActionButtons
        className="justify-start xs:justify-end mt-8"
        slug={slug}
      />
    </div>
  );
}

export default PostDetail;
