import {ADD_INGREDIENT} from '../action/constructorArray'
const initialState = {
    arrayInConstructor: null
}
export const constructorArrayReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT':
        return {
            ...state, arrayInConstructor: action.ingredient
        }
        case 'DELETE_INGREDIENT':{
            return {
                ...state, arrayInConstructor:[...state.arrayInConstructor.filter(item => item._id !== action.ingredient._id)]
            }
        }
        default: {
            return state
        }
    }
}