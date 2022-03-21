import {  combineReducers, } from 'redux';
import { reducerIngredients, } from './Ingredients';
import { reducerIngredientDetail } from './IngredientDetail'
import { constructorArrayReducer } from './constructorArray'
import { orderReducer } from './oreder'
import {RegistrationReduser} from './registerForm';
import {wsOrdesReducer} from './wsOrders'
export const rootReducer = combineReducers({
    ingredients: reducerIngredients,
    ingredientDetail: reducerIngredientDetail,
    arrayInConstructor: constructorArrayReducer,
    order: orderReducer,
    registrationForm: RegistrationReduser,
    wsOrdes:wsOrdesReducer
})
 export  default rootReducer