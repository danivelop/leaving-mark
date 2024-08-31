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
        layout-width
        prose md:prose-lg prose-zinc dark:prose-invert
        prose-table:w-full prose-table:inline-block prose-table:overflow-x-auto
        prose-code:before:content-none prose-code:after:content-none
        prose-img:mx-auto prose-video:mx-auto
      `}
    >
      <MDXFullParser source={post.content} />
    </article>
  );
}

export default Post;
