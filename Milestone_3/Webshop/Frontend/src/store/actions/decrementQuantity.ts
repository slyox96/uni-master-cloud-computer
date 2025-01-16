import { CartItem } from "../../types/Product";

export const decrementQuantity = (
  cart: CartItem[],
  productId: number,
  decrementBy = 1
): CartItem[] => {
  return cart
    .map((item) =>
      item.productId === productId && item.quantity > decrementBy
        ? { ...item, quantity: item.quantity - decrementBy }
        : item
    )
    .filter((item) => item.quantity > 0); // Entferne Artikel mit Menge 0
};
