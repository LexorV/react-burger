import { sendOrder } from '../../utils/burgerApi';
import {TorderNumber} from '../types/ingredientsType';
export const GET_ORDER_REQUEST:'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS:'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED:'GET_ORDER_FAILED' = 'GET_ORDER_FAILED';
export const ORDER_CLEANING:'ORDER_CLEANING' = 'ORDER_CLEANING';
export const OPEN_ORDER_MODAL:'OPEN_ORDER_MODAL' = 'OPEN_ORDER_MODAL';
type TgetOrderActionSuccess = {
    readonly type:typeof GET_ORDER_SUCCESS,
    orederNumber:TorderNumber;
}
type TgetOrderFailed = {
    readonly type:typeof GET_ORDER_FAILED,
}
const getOrderSuccess = (orederNumber:TorderNumber):TgetOrderActionSuccess => ({
    type:GET_ORDER_SUCCESS,
    orederNumber
})
const getOrderFailed = ():TgetOrderFailed => ({
    type:GET_ORDER_FAILED
})
export function sendOrderAction(arryId:string[]) {
    return function(dispatch:Function) {
        dispatch({
            type: GET_ORDER_REQUEST
        })
        sendOrder(arryId).then(res => {
                if(res && res.success) {
                    console.log(res.order)
                    dispatch(getOrderSuccess(res.order))
                } else {
                    dispatch(getOrderFailed())
                }
            })

            .catch(err => {
                dispatch(getOrderFailed())
            })
    }
}