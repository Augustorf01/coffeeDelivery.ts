import { combineReducers } from 'redux'
import { cartReducer } from './products-cart/reducer'

export const rootReducer = combineReducers({ cartReducer })