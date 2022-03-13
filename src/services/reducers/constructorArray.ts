import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    SORT_INGERDIENTS,
    DELETE_BUN,
    CLEAR_CONSTRUCTOR
}
    from '../action/constructorArray';
    
import {ingredientsType} from '../constants'
import { Tingredient } from '../types/ingredientsType'
type TaddIngredient = {
    readonly type: typeof ADD_INGREDIENT
    ingredient:Tingredient
}
type TdeleteIngredient = {
    readonly type: typeof DELETE_INGREDIENT
    ingredient:Tingredient
}
type TdeleteBun = {
    readonly type: typeof DELETE_BUN
    bunInArray:Tingredient;
}
type TsortIngredients = {
    readonly type: typeof SORT_INGERDIENTS
    dropIndex:number;
    dragIndex:number;
}
type TcleaConstructor = {
    readonly type: typeof CLEAR_CONSTRUCTOR
}
export type TconstructorArrayAction =
    TaddIngredient
    |TdeleteIngredient
    |TdeleteBun
    |TsortIngredients
    |TcleaConstructor;




export type TarrayID = {
    ingredientsInConstructor: Tingredient[]
    arrayID: string[];
}
const initialState: TarrayID = {
    ingredientsInConstructor: [],
    arrayID: []
}
export const constructorArrayReducer = (state = initialState, action: TconstructorArrayAction) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            const uid = () => Date.now().toString(36) + Math.random().toString(36);
            const idConstr = uid()
            return {
                ...state,
                arrayID: [...state.arrayID.concat(action.ingredient._id)],
                ingredientsInConstructor: [...state.ingredientsInConstructor, { ...action.ingredient, idConstr }]
            }
        case DELETE_INGREDIENT:
            const filterId = () => {
                return state.arrayID.findIndex((e) => e === action.ingredient._id)
            }
            const result = state.arrayID.slice()
            result.splice(filterId(), 1)
            return {
                ...state,
                arrayID: result,
                ingredientsInConstructor: [...state.ingredientsInConstructor.filter((item) => item.idConstr !== action.ingredient.idConstr)]
            }
        case DELETE_BUN:
            {
                return {
                    ...state,
                    ingredientsInConstructor: [...state.ingredientsInConstructor.filter((item) => item._id !== action.bunInArray._id)],
                    arrayID: [...state.arrayID.filter((item) => item !== action.bunInArray._id)]
                }
            }
        case SORT_INGERDIENTS:
            {
                const result = state.ingredientsInConstructor.slice().filter((item) =>
                    item.type !== ingredientsType.bun);
                result.splice(action.dropIndex, 0, result.splice(action.dragIndex, 1)[0]);
                const result2 = state.ingredientsInConstructor.filter((item) =>
                    item.type === ingredientsType.bun);
                const result3 = result.concat(result2)
                return {
                    ...state,
                    ingredientsInConstructor: result3
                }
            }
        case CLEAR_CONSTRUCTOR: {
            return {
                ingredientsInConstructor: [],
                arrayID: []
            }
        }

        default:
            {
                return state
            }
    }
}