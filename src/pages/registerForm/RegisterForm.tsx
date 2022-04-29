import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import autchFormStyle from '../autchFormStyle.module.css';
import { sendRegisterUser } from '../../utils/burgerApi';
import { getCookie, validateField } from '../../utils/utils'
import { useSelector, useDispatch } from '../../services/hooks';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect, ChangeEvent, SyntheticEvent } from 'react';
import { register } from '../../services/action/registerForm'
import { setRegisterFormValue, GLOBAL_CLEANING_FORM } from '../../services/action/registerForm';

export const RegisterForm = () => {
    const { name, email, password, registerReceivedData, registrationFailed } = useSelector((state) => state.registrationForm);
    const [passwordState,
        setPasswordState] = useState<'password' | 'text'>('password');
    const [nameErrorText, setNameErrorText] = useState('');
    const [nameIsValid, setNameIsValid] = useState(false);
    const [nameValidErr, setNameValidErr] = useState(false);
    const [emailErrorText, setEmailErrorText] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [emailValidErr, setEmailValidErr] = useState(false);
    const [passwordErrorText, setPasswordErrorText] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [passwordValidErr, setPasswordValidErr] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const checkValid = (valid:boolean, changerErrValid:Function) => {
       return changerErrValid(!valid)
    }
    const validationForm =  () => {
            validateField('name', name, setNameErrorText, nameIsValid, setNameIsValid)
            validateField('email', email, setEmailErrorText, emailIsValid, setEmailIsValid)
            validateField('password', password, setPasswordErrorText, passwordIsValid, setPasswordIsValid)
            checkValid(nameIsValid, setNameValidErr)
            checkValid(emailIsValid, setEmailValidErr)
            checkValid(passwordIsValid, setPasswordValidErr)
    }
    const validNameFocus = (e:any) => {
        setNameValidErr(false)
    }
    const validEmailFocus = () => {
        setEmailValidErr(false)
    }
    const validPasswordFocus = () => {
        setPasswordValidErr(false)
    }
    useEffect(() => {
        if(emailIsValid === true && nameIsValid === true && nameIsValid=== true ) {
            setFormValid(true)
        }
        else { setFormValid(false)}

    }, [emailIsValid, nameIsValid, passwordIsValid ])

    const registerSend = () => {
        const token = getCookie('accessToken')
        if (registerReceivedData) {
            navigate('/');
        }
        else if (token) {
            navigate('/')
        }
    }
useEffect(() => {
    if(formValid === true) {
        dispatch(register({
            name,
            email,
            password
        }, sendRegisterUser));
    }
},[formValid])


    const onChangeForm = (e: SyntheticEvent) => {
        e.preventDefault();
        validationForm();
    }
    const openPassword = () => {
        setPasswordState(passwordState === 'password'
            ? 'text'
            : 'password')
    }
    useEffect(() => {
        registerSend();
        dispatch({ type: GLOBAL_CLEANING_FORM });
    }, [registerReceivedData])

    const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setRegisterFormValue(e.target.name, e.target.value));
    }
    return (
        <div className={autchFormStyle.main}>
            <form onSubmit={onChangeForm} className={autchFormStyle.box_form} noValidate>
                <h2 className="text text_type_main-medium pb-6">Регистрация</h2>
                <div className="pb-6">
                    <Input
                        type="text"
                        placeholder="имя"
                        name={'name'}
                        value={name}
                        onChange={onFormChange}
                        error={nameValidErr}
                        errorText={nameErrorText}
                        onFocus={validNameFocus}
                        ></Input>
                </div>
                <div className="pb-6">
                    <Input
                        type="email"
                        name={'email'}
                        placeholder="E-mail"
                        value={email}
                        onChange={onFormChange}
                        error={emailValidErr}
                        errorText={emailErrorText}
                        onFocus={validEmailFocus}
                        ></Input>
                </div>
                <div className="pb-6">
                    <Input
                        icon="ShowIcon"
                        name={'password'}
                        onIconClick={openPassword}
                        type={passwordState}
                        placeholder="Пароль"
                        value={password}
                        onChange={onFormChange}
                        error={passwordValidErr}
                        errorText={passwordErrorText}
                        onFocus={validPasswordFocus}
                        ></Input>
                </div>
                {registrationFailed === true && <p>Проверьте правильность заполнения формы</p>}
                <Button type="primary" size="medium">Зарегистрироваться</Button>
                <div className={`${autchFormStyle.box_register} mt-20`}>
                    <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
                    <Link
                        to='/login'
                        className={`text text_type_main-default ${autchFormStyle.link}`}>Войти</Link>
                </div>
            </form>
        </div>
    )
}
export default RegisterForm