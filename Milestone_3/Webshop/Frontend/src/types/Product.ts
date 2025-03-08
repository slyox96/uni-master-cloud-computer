export type Category = {
  id: number;
  name: string;
}
  
  export type Product = {
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
  
  export type CartItem = {
    productId: number;
    quantity: number;
  }
  