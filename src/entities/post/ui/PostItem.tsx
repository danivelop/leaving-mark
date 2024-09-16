import Image from 'next/image';
import Link from 'next/link';

import { MDXThumbParser, Badge } from '@/shared/ui';

import PostRelativeDate from './PostRelativeDate';
import ReadingTime from './ReadingTime';

import type { Markdown } from '@/shared/lib/markdownUtils';

interface PostItemProps {
  post: Markdown;
}

function PostItem({ post }: PostItemProps) {
  const imageSrc = post.metadata.image ?? '/post-image/default.png';

  return (
    <li className="group">
      <Link
        href={`/posts/${post.slug}`}
        className="flex flex-col xs:flex-row gap-4 xs:gap-6"
      >
        <Image
          className="w-full min-w-full xs:w-48 xs:min-w-48 md:w-52 md:min-w-52 aspect-[4/3] object-cover object-center rounded-lg transition-transform duration-300 group-hover:scale-105"
          src={imageSrc}
          width={160}
          height={112}
          alt={`${post.metadata.title} image`}
        />
        <div className="flex flex-col flex-grow overflow-x-hidden px-2 xs:justify-between xs:px-0 xs:py-1 md:py-2">
          <div className="flex flex-col xs:gap-1">
            <h1 className="truncate text-zinc-900 dark:text-zinc-100 font-bold text-xl md:text-2xl">
              {post.metadata.title}
            </h1>
            {!!post.content && (
              <div className="line-clamp-3 word-style text-zinc-600 dark:text-zinc-300 text-base mt-1 xs:mt-0 md:mt-1">
                <MDXThumbParser source={post.content} />
              </div>
            )}
          </div>
          <div className="flex items-center justify-between gap-2 text-xs mt-3 xs:mt-auto">
            <div className="flex items-center space-x-4 min-w-fit">
              <PostRelativeDate publishedAt={post.metadata.publishedAt} />
              <ReadingTime content={post.content} />
            </div>
            <div className="flex flex-nowrap gap-2 overflow-hidden">
              {post.metadata.tags?.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  className="text-[10px] px-1.5 py-0.5 bg-lime-700 text-zinc-100"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
