import { getMarkdown, getMarkdowns } from '@/entities/markdown';
import {
  ActionButtons,
  ACTION_NAMESPACE,
  ACTION_TYPE,
} from '@/features/action-button';
import { Utterances } from '@/features/comment';
import { PostDetail, RelatedPosts } from '@/features/post-detail';
import { PreviousNextPost } from '@/features/previous-next-post';
import { TableOfContents } from '@/features/table-of-contents';
import { Space } from '@/shared/ui';

interface PostPageProps {
  params: {
    slug: string;
  };
}

function PostPage({ params }: PostPageProps) {
  const post = getMarkdown(params.slug, 'posts');
  const posts = getMarkdowns('posts');

  return (
    <section className="layout-width">
      <aside className="sticky top-28 h-0 ml-[780px] hidden xl:block">
        <TableOfContents content={post.content} />
      </aside>
      <ActionButtons
        className="justify-start xs:justify-end"
        slug={post.slug}
        namespace={ACTION_NAMESPACE.POST}
        actionTypes={[
          ACTION_TYPE.LIKES,
          ACTION_TYPE.BOOKMARK,
          ACTION_TYPE.SHARE,
        ]}
      />
      <Space className="h-8" />
      <article>
        <PostDetail post={post} />
      </article>
      <Space className="h-8" />
      <ActionButtons
        className="justify-start xs:justify-end"
        slug={post.slug}
        namespace={ACTION_NAMESPACE.POST}
        actionTypes={[
          ACTION_TYPE.LIKES,
          ACTION_TYPE.BOOKMARK,
          ACTION_TYPE.SHARE,
        ]}
      />
      <Space className="h-8 xs:h-12" />
      <RelatedPosts currentPost={post} allPosts={posts} />
      <Space className="h-6 xs:h-8" />
      <PreviousNextPost currentPost={post} allPosts={posts} />
      <Space className="h-8 xs:h-12" />
      <Utterances />
    </section>
  );
}

export default PostPage;
