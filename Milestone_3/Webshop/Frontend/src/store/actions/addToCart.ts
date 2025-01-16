import { CartItem } from "../../types/Product";

export const addToCart = (
  cart: CartItem[],
  productId: number,
  quantity: number
): CartItem[] => {
  const existingItem = cart.find((item) => item.productId === productId);
  if (existingItem) {
    return cart.map((item) =>
      item.productId === productId
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  }
  return [...cart, { productId, quantity }];
};
