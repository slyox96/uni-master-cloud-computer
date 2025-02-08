import { useEffect } from 'react';
import { Product } from "../types/Product";
import { useStore } from '../store/store';

function TestA() {
  const { products, isLoading, error, fetchProducts } = useStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul>
          {products.map((product: Product) => (
            <li key={product.id}>
              <div>
                <img src={product.image} alt={product.name} style={{ width: "100px", height: "100px" }} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Stock: {product.stock}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TestA;
