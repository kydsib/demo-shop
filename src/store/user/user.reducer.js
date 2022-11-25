import USER_TYPES from "./user.types"

const INITIAL_STATE = {
    id: null,
    countryOFOrigin:'',
    countries: [],
}

export const userReducer = (state = INITIAL_STATE, action = {} ) => {
    const { payload, type } = action

    switch(type) {
        case USER_TYPES.ADD_NEW_USER:
            return {...state, id: payload};
        case USER_TYPES.SAVE_USERS_COUNTRY:
            return {...state, countryOFOrigin: payload};
        case USER_TYPES.LIST_OF_COUNTRIES:
            return { ...state, countries: [...state.countries, payload]}
        default:
            return state
    }
}