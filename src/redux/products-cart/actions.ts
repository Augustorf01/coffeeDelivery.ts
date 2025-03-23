import { ProductProps } from "../../components/compartilhados/product";
import { CartActionTypes } from "./action-types";

// Add product to cart
export type AddProductToCartAction = {
  type: typeof CartActionTypes.ADD_PRODUCT,
  payload: {
    id: number,
    ilustration: string,
    name?: string,
    price: number,
    quantity: number,
    type?: string,
    description: string,
  },
};

export const addProductToCart = (payload: ProductProps): AddProductToCartAction => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload: {
    id: payload.id,
    ilustration: payload.ilustration,
    name: payload.name,
    price: typeof payload.price === 'string' 
      ? Number(payload.price.replace('R$', '').replace(',', '.'))
      : payload.price,
    quantity: payload.quantity || 1,
    type: payload.type,
    description: payload.description || "",
  }
});

// Remove product from cart
export type RemoveProductFromCartAction = {
  type: typeof CartActionTypes.REMOVE_PRODUCT,
  payload: number, // product id
};

export const removeProductFromCart = (id: number): RemoveProductFromCartAction => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload: id,
});

// Update product quantity
export type UpdateProductQuantityAction = {
  type: typeof CartActionTypes.UPDATE_QUANTITY,
  payload: {
    id: number,
    quantity: number,
  },
};

export const updateProductQuantity = (id: number, quantity: number): UpdateProductQuantityAction => ({
  type: CartActionTypes.UPDATE_QUANTITY,
  payload: {
    id,
    quantity,
  },
});

// Clear cart
export type ClearCartAction = {
  type: typeof CartActionTypes.CLEAR_CART,
};

export const clearCart = (): ClearCartAction => ({
  type: CartActionTypes.CLEAR_CART,
});
  