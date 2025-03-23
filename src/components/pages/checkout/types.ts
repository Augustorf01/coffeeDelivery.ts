export interface CartProductItemProps {
    product: {
      id: number;
      ilustration: string;
      name?: string;
      price: number;
      quantity?: number;
      type?: string;
      description?: string;
    };
  }
  
  export interface AddressForm {
    cep: string;
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
  }
  
  export type PaymentMethod = 'credit' | 'debit' | 'cash' | null;