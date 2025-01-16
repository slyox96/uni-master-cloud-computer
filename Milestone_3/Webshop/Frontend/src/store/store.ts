import { create } from "zustand";
import { addToCart } from "./actions/addToCart";
import { removeFromCart } from "./actions/removeFromCart";
import { clearCart } from "./actions/clearCart";
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
    clearCart: () => void;
  }
  
  export const useStore = create<StoreState>((set, get) => ({
    products: [],
    cart: [],
    isLoading: false,
    error: null,
  
    fetchProducts: async () => {
        set({ isLoading: true, error: null });
        try {
          const data = await ApiService.get("/products");
          set({ products: data as Product[], isLoading: false });
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
  
    clearCart: () => set({ cart: clearCart() }),
  }));
  
