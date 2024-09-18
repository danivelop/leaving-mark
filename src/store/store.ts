import { enableMapSet } from 'immer';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createPostSlice } from './createPostSlice';
import { createThemeSlice } from './createThemeSlice';

import type { PostSliceState } from './createPostSlice';
import type { ThemeSliceState } from './createThemeSlice';

export interface RootSliceState {
  postSlice: PostSliceState;
  themeSlice: ThemeSliceState;
}

enableMapSet();

const useStore = create<RootSliceState>()(
  persist(
    immer((set, get, store) => ({
      postSlice: createPostSlice(set, get, store),
      themeSlice: createThemeSlice(set, get, store),
    })),
    {
      name: 'danivelop',
      skipHydration: true,
    },
  ),
);

export default useStore;
