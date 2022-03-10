import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED,
    ORDER_CLEANING,
    TorderAction
}
    from '../action/order';

type TorderState = {
    orederNumberRequest: boolean;
    orderNumberFailed: boolean;
    orederNumber: null | number;
}
const initialState: TorderState = {
    orederNumberRequest: false,
    orderNumberFailed: false,
    orederNumber: null
}
export const orderReducer = (state = initialState, action:TorderAction) => {
    switch (action.type) {
        case GET_ORDER_REQUEST:
            {
                return {
                    ...state,
                    orederNumberRequest: true,
                    orderNumberFailed: false,
                    orederNumber: null
                }
            }
        case GET_ORDER_SUCCESS:
            {
                return {
                    ...state,
                    orederNumberRequest: false,
                    orederNumber: action.orederNumber
                }
            }
        case GET_ORDER_FAILED:
            {
                return {
                    ...state,
                    orderNumberFailed: true,
                    orederNumberRequest: false,
                }
            }
        case ORDER_CLEANING:
            {
                return {
                    ...state,
                    orederNumber: null,
                    orederNumberRequest: false,
                    orderNumberFailed: false,
                }
            }
        default:
            { return state }
    }

}