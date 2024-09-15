import type { RootSliceState } from './store';
import type { StateCreator } from 'zustand';

export interface PostSliceState {
  selectedTag: string | null;
  setSelectedTag: (tag: string) => void;
}

export const createPostSlice: StateCreator<
  RootSliceState,
  [['zustand/immer', never]],
  [],
  PostSliceState
> = (set) => ({
  selectedTag: null,
  setSelectedTag: (tag) =>
    set((state) => {
      state.postSlice.selectedTag = tag;
    }),
});
