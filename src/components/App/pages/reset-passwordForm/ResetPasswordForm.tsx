import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import autchFormStyle from '../autchFormStyle.module.css';
import { useSelector, useDispatch } from '../../../../services/hooks';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { resetPasswordApi } from '../../../../utils/burgerApi';
import { resetPassword, RESET_fORM_CLEANING } from '../../../../services/action/registerForm';
import { setRegisterFormValue, GLOBAL_CLEANING_FORM} from '../../../../services/action/registerForm';
import { useState, useEffect, ChangeEvent, SyntheticEvent } from 'react';
export const ResetPasswordForm = () => {
    const { password, emailCode, registerReceivedData, resetSuccess} = useSelector((state) => state.registrationForm);
        const [passwordState,
            setPasswordState] = useState < 'password' | 'text' > ('password');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const registerSend = () => {
        if (registerReceivedData || resetSuccess===true ) {
            navigate('/login');
        }
        if(location.state=== null) {
            navigate('/');
        }
    }
    const openPassword = () => {
        setPasswordState(passwordState === 'password'
            ? 'text'
            : 'password')
    }
    const onChangeForm = (e: SyntheticEvent) => {
        e.preventDefault();
        dispatch(resetPassword({
            'password':password, 'token':emailCode
        }, resetPasswordApi));
        if(resetSuccess) {
            dispatch({ type:RESET_fORM_CLEANING})
            navigate('/login');
        }
    }
    useEffect(() => {
        registerSend();
        dispatch({type:GLOBAL_CLEANING_FORM});
    }, [registerReceivedData, resetSuccess])
    const onFormChange = (e:  ChangeEvent<HTMLInputElement>) => {
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