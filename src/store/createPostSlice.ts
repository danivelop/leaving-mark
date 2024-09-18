import type { RootSliceState } from './store';
import type { StateCreator } from 'zustand';

export interface PostSliceState {
  bookmarkedPosts: Set<string>;
  initializeBookmarkedPosts: () => void;
  setBookmarkedPosts: (key: string) => void;
}

export const createPostSlice: StateCreator<
  RootSliceState,
  [['zustand/immer', never]],
  [],
  PostSliceState
> = (set) => ({
  bookmarkedPosts: new Set(),
  initializeBookmarkedPosts: () =>
    set((state) => {
      state.postSlice.bookmarkedPosts = new Set(
        JSON.parse(window.localStorage.getItem('bookmarked') ?? '[]'),
      );
    }),
  setBookmarkedPosts: (key) =>
    set((state) => {
      const isBookmarked = state.postSlice.bookmarkedPosts.has(key);
      if (isBookmarked) {
        state.postSlice.bookmarkedPosts.delete(key);
      } else {
        state.postSlice.bookmarkedPosts.add(key);
      }
      window.localStorage.setItem(
        'bookmarked',
        JSON.stringify(Array.from(state.postSlice.bookmarkedPosts)),
      );
    }),
});
