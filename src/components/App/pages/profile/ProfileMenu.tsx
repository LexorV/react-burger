import profile from './profile.module.css';
import { useSelector, useDispatch } from '../../../../services/hooks';
import { useLocation, Link, useNavigate } from "react-router-dom";
import { deleteCookie, setCookie } from '../../../../utils/utils';
import { LOGOUT_USER } from '../../../../services/action/registerForm';
import {logoutUserApi, refreshTokenApi } from '../../../../utils/burgerApi';
export const ProfileMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let location = useLocation()
    const logoutUser = () => {
        let token = localStorage.getItem('refreshToken');
        deleteCookie('accessToken');
        logoutUserApi({ 'token': token });
        localStorage.removeItem("refreshToken");
        dispatch({
            type: LOGOUT_USER
        })
        navigate('/login');
    }

    return (
        <div className={profile.menu__box}>
            <ul className={profile.menu__lists}>
                <Link to={{ pathname:"/profile"}}><li className={`${profile.menu__list} ${profile.menu__list_active} text text_type_main-medium`}>Профиль</li></Link>
                <Link to={{ pathname:"/profile/orders"}}><li className={`${profile.menu__list} text text_type_main-medium`}>История заказов</li></Link>
                <li onClick={logoutUser} className={`${profile.menu__list} text text_type_main-medium`}>Выход</li>
            </ul>
            <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете
                изменить свои персональные данные</p>
        </div>
    )
}