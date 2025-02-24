import React from 'react'
import { useStore } from '../store/store';
import { Product } from '../types/Product';

type ProductPriceProps = {
  product: Product,
  isInCart: boolean
};

const ProductPrice: React.FC<ProductPriceProps> = ({
    product,
    isInCart
  }) => {
    const { cart } = useStore();

    const cartItem = cart.find((item) => item.productId === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    const calculatedPrice = isInCart
      ? (product.price * quantity).toFixed(2)
      : product.price.toFixed(2);
    return (
        <span>
            <b>Price: </b>{calculatedPrice}$
        </span>
    )
}

export default ProductPrice