import { type } from 'os';
import {
    TforgotPasswordApi,
    TresetPasswordApi,
} from '../types/autchType';
export const CHANGE_REGISTER_FORM_VALUE: 'CHANGE_REGISTER_FORM_VALUE' = 'CHANGE_REGISTER_FORM_VALUE';
export const REGISTER_FORM_SUBMIT: 'REGISTER_FORM_SUBMIT' = 'REGISTER_FORM_SUBMIT';
export const REGISTER_FORM_SUBMIT_SUCCESS: 'REGISTER_FORM_SUBMIT_SUCCESS' = 'REGISTER_FORM_SUBMIT_SUCCESS';
export const REGISTER_FORM_SUBMIT_FAILED: 'REGISTER_FORM_SUBMIT_FAILED' = 'REGISTER_FORM_SUBMIT_FAILED';
export const LOGOUT_USER: 'LOGOUT_USER' = 'LOGOUT_USER';
export const fORGOT_FORM_SUBMIT: 'fORGOT_FORM_SUBMIT' = 'fORGOT_FORM_SUBMIT';
export const fORGOT_FORM_SUCCESS: "fORGOT_FORM_SUCCESS" = "fORGOT_FORM_SUCCESS";
export const fORGOT_FORM_FAILED: 'fORGOT_FORM_FAILED' = 'fORGOT_FORM_FAILED';
export const fORGOT_FORM_CLEANING: 'fORGOT_FORM_CLEANING' = 'fORGOT_FORM_CLEANING';
export const RESET_FORM_SUBMIT: 'RESET_FORM_SUBMIT' = 'RESET_FORM_SUBMIT';
export const RESET_fORM_SUCCESS: "RESET_fORM_SUCCESS" = "RESET_fORM_SUCCESS";
export const RESET_fORM_FAILED: "RESET_fORM_FAILED" = "RESET_fORM_FAILED";
export const RESET_fORM_CLEANING: 'RESET_fORM_FAILED' = 'RESET_fORM_FAILED';
export const GLOBAL_CLEANING_FORM: 'GLOBAL_CLEANING_FORM' = 'GLOBAL_CLEANING_FORM'


export const setRegisterFormValue = (field: string, value: string) => ({
    type: CHANGE_REGISTER_FORM_VALUE,
    field,
    value
})
type TreplyAutchData = {
    success?: boolean;
    accessToken?: string;
    refreshToken?: string;
    user?: {
        email: string;
        name: string
    }
}
type TloginFormSuccess = {
    readonly type: typeof REGISTER_FORM_SUBMIT_SUCCESS,
    tokenData: Response
}
type TloginFormFailed = {
    readonly type: typeof REGISTER_FORM_SUBMIT_FAILED
}
type TloginFormRequest = {
    readonly type: typeof REGISTER_FORM_SUBMIT
}


const loginFormSuccess = (tokenData: Response): TloginFormSuccess => ({
    type: REGISTER_FORM_SUBMIT_SUCCESS,
    tokenData
})


const loginFormFailed = (): TloginFormFailed => ({
    type: REGISTER_FORM_SUBMIT_FAILED
})
const loginFormRequest = (): TloginFormRequest => ({
    type: REGISTER_FORM_SUBMIT
})

export const register = (userDataRegister: any, sendApi: Function) => {
    return function (dispatch: Function) {
        dispatch(loginFormRequest)
        sendApi(userDataRegister).then((res: Response) => {
            dispatch(loginFormSuccess(res))
        })
            .catch((err: any) => {
                dispatch(loginFormFailed())
            })
    }
}
type TforgotFormSuccess = {
    readonly type: typeof fORGOT_FORM_SUCCESS,
    data: Response
}
type TforgotFormFailed = {
    readonly type: typeof fORGOT_FORM_FAILED
}
type TforgotFormRequest = {
    readonly type: typeof fORGOT_FORM_SUBMIT
}


const forgotFormSuccess = (data: Response): TforgotFormSuccess => ({
    type: fORGOT_FORM_SUCCESS,
    data
})


const forgotFormFailed = (): TforgotFormFailed => ({
    type: fORGOT_FORM_FAILED
})
const forgotFormRequest = (): TforgotFormRequest => ({
    type: fORGOT_FORM_SUBMIT
})

export const forgotPassword = (data: TforgotPasswordApi, sendApi: Function) => {
    return function (dispatch: Function) {
        dispatch(forgotFormRequest())
        sendApi(data).then((res: Response) => {
            dispatch(forgotFormSuccess(res))
        })
            .catch((err: any) => {
                dispatch(forgotFormFailed())
            })
    }
}
type TresetFormSuccess = {
    readonly type: typeof RESET_fORM_SUCCESS,
    tokenData: Response
}
type TresetFormFailed = {
    readonly type: typeof RESET_fORM_FAILED
}
type TresetFormRequest = {
    readonly type: typeof RESET_FORM_SUBMIT
}


const resetFormSuccess = (tokenData: Response): TresetFormSuccess => ({
    type: RESET_fORM_SUCCESS,
    tokenData
})


const resetFormFailed = (): TresetFormFailed => ({
    type: RESET_fORM_FAILED
})
const resetFormRequest = (): TresetFormRequest => ({
    type: RESET_FORM_SUBMIT
})



export const resetPassword = (data: TresetPasswordApi, sendApi: Function) => {
    return function (dispatch: Function) {
        dispatch(resetFormRequest())
        sendApi(data).then((res: Response) => {
            dispatch(resetFormSuccess(res))
        })
            .catch((err: any) => {
                dispatch(resetFormFailed())
            })

    }
}