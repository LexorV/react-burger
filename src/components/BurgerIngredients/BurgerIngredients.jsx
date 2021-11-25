import React from 'react';
import {
    CurrencyIcon,
    Tab,
    Counter
} from '@ya.praktikum/react-developer-burger-ui-components';
import './BurgerIngredients.css';
import IngredientDetails from '../IngredientDetails/IngredientDetails.jsx';
const Ingtrdient = ({ ingtrdient }) => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false)
    const openModal = () => {
        if (modalIsOpen === false) {
            setModalIsOpen(true)
        }
    }
    const closeModel = () => {
        setModalIsOpen(false)
    }
    return (
        <li onClickCapture={openModal} key={ingtrdient._id} className="ingredients__card-list pl-4">
            <IngredientDetails modalOpen={modalIsOpen} dataIngrid={ingtrdient} closeModel={closeModel} />
            <Counter count={1} size="default" />
            <img alt={ingtrdient.name} src={ingtrdient.image} className="ingredients__picture pl-4 pr-4 "></img>
            <div className="ingredients__card-price-box pt-1 pb-1">
                <p className="text text_type_digits-default pr-2">{ingtrdient.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-small">{ingtrdient.name}</p>
        </li>)
}
//import {dataIngredients} from '../../utils/data.js';
const Ingtrdients = ({ data, type }) => {
    if (data !== null) {
        const listItems = data
            .filter(e => e.type === type)
            .map((ingtrdient) =>
                <Ingtrdient key={ingtrdient._id} ingtrdient={ingtrdient} />
            )
        return listItems
    }
    else {
        return (
            <h2>Загрузка</h2>)
    }
}
export default function BurgerIngredients({ dataIngrid }) {
    //  const [dataIngrid, setDataIngrid] = React.useState(dataIngredients)
    const [current] = React.useState('Булки')
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
                    <Ingtrdients data={dataIngrid} type='bun' />
                </ul>
                <h2 className="text text_type_main-medium">Соусы</h2>
                <ul className="ingredients__lists pl-2">
                    <Ingtrdients data={dataIngrid} type='sauce' />
                </ul>
                <h2 className="text text_type_main-medium">Начинки</h2>
                <ul className="ingredients__lists pl-2">
                    <Ingtrdients data={dataIngrid} type='main' />
                </ul>
            </div>

        </section>
    )
}