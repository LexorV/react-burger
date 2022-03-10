import {  Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import profile from './profile.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, ChangeEvent } from 'react';
import {  useDispatch } from '../../../../services/hooks';
import { getProfileData, sendProfileData, logoutUserApi, refreshTokenApi } from '../../../../utils/burgerApi';
import { deleteCookie, setCookie } from '../../../../utils/utils';
import {LOGOUT_USER} from '../../../../services/action/registerForm';

export const Profile = () => {
    const [emailUser, setEmailUser] = useState('');
    const [nameUser, setNameUser] = useState('');
    const [passwordUser, setPaswordUser] = useState('');
    const [isLogin, setIslogin] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let location = useLocation()
    const onFormChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailUser(e.target.value);
    }
    const onFormChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setNameUser(e.target.value);
    }
    const onFormChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPaswordUser(e.target.value)
    }
    const postUserData = () => {
        getProfileData()
            .then((res) => {
                if (res && res.success) {
                    setEmailUser(res.user.email);
                    setNameUser(res.user.name);
                }
            })
            .catch((err) => {
                console.log(err)
                console.log(err.message === 'jwt expired')
                if(err.message === 'jwt expired') {
                    refreshTokenApi()
                    .then((res) => {
                        let authToken = res.accessToken.split('Bearer ')[1];
                        setCookie('accessToken', authToken, {});
                        localStorage.setItem('refreshToken', res.refreshToken);
                        setIslogin(true)
                        getProfileData()
                        setEmailUser(res.user.email);
                        setNameUser(res.user.name);
                    })
                    .catch((err) => {
                        console.log(err)
                        if(err.message === 'token invalid') {
                            navigate('/login')
                        }
                    })
                }
                else {
                    navigate('/login', location);
                }
            })
    }
    const changeProfileData = () => {
        sendProfileData({
            'email': emailUser,
            'password': passwordUser,
            'name': nameUser
        })
            .then((res) => {
                if (res && res.success) {
                    setEmailUser(res.user.email);
                    setNameUser(res.user.name);
                }
            })
            .catch((err) => {
                console.log(err)
                console.log(err.message === 'jwt expired')
                if(err.message === 'jwt expired') {
                    refreshTokenApi()
                    .then((res) => {
                        let authToken = res.accessToken.split('Bearer ')[1];
                        setCookie('accessToken', authToken, {});
                        localStorage.setItem('refreshToken', res.refreshToken);
                        setIslogin(true)
                        getProfileData()
                        setEmailUser(res.user.email);
                        setNameUser(res.user.name);
                    })
                    .catch((err) => {
                        console.log(err)
                        if(err.message === 'token invalid') {
                            navigate('/login')
                        }
                    })
                }
                else {
                    navigate('/login', location);
                }
                
            })
    }
    const logoutUser = () => {
        let token = localStorage.getItem('refreshToken');
        deleteCookie('accessToken');
        logoutUserApi({ 'token': token });
        localStorage.removeItem("refreshToken");
        dispatch({
            type:LOGOUT_USER
        })
        navigate('/login');
    }

    useEffect(() => {
        setIslogin(true)
        postUserData()
        setIslogin(false)
    }, [isLogin])
    const cleanerForm = () => {
        postUserData()
    }

    return (
        <div className={profile.main}>
            <div className={profile.main__box}>
                <div className={profile.menu__box}>
                    <ul className={profile.menu__lists}>
                        <li className={`${profile.menu__list} ${profile.menu__list_active} text text_type_main-medium`}>Профиль</li>
                        <li className={`${profile.menu__list} text text_type_main-medium`}>История заказов</li>
                        <li onClick={logoutUser} className={`${profile.menu__list} text text_type_main-medium`}>Выход</li>
                    </ul>
                    <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете
                        изменить свои персональные данные</p>
                </div>
                <div className={profile.inputs__box}>
                    <Input icon="EditIcon" type="text" placeholder="Имя" value={nameUser} onChange={onFormChangeName}></Input>
                    <Input icon="EditIcon" type="text" placeholder="Логин" value={emailUser} onChange={onFormChangeEmail}></Input>
                    <Input icon="EditIcon" type="password" placeholder="Пароль" value={passwordUser}
                        onChange={onFormChangePassword}></Input>
                    <div className={profile.button__box}>
                        <Button onClick={changeProfileData} type="primary" size="small">Сохранить</Button>
                        <Button onClick={cleanerForm} type="primary" size="small">Отмена</Button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Profile