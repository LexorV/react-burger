import {
    CHANGE_REGISTER_FORM_VALUE,
    REGISTER_FORM_SUBMIT,
    REGISTER_FORM_SUBMIT_SUCCESS,
    REGISTER_FORM_SUBMIT_FAILED
} from '../action/registerForm'
const initialState = {
        email: '',
        password: '',
        name: '',
    registrationRequest: false,
    registrationFailed: false,
    registrationSuccess: false,
    registerReceivedData: null,
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
        default: {
            return state;
        }
        
    }
}