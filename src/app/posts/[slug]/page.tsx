import { ActionButtons } from '@/features/action-button';
import { PostDetail } from '@/features/post-detail';
import { TableOfContents } from '@/features/table-of-contents';
import { getMarkdown } from '@/shared/lib/markdownUtils';
import { Space } from '@/shared/ui';

interface PostPageProps {
  params: {
    slug: string;
  };
}

function PostPage({ params }: PostPageProps) {
  const post = getMarkdown(params.slug, 'posts');

  return (
    <section className="layout-width">
      <aside className="sticky top-28 h-0 ml-[780px] hidden xl:block">
        <TableOfContents content={post.content} />
      </aside>
      <article>
        <ActionButtons
          className="justify-start xs:justify-end"
          slug={post.slug}
        />
        <Space className="h-8" />
        <PostDetail post={post} />
        <Space className="h-8" />
        <ActionButtons
          className="justify-start xs:justify-end"
          slug={post.slug}
        />
      </article>
    </section>
  );
}

export default PostPage;
