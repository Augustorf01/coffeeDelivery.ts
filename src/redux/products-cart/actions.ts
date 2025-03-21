import { ProductProps } from "../../components/compartilhados/product"
import { CartActionTypes } from "./action-types"

export type addProductToCartAction = {
    type: typeof CartActionTypes.ADD_PRODUCT,
    payload: {
        id: number,
        ilustration: string,
        name?: string,
        price: number,
        quantity?: number,
        type: string | undefined,
        description: string,
    },  // Product object
}

export const addProductToCart = (payload: ProductProps): addProductToCartAction => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload: {
        id: payload.id,
        ilustration: payload.ilustration,
        name: payload.name,
        price: Number(payload.price),
        // quantity: payload.quantity,
        type: payload.type,
        description: payload.description || "",
    }
})