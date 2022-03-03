import {
    CHANGE_REGISTER_FORM_VALUE,
    REGISTER_FORM_SUBMIT,
    REGISTER_FORM_SUBMIT_SUCCESS,
    REGISTER_FORM_SUBMIT_FAILED,
    LOGOUT_USER,
    fORGOT_FORM_SUBMIT,
    fORGOT_FORM_SUCCESS,
    fORGOT_FORM_FAILED,
    fORGOT_FORM_CLEANING,
    RESET_FORM_SUBMIT,
    RESET_fORM_SUCCESS,
    RESET_fORM_FAILED,
    RESET_fORM_CLEANING
} from '../action/registerForm'
const initialState = {
    email: '',
    password: '',
    name: '',
    emailForgot: '',
    emailCode: '',
    registrationRequest: false,
    registrationFailed: false,
    registrationSuccess: false,
    registerReceivedData: null,
    resetSuccess: false,
    resetFailed: false,
    forgotSuccess: false,
    forgotFailed: false,

}
export const RegistrationReduser = (state = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_REGISTER_FORM_VALUE: {
            return {
                ...state,
                [action.field]: action.value
            }
        }
        case REGISTER_FORM_SUBMIT: {
            return {
                ...state,
                registrationRequest: true,
                registrationFailed: false,
                registrationSuccess: false,
            }
        }
        case REGISTER_FORM_SUBMIT_SUCCESS: {
            return {
                ...state,
                email: '',
                password: '',
                name: '',
                emailCode: '',
                registrationRequest: false,
                registerReceivedData: action.tokenData,
                registrationSuccess: true,
            }
        }
        case REGISTER_FORM_SUBMIT_FAILED: {
            return {
                ...state,
                registrationRequest: false,
                registrationFailed: true,
                registrationSuccess: false,
            }
        }

        case LOGOUT_USER: {
            return {
                ...state,
                registrationRequest: false,
                registrationFailed: false,
                registerReceivedData: null,
                registrationSuccess: false
            }
        }
        case fORGOT_FORM_SUBMIT: {
            return {
                ...state,
                registrationRequest: true,
                forgotSuccess: false,
                forgotFailed: false
            }
        }
        case fORGOT_FORM_SUCCESS: {
            return {
                ...state,
                registrationRequest: false,
                forgotSuccess: true,
                forgotFailed: false
            }
        }
        case fORGOT_FORM_FAILED: {
            return {
                ...state,
                registrationRequest: false,
                forgotSuccess: false,
                forgotFailed: true
            }
        }
        case fORGOT_FORM_CLEANING: {
            return {
                ...state,
                emailForgot: '',
                emailCode: '',
            }
        }
        case RESET_FORM_SUBMIT:{
            return {
                ...state,
                registrationRequest: true,
                resetSuccess: false,
                resetFailed: false
            }
        }
            case RESET_fORM_SUCCESS: {
                return {
                    ...state,
                    registrationRequest: false,
                    resetSuccess: true,
                    resetFailed: false
                }
            }
            case RESET_fORM_FAILED: {
                return {
                    ...state,
                    registrationRequest: false,
                    resetSuccess: false,
                    resetFailed: true
                }
            }
            case RESET_fORM_CLEANING: {
                return {
                    ...state,
                    registrationRequest: false,
                    resetSuccess: false,
                    resetFailed: false,
                    password: '',
                    emailCode:''
                }
            }
        default: {
            return state;
        }

    }
}