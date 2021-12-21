import { OPEN_INGREDIENT_DETAILS, CLOSE_INGREDIENT_DETAILS }
from '../action/IngredientDetail';
const initialState = {
    modalOpen: false,
    ingredient: null,
    order:null
}
export const reducerIngredientDetail = (state = initialState, action) => {
    switch(action.type) {
        case 'OPEN_INGREDIENT_DETAILS':
            {
                return {
                    ...state,
                    modalOpen: true,
                    ingredient: action.ingredient

                }
            }
            case 'OPEN_ORDER_MODAL':
                {
                    return {
                        ...state,
                        modalOpen: true,
                        oreder:action.order
                    }
                }
        case CLOSE_INGREDIENT_DETAILS:
            {
                return {
                    ...state,
                    modalOpen: false,
                    ingredient: null,
                    order:null
                }
            }
        default:
            {
                return state
            }
    }
}