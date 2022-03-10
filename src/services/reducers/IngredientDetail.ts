
import { OPEN_INGREDIENT_DETAILS, CLOSE_INGREDIENT_DETAILS } from '../action/IngredientDetail'
import { OPEN_ORDER_MODAL } from '../action/order';
import { Tingredient, TorderNumber } from '../types/ingredientsType';
type IingredientDetailRedce = {
    modalOpen: boolean;
    ingredient: Tingredient | null;
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
    |TopenOrderModal;



const initialState: IingredientDetailRedce = {
    modalOpen: false,
    ingredient: null,
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
        default:
            {
                return state
            }
    }
}