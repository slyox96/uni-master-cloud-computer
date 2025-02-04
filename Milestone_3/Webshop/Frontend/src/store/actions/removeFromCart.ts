import { CartItem } from "../../types/Product";

export const removeFromCart = (cart: CartItem[], productId: number): CartItem[] =>
  cart.filter((item) => item.productId !== productId);
