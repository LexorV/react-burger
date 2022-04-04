import { BurgerIcon, Logo, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyle from './appHeader.module.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react'
export default function AppHeader() {
    const [iconActiveConst, setIconActiveConst] = useState<'secondary' | 'primary'>('primary');
    const [iconActiveRibbon, seticonActiveRibbon] = useState<'secondary' | 'primary'>('secondary');
    const [iconActiveFeed, setIconActiveFeed] = useState<'secondary' | 'primary'>('secondary');
    const setActive = ({ isActive }: any) =>
        isActive ? `${headerStyle.link_style_active}
    text text_type_main-default pl-2`:
            `${headerStyle.link_style} text text_type_main-default pl-2`;
    const activeConst = () => {
        setIconActiveConst('primary');
        seticonActiveRibbon('secondary')
        setIconActiveFeed('secondary')
    }
    const activeRibbon = () => {
        seticonActiveRibbon('primary');
        setIconActiveConst('secondary');
        setIconActiveFeed('secondary')
    }
    const activeFeed = () => {
        setIconActiveFeed('primary');
        setIconActiveConst('secondary');
        seticonActiveRibbon('secondary')
    }


    return (
        <header className={`${headerStyle.header} pt-4 pb-4`}>
            <nav className={headerStyle.menu}>
                <li className={`${headerStyle.menu_link} ${setActive} p-5`}>
                    <BurgerIcon type={iconActiveConst} />
                    <NavLink onClick={activeConst} to="/" className={setActive}>Конструктор</NavLink>
                </li>
                <li className={`${headerStyle.menu_link} pl-2 p-5`}>
                    <ListIcon type={iconActiveFeed} />
                    <NavLink onClick={activeFeed} to="/feed" className={setActive}>Лента заказов</NavLink>
                </li>
            </nav>
            <div className={`${headerStyle.logo_box} pr-30`}>
                <Logo /></div>
            <div className={`${headerStyle.menu_link} ${setActive} p-5`} >
                <ProfileIcon type={iconActiveRibbon} />
                <NavLink onClick={activeRibbon} to="/profile" className={setActive}>Личный кабинет</NavLink>
            </div>
        </header>

    )
}
