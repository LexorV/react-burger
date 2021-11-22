import {BurgerIcon, Logo, Typography, Box, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import './AppHeader.css';
export default function AppHeader() {
    
    return(
        <header className="header pt-4 pb-4">
            <nav className="header__menu">
            <a className="header__menu-link p-5">
            <BurgerIcon  type="secondary"/>
            <p className="text text_type_main-default pl-2 text_color_inactive">Конструктор</p>
            </a>
            <a className="header__menu-link pl-2 p-5">
                <ListIcon className="pr-2" type="secondary" />
                <p className="text text_type_main-default pl-2 text_color_inactive">Лента заказов</p>
            </a>
            </nav>
       <Logo />
       <div className="header__menu-link p-5" >
           <ProfileIcon type="secondary"/>
           <p className="text text_type_main-default pl-2 text_color_inactive">Личный кабинет</p>
       </div>
        </header>
    
    )
}
