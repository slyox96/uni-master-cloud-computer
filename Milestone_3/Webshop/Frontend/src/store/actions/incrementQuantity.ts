import { CartItem } from "../../types/Product";

export const incrementQuantity = (
  cart: CartItem[],
  productId: number,
  incrementBy = 1
): CartItem[] => {
  return cart.map((item) =>
    item.productId === productId
      ? { ...item, quantity: item.quantity + incrementBy }
      : item
  );
};
