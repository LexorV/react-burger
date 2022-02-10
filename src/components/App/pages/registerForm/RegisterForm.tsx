import {Input, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import autchFormStyle from '../autchFormStyle.module.css';
import {sendRegisterUser} from '../../../../utils/burgerApi'
import {useSelector, useDispatch} from '../../../../services/hooks';
import {useHistory, Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {register} from '../../../../services/action/registerForm'
import { setRegisterFormValue} from '../../../../services/action/registerForm';

export const RegisterForm = () => {
    const {name, email, password, registerReceivedData, registrationFailed, registrationSuccess } = useSelector((state) => state.registrationForm);
    const [passwordState,
        setPasswordState] = useState < 'password' | 'text' > ('password');
    //const {registerReceivedData, registrationFailed} = useSelector(state => state.registrationForm);
    const history = useHistory();
    const dispatch = useDispatch();
    const registerSend = () => {
        if (registrationSuccess) {
            history.replace({pathname: '/'});
            console.log(registerReceivedData);
        }
    }
    useEffect(() => {
        registerSend();
    },[registerReceivedData] )

    const onChangeForm = (e : any) => {
        e.preventDefault();
        dispatch(register({
            name,
            email,
            password
        }, sendRegisterUser));
    }
    console.log(registerReceivedData);
    const openPassword = () => {
        setPasswordState(passwordState === 'password'
            ? 'text'
            : 'password')
    }
    const onFormChange = (e : any) => {
        dispatch(setRegisterFormValue(e.target.name, e.target.value));
    }
    return (
        <div className={autchFormStyle.main}>
            <form className={autchFormStyle.box_form}>
                <h2 className="text text_type_main-medium pb-6">Регистрация</h2>
                <div className="pb-6">
                    <Input
                        type="text"
                        placeholder="имя"
                        name={'name'}
                        value={name}
                        onChange={onFormChange}></Input>
                </div>
                <div className="pb-6">
                    <Input
                        type="email"
                        name={'email'}
                        placeholder="E-mail"
                        value={email}
                        onChange={onFormChange}></Input>
                </div>
                <div className="pb-6">
                    <Input
                        icon="ShowIcon"
                        name={'password'}
                        onIconClick={openPassword}
                        type={passwordState}
                        placeholder="Пароль"
                        value={password}
                        onChange={onFormChange}></Input>
                </div>
                {registrationFailed && <p>Проверьте правильность заполнения формы</p>}
                <Button onClick={onChangeForm} type="primary" size="medium">Зарегистрироваться</Button>
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