import { create } from "zustand";
import { addToCart } from "./actions/addToCart";
import { removeFromCart } from "./actions/removeFromCart";
import { clearCart } from "./actions/clearCart";
import { incrementQuantity } from "./actions/incrementQuantity";
import { decrementQuantity } from "./actions/decrementQuantity";
import { Product, CartItem } from "../types/Product";
import ApiService from "../api/ApiService";

interface StoreState {
  products: Product[];
  cart: CartItem[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  addToCart: (productId: number, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  incrementQuantity: (productId: number, incrementBy?: number) => void;
  decrementQuantity: (productId: number, decrementBy?: number) => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
  products: [],
  cart: [],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const data = await ApiService.get("/products");
      const products = data as Product[];
      set({ products, isLoading: false });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message, isLoading: false });
      } else {
        set({ error: "An unknown error occurred", isLoading: false });
      }
    }
  },

  addToCart: (productId, quantity = 1) =>
    set((state) => ({
      cart: addToCart(state.cart, productId, quantity),
    })),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: removeFromCart(state.cart, productId),
    })),

  incrementQuantity: (productId, incrementBy = 1) =>
    set((state) => ({
      cart: incrementQuantity(state.cart, productId, incrementBy),
    })),

  decrementQuantity: (productId, decrementBy = 1) =>
    set((state) => ({
      cart: decrementQuantity(state.cart, productId, decrementBy),
    })),

  clearCart: () => set({ cart: clearCart() }),
}));
