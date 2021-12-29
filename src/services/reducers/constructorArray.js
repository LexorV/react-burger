const initialState = {
    arrayInConstructor: [],
    arrayID: []
}
export const constructorArrayReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_INGREDIENT':
            const uid = () => Date.now().toString(36) + Math.random().toString(36);
            const idConstr = uid()
            return {
                ...state,
                arrayID: [...state.arrayID.concat(action.ingredient._id)],
                arrayInConstructor: [...state.arrayInConstructor, {...action.ingredient, idConstr }]
            }
        case 'DELETE_INGREDIENT':
            const filterId = () => {
                return state.arrayID.findIndex(e => e === action.ingredient._id)
            }
            const result = state.arrayID.slice()
            result.splice(filterId(), 1)
            return {
                ...state,
                arrayID: result,
                arrayInConstructor: [...state.arrayInConstructor.filter(item => item.idConstr !== action.ingredient.idConstr)]
            }
        case 'DELETE_BUN':
            {
                return {
                    ...state,
                    arrayInConstructor: [...state.arrayInConstructor.filter(item => item._id !== action.bunInArray._id)],
                    arrayID: [...state.arrayID.filter(item => item !== action.bunInArray._id)]
                }
            }
        case 'SORT_INGERDIENTS':
            {
                const result = state.arrayInConstructor.slice().filter((item) =>
                    item.type !== 'bun');
                result.splice(action.dropIndex, 0, result.splice(action.dragIndex, 1)[0]);
                const result2 = state.arrayInConstructor.filter((item) =>
                    item.type === 'bun');
                const result3 = result.concat(result2)
                return {
                    ...state,
                    arrayInConstructor: result3
                }

            }
        default:
            {
                return state
            }
    }
}