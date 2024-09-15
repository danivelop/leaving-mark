import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { createPostSlice } from './createPostSlice';

import type { PostSliceState } from './createPostSlice';

export interface RootSliceState {
  postSlice: PostSliceState;
}

const useStore = create<RootSliceState>()(
  immer((set, get, store) => ({
    postSlice: createPostSlice(set, get, store),
  })),
);

export default useStore;
