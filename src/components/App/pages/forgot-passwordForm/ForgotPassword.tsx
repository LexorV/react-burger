import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import autchFormStyle from '../autchFormStyle.module.css';
import { forgotPasswordApi } from '../../../../utils/burgerApi'
import { useSelector, useDispatch } from '../../../../services/hooks';
import { useHistory, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { register } from '../../../../services/action/registerForm';
import { setRegisterFormValue } from '../../../../services/action/registerForm';
export const ForgotPasswordForm = () => {
    const { email, registerReceivedData,
        registrationFailed, registrationSuccess }
        = useSelector((state) => state.registrationForm);
    const registerSend = () => {
        if (registrationSuccess) {
            history.replace({ pathname: '/reset-password' });
            console.log(registerReceivedData);
        }
    }
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        registerSend();
    }, [registerReceivedData])
    const onChangeForm = (e: any) => {
        e.preventDefault();
        dispatch(register({
            email,
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
                        placeholder="Укажите e-mail"
                        value={email}
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