export const socketMiddleware = (wsActions: any) => (store: any) => {
    let socket: any = null;
    return (next: any) => (action: any) => {
        const { dispatch, getState } = store;
        const { type, payload } = action;
        const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;
        if (type === wsInit) {
            socket = new WebSocket(payload);
        }
        if (socket) {
            socket.onopen = (event: any) => {
                dispatch({ type: onOpen, payload: event });
            };

            socket.onerror = (event: any) => {
                dispatch({ type: onError, payload: event });
            };

            socket.onmessage = (event: any) => {
                const { data } = event;
                const parsedData = JSON.parse(data);
                const { success, ...restParsedData } = parsedData;

                dispatch({ type: onMessage, payload: restParsedData });
            };

            socket.onclose = (event: any) => {
                dispatch({ type: onClose, payload: event });
            };

            if (type === wsSendMessage) {
            }
        }

        next(action);
    };
};