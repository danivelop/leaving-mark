import { getPost } from '@/entities/post/lib';

import MDXFullParser from './MDXFullParser';

interface PostProps {
  slug: string;
}

function Post({ slug }: PostProps) {
  const post = getPost(slug);
  return (
    <article
      className={`
        layout-width word-style
        prose md:prose-lg prose-zinc dark:prose-invert
        prose-pre:rounded-md
        prose-p:before:content-none prose-p:after:content-none
        prose-img:mx-auto prose-video:mx-auto
        prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-500 hover:prose-a:underline
        prose-inline-code:bg-zinc-200 dark:prose-inline-code:bg-zinc-700 prose-inline-code:text-red-400 prose-inline-code:px-2 prose-inline-code:py-0.5 prose-inline-code:rounded-md prose-inline-code:font-normal prose-inline-code:before:content-none prose-inline-code:after:content-none
        prose-block-code:text-sm
        prose-blockquote:pl-4 prose-blockquote:pr-4 xs:prose-blockquote:pl-5 xs:prose-blockquote:pr-8 prose-blockquote:not-italic prose-blockquote:bg-stone-100 dark:prose-blockquote:bg-stone-800 prose-double-blockquote:bg-stone-200 dark:prose-double-blockquote:bg-stone-700 prose-triple-blockquote:bg-stone-300 dark:prose-triple-blockquote:bg-stone-600 prose-blockquote:border-none prose-blockquote:rounded-xl
        prose-table:w-fit prose-table:inline-block prose-table:overflow-hidden prose-table:break-normal prose-table:border prose-table:border-zinc-300 dark:prose-table:border-zinc-600 prose-table:rounded-md
        prose-thead:bg-zinc-200 dark:prose-thead:bg-zinc-700
        even:prose-tr:bg-zinc-100 dark:even:prose-tr:bg-zinc-800 prose-tr:border-b last:prose-tr:border-b-0 prose-tr:border-zinc-300 dark:prose-tr:border-zinc-600
        prose-th:px-4 prose-th:py-3 prose-th:border-r last:prose-th:border-r-0 prose-th:border-zinc-300 dark:prose-th:border-zinc-600 prose-th:text-center
        prose-td:px-4 prose-td:py-3 prose-td:border-r last:prose-td:border-r-0 prose-td:border-zinc-300 dark:prose-td:border-zinc-600
      `}
    >
      <MDXFullParser source={post.content} />
    </article>
  );
}

export default Post;
