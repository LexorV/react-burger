import { getIngredients } from '../../utils/burgerApi';
import {Tingredient} from '../types/ingredientsType';
import {AppThunk, AppDispatch} from '../types/index'
export const GET_INGREDIENTS_REQUEST:'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS:'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED:'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED';

interface IgetIngredientActionSuccess {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly ingredients:Tingredient[]
}
interface IgetIngredsFailed {
    readonly type: typeof GET_INGREDIENTS_FAILED;
}
const getIngredientActionSuccess = (ingredients:any):IgetIngredientActionSuccess => ({
    type: GET_INGREDIENTS_SUCCESS,
    ingredients
})

const getIngredsFailed = ():IgetIngredsFailed => ({
        type: GET_INGREDIENTS_FAILED
})


export const  getIngredientsAction:AppThunk = () => {
    return function(dispatch:AppDispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        });
        getIngredients().then(res => {
                if(res && res.success) {
                    dispatch(getIngredientActionSuccess(res.data))
                } else {
                    dispatch(getIngredsFailed())
                }
            })
            .catch(err => {
                dispatch(getIngredsFailed())
            })
    }
}