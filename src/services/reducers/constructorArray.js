const initialState = {
    arrayInConstructor: []
}
export const constructorArrayReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_INGREDIENT':
            const uid = () => Date.now().toString(36) + Math.random().toString(36);
            const idConstr = uid()
            return {
                ...state,
                arrayInConstructor: [...state.arrayInConstructor, {...action.ingredient, idConstr }]
            }
        case 'DELETE_INGREDIENT':
            {
                return {
                    ...state,
                    arrayInConstructor: [...state.arrayInConstructor.filter(item => item.idConstr !== action.ingredient.idConstr)]
                }
            }
        case 'DELETE_BUN':
            {
                return {
                    ...state,
                    arrayInConstructor: [...state.arrayInConstructor.filter(item => item._id !== action.bunInArray._id)]
                }
            }
        case 'SORT_INGERDIENTS':
            {
                const result = state.arrayInConstructor.slice()
                result[action.dragIndex] = state.arrayInConstructor[action.dropIndex]
                result[action.dropIndex] = state.arrayInConstructor[action.dragIndex]
                return {
                    ...state,
                    arrayInConstructor: result
                }

            }
        default:
            {
                return state
            }
    }
}