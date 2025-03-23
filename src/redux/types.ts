// Product types
export interface Product {
    id: number;
    ilustration: string;
    name?: string;
    type?: string;
    description?: string;
    price: number | string;
  }
  
  // Cart types
  export interface CartProduct {
    id: number;
    ilustration: string;
    name?: string;
    price: number;
    quantity: number;
    type?: string;
    description?: string;
  }
  
  export interface CartState {
    products: CartProduct[];
    totalItems: number;
    totalPrice: number;
    isCartOpen: boolean;
  }
  
  // Order types
  export interface Address {
    cep: string;
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
  }
  
  export type PaymentMethod = 'credit' | 'debit' | 'cash' | null;
  
  export interface Order {
    products: CartProduct[];
    address: Address | null;
    paymentMethod: PaymentMethod;
    deliveryFee: number;
    subtotal: number;
    total: number;
  }
  
  export interface OrderState {
    currentOrder: Order | null;
    orderHistory: Order[];
    isSubmitting: boolean;
    error: string | null;
  }
  
  // Root State
  export interface RootState {
    cart: CartState;
    order: OrderState;
  }