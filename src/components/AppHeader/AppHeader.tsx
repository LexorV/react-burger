import { BurgerIcon, Logo, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyle from './appHeader.module.css'
import {NavLink } from 'react-router-dom';
export default function AppHeader() {
    const setActive = ({isActive}:any) => isActive ? `${headerStyle.link_style_active} text text_type_main-default pl-2`: `${headerStyle.link_style} text text_type_main-default pl-2`;
    return (
        <header className={`${headerStyle.header} pt-4 pb-4`}>
            <nav className={headerStyle.menu}>
                <li className={`${headerStyle.menu_link} p-5`}>
                    <BurgerIcon type="primary" />
                    <NavLink to="/"   className={setActive}>Конструктор</NavLink>
                </li>
                <li className={`${headerStyle.menu_link} pl-2 p-5`}>
                    <ListIcon type="secondary" />
                    <p className="text text_type_main-default pl-2 text_color_inactive">Лента заказов</p>
                </li>
            </nav>
            <div className={`${headerStyle.logo_box} pr-30`}>
                <Logo /></div>
            <div className={`${headerStyle.menu_link} p-5`} >
                <ProfileIcon type="secondary" />
                <NavLink to="/profile" className={setActive}>Личный кабинет</NavLink>
            </div>
        </header>

    )
}
