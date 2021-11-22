import React from 'react';
import {
    Typography,
    Box,
    CurrencyIcon,
    Tab,
    ConstructorElement,
    Counter
} from '@ya.praktikum/react-developer-burger-ui-components';
import './BurgerIngredients.css';
import {dataIngredients} from '../../utils/data.js';
const Ingtrdients = ({data, type}) => {
    const listItems = data
        .filter(e => e.type === type)
        .map((element) => <li key={element._id} className="ingredients__card-list pl-4">
            <Counter count={1} size="default"/>
            <img alt={element.name} src={element.image} className="ingredients__picture pl-4 pr-4 "></img>
            <div className="ingredients__card-price-box pt-1 pb-1">
                <p className="text text_type_digits-default pr-2">{element.price}</p>
                <CurrencyIcon type="primary"/>
            </div>
            <p className="text text_type_main-small">{element.name}</p>
        </li>)
    return listItems
}
export default function BurgerIngredients() {
    const [current, setCurrent] = React.useState('Булки')
    const [state,
        setState] = React.useState({dataIngrid: dataIngredients})
    return (
        <section className="ingredients">

            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <div
                className="mt-10 mb-5"
                style={{
                display: 'flex'
            }}>
                <Tab active={current === 'Булки'} value="Булки" >Булки</Tab>
                <Tab value="Соусы">Соусы</Tab>
                <Tab value="Начинки">Начинки</Tab>
            </div>
            <div className="ingredients__box">
                <h2 className="text text_type_main-medium">
                    Булки
                </h2>
                <ul className="ingredients__lists pl-2">
                    <Ingtrdients data={state.dataIngrid} type='bun' />
                </ul>
                <h2 className="text text_type_main-medium">Соусы</h2>
                <ul className="ingredients__lists pl-2">
                <Ingtrdients data={state.dataIngrid} type='sauce' />
                </ul>
                <h2 className="text text_type_main-medium">Начинки</h2>
                <ul className="ingredients__lists pl-2">
                <Ingtrdients data={state.dataIngrid} type='main' />
                </ul>
            </div>

        </section>
    )
}