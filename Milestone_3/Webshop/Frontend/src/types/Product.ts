export interface Category {
  id: number;
  name: string;
}
  
  export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: Category;
    image: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface CartItem {
    productId: number;
    quantity: number;
  }
  