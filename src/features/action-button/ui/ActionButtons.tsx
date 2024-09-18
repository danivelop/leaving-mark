'use client';

import { ThumbsUp, Bookmark, BookmarkCheck, Share2 } from 'lucide-react';
import { useState, useEffect } from 'react';

import { useToast } from '@/shared/hooks';
import { useStore } from '@/store';

interface ActionButtonsProps {
  className?: string;
  namespace?: 'post' | 'project';
  slug: string;
}

function ActionButtons({
  className,
  slug,
  namespace = 'post',
}: ActionButtonsProps) {
  const { toast } = useToast();

  const bookmarkedPosts = useStore((state) => state.postSlice.bookmarkedPosts);
  const initializeBookmarkedPosts = useStore(
    (state) => state.postSlice.initializeBookmarkedPosts,
  );
  const setBookmarkedPosts = useStore(
    (state) => state.postSlice.setBookmarkedPosts,
  );

  const [likes, setLikes] = useState(0);
  const isBookmarked = bookmarkedPosts.has(`${namespace}-${slug}`);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  const handleBookmark = () => {
    setBookmarkedPosts(`${namespace}-${slug}`);
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

  useEffect(() => {
    initializeBookmarkedPosts();
  }, [initializeBookmarkedPosts]);

  return (
    <div className={`${className} flex items-center space-x-2`}>
      <button
        type="button"
        onClick={handleLike}
        className="flex items-center px-3 py-[6px] rounded-lg transition-colors duration-150 text-zinc-600 hover:text-zinc-100 hover:bg-theme-800 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-theme-800 text-xs xs:text-sm"
      >
        <ThumbsUp className="size-3 xs:w-4 xs:h-4 mr-1" />
        <span>{likes} Likes</span>
      </button>
      <button
        type="button"
        onClick={handleBookmark}
        className={`${
          isBookmarked
            ? 'text-theme-700 bg-theme-700/10 hover:bg-theme-800 hover:text-zinc-100 dark:text-theme-400 dark:bg-theme-700/20 dark:hover:bg-theme-800 dark:hover:text-zinc-100'
            : 'text-zinc-600 hover:text-zinc-100 hover:bg-theme-800 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-theme-800'
        } flex items-center px-3 py-[6px] rounded-lg transition-colors duration-150 text-xs xs:text-sm`}
      >
        {isBookmarked ? (
          <BookmarkCheck className="size-3 xs:w-4 xs:h-4 mr-1" />
        ) : (
          <Bookmark className="size-3 xs:w-4 xs:h-4 mr-1" />
        )}
        <span>Bookmark</span>
      </button>
      <button
        type="button"
        onClick={handleShare}
        className="flex items-center px-3 py-[6px] rounded-lg transition-colors duration-150 text-zinc-600 hover:text-zinc-100 hover:bg-theme-800 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-theme-800 text-xs xs:text-sm"
      >
        <Share2 className="size-3 xs:w-4 xs:h-4 mr-1" />
        <span>Share</span>
      </button>
    </div>
  );
}

export default ActionButtons;
