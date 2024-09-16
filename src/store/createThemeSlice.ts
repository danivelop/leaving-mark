import type { RootSliceState } from './store';
import type { StateCreator } from 'zustand';

export interface ThemeSliceState {
  isDarkMode: boolean;
  setIsDarkMode: (darkMode: boolean) => void;
}

export const createThemeSlice: StateCreator<
  RootSliceState,
  [['zustand/immer', never]],
  [],
  ThemeSliceState
> = (set) => ({
  isDarkMode: false,
  setIsDarkMode: (darkMode) =>
    set((state) => {
      state.themeSlice.isDarkMode = darkMode;
    }),
});
