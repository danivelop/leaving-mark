import Image from 'next/image';

import { FullMarkdown } from '@/entities/markdown';
import { Badge, Space, AbsoluteDate } from '@/shared/ui';

import type { Post } from '@/entities/markdown';

interface PostDetailProps {
  post: Post;
}

function PostDetail({ post }: PostDetailProps) {
  const imageSrc = post.metadata.image ?? '/post-image/default.png';

  return (
    <div className="word-style flex flex-col">
      <h1 className="text-2xl xs:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
        {post.metadata.title}
      </h1>
      <Space className="h-2" />
      <div className="text-sm xs:text-base">
        <AbsoluteDate
          className="text-zinc-500 dark:text-zinc-400"
          date={post.metadata.publishedAt}
        />
      </div>
      <Space className="h-4" />
      {post.metadata.tags && (
        <>
          <div className="w-full overflow-x-auto hide-scrollbar">
            <ul className="flex flex-nowrap gap-2 min-w-fit">
              {post.metadata.tags.map((tag) => (
                <li key={tag}>
                  <Badge className="bg-theme-700 text-xs xs:text-sm px-[10px] py-[2px] text-zinc-100 border-theme-700">
                    {tag}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
          <Space className="h-4" />
        </>
      )}
      <Image
        src={imageSrc}
        className="w-full min-w-full aspect-[3/2] object-cover object-center rounded-lg"
        width="300"
        height="200"
        alt={`${post.metadata.title} image`}
      />
      <Space className="h-6 xs:h-8" />
      <FullMarkdown content={post.content} />
    </div>
  );
}

export default PostDetail;
