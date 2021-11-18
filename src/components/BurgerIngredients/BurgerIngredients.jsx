import { Typography, Box, CurrencyIcon, Tab, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import './BurgerIngredients.css';
export default function BurgerIngredients() {
    return(
        <div  className="ingredients" >
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <div style={{ display: 'flex' }}>
                <Tab value="Булки">Булки</Tab>
                <Tab value="Соусы">Соусы</Tab>
                <Tab value="Начинки">Начинки</Tab>
            </div>
            <h2 className="text text_type_main-medium"> Булки </h2>
        </div>
    )
}