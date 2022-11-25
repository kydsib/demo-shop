import { combineReducers } from 'redux';

import { productsReducer } from './ProductsStore/products.reducers';
import { cartReducer } from './cart/cart.reducers';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    user: userReducer
})