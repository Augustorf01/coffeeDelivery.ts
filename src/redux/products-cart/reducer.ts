import { CartActionTypes } from "./action-types"
import { addProductToCartAction } from "./actions"

const initialState = {
    products: [],
    totalPrice: 0,
    quantity: 1
}

// Ao puxar os produtos, é importante trazer com ele e a quantidade.
export const cartReducer = (state = initialState, action: addProductToCartAction) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            }

        default:
            return state
    }
}
