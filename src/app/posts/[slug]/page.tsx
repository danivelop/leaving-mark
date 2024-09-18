import { ActionButtons } from '@/features/action-button';
import { PostDetail } from '@/features/post-detail';
import { Space } from '@/shared/ui';

interface PostPageProps {
  params: {
    slug: string;
  };
}

function PostPage({ params }: PostPageProps) {
  return (
    <section>
      <article className="layout-width">
        <ActionButtons
          className="justify-start xs:justify-end"
          slug={params.slug}
        />
        <Space className="h-8" />
        <PostDetail slug={params.slug} />
        <Space className="h-8" />
        <ActionButtons
          className="justify-start xs:justify-end"
          slug={params.slug}
        />
      </article>
    </section>
  );
}

export default PostPage;
