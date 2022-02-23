import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import autchFormStyle from '../autchFormStyle.module.css';
import { useSelector, useDispatch } from '../../../../services/hooks';
import { useNavigate, Link } from 'react-router-dom';
import { resetPasswordApi } from '../../../../utils/burgerApi';
import { register } from '../../../../services/action/registerForm';
import { setRegisterFormValue } from '../../../../services/action/registerForm';
import { useState, useEffect } from 'react';
import { getCookie } from '../../../../utils/utils'
export const ResetPasswordForm = () => {
    const { password, emailCode, registerReceivedData} = useSelector((state) => state.registrationForm);
        const [passwordState,
            setPasswordState] = useState < 'password' | 'text' > ('password');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const registerSend = () => {
        if (registerReceivedData) {
            navigate('/');
            console.log(registerReceivedData);
        }
    }
    const openPassword = () => {
        setPasswordState(passwordState === 'password'
            ? 'text'
            : 'password')
    }
    const onChangeForm = (e: any) => {
        console.log(getCookie('token'));
        const token = getCookie('token')
        e.preventDefault();
        dispatch(register({
            password, token
        }, resetPasswordApi));
    }
    useEffect(() => {
        registerSend();
    }, [registerReceivedData])
    const onFormChange = (e: any) => {
        dispatch(setRegisterFormValue(e.target.name, e.target.value));
    }
    return (
        <div className={autchFormStyle.main}>
            <form className={autchFormStyle.box_form}>
                <h2 className="text text_type_main-medium pb-6">Востановление пароля</h2>
                <div className="pb-6">
                    <Input
                        name={'password'}
                        icon="ShowIcon"
                        placeholder="Введите новый пароль"
                        onIconClick={openPassword}
                        value={password}
                        type={passwordState}
                        onChange={onFormChange}></Input>
                </div>
                <div className="pb-6">
                    <Input
                        type="text"
                        name="emailCode"
                        placeholder="Введите код из письма"
                        value={emailCode}
                        onChange={onFormChange}></Input>
                </div>
                <Button onClick={onChangeForm} type="primary" size="medium">Сохранить</Button>
                <div className={`${autchFormStyle.box_register} mt-20`}>
                    <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                    <Link
                        to='/login'
                        className={`text text_type_main-default ${autchFormStyle.link}`}>Войти</Link>
                </div>
            </form>
        </div>
    )

}
export default ResetPasswordForm