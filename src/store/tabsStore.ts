import { create } from 'zustand';

interface TabItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  closable: boolean;
}

interface TabsState {
  tabs: TabItem[];
  activeKey: string;
  addTab: (tab: TabItem) => void;
  removeTab: (key: string) => void;
  setActiveKey: (key: string) => void;
}

export const useTabsStore = create<TabsState>((set) => ({
  tabs: [],
  activeKey: '/',
  addTab: (tab) =>
    set((state) => ({
      tabs: state.tabs.some((t) => t.key === tab.key)
        ? state.tabs
        : [...state.tabs, tab],
    })),
  removeTab: (key) =>
    set((state) => ({
      tabs: state.tabs.filter((tab) => tab.key !== key),
    })),
  setActiveKey: (key) => set({ activeKey: key }),
}));
