import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import autchFormStyle from '../autchFormStyle.module.css';
import { forgotPasswordApi } from '../../../../utils/burgerApi';
import {validateField} from '../../../../utils/utils';
import { useSelector, useDispatch } from '../../../../services/hooks';
import { Link, useNavigate} from 'react-router-dom';
import {getCookie} from '../../../../utils/utils'
import { useEffect, useState, ChangeEvent, SyntheticEvent } from 'react';
import { forgotPassword } from '../../../../services/action/registerForm';
import { setRegisterFormValue, fORGOT_FORM_CLEANING } from '../../../../services/action/registerForm';
export const ForgotPasswordForm = () => {
    const { emailForgot, registerReceivedData, forgotSuccess} = useSelector((state) => state.registrationForm);
   const [validErrosText, setValidErrosText] = useState('');
   const [isValid, setIsvalid] = useState(null)
    const registerSend = () => {
        if (registerReceivedData) {
            navigate('/login');
        }
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if(emailForgot) {
            validateField('email', emailForgot, setValidErrosText, isValid, setIsvalid)
        }
    }, [emailForgot])
    useEffect(() => {
        dispatch({type:fORGOT_FORM_CLEANING})
        registerSend();
    }, [forgotSuccess])
    useEffect(()=> {
        let token = getCookie('accessToken');
        if(token) {
            navigate('/')
        }

    }, [])
   
 const onChangeForm = (e: SyntheticEvent) => {
        e.preventDefault();
        if(isValid !== null || forgotSuccess) {
        dispatch(forgotPassword({
            email: emailForgot,
        }, forgotPasswordApi));
            navigate('/reset-password', {replace: true, state:'forgotPage'});
    }
    }
    const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setRegisterFormValue(e.target.name, e.target.value));
    }
    return (
        <div className={autchFormStyle.main}>
            <form onSubmit={onChangeForm} className={autchFormStyle.box_form}>
                <h2 className="text text_type_main-medium pb-6">Востановление пароля</h2>
                <div className="pb-6">
                    <Input type="email"
                        name={'emailForgot'}
                        placeholder="Укажите e-mail"
                        value={emailForgot}
                        onChange={onFormChange}></Input>
                        <p>{validErrosText}</p>
                </div>
                <Button type="primary" size="medium">Востановить</Button>
                <div className={`${autchFormStyle.box_register} mt-20`}>
                    <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                    <Link to='/login' className={`text text_type_main-default ${autchFormStyle.link}`} >Войти</Link>
                </div>
            </form>
        </div>
    )

}
export default ForgotPasswordForm