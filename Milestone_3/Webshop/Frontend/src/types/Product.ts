export enum Category {
    All = "All",
    Shirt = "Shirt",
    Pant = "Pant",
    Shoe = "Shoe",
    Accessory = "Accessory",
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
  