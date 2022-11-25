import PRODUCTS_ACTION_TYPES from "./products.types";

export const INITIAL_STATE = {
    currentProducts: [],
}

export const productsReducer = (state = INITIAL_STATE , action = {}) => {
    const { type, payload } = action;
    
    switch(type) {
        case PRODUCTS_ACTION_TYPES.SET_STORE_ITEMS:
            return {...state, currentProducts: payload};
        default:
            return state;
    }
}