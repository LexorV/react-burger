export const ADD_INGREDIENT = (ingredient) => {
    return {
        type: 'ADD_INGREDIENT',
        ingredient
    }
}
export const DELETE_INGREDIENT = (ingredient) => {
    return {
        type: 'DELETE_INGREDIENT',
        ingredient
    }
}
export const SORT_INGERDIENTS = (dragIndex, dropIndex) => {
    return {
        type: 'SORT_INGERDIENTS',
        dragIndex,
        dropIndex
    }
}
export const DELETE_BUN = (bunInArray) => {
    return {
        type: 'DELETE_BUN',
        bunInArray
    }
}