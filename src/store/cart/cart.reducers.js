import CART_ACTION_TYPES from "./cart.types"

const INITIAL_STATE = {

        bags: [],
        accessories: [],
        shoes: [],
        jackets: [],
        selectedItems: [],
        numberOfItems: 0,
        totalAmount: 0
}

const returnTotal = (arr) => arr.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch(type) {
        case CART_ACTION_TYPES.ADD_TO_CART:
            const isItemAlreadyInCart = [...state?.selectedItems].find(item => item.id === payload.id);

            if(isItemAlreadyInCart) {
                const newSelectedItems = [...state.selectedItems].map(item => item.id === isItemAlreadyInCart.id ? {...item, quantity: item.quantity + 1} : item)
                const newTotal = returnTotal([...newSelectedItems])
                return {
                    ...state,
                    selectedItems: [...newSelectedItems],
                    numberOfItems: state.numberOfItems + 1,
                    totalAmount: newTotal
                }
            } else {
                return {
                    ...state,
                    selectedItems: [
                    ...state.selectedItems, payload
                    ],
                    numberOfItems: state.numberOfItems + 1,
                    totalAmount: state.totalAmount + payload.price
                    }
            }
        case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:

            const updatedItemsList = [...state?.selectedItems].filter(item => item.id !== payload.id)
            const newTotalAmount = returnTotal([...updatedItemsList])
            return {
                ...state,
                selectedItems: [...updatedItemsList],
                totalAmount: newTotalAmount
            }
        case CART_ACTION_TYPES.EDIT_ITEM_COUNT:
            const selectedItems = [...state.selectedItems].map(item => item.id === payload.id ? {...item, quantity:  payload.quantity} : item);
            const newQuantity = [...selectedItems].reduce((acc, cur) => acc + cur.quantity, 0)
            const newTotal = returnTotal([...selectedItems])
            return {
                ...state,
                selectedItems: [...selectedItems],
                numberOfItems: newQuantity,
                totalAmount: newTotal,
            }
        default:
            return state
    }
}