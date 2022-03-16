import {  combineReducers, } from 'redux';
import { reducerIngredients, } from './Ingredients';
import { reducerIngredientDetail } from './IngredientDetail'
import { constructorArrayReducer } from './constructorArray'
import { orderReducer } from './oreder'
import {RegistrationReduser} from './registerForm';
import {wsReducer} from './webSoket'
export const rootReducer = combineReducers({
    ingredients: reducerIngredients,
    ingredientDetail: reducerIngredientDetail,
    arrayInConstructor: constructorArrayReducer,
    order: orderReducer,
    registrationForm: RegistrationReduser,
    ws:wsReducer
})
 export  default rootReducer