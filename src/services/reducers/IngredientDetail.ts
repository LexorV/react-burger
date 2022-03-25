
import { OPEN_INGREDIENT_DETAILS, CLOSE_INGREDIENT_DETAILS } from '../action/IngredientDetail'
import { OPEN_ORDER_MODAL } from '../action/order';
import { Tingredient, TorderNumber } from '../types/ingredientsType';
import {OPEN_ORDER_CARD, CLOSE_ORDER_CARD, TcloseOrderCard, TopenOrderCard}  from '../action/orderCard';
type IingredientDetailRedce = {
    modalOpen: boolean;
    ingredient: Tingredient | null;
    order:any,
    orderCard:any
}
type TopenIngredientDetals = {
    readonly type: typeof OPEN_INGREDIENT_DETAILS
    ingredient:Tingredient
}
type TcloseIngredientDetails = {
    readonly type: typeof CLOSE_INGREDIENT_DETAILS
}
type TopenOrderModal = {
    readonly type: typeof OPEN_ORDER_MODAL
    order:TorderNumber
}
type TingredientDetailsAction =
    TopenIngredientDetals
    |TcloseIngredientDetails
    |TopenOrderModal
    |TcloseOrderCard
    |TopenOrderCard;



const initialState: IingredientDetailRedce = {
    modalOpen: false,
    ingredient: null,
    order: null,
    orderCard:null,

}
export const reducerIngredientDetail = (state = initialState, action: TingredientDetailsAction) => {
    switch (action.type) {
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
            case OPEN_ORDER_CARD: {
                return {
                    ...state,
                    modalOpen: true,
                    orderCard:action.orderCard
                }
            }
            case CLOSE_ORDER_CARD: {
                return {
                    ...state,
                    modalOpen: false,
                    orderCard:null
                }
            }
        default:
            {
                return state
            }
    }
}