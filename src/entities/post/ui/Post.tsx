import { getPost } from '@/entities/post/lib';

import MDXFullParser from './MDXFullParser';

interface PostProps {
  slug: string;
}

function Post({ slug }: PostProps) {
  const post = getPost(slug);
  return <MDXFullParser source={post.content} />;
}

export default Post;
