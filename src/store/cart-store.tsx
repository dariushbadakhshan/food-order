import { create } from "zustand";

type cart = {
  showCart: boolean;
  showCartModal: () => void;
};

const useCart = create<cart>((set) => ({
  showCart: false,

  showCartModal: () => set((state) => ({ showCart: !state.showCart })),
}));
export default useCart;
