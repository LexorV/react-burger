import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import autchFormStyle from '../autchFormStyle.module.css';
import { forgotPasswordApi } from '../../utils/burgerApi';
import { validateField } from '../../utils/utils';
import { useSelector, useDispatch } from '../../services/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { getCookie } from '../../utils/utils'
import { useEffect, useState, ChangeEvent, SyntheticEvent, useRef } from 'react';
import { forgotPassword } from '../../services/action/registerForm';
import { setRegisterFormValue, fORGOT_FORM_CLEANING } from '../../services/action/registerForm';
export const ForgotPasswordForm = () => {
    const { emailForgot, registerReceivedData, forgotSuccess } = useSelector((state) => state.registrationForm);
    const [validErrosText, setValidErrosText] = useState('');
    const [isValid, setIsvalid] = useState(false);
    const [validErr, setValidErr] = useState(false);
    const [buttonPressed, setButtonPressed] = useState(false);
    const registerSend = () => {
        console.log(registerReceivedData)
        if (registerReceivedData ) {
            navigate('/login');
        }
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: fORGOT_FORM_CLEANING })
        setIsvalid(false)
        setButtonPressed(false)
        setValidErr(false)
        registerSend();
    }, [forgotSuccess, setButtonPressed])
    useEffect(() => {
        const token = getCookie('accessToken');
        if (token) {
            navigate('/')
        }
    }, [])
    useEffect(() => {
        if(buttonPressed === true) {
            isValid === true ? setValidErr(false) : setValidErr(true)
            if (isValid === true) {
                dispatch(forgotPassword({
                    email: emailForgot,
                }, forgotPasswordApi));
                navigate('/reset-password', { replace: true, state: 'forgotPage' });
            }
        }
        setButtonPressed(false)

    },[buttonPressed] )

    const onChangeForm = (e: SyntheticEvent) => {
        if (emailForgot) {
         validateField('email', emailForgot, setValidErrosText, isValid, setIsvalid)
        }
        else if(emailForgot=== '') {
            setValidErr(true)
            setValidErrosText('Поле не должно быть пустым')
        }
        e.preventDefault();
        setButtonPressed(true)
    }
    const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        
        dispatch(setRegisterFormValue(e.target.name, e.target.value));
    }
    const validFocus = (e: any) => {
            setValidErr(false)
    }
    return (
        <div className={autchFormStyle.main}>
            <form onSubmit={onChangeForm} className={autchFormStyle.box_form} noValidate>
                <h2 className="text text_type_main-medium pb-6">Востановление пароля</h2>
                <div className="pb-6">
                    <Input type="email"
                        name={'emailForgot'}
                        placeholder="Укажите e-mail"
                        errorText={validErrosText}
                        value={emailForgot}
                        error={validErr}
                        onFocus={validFocus}
                        onChange={onFormChange}
                        success={true}
                        ></Input>
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