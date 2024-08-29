import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from '@/shared/lib';

import MDXThumbParser from './MDXThumbParser';

import type { Post } from '@/entities/post';

interface PostItemProps {
  post: Post;
}

function PostItem({ post }: PostItemProps) {
  const imageSrc = post.metadata.image ?? '/post-image/default.png';

  return (
    <li>
      <Link
        href={`/posts/${post.slug}`}
        className="flex flex-col xs:flex-row gap-4 xs:gap-10"
      >
        <Image
          className="w-full min-w-full xs:w-52 xs:min-w-52 md:w-60 md:min-w-60 aspect-[3/2] object-cover object-center"
          src={imageSrc}
          width={160}
          height={112}
          alt={`${post.metadata.title} image`}
        />
        <div className="flex flex-col overflow-x-hidden px-2 xs:justify-between xs:px-0 xs:py-1 md:py-2">
          <div className="flex flex-col">
            <h1 className="ellipsis text-xl text-neutral-700 font-bold md:text-2xl">
              {post.metadata.title}
            </h1>
            {!!post.content && (
              <h2 className="line-clamp-3 word-style text-zinc-500 text-base mt-1 xs:mt-0 md:mt-1">
                <MDXThumbParser source={post.content} />
              </h2>
            )}
          </div>
          <time className="mt-3 text-sm text-zinc-400 xs:mt-auto">
            {formatDate(new Date(post.metadata.publishedAt))}
          </time>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
