import {BurgerIcon, Logo, Typography, box, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
export default function AppHeader() {
    
    return(
        <header>
            <div>
            <BurgerIcon type="primary"/>
            <p className="text text_type_main-default">Конструктор</p>
            </div>
            <div>
                <ListIcon type="primary" />
                <p className="text text_type_main-default">Конструктор</p>
            </div>
       <Logo />
       <div>
           <ProfileIcon type="primary"/>
           <p className="text text_type_main-default">Личный кабинет</p>
       </div>
        </header>
    
    )
}
