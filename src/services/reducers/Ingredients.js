import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED
}
from '../action/Ingredients';
const initialState = {
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredients: null
}
export const reducerIngredients = (state = initialState, action) => {
    switch(action.type) {
        case GET_INGREDIENTS_REQUEST:
            {
                return {
                    ...state,
                    ingredientsRequest: true,
                    ingredientsFailed: false
                }
            }
        case GET_INGREDIENTS_SUCCESS:
            {
                return {
                    ...state,
                    ingredientsFailed: false,
                    ingredients: action.ingredients,
                    ingredientsRequest: false
                }
            }
        case GET_INGREDIENTS_FAILED:
            {
                return {
                    ...state,
                    ingredientsFailed: true,
                    ingredientsRequest: false
                }
            }
        default:
            {
                return state
            }
    }
}