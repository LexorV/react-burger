import {  combineReducers, } from 'redux';
import { reducerIngredients, } from './Ingredients';
import { reducerIngredientDetail } from './IngredientDetail'
import { constructorArrayReducer } from './constructorArray'
import { orderReducer } from './oreder'
export const rootReducer = combineReducers({
    ingredients: reducerIngredients,
    ingredientDetail: reducerIngredientDetail,
    arrayInConstructor: constructorArrayReducer,
    order: orderReducer
})
 export  default rootReducer