import { enableMapSet } from 'immer';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createActionSlice, type ActionSliceState } from './createActionSlice';
import { createThemeSlice, type ThemeSliceState } from './createThemeSlice';

export interface RootSliceState {
  actionSlice: ActionSliceState;
  themeSlice: ThemeSliceState;
}

enableMapSet();

const useStore = create<RootSliceState>()(
  persist(
    immer((set, get, store) => ({
      actionSlice: createActionSlice(set, get, store),
      themeSlice: createThemeSlice(set, get, store),
    })),
    {
      name: 'danivelop',
      skipHydration: true,
    },
  ),
);

export default useStore;
