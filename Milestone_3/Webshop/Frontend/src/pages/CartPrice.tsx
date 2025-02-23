import React from 'react'
import { useStore } from '../store/store';

const CartPrice = () => {
    const { cart, products } = useStore();
    
    const totalPrice = cart.reduce((sum, item) => {
        const product = products.find((product)=> product.id === item.productId );
        const quantity = Number(item.quantity) || 0;
        return sum + product!.price * quantity;
    }, 0);
  
    return (
      <div className="p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold">Gesamtbetrag:</h2>
        <p className="text-lg font-bold">{totalPrice.toFixed(2)} €</p>

      </div>
    );
}

export default CartPrice