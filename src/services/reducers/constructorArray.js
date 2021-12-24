import {ADD_INGREDIENT} from '../action/constructorArray'
const initialState = {
    arrayInConstructor: []
}
export const constructorArrayReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            const uid = () => Date.now().toString(36) + Math.random().toString(36);
            const randomId = {idConstr: uid()}
        return {
            ...state, arrayInConstructor: [...state.arrayInConstructor, {...action.ingredient, ...randomId}]
        }
        case 'DELETE_INGREDIENT':{
            console.log(action.ingredient.idConstr)
            return {
                
                ...state, arrayInConstructor:[...state.arrayInConstructor.filter(item => item.idConstr !== action.ingredient.idConstr)]
            }
        }
        default: {
            return state
        }
    }
}