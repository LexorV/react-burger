const initialState = {
    modalOpen: false,
    ingredient: null,
}
export const reducerIngredientDetail = (state = initialState, action) => {
    switch(action.type) {
        case 'OPEN_INGREDIENT_DETAILS':
            {
                return {
                    ...state,
                    order: null,
                    modalOpen: true,
                    ingredient: action.ingredient

                }
            }
        case 'OPEN_ORDER_MODAL':
            {
                return {
                    ...state,
                    modalOpen: true,
                    order: action.order
                }
            }
        case 'CLOSE_INGREDIENT_DETAILS':
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