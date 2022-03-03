import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import autchFormStyle from '../autchFormStyle.module.css';
import { register } from '../../../../services/action/registerForm'
import { useNavigate , Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { autchUser } from '../../../../utils/burgerApi';
import { setCookie, } from '../../../../utils/utils'
import { useSelector, useDispatch } from '../../../../services/hooks';
import { setRegisterFormValue, GLOBAL_CLEANING_FORM } from '../../../../services/action/registerForm';
export const LoginForm = ({setIsLogin}:any) => {
    const [passwordState,
        setPasswordState] = useState<'password' | 'text'>('password');
        const [errorValid, setErrorValid] = useState(null)
    const { email, password, registerReceivedData,
        registrationFailed, registrationSuccess } =
        useSelector((state) => state.registrationForm);
    const navigate  = useNavigate();
    const dispatch = useDispatch();
    const registerSend = () => {
        if (registerReceivedData) {
            setIsLogin(true)
            navigate('/');
            setCookie('accessToken', registerReceivedData.accessToken, {});
            localStorage.setItem('refreshToken', registerReceivedData.refreshToken);
            console.log(registerReceivedData.accessToken);
          //  dispatch({type:GLOBAL_CLEANING_FORM});

        }
    }
    const openPassword = () => {
        setPasswordState(passwordState === 'password'
            ? 'text'
            : 'password')
    }
    useEffect(() => {
        registerSend();
        dispatch({type:GLOBAL_CLEANING_FORM});
    }, [registerReceivedData])
    const onChangeForm = (e: any) => {
        e.preventDefault();
        dispatch(register({
            email,
            password
        }, autchUser));
    }
    const onFormChange = (e: any) => {
        dispatch(setRegisterFormValue(e.target.name, e.target.value));
    }
    return (
        <div className={autchFormStyle.main}>
            <form className={autchFormStyle.box_form}>
                <h2 className="text text_type_main-medium pb-6">Вход</h2>
                <div className="pb-6">
                    <Input name={'email'}
                        size={'default'}
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        errorText={'test'}
                        onChange={onFormChange}></Input>
                </div>
                <div className="pb-6">
                    <Input name={'password'}
                        icon="ShowIcon"
                        onIconClick={openPassword}
                        type={passwordState}
                        placeholder="Пароль"
                        value={password}
                        onChange={onFormChange}></Input>
                </div>
                <Button onClick={onChangeForm}
                    type="primary"
                    size="medium" >
                    Войти</Button>
                    {registrationFailed === true && <p>Проверьте правильность заполнения формы</p>}
                <div className={`${autchFormStyle.box_register} mt-20`}>
                    <p className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</p>
                    <Link to='/register' className={`text text_type_main-default ${autchFormStyle.link}`} > Зарегистрироваться</Link>
                </div>
                <div className={autchFormStyle.box_register}>
                    <p className="text text_type_main-default text_color_inactive">Забыли пароль?</p>
                    <Link to='/forgot-password' className={`text text_type_main-default ${autchFormStyle.link}`}> Восстановить пароль</Link>
                </div>
            </form>

        </div>
    )
}
export default LoginForm