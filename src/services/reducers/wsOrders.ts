import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE
}
    from '../action/wsOrdes';
    type ordersData = {
        createdAt:string,
        ingredients:any,
        name:string,
        number:number,
        status:string,
        updateAt:string,
        _id:string,
    }

type WSorders = {
    wsConnected:boolean,
    orders:ordersData[] | null,
    error:any
}

const initialState:WSorders = {
    wsConnected: false,
    orders: null,
    error: undefined
};

export const wsOrdesReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                error: undefined,
                wsConnected: true
            };

        case WS_CONNECTION_ERROR:
            return {
                ...state,
                error:action.payload,
                wsConnected: false
            };

        case WS_CONNECTION_CLOSED:
            return {
                ...state,
                error: undefined,
                wsConnected: false
            };

        case WS_GET_MESSAGE:
            return {
                ...state,
                error: undefined,
                orders: action.payload
            }

        default:
            return state;
    }
};