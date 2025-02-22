'use client';

import {
  ThumbsUp,
  Bookmark,
  BookmarkCheck,
  Share2,
  Github,
  ExternalLink,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { ACTION_NAMESPACE, ACTION_TYPE } from '@/features/action-button/consts';
import { getKey } from '@/features/action-button/lib';
import { useToast } from '@/shared/hooks';
import { Spinner } from '@/shared/ui';
import { useStore } from '@/store';

interface ActionButtonsProps {
  actionTypes: ACTION_TYPE[];
  className?: string;
  demo?: string;
  github?: string;
  namespace?: ACTION_NAMESPACE;
  slug: string;
}

function ActionButtons({
  className,
  slug,
  github,
  demo,
  namespace = ACTION_NAMESPACE.POST,
  actionTypes,
}: ActionButtonsProps) {
  const { toast } = useToast();
  const [fetchingLikes, setFetchingLikes] = useState(true);

  const likes = useStore((state) => state.actionSlice.likes);
  const likeCount = useStore((state) => state.actionSlice.likeCount);
  const bookmarks = useStore((state) => state.actionSlice.bookmarks);
  const initializeLikes = useStore(
    (state) => state.actionSlice.initializeLikes,
  );
  const initializeBookmarks = useStore(
    (state) => state.actionSlice.initializeBookmarks,
  );
  const setLikes = useStore((state) => state.actionSlice.setLikes);
  const setBookmarks = useStore((state) => state.actionSlice.setBookmarks);
  const resetLikeCount = useStore((state) => state.actionSlice.resetLikeCount);

  const hasLike = actionTypes.includes(ACTION_TYPE.LIKES);
  const hasBookmark = actionTypes.includes(ACTION_TYPE.BOOKMARK);
  const isLiked = hasLike && likes.has(getKey(namespace, slug));
  const isBookmarked = hasBookmark && bookmarks.has(getKey(namespace, slug));

  const handleLike = () => {
    setFetchingLikes(true);
    setLikes(namespace, slug);
    setFetchingLikes(false);
  };

  const handleBookmark = () => {
    setBookmarks(namespace, slug);
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
    if (hasLike) {
      initializeLikes(namespace, slug).then(() => {
        setFetchingLikes(false);
      });

      return () => {
        resetLikeCount();
      };
    }

    return () => {};
  }, [hasLike, initializeLikes, namespace, resetLikeCount, slug]);

  useEffect(() => {
    if (hasBookmark) {
      initializeBookmarks();
    }
  }, [hasBookmark, initializeBookmarks]);

  return (
    <div className={`${className} flex items-center gap-2 flex-wrap`}>
      {actionTypes.map((actionType) => {
        if (actionType === ACTION_TYPE.GITHUB && github) {
          return (
            <motion.a
              key={actionType}
              href={github}
              className="flex items-center h-7 xs:h-8 px-3 py-[6px] rounded-lg transition-colors duration-150 text-zinc-600 hover:text-zinc-100 hover:bg-theme-800 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-theme-800 border-theme-800 border box-border text-xs xs:text-sm"
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Navigate to project github link</span>
              <Github
                aria-hidden="true"
                className="size-3 xs:w-4 xs:h-4 mr-1"
              />
              <span>Github</span>
            </motion.a>
          );
        }
        if (actionType === ACTION_TYPE.DEMO && demo) {
          return (
            <motion.a
              key={actionType}
              href={demo}
              className="flex items-center h-7 xs:h-8 px-3 py-[6px] rounded-lg transition-colors duration-150 text-zinc-600 hover:text-zinc-100 hover:bg-theme-800 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-theme-800 border-theme-800 border box-border text-xs xs:text-sm"
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Navigate to project demo link</span>
              <ExternalLink
                aria-hidden="true"
                className="size-3 xs:w-4 xs:h-4 mr-1"
              />
              <span>Demo</span>
            </motion.a>
          );
        }
        if (actionType === ACTION_TYPE.LIKES) {
          return (
            <motion.button
              key={actionType}
              type="button"
              onClick={handleLike}
              className={`${
                isLiked
                  ? 'text-theme-700 bg-theme-700/10 hover:bg-theme-800 hover:text-zinc-100 dark:text-theme-400 dark:bg-theme-700/20 dark:hover:bg-theme-800 dark:hover:text-zinc-100'
                  : 'text-zinc-600 hover:text-zinc-100 hover:bg-theme-800 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-theme-800'
              } flex items-center h-7 xs:h-8 px-3 py-[6px] rounded-lg transition-colors duration-150 text-xs xs:text-sm`}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">project like button</span>
              <ThumbsUp
                aria-hidden="true"
                className="size-3 xs:w-4 xs:h-4 mr-1"
              />
              <span>
                {fetchingLikes ? (
                  <span className="flex items-center">
                    <Spinner />
                    <span>&nbsp;Likes</span>
                  </span>
                ) : (
                  `${likeCount} Likes`
                )}
              </span>
            </motion.button>
          );
        }
        if (actionType === ACTION_TYPE.BOOKMARK && slug) {
          return (
            <motion.button
              key={actionType}
              type="button"
              onClick={handleBookmark}
              className={`${
                isBookmarked
                  ? 'text-theme-700 bg-theme-700/10 hover:bg-theme-800 hover:text-zinc-100 dark:text-theme-400 dark:bg-theme-700/20 dark:hover:bg-theme-800 dark:hover:text-zinc-100'
                  : 'text-zinc-600 hover:text-zinc-100 hover:bg-theme-800 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-theme-800'
              } flex items-center h-7 xs:h-8 px-3 py-[6px] rounded-lg transition-colors duration-150 text-xs xs:text-sm`}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">project bookmark button</span>
              {isBookmarked ? (
                <BookmarkCheck
                  aria-hidden="true"
                  className="size-3 xs:w-4 xs:h-4 mr-1"
                />
              ) : (
                <Bookmark
                  aria-hidden="true"
                  className="size-3 xs:w-4 xs:h-4 mr-1"
                />
              )}
              <span>Bookmark</span>
            </motion.button>
          );
        }
        if (actionType === ACTION_TYPE.SHARE) {
          return (
            <motion.button
              key={actionType}
              type="button"
              onClick={handleShare}
              className="flex items-center h-7 xs:h-8 px-3 py-[6px] rounded-lg transition-colors duration-150 text-zinc-600 hover:text-zinc-100 hover:bg-theme-800 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-theme-800 text-xs xs:text-sm"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">
                button to copy project link to share
              </span>
              <Share2
                aria-hidden="true"
                className="size-3 xs:w-4 xs:h-4 mr-1"
              />
              <span>Share</span>
            </motion.button>
          );
        }
        return null;
      })}
    </div>
  );
}

export default ActionButtons;
