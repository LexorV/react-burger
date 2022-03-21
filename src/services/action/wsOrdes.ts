export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const  WS_GET_MESSAGE = 'WS_GET_MESSAGE';
export const  WS_SEND_MESSAGE = ' WS_SEND_MESSAGE'
export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const ORDES_FILTER_GENERAL = 'ORDES_FILTER_GENERAL';
export const TOTAL_PRICE_CARDS = 'TOTAL_PRICE_CARDS';

export const wsConnectionStart = () => {
    return {
        type: WS_CONNECTION_START
    };
};

export const wsConnectionSuccess = () => {
    return {
        type: WS_CONNECTION_SUCCESS
    };
};

export const wsConnectionError = () => {
    return {
        type: WS_CONNECTION_ERROR
    };
};

export const wsConnectionClosed = () => {
    return {
        type: WS_CONNECTION_CLOSED
    };
};

export const wsGetMessage = (orders:any) => {
    return {
        type: WS_GET_MESSAGE,
        payload: orders
    };
};

export const wsSendMessage = (orders:any) => {
    return {
        type: WS_SEND_MESSAGE,
        payload: orders
    };
};
export const ordesFilterArray = (orders:any) => {
    return {
        type:ORDES_FILTER_GENERAL,
        orders: orders
    }
}
export const totalPriceCard = (price:any) => {
    return {
        type:TOTAL_PRICE_CARDS,
        price: price
    }
}
