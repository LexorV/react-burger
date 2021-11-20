import { Typography, Box, CurrencyIcon, Tab, ConstructorElement, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import './BurgerIngredients.css';
import {data} from  '../../utils/data.js';
export default function BurgerIngredients() {
    console.log(data.length)
    return(
        <div  className="ingredients" >
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <div style={{ display: 'flex' }}>
                <Tab value="Булки">Булки</Tab>
                <Tab value="Соусы">Соусы</Tab>
                <Tab value="Начинки">Начинки</Tab>
            </div>
            <div className="ingredients__box" >
            <h2 className="text text_type_main-medium"> Булки </h2>
            <ul className="ingredients__lists pl-4">
                <li className="ingredients__card-list pt-6 pl-4">
                   
                <Counter count={1} size="default" />
                    <img src={data[0].image}  className="ingredients__picture pl-4 pr-4 "></img>
                    <div className="ingredients__card-price-box pt-1 pb-1">
                        <p className = "text text_type_digits-default pr-2">{data[0].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className="text text_type_main-small">{data[0].name}</p>
                </li>
                <li className="ingredients__card-list pt-6 pl-4">
                <Counter count={1} size="default" />
                    <img src={data[14].image}  className="ingredients__picture pl-4 pr-4 "></img>
                    <div className="ingredients__card-price-box pt-1 pb-1">
                        <p className = "text text_type_digits-default pr-2">{data[14].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className="text text_type_main-small">{data[14].name}</p>
                </li>
            </ul>
            <h2 className="text text_type_main-medium">Соусы </h2>
            <ul className="ingredients__lists pl-4">
                <li className="ingredients__card-list pt-6 pl-4">
                <Counter count={1} size="default" />
                    <img src={data[3].image}  className="ingredients__picture pl-4 pr-4 "></img>
                    <div className="ingredients__card-price-box pt-1 pb-1">
                        <p className = "text text_type_digits-default pr-2">{data[3].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className="text text_type_main-small">{data[3].name}</p>
                </li>
                <li className="ingredients__card-list pt-6 pl-4">
                <Counter count={1} size="default" />
                    <img src={data[6].image}  className="ingredients__picture pl-4 pr-4 "></img>
                    <div className="ingredients__card-price-box pt-1 pb-1">
                        <p className = "text text_type_digits-default pr-2">{data[6].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className="text text_type_main-small">{data[6].name}</p>
                </li>
                <li className="ingredients__card-list pt-6 pl-4">
                    <img src={data[3].image}  className="ingredients__picture pl-4 pr-4 "></img>
                    <div className="ingredients__card-price-box pt-1 pb-1">
                        <p className = "text text_type_digits-default pr-2">{data[3].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className="text text_type_main-small">{data[3].name}</p>
                </li>
                <li className="ingredients__card-list pt-6 pl-4">
                    <img src={data[6].image}  className="ingredients__picture pl-4 pr-4 "></img>
                    <div className="ingredients__card-price-box pt-1 pb-1">
                        <p className = "text text_type_digits-default pr-2">{data[6].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className="text text_type_main-small">{data[6].name}</p>
                </li>
            </ul>
            <ul className="ingredients__lists pl-4">
                <li className="ingredients__card-list pt-6 pl-4">
                    <img src={data[3].image}  className="ingredients__picture pl-4 pr-4 "></img>
                    <div className="ingredients__card-price-box pt-1 pb-1">
                        <p className = "text text_type_digits-default pr-2">{data[3].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className="text text_type_main-small">{data[3].name}</p>
                </li>
                <li className="ingredients__card-list pt-6 pl-4">
                    <img src={data[6].image}  className="ingredients__picture pl-4 pr-4 "></img>
                    <div className="ingredients__card-price-box pt-1 pb-1">
                        <p className = "text text_type_digits-default pr-2">{data[6].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className="text text_type_main-small">{data[6].name}</p>
                </li>
                <li className="ingredients__card-list pt-6 pl-4">
                    <img src={data[3].image}  className="ingredients__picture pl-4 pr-4 "></img>
                    <div className="ingredients__card-price-box pt-1 pb-1">
                        <p className = "text text_type_digits-default pr-2">{data[3].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className="text text_type_main-small">{data[3].name}</p>
                </li>
                <li className="ingredients__card-list pt-6 pl-4">
                    <img src={data[6].image}  className="ingredients__picture pl-4 pr-4 "></img>
                    <div className="ingredients__card-price-box pt-1 pb-1">
                        <p className = "text text_type_digits-default pr-2">{data[6].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className="text text_type_main-small">{data[6].name}</p>
                </li>
            </ul>
            </div>

        </div>
    )
}