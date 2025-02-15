import { getKey } from '@/features/action-button/lib';
import {
  getLikeCount,
  increaseLikeCount,
  decreaseLikeCount,
} from '@/prisma/actions';

import type { RootSliceState } from './store';
import type { StateCreator } from 'zustand';

export interface ActionSliceState {
  bookmarks: Set<string>;
  initializeBookmarks: () => void;
  initializeLikes: (namespace: string, slug: string) => Promise<void>;
  likeCount: number;
  likes: Set<string>;
  resetLikeCount: () => void;
  setBookmarks: (namespace: string, slug: string) => void;
  setLikes: (namespace: string, slug: string) => Promise<void>;
}

export const createActionSlice: StateCreator<
  RootSliceState,
  [['zustand/immer', never]],
  [],
  ActionSliceState
> = (set, get) => ({
  bookmarks: new Set(),
  likes: new Set(),
  likeCount: 0,
  initializeLikes: async (namespace, slug) => {
    set((state) => {
      state.actionSlice.likes = new Set(
        JSON.parse(window.localStorage.getItem('likes') ?? '[]'),
      );
    });

    try {
      const likeCount = await getLikeCount(namespace, slug);
      set((state) => {
        state.actionSlice.likeCount = likeCount;
      });
    } catch {
      /* do nothing */
    }
  },
  initializeBookmarks: () =>
    set((state) => {
      state.actionSlice.bookmarks = new Set(
        JSON.parse(window.localStorage.getItem('bookmarks') ?? '[]'),
      );
    }),
  setLikes: async (namespace, slug) => {
    const key = getKey(namespace, slug);
    const isLiked = get().actionSlice.likes.has(key);

    set((state) => {
      if (isLiked) {
        state.actionSlice.likes.delete(key);
        state.actionSlice.likeCount -= 1;
      } else {
        state.actionSlice.likes.add(key);
        state.actionSlice.likeCount += 1;
      }
    });

    window.localStorage.setItem(
      'likes',
      JSON.stringify(Array.from(get().actionSlice.likes)),
    );

    if (isLiked) {
      try {
        const likeCount = await decreaseLikeCount(namespace, slug);
        set((state) => {
          state.actionSlice.likeCount = likeCount;
        });
      } catch {
        set((state) => {
          state.actionSlice.likeCount += 1;
        });
      }
    } else {
      try {
        const likeCount = await increaseLikeCount(namespace, slug);
        set((state) => {
          state.actionSlice.likeCount = likeCount;
        });
      } catch {
        set((state) => {
          state.actionSlice.likeCount -= 1;
        });
      }
    }
  },
  setBookmarks: (namespace, slug) => {
    const key = getKey(namespace, slug);
    set((state) => {
      const isBookmarked = state.actionSlice.bookmarks.has(key);
      if (isBookmarked) {
        state.actionSlice.bookmarks.delete(key);
      } else {
        state.actionSlice.bookmarks.add(key);
      }
      window.localStorage.setItem(
        'bookmarks',
        JSON.stringify(Array.from(state.actionSlice.bookmarks)),
      );
    });
  },
  resetLikeCount: () => {
    set((state) => {
      state.actionSlice.likeCount = 0;
    });
  },
});
