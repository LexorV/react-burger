import {TordersList} from '../../services/types/ordersType'
export const WS_CONNECTION_SUCCESS:'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR:'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED:'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const  WS_GET_MESSAGE:'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';
export const  WS_SEND_MESSAGE:'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE'
export const WS_CONNECTION_START:'WS_CONNECTION_START' = 'WS_CONNECTION_START';

type TwsConnectionStart = {
    readonly type: typeof WS_CONNECTION_START
    payload:string
}
type TwsConnectionSuccess = {
    readonly type: typeof WS_CONNECTION_SUCCESS
}
type TwsConnectionError = {
    readonly type: typeof WS_CONNECTION_ERROR
}
type TwsConnectionClosed = {
    readonly type: typeof WS_CONNECTION_CLOSED
}
type TwsGetMessage = {
    readonly type: typeof WS_GET_MESSAGE
    payload: TordersList
}
type TwsSendMessage = {
    readonly type: typeof WS_SEND_MESSAGE,
    payload:any
}


export const wsConnectionStart = (urlServ:string):TwsConnectionStart => {
    return {
        type: WS_CONNECTION_START,
        payload:urlServ
    };
};

export const wsConnectionSuccess = ():TwsConnectionSuccess => {
    return {
        type: WS_CONNECTION_SUCCESS
    };
};

export const wsConnectionError = ():TwsConnectionError => {
    return {
        type: WS_CONNECTION_ERROR
    };
};

export const wsConnectionClosed = ():TwsConnectionClosed => {
    return {
        type: WS_CONNECTION_CLOSED
    };
};

export const wsGetMessage = (orders:TordersList):TwsGetMessage => {
    return {
        type: WS_GET_MESSAGE,
        payload: orders
    };
};

export const wsSendMessage = (orders:any):TwsSendMessage => {
    return {
        type: WS_SEND_MESSAGE,
        payload: orders
    };
};