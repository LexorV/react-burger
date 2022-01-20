import { OPEN_INGREDIENT_DETAILS, CLOSE_INGREDIENT_DETAILS } from '../action/IngredientDetail'
import { OPEN_ORDER_MODAL } from '../action/order'
type IingredientDetailRedce = {
    modalOpen:boolean;
    ingredient:any
}
const initialState:IingredientDetailRedce = {
    modalOpen: false,
    ingredient: null,
}
export const reducerIngredientDetail = (state = initialState, action:any) => {
    switch(action.type) {
        case OPEN_INGREDIENT_DETAILS:
            {
                return {
                    ...state,
                    order: null,
                    modalOpen: true,
                    ingredient: action.ingredient

                }
            }
        case OPEN_ORDER_MODAL:
            {
                return {
                    ...state,
                    modalOpen: true,
                    order: action.order
                }
            }
        case CLOSE_INGREDIENT_DETAILS:
            {
                return {
                    ...state,
                    modalOpen: false,
                    ingredient: null,
                }
            }
        default:
            {
                return state
            }
    }
}