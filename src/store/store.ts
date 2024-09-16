import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { createThemeSlice } from './createThemeSlice';

import type { ThemeSliceState } from './createThemeSlice';

export interface RootSliceState {
  themeSlice: ThemeSliceState;
}

const useStore = create<RootSliceState>()(
  immer((set, get, store) => ({
    themeSlice: createThemeSlice(set, get, store),
  })),
);

export default useStore;
