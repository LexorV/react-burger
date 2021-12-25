import {ADD_INGREDIENT} from '../action/constructorArray'
const initialState = {
    arrayInConstructor: []
}
export const constructorArrayReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            const uid = () => Date.now().toString(36) + Math.random().toString(36);
            const idConstr = uid()
        return {
            ...state, arrayInConstructor: [...state.arrayInConstructor, {...action.ingredient, idConstr}]
        }
        case 'DELETE_INGREDIENT':{
            return {
                ...state, arrayInConstructor:[...state.arrayInConstructor.filter(item => item.idConstr !== action.ingredient.idConstr)]
            }
        }
        case 'DELETE_BUN': {
            console.log(action.bunInArray)
            return {
                ...state, arrayInConstructor:[...state.arrayInConstructor.filter(item => item._id !== action.bunInArray._id)]
            }
        }
        default: {
            return state
        }
    }
}