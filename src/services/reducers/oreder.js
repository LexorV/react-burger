const initialState = {
    orederNumberRequest: false,
    orderNumberFailed: false,
    orederNumber: null
}
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ORDER_REQUEST': {
            return {
                ...state,
                orederNumberRequest: true,
                orderNumberFailed: false,
                orederNumber: null
            }
        }
        case 'GET_ORDER_SUCCESS': {
            return {
                ...state,
                orederNumberRequest: false,
                orederNumber:action.orederNumber
            }
        }
        case 'GET_ORDER_FAILED': {
            return {
                ...state,
                orderNumberFailed: true,
                orederNumberRequest: false,
            }
        }
        case 'ORDER_CLEANING': {
            return {
                ...state,
                orederNumber: null
            }
        }
        default: {return state}
    }

}