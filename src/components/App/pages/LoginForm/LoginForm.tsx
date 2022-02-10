import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import autchFormStyle from '../autchFormStyle.module.css';
import {register} from '../../../../services/action/registerForm'
import { useHistory, Link  } from 'react-router-dom';
import {useEffect} from 'react';
import {autchUser} from '../../../../utils/burgerApi';
import {useSelector, useDispatch} from '../../../../services/hooks';
import {setRegisterFormValue} from '../../../../services/action/registerForm';
export const LoginForm = () => {
    const {email, password, registerReceivedData,
         registrationFailed, registrationSuccess } =
         useSelector((state) => state.registrationForm);
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
            email,
            password
        }, autchUser));
    }
    const onFormChange = (e : any) => {
        dispatch(setRegisterFormValue(e.target.name, e.target.value));
    }
    return(
        <div className={autchFormStyle.main}>
            <form className={autchFormStyle.box_form}>
                <h2 className="text text_type_main-medium pb-6">Вход</h2>
                <div className="pb-6">
                <Input  name={'email'} size={'default'} type="email" placeholder="E-mail" value={email} onChange={onFormChange}></Input>
                </div>
                <div className="pb-6">
                <Input  name={'password'} icon="ShowIcon" type="password" placeholder="Пароль" value={password} onChange={onFormChange}></Input>
                </div>
                <Button onClick={onChangeForm} type="primary" size="medium" > Войти</Button>
                <div className= {`${autchFormStyle.box_register} mt-20`}>
                    <p className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</p>
                    <Link to='/register' className={`text text_type_main-default ${autchFormStyle.link}`} > Зарегистрироваться</Link>
                    {registrationFailed && <p>Проверьте правильность заполнения формы</p>}
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