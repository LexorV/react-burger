import { sendOrder } from '../../utils/burgerApi';
import { TorderNumber } from '../types/ingredientsType';
import {AppDispatch, AppThunk} from '../types/index';
export const GET_ORDER_REQUEST: 'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED: 'GET_ORDER_FAILED' = 'GET_ORDER_FAILED';
export const ORDER_CLEANING: 'ORDER_CLEANING' = 'ORDER_CLEANING';
export const OPEN_ORDER_MODAL: 'OPEN_ORDER_MODAL' = 'OPEN_ORDER_MODAL';

type TgetOrderActionSuccess = {
    readonly type: typeof GET_ORDER_SUCCESS,
    orederNumber: TorderNumber;
}
type TgetOrderFailed = {
    readonly type: typeof GET_ORDER_FAILED,
}
const getOrderSuccess = (orederNumber: TorderNumber): TgetOrderActionSuccess => ({
    type: GET_ORDER_SUCCESS,
    orederNumber
})
type TgetOrderRequest = {
    readonly type: typeof GET_ORDER_REQUEST
}
const getOrderRequest = (): TgetOrderRequest => ({
    type: GET_ORDER_REQUEST,
})
const getOrderFailed = (): TgetOrderFailed => ({
    type: GET_ORDER_FAILED
})
type TorderCleaning = {
    readonly type: typeof ORDER_CLEANING
}
export const orderCleaning = (): TorderCleaning => ({
    type: ORDER_CLEANING
})
export type TorderAction = TgetOrderActionSuccess
    | TgetOrderFailed
    | TgetOrderRequest
    | TorderCleaning;

export const sendOrderAction:AppThunk = (arryId: string[]) => {
    return function (dispatch:AppDispatch) {
        dispatch(getOrderRequest())
        sendOrder(arryId).then(res => {
            if (res && res.success) {
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