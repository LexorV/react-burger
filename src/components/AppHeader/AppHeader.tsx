import { BurgerIcon, Logo, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyle from './appHeader.module.css'
import {Link } from 'react-router-dom';
export default function AppHeader() {
    return (
        <header className={`${headerStyle.header} pt-4 pb-4`}>
            <nav className={headerStyle.menu}>
                <li className={`${headerStyle.menu_link} p-5`}>
                    <BurgerIcon type="primary" />
                    <Link to="/"  className="text text_type_main-default pl-2">Конструктор</Link>
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
                <Link to="/profile" className="text text_type_main-default pl-2 text_color_inactive">Личный кабинет</Link>
            </div>
        </header>

    )
}
