'use client';

import { ThumbsUp, Bookmark, BookmarkCheck, Share2 } from 'lucide-react';
import { useState } from 'react';

import { useToast } from '@/shared/hooks';
import { Button } from '@/shared/ui';

interface ActionButtonsProps {
  namespace?: 'post' | 'project';
  slug: string;
}

function ActionButtons({ slug, namespace = 'post' }: ActionButtonsProps) {
  const { toast } = useToast();

  const [likes, setLikes] = useState(0);
  const [currentBookmarked, setCurrentBookmarked] = useState(() => {
    const bookmarked = JSON.parse(
      window.localStorage.getItem('bookmarked') ?? '[]',
    ) as string[];
    return new Set(bookmarked);
  });
  const isBookmarked = currentBookmarked.has(`${namespace}-${slug}`);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  const handleBookmark = () => {
    const newBookmarked = new Set(currentBookmarked);

    if (isBookmarked) {
      newBookmarked.delete(`${namespace}-${slug}`);
    } else {
      newBookmarked.add(`${namespace}-${slug}`);
    }

    setCurrentBookmarked(newBookmarked);

    window.localStorage.setItem(
      'bookmarked',
      JSON.stringify(Array.from(newBookmarked)),
    );
  };

  const handleShare = () => {
    const currentUrl = window.location.href;
    try {
      navigator.clipboard.writeText(currentUrl);
      toast({
        title: 'Link copied',
        description: 'The post link has been copied to your clipboard.',
        className:
          'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 border-zinc-200 dark:border-zinc-700',
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Link copy failed',
        description: 'Failed to copy the post link to your clipboard.',
        className:
          'bg-orange-200 text-orange-700 dark:bg-orange-700 dark:text-orange-200 border-orange-300 dark:border-orange-600',
      });
    }
  };

  return (
    <div className="flex items-center justify-start xs:justify-end space-x-2 mb-8">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleLike}
        className="text-zinc-600 hover:text-zinc-100 hover:bg-lime-800 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-lime-800 text-xs xs:text-sm"
      >
        <ThumbsUp className="size-3 xs:w-4 xs:h-4 mr-1" />
        <span>{likes} Likes</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleBookmark}
        className={`${
          isBookmarked
            ? 'text-lime-700 bg-lime-700/10 hover:bg-lime-800 hover:text-zinc-100 dark:text-lime-400 dark:bg-lime-700/20 dark:hover:bg-lime-800 dark:hover:text-zinc-100'
            : 'text-zinc-600 hover:text-zinc-100 hover:bg-lime-800 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-lime-800'
        } text-xs xs:text-sm`}
      >
        {isBookmarked ? (
          <BookmarkCheck className="size-3 xs:w-4 xs:h-4 mr-1" />
        ) : (
          <Bookmark className="size-3 xs:w-4 xs:h-4 mr-1" />
        )}
        <span>Bookmark</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleShare}
        className="text-zinc-600 hover:text-zinc-100 hover:bg-lime-800 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-lime-800 text-xs xs:text-sm"
      >
        <Share2 className="size-3 xs:w-4 xs:h-4 mr-1" />
        <span>Share</span>
      </Button>
    </div>
  );
}

export default ActionButtons;
