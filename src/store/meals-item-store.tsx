import { create } from "zustand";

type item = {
  name: string;
  id: string;
  price: number;
  quantity: number;
};

type mealsStore = {
  items: item[];
  totalAmount: number;
  addItem: (item: item) => void;
  removeItem: (id: string) => void;
};

const useMealsItemStore = create<mealsStore>((set, get) => ({
  items: [],
  totalAmount: 0,
  addItem: (item) => {
    const items = get().items;

    const totalAmount = get().totalAmount;

    const updatedTotalAmount = totalAmount + item.price * item.quantity;

    const existingItemIndex = items.findIndex(
      (prevItem) => prevItem.id === item.id
    );

    const existingItem = items[existingItemIndex];

    let updatedItems: item[];

    if (existingItem) {
      const updatedItem = {
        ...existingItem,

        quantity: existingItem.quantity + item.quantity,
      };

      updatedItems = [...items];

      updatedItems[existingItemIndex] = updatedItem;
    }

    set((state) => ({
      items: existingItem ? updatedItems : state.items.concat(item),

      totalAmount: updatedTotalAmount,
    }));
  },

  removeItem: (id) => {
    const items = get().items;

    const totalAmount = get().totalAmount;

    const existingItemIndex = items.findIndex((item) => item.id === id);

    const existingItem = items[existingItemIndex];

    const updatedTotalAmount = totalAmount - existingItem.price;

    let updatedItems: item[];

    if (existingItem.quantity === 1) {
      updatedItems = items.filter((item) => item.id !== id);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };

      updatedItems = [...items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    set((state) => ({
      items: updatedItems,

      totalAmount: updatedTotalAmount,
    }));
  },
}));
export default useMealsItemStore;
