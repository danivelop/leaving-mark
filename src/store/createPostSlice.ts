import type { RootState } from './store';
import type { StateCreator } from 'zustand';

export interface PostState {
  selectedTag: string | null;
  setSelectedTag: (tag: string) => void;
}

export const createPostSlice: StateCreator<
  RootState,
  [['zustand/immer', never]],
  [],
  PostState
> = (set) => ({
  selectedTag: null,
  setSelectedTag: (tag) =>
    set((state) => {
      state.postSlice.selectedTag = tag;
    }),
});
