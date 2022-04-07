import profile from './profile.module.css';
import { useDispatch } from '../../services/hooks';
import { useNavigate, NavLink } from "react-router-dom";
import { deleteCookie } from '../../utils/utils';
import { LOGOUT_USER } from '../../services/action/registerForm';
import { logoutUserApi } from '../../utils/burgerApi';
export const ProfileMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutUser = () => {
        const token = localStorage.getItem('refreshToken');
        deleteCookie('accessToken');
        logoutUserApi({ 'token': token });
        localStorage.removeItem("refreshToken");
        dispatch({
            type: LOGOUT_USER
        })
        navigate('/login');
    }
    const setActive = ({ isActive }: any) =>
        isActive ? `${profile.links__profile_menu_active}
    text text_type_main-medium `:
            `${profile.links__profile_menu} text text_type_main-medium`;


    return (
        <div className={profile.menu__box}>
            <ul className={profile.menu__lists}>
                <li className={`${profile.menu__list}`}> <NavLink to="/profile" className={setActive} end>Профиль </NavLink></li>
                <li className={`${profile.menu__list}`}><NavLink to="/profile/orders" className={setActive} end>История заказов </NavLink></li>
                <li onClick={logoutUser} className={`${profile.menu__list} text text_type_main-medium`}>Выход</li>
            </ul>
            <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете
                изменить свои персональные данные</p>
        </div>
    )
}