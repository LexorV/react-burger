import {useSelector} from '../hooks'
import {sendRegisterUser} from '../../utils/burgerApi'
export const CHANGE_REGISTER_FORM_VALUE = 'CHANGE_REGISTER_FORM_VALUE';
export const REGISTER_FORM_SUBMIT = 'REGISTER_FORM_SUBMIT';
export const REGISTER_FORM_SUBMIT_SUCCESS = 'REGISTER_FORM_SUBMIT_SUCCESS';
export const REGISTER_FORM_SUBMIT_FAILED = 'REGISTER_FORM_SUBMIT_FAILED';
export const setRegisterFormValue = (field:any, value:string) => ({
    type:CHANGE_REGISTER_FORM_VALUE,
    field,
    value
})
export const register = (userDataRegister:any) => {
    return function(dispatch:Function) {
        dispatch({
            type: REGISTER_FORM_SUBMIT
        })
        sendRegisterUser(userDataRegister).then(res => {
                if(res && res.success) {
                    dispatch({
                        type: REGISTER_FORM_SUBMIT_SUCCESS,
                        test: res
                    })
                } else {
                    dispatch({
                        type: REGISTER_FORM_SUBMIT_FAILED
                    })
                }
            })
            .catch(err => {
                dispatch({
                    type: REGISTER_FORM_SUBMIT_FAILED
                })
            })
    }

}