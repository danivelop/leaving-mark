import { getMetadata, getMarkdown, getMarkdowns } from '@/entities/markdown';
// import {
//   ActionButtons,
//   ACTION_NAMESPACE,
//   ACTION_TYPE,
// } from '@/features/action-button';
import { Utterances } from '@/features/comment';
import { PostDetail, RelatedPosts } from '@/features/post-detail';
import { PreviousNextPost } from '@/features/previous-next-post';
import {
  InteractiveTocWrapper,
  TableOfContents,
} from '@/features/table-of-contents';
import { Space } from '@/shared/ui';
import { ScrollLinked } from '@/widgets/scroll-linked';

import type { Metadata } from 'next';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: PostPageProps): Metadata {
  const metadata = getMetadata(params.slug, 'posts');

  return {
    title: metadata.title,
    description: metadata.description ?? '',
    openGraph: {
      title: metadata.title,
      description: metadata.description ?? '',
    },
  };
}

function PostPage({ params }: PostPageProps) {
  const post = getMarkdown(params.slug, 'posts');
  const posts = getMarkdowns('posts');

  const tableOfContents = (
    <TableOfContents className="w-full xl:w-fit" content={post.content} />
  );

  return (
    <>
      <ScrollLinked />
      <section className="layout-width">
        <aside className="sticky top-[136px] h-0 ml-[780px] hidden xl:block text-sm z-10">
          {tableOfContents}
        </aside>
        <aside className="fixed left-full top-0 block xl:hidden text-sm z-30">
          <InteractiveTocWrapper>{tableOfContents}</InteractiveTocWrapper>
        </aside>
        {/* <ActionButtons
          className="justify-end"
          slug={post.slug}
          namespace={ACTION_NAMESPACE.POST}
          actionTypes={[
            ACTION_TYPE.LIKES,
            ACTION_TYPE.BOOKMARK,
            ACTION_TYPE.SHARE,
          ]}
        /> */}
        <Space className="h-8" />
        <article>
          <PostDetail post={post} />
        </article>
        <Space className="h-16" />
        {/* <ActionButtons
          className="justify-end"
          slug={post.slug}
          namespace={ACTION_NAMESPACE.POST}
          actionTypes={[
            ACTION_TYPE.LIKES,
            ACTION_TYPE.BOOKMARK,
            ACTION_TYPE.SHARE,
          ]}
        /> */}
        <hr className="block my-8 border-zinc-200 dark:border-zinc-700" />
        <RelatedPosts currentPost={post} allPosts={posts} />
        <Space className="h-6 xs:h-8" />
        <PreviousNextPost currentPost={post} allPosts={posts} />
        <Space className="h-8 xs:h-12" />
        <Utterances />
      </section>
    </>
  );
}

export default PostPage;
