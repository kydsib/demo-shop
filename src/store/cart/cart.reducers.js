import CART_ACTION_TYPES from "./cart.types"

const INITIAL_STATE = {

        bags: [], // do I need to separate items?
        accessories: [],
        shoes: [],
        jackets: [],
        selectedItems: [],
        numberOfItems: 0,
        totalAmount: 0
}

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch(type) {
        case CART_ACTION_TYPES.ADD_TO_CART:
        return {
            ...state,
            selectedItems: [
                ...state.selectedItems, payload // ability to add multiple
            ],
            numberOfItems: state.numberOfItems + 1, // should I add ability to add multiple items
            // numberOfItems: state.numberOfItems + payload.quantity
            totalAmount: state.totalAmount + payload.price
        };
        default:
            return state
    }
}