import React from 'react';
import PropTypes from 'prop-types';
import {
    CurrencyIcon,
    Tab,
    Counter
} from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyle from './burgerIngredients.module.css'
import IngredientDetails from '../IngredientDetails/IngredientDetails.jsx';
const Ingtrdient = ({ ingtrdient }) => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false)
    const openModal = () => {
        if (modalIsOpen === false) {
            setModalIsOpen(true)
        }
    }
    const closeModal = () => {
        setModalIsOpen(false)
    }
    return (
        <li onClickCapture={openModal} key={ingtrdient._id} className={`${burgerIngredientsStyle.card_list} pl-4`}>
            <IngredientDetails modalOpen={modalIsOpen} dataIngrid={ingtrdient} closeModal={closeModal} />
            <Counter count={1} size="default" />
            <img alt={ingtrdient.name} src={ingtrdient.image} className={`${burgerIngredientsStyle.picture} pl-4 pr-4`}></img>
            <div className={`${burgerIngredientsStyle.card_price_box} pt-1 pb-1`}>
                <p className="text text_type_digits-default pr-2">{ingtrdient.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-small">{ingtrdient.name}</p>
        </li>)
}
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
            <h2>Нет связи с сервером</h2>)
    }
}
export default function BurgerIngredients({ dataIngrid }) {
    const [current] = React.useState('Булки')
    return (
        <section className={burgerIngredientsStyle.ingredients}>
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
            <div className={burgerIngredientsStyle.box_with_ingredients}>
                <h2 className="text text_type_main-medium">
                    Булки
                </h2>
                <ul className={`${burgerIngredientsStyle.lists} pl-2`}>
                    <Ingtrdients data={dataIngrid} type='bun' />
                </ul>
                <h2 className="text text_type_main-medium">Соусы</h2>
                <ul className={`${burgerIngredientsStyle.lists} pl-2`}>
                    <Ingtrdients data={dataIngrid} type='sauce' />
                </ul>
                <h2 className="text text_type_main-medium">Начинки</h2>
                <ul className={`${burgerIngredientsStyle.lists} pl-2`}>
                    <Ingtrdients data={dataIngrid} type='main' />
                </ul>
            </div>

        </section>
    )
}
Ingtrdients.propTypes = {
    data: PropTypes.array,
    type: PropTypes.string
}
Ingtrdient.propTypes = {
    ingtrdientn: PropTypes.object,
}
BurgerIngredients.propTypes = {
    dataIngrid: PropTypes.array
}
