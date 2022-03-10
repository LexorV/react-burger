import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED
}
    from '../action/Ingredients';
import { Tingredient } from '../types/ingredientsType'
type TgetIngredientsRequest = {
    readonly type: typeof GET_INGREDIENTS_REQUEST
}
type TingredientsSuccess = {
    readonly type: typeof GET_INGREDIENTS_SUCCESS
    ingredients: Tingredient[]
}
type TingredientsFailed = {
    readonly type: typeof GET_INGREDIENTS_FAILED
}
type TingredientsAction =
    TgetIngredientsRequest
    | TingredientsSuccess
    | TingredientsFailed;



type TingredientsState = {
    ingredientsRequest: boolean;
    ingredientsFailed: boolean;
    ingredients: null | Tingredient[];
}

const initialState: TingredientsState = {
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredients: null
}
export const reducerIngredients = (state = initialState, action: TingredientsAction) => {
    switch (action.type) {
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