import { sendOrder } from '../../utils/burgerApi'
export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const ORDER_CLEANING = 'ORDER_CLEANING';
export const OPEN_ORDER_MODAL = 'OPEN_ORDER_MODAL';
export function sendOrderAction(arryId:string[]) {
    return function(dispatch:Function) {
        dispatch({
            type: GET_ORDER_REQUEST
        })
        sendOrder(arryId).then(res => {
                if(res && res.success) {
                    dispatch({
                        type: GET_ORDER_SUCCESS,
                        orederNumber: res
                    })
                } else {
                    dispatch({
                        type: GET_ORDER_FAILED
                    })
                }
            })
            .catch(err => {
                dispatch({
                    type: GET_ORDER_FAILED
                })
            })
    }
}