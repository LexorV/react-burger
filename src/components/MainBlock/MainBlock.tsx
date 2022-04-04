import mainBlockStyle from './mainBlock.module.css';
import { useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
export const MainBlock = () => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if(location.pathname !== '/') {
            navigate('/');
        }
    }, [])
    return (<main className={mainBlockStyle.main}>
        <BurgerIngredients />
        <BurgerConstructor />
    </main>

    )
}
export default MainBlock