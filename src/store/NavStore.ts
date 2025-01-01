import { create } from "zustand";

type NavStore = {
  nav: HTMLIonNavElement | undefined;
  setNav: (value: HTMLIonNavElement | undefined) => void
};

export const useNavStore = create<NavStore>((set) => ({
  nav: undefined,
  setNav: (value: HTMLIonNavElement | undefined) => set(() => ({ nav: value })),
}));

export function resetNav(store: NavStore) {
  store.nav?.popToRoot()
}