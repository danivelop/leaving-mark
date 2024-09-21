import type { RootSliceState } from './store';
import type { StateCreator } from 'zustand';

export interface ActionSliceState {
  bookmarkeds: Set<string>;
  initializeBookmarkeds: () => void;
  setBookmarkeds: (key: string) => void;
}

export const createActionSlice: StateCreator<
  RootSliceState,
  [['zustand/immer', never]],
  [],
  ActionSliceState
> = (set) => ({
  bookmarkeds: new Set(),
  initializeBookmarkeds: () =>
    set((state) => {
      state.actionSlice.bookmarkeds = new Set(
        JSON.parse(window.localStorage.getItem('bookmarked') ?? '[]'),
      );
    }),
  setBookmarkeds: (key) =>
    set((state) => {
      const isBookmarked = state.actionSlice.bookmarkeds.has(key);
      if (isBookmarked) {
        state.actionSlice.bookmarkeds.delete(key);
      } else {
        state.actionSlice.bookmarkeds.add(key);
      }
      window.localStorage.setItem(
        'bookmarked',
        JSON.stringify(Array.from(state.actionSlice.bookmarkeds)),
      );
    }),
});
