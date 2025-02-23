import { create } from "zustand";

type ToastState = {
  message: string;
  isVisible: boolean;
  showToast: (msg: string, duration?: number) => void;
  hideToast: () => void;
};

export const useToastStore = create<ToastState>((set) => ({
  message: "",
  isVisible: false,
  showToast: (msg, duration = 3000) => {
    set({ message: msg, isVisible: true });

    // Toast automatisch nach `duration` schließen
    setTimeout(() => set({ isVisible: false }), duration);
  },
  hideToast: () => set({ isVisible: false }),
}));
