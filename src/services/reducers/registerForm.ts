import {CHANGE_REGISTER_FORM_VALUE, 
    REGISTER_FORM_SUBMIT,
    REGISTER_FORM_SUBMIT_SUCCESS,
     REGISTER_FORM_SUBMIT_FAILED} from '../action/registerForm'
const initialState = {
    form: {
        email:'',
        password: '',
        name:'',
    },
    registrationRequest: false,
    registrationFailed: false,
    testData: null
}
export const RegistrationReduser = (state = initialState, action:any) => {
switch (action.type) {
    case CHANGE_REGISTER_FORM_VALUE: {
        return {
            form: {
            ...state.form,
            [action.field]:action.value
            }
        }
    }
    case REGISTER_FORM_SUBMIT: {
        return { ...state,
            registrationRequest: true,
            registrationFailed:false
        }
    }
    case REGISTER_FORM_SUBMIT_SUCCESS: {
        return {
            ...state,
            form:{
                ...initialState.form
            },
            registrationRequest:false,
            testData:action.test
        }
    }
    case  REGISTER_FORM_SUBMIT_FAILED: {
        return {
            ...state,
            registrationRequest:false,
            registrationFailed:true
        }
    }
    default: {
        return state;
    }
}
}