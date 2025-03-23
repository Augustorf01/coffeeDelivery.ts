import { CartActionTypes } from "./action-types";

interface CartProduct {
  id: number;
  ilustration: string;
  name?: string;
  price: number;
  quantity: number;
  type?: string;
  description: string;
}

interface CartState {
  products: CartProduct[];
  totalItems: number;
  totalPrice: number;
}

const initialState: CartState = {
  products: [],
  totalItems: 0,
  totalPrice: 0
};

// Helper function to calculate totals
const calculateTotals = (products: CartProduct[]) => {
  return products.reduce(
    (acc, product) => {
      const itemTotal = product.price * product.quantity;
      return {
        totalItems: acc.totalItems + product.quantity,
        totalPrice: acc.totalPrice + itemTotal,
      };
    },
    { totalItems: 0, totalPrice: 0 }
  );
};

export const cartReducer = (state = initialState, action): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT: {
      // Check if product already exists
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      let updatedProducts: CartProduct[];

      if (existingProductIndex >= 0) {
        // Update quantity if product exists
        updatedProducts = state.products.map((product, index) => {
          if (index === existingProductIndex) {
            return {
              ...product,
              quantity: product.quantity + action.payload.quantity,
            };
          }
          return product;
        });
      } else {
        // Add new product if it doesn't exist
        updatedProducts = [...state.products, action.payload];
      }

      const { totalItems, totalPrice } = calculateTotals(updatedProducts);

      return {
        ...state,
        products: updatedProducts,
        totalItems,
        totalPrice,
      };
    }

    case CartActionTypes.REMOVE_PRODUCT: {
      const updatedProducts = state.products.filter(
        (product) => product.id !== action.payload
      );

      const { totalItems, totalPrice } = calculateTotals(updatedProducts);

      return {
        ...state,
        products: updatedProducts,
        totalItems,
        totalPrice,
      };
    }

    case CartActionTypes.UPDATE_QUANTITY: {
      const updatedProducts = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: action.payload.quantity,
          };
        }
        return product;
      });

      const { totalItems, totalPrice } = calculateTotals(updatedProducts);

      return {
        ...state,
        products: updatedProducts,
        totalItems,
        totalPrice,
      };
    }

    case CartActionTypes.CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};