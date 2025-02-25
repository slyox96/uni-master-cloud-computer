import { create } from "zustand";
import { addToCart } from "./actions/addToCart";
import { removeFromCart } from "./actions/removeFromCart";
import { clearCart } from "./actions/clearCart";
import { incrementQuantity } from "./actions/incrementQuantity";
import { decrementQuantity } from "./actions/decrementQuantity";
import { Product, CartItem, Category } from "../types/Product";
import ApiService from "../api/ApiService";

interface StoreState {
  products: Product[];
  cart: CartItem[];
  categories: Category[];
  isLoadingProducts: boolean;
  isLoadingCategories: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  fetchCategories: () => Promise<void>;
  addToCart: (productId: number, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  incrementQuantity: (productId: number, incrementBy?: number) => void;
  decrementQuantity: (productId: number, decrementBy?: number) => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
  products: [],
  cart: [],
  categories: [],
  isLoadingProducts: false,
  isLoadingCategories: false,
  error: null,

  fetchProducts: async () => {
    set({ isLoadingProducts: true, error: null });
    try {
      const data = await ApiService.get("/products");
      const products = data as Product[];
      set({ products, isLoadingProducts: false });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message, isLoadingProducts: false });
      } else {
        set({ error: "An unknown error occurred", isLoadingProducts: false });
      }
    }
  },

  fetchCategories: async () => {
    set({ isLoadingCategories: true, error: null });
    try {
      const data = await ApiService.get("/categories");
      const categories = data as Category[];
      set({ categories, isLoadingCategories: false });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message, isLoadingCategories: false });
      } else {
        set({ error: "An unknown error occurred", isLoadingCategories: false });
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
