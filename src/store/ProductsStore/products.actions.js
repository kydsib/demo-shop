import PRODUCTS_TYPES from "./products.types";

const createAction = (type, payload) => ({ type, payload });

export const setCurrentProducts = (items) => {
    // doo I need createAction or I can just pass type and payload
    createAction(PRODUCTS_TYPES.SET_STORE_ITEMS, items)

}

