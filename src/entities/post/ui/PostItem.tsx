import Image from 'next/image';

import MDXThumbParser from './MDXThumbParser';

import type { Post } from '@/entities/post';

interface PostItemProps {
  post: Post;
}

function PostItem({ post }: PostItemProps) {
  const imageSrc = post.metadata.image ?? '/post-image/default.png';

  return (
    <li className="flex py-8 gap-10">
      <Image
        className="w-60 h-40"
        src={imageSrc}
        width="240"
        height="160"
        alt={`${post.metadata.title} image`}
      />
      <div className="flex flex-col items-stretch">
        <div className="flex flex-col grow justify-center">
          <h1 className="text-2xl font-bold">{post.metadata.title}</h1>
          {!!post.content && (
            <h2 className="line-clamp-3 text-zinc-500 mt-2">
              <MDXThumbParser source={post.content} />
            </h2>
          )}
        </div>
        <time className="mt-auto">{post.metadata.publishedAt}</time>
      </div>
    </li>
  );
}

export default PostItem;
