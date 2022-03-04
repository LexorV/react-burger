import {
    TforgotPasswordApi,
    TresetPasswordApi,
} from '../types/autchType';
export const CHANGE_REGISTER_FORM_VALUE = 'CHANGE_REGISTER_FORM_VALUE';
export const REGISTER_FORM_SUBMIT = 'REGISTER_FORM_SUBMIT';
export const REGISTER_FORM_SUBMIT_SUCCESS = 'REGISTER_FORM_SUBMIT_SUCCESS';
export const REGISTER_FORM_SUBMIT_FAILED = 'REGISTER_FORM_SUBMIT_FAILED';
export const LOGOUT_USER = 'LOGOUT_USER';
export const fORGOT_FORM_SUBMIT = 'fORGOT_FORM_SUBMIT';
export const  fORGOT_FORM_SUCCESS ="fORGOT_FORM_SUCCESS";
export const fORGOT_FORM_FAILED = 'fORGOT_FORM_FAILED';
export const fORGOT_FORM_CLEANING = 'fORGOT_FORM_CLEANING';
export const RESET_FORM_SUBMIT = 'RESET_FORM_SUBMIT';
export const RESET_fORM_SUCCESS = "RESET_fORM_SUCCESS";
export const RESET_fORM_FAILED = "RESET_fORM_SUCCESS";
export const RESET_fORM_CLEANING = 'RESET_fORM_FAILED';
export const GLOBAL_CLEANING_FORM = 'GLOBAL_CLEANING_FORM'


export const setRegisterFormValue = (field:string, value:string) => ({
    type:CHANGE_REGISTER_FORM_VALUE,
    field,
    value
})
export const register =  (userDataRegister:any, sendApi:Function) => {
    return function(dispatch:Function) {
        dispatch({
            type: REGISTER_FORM_SUBMIT
        })
        sendApi(userDataRegister).then((res:any) => {
                if(res && res.success) {
                    dispatch({
                        type: REGISTER_FORM_SUBMIT_SUCCESS,
                        tokenData: res
                    })
                } else {
                    dispatch({
                        type: REGISTER_FORM_SUBMIT_FAILED
                    })
                }
            })
            .catch((err:any) => {
                dispatch({
                    type: REGISTER_FORM_SUBMIT_FAILED
                })
            })
    }
}
export const forgotPassword = (data:TforgotPasswordApi, sendApi:Function) => {
    return function(dispatch:Function) {
        dispatch({
            type: fORGOT_FORM_SUBMIT
        })
    sendApi(data).then((res:any) => {
        if(res && res.success) {
            dispatch({
                type: fORGOT_FORM_SUCCESS,
                tokenData: res
            })
        } else {
            dispatch({
                type: fORGOT_FORM_FAILED
            })
        }
    })
    .catch((err:any) => {
        dispatch({
            type: fORGOT_FORM_FAILED
        })
    })
}
}
export const resetPassword = (data:TresetPasswordApi, sendApi:Function) => {
    console.log(data)
    return function(dispatch:Function) {
        dispatch({
            type:RESET_FORM_SUBMIT
        })
        sendApi(data).then((res:any) => {
            if(res && res.success) {
                dispatch({
                    type: RESET_fORM_SUCCESS,
                    tokenData: res
                })
            } else {
                dispatch({
                    type: RESET_fORM_FAILED
                })
            }
        })
        .catch((err:any) => {
            dispatch({
                type: RESET_fORM_FAILED
            })
        })

    }
}