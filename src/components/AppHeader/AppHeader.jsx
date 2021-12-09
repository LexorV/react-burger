import { BurgerIcon, Logo, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyle from './appHeader.module.css'
export default function AppHeader() {

    return (
        <header className={`${headerStyle.header} pt-4 pb-4`}>
            <nav className={headerStyle.menu}>
                <li className={`${headerStyle.menu_link} p-5`}>
                    <BurgerIcon type="primary" />
                    <p className="text text_type_main-default pl-2">Конструктор</p>
                </li>
                <li className={`${headerStyle.menu_link} pl-2 p-5`}>
                    <ListIcon className="pr-2" type="secondary" />
                    <p className="text text_type_main-default pl-2 text_color_inactive">Лента заказов</p>
                </li>
            </nav>
            <div className={`${headerStyle.logo_box} pr-30`}>
                <Logo /></div>
            <div className={`${headerStyle.menu_link} p-5`} >
                <ProfileIcon type="secondary" />
                <p className="text text_type_main-default pl-2 text_color_inactive">Личный кабинет</p>
            </div>
        </header>

    )
}
