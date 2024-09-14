import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { createPostSlice } from './createPostSlice';

import type { PostState } from './createPostSlice';

export interface RootState {
  postSlice: PostState;
}

const useStore = create<RootState>()(
  immer((set, get, store) => ({
    postSlice: createPostSlice(set, get, store),
  })),
);

export default useStore;
