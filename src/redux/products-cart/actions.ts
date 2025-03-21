import { ProductProps } from "../../components/compartilhados/product"
import { CartActionTypes } from "./action-types"

export type addProductToCartAction = {
    type: typeof CartActionTypes.ADD_PRODUCT,
    payload: {
        id: number,
        ilustration: string,
        name: string,
        price: number,
        quantity?: number,
        type: string,
        description: string,
    },  // Product object
}

export const addProductToCart = (payload: ProductProps) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload,
})