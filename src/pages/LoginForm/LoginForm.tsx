import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import autchFormStyle from '../autchFormStyle.module.css';
import { register } from '../../services/action/registerForm'
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useEffect, useState, SyntheticEvent, ChangeEvent } from 'react';
import { autchUser } from '../../utils/burgerApi';
import { setCookie, getCookie } from '../../utils/utils'
import { useSelector, useDispatch } from '../../services/hooks';
import { setRegisterFormValue, GLOBAL_CLEANING_FORM } from '../../services/action/registerForm';

export const LoginForm = () => {
    const [passwordState,
        setPasswordState] = useState<'password' | 'text'>('password');
    const { email, password, registerReceivedData,
        registrationFailed } =
        useSelector((state) => state.registrationForm);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const registerSend = () => {
        if (registerReceivedData) {
            const authToken = registerReceivedData.accessToken.split('Bearer ')[1];
            setCookie('accessToken', authToken, {});
            localStorage.setItem('refreshToken', registerReceivedData.refreshToken);
            const from: any = location.state;
            if (from !== null) {
                navigate(from)
            }
            else {
                navigate('/')
            }
        }
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
    const onChangeForm = (e: SyntheticEvent) => {
        e.preventDefault();
        dispatch(register({
            email,
            password
        }, autchUser));
    }
    const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setRegisterFormValue(e.target.name, e.target.value));
    }
    return (
        <div className={autchFormStyle.main}>
            <form onSubmit={onChangeForm} className={autchFormStyle.box_form}>
                <h2 className="text text_type_main-medium pb-6">????????</h2>
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
                        placeholder="????????????"
                        value={password}
                        onChange={onFormChange}></Input>
                </div>
                <Button
                    type="primary"
                    size="medium" >
                    ??????????</Button>
                {registrationFailed === true && <p>?????????????????? ???????????????????????? ???????????????????? ??????????</p>}
                <div className={`${autchFormStyle.box_register} mt-20`}>
                    <p className="text text_type_main-default text_color_inactive">???? ??? ?????????? ?????????????????????????</p>
                    <Link to='/register' className={`text text_type_main-default ${autchFormStyle.link}`} > ????????????????????????????????????</Link>
                </div>
                <div className={autchFormStyle.box_register}>
                    <p className="text text_type_main-default text_color_inactive">???????????? ?????????????</p>
                    <Link to='/forgot-password' className={`text text_type_main-default ${autchFormStyle.link}`}> ???????????????????????? ????????????</Link>
                </div>
            </form>

        </div>
    )
}
export default LoginForm