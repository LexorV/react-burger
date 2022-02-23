import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import autchFormStyle from '../autchFormStyle.module.css';
import { forgotPasswordApi } from '../../../../utils/burgerApi';
import {validateField} from '../../../../utils/utils';
import { useSelector, useDispatch } from '../../../../services/hooks';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { forgotPassword } from '../../../../services/action/registerForm';
import { setRegisterFormValue } from '../../../../services/action/registerForm';
export const ForgotPasswordForm = () => {
    const { emailForgot, resetSuccess } = useSelector((state) => state.registrationForm);
   const [validErrosText, setValidErrosText] = useState('');
   const [isValid, setIsvalid] = useState(null)
    const registerSend = () => {
        if (resetSuccess) {
            navigate('/reset-password');
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
        registerSend();
    }, [resetSuccess])
    const onChangeForm = (e: any) => {
        e.preventDefault();
        if(isValid !== null) {
        dispatch(forgotPassword({
            emailForgot,
        }, forgotPasswordApi));
    }
    }
    const onFormChange = (e: any) => {
        dispatch(setRegisterFormValue(e.target.name, e.target.value));
    }
    return (
        <div className={autchFormStyle.main}>
            <form className={autchFormStyle.box_form}>
                <h2 className="text text_type_main-medium pb-6">Востановление пароля</h2>
                <div className="pb-6">
                    <Input type="email"
                        name={'emailForgot'}
                        placeholder="Укажите e-mail"
                        value={emailForgot}
                        onChange={onFormChange}></Input>
                        <p>{validErrosText}</p>
                </div>
                <Button onClick={onChangeForm} type="primary" size="medium">Востановить</Button>
                <div className={`${autchFormStyle.box_register} mt-20`}>
                    <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                    <Link to='/login' className={`text text_type_main-default ${autchFormStyle.link}`} >Войти</Link>
                </div>
            </form>
        </div>
    )

}
export default ForgotPasswordForm