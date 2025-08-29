import { create } from 'zustand';

export const useStore = create((set) => ({
  // Left Nav state
  isLeftNavOpen: false,
  leftNavBtnRef: null,
  setLeftNavBtnRef: (ref) => set(() => ({ leftNavBtnRef: ref })),
  setLeftNav: (value) => set(() => ({ isLeftNavOpen: value })),
  toggleLeftNav: () => set((currentState) => ({ isLeftNavOpen: !currentState.isLeftNavOpen })),

  // Right Nav state
  isRightNavOpen: false,
  rightNavBtnRef: null,
  setRightNavBtnRef: (ref) => set(() => ({ rightNavBtnRef: ref })),
  setRightNav: (value) => set(() => ({ isRightNavOpen: value })),
  toggleRightNav: () => set((currentState) => ({ isRightNavOpen: !currentState.isRightNavOpen })),
}));