import mainBlockStyle from  './mainBlock.module.css';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
export const MainBlock = () => {
    return( <main className={mainBlockStyle.main}>
             <BurgerIngredients/>
             <BurgerConstructor/>
        </main>
    )
}
export default MainBlock