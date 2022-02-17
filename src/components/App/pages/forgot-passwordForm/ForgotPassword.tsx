import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import autchFormStyle from '../autchFormStyle.module.css';
import { forgotPasswordApi } from '../../../../utils/burgerApi'
import { useSelector, useDispatch } from '../../../../services/hooks';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { forgotPassword } from '../../../../services/action/registerForm';
import { setRegisterFormValue } from '../../../../services/action/registerForm';
export const ForgotPasswordForm = () => {
    const { emailForgot, resetSuccess } = useSelector((state) => state.registrationForm);
    const registerSend = () => {
        if (resetSuccess) {
            history.replace({ pathname: '/reset-password' });
        }
    }
    const history = useHistory();
    const dispatch = useDispatch();
    
    useEffect(() => {
        registerSend();
    }, [resetSuccess])
    const onChangeForm = (e: any) => {
        e.preventDefault();
        dispatch(forgotPassword({
            emailForgot,
        }, forgotPasswordApi));
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