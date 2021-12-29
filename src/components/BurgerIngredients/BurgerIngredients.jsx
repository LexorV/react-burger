import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { getIngredientsAction } from '../../services/action/Ingredients'
import { useDrag } from "react-dnd";
import { OPEN_INGREDIENT_DETAILS, CLOSE_INGREDIENT_DETAILS } from '../../services/action/IngredientDetail'
import {
    CurrencyIcon,
    Tab,
    Counter
} from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyle from './burgerIngredients.module.css'
import IngredientDetails from '../IngredientDetails/IngredientDetails.jsx';
const Ingtrdient = ({ ingtrdient, setModalIsOpen }) => {
    const { _id, image, name, price, type } = ingtrdient
    const [, dragRef] = useDrag({
        type: 'ingredient',
        item: { _id, image, name, price, type }
    })
    const { arrayID } = useSelector(state => state.arrayInConstructor)
    const countIngredient = arrayID.filter(e => e === ingtrdient._id).length
    const dispatch = useDispatch()
    const openModal = () => {
        dispatch(OPEN_INGREDIENT_DETAILS(ingtrdient));
        setModalIsOpen(true)
    }
    return (
        <li ref={dragRef} onClickCapture={openModal} key={ingtrdient._id} className={`${burgerIngredientsStyle.card_list} pl-4`}>
            {countIngredient > 0 ? <Counter count={countIngredient} size="default" />:null}
            <img alt={ingtrdient.name} src={ingtrdient.image} className={`${burgerIngredientsStyle.picture} pl-4 pr-4`}></img>
            <div className={`${burgerIngredientsStyle.card_price_box} pt-1 pb-1`}>
                <p className="text text_type_digits-default pr-2">{ingtrdient.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-small">{ingtrdient.name}</p>
        </li>)
}
const Ingtrdients = ({ data, type, setModalIsOpen }) => {
    if (data !== null) {
        const listItems = data
            .filter(e => e.type === type)
            .map((ingtrdient) =>
                <Ingtrdient key={ingtrdient._id} ingtrdient={ingtrdient} setModalIsOpen={setModalIsOpen} />
            )
        return listItems
    }
    else {
        return (
            <h2>нет</h2>)
    }
}
export default function BurgerIngredients() {
    const [modalIsOpen, setModalIsOpen] = React.useState(false)
    const [current, setCurrent] = React.useState('Булки');
    const dispatch = useDispatch();
    const { ingredient } = useSelector(state => state.ingredientDetail)
    const { ingredientsRequest, ingredientsFailed, ingredients } = useSelector(state => state.ingredients);
    const closeModal = () => {
        dispatch({ type: CLOSE_INGREDIENT_DETAILS })
        setModalIsOpen(false)
    }
    const tabClick = (current) => {
        if (current === 'Булки') {
            setCurrent('Булки')
        }
        else if (current === 'Соусы') {
            setCurrent('Соусы')
        }
        else if (current === 'Начинки') {
            setCurrent('Начинки')
        }
    }
    const handleScroll = e => {
        if (e.target.scrollTop < 239) {
            setCurrent('Булки')
        }
        else if (e.target.scrollTop > 239 && e.target.scrollTop < 630) {
            setCurrent('Соусы')
        }
        else if (e.target.scrollTop > 630) {
            setCurrent('Начинки')
        }
        //e.target.scrollTop = 239
    }
    React.useEffect(() => {
        dispatch(getIngredientsAction())
    }, [dispatch])
    if (ingredientsFailed) {
        return (
            <p>Произошла ошибка при получении данных</p>
        )
    }
    else if (ingredientsRequest) {
        return (
            <p>Загрузка...</p>
        )
    }
    else {
        return (
            <>
                <section className={burgerIngredientsStyle.ingredients}>
                    <h1 className="text text_type_main-large">Соберите бургер</h1>
                    <div
                        className="mt-10 mb-5"
                        style={{
                            display: 'flex'
                        }}>
                        <Tab active={current === 'Булки'} onClick={() => tabClick('Булки')} value="Булки" >Булки</Tab>
                        <Tab active={current === 'Соусы'} onClick={() => tabClick('Соусы')} value="Соусы">Соусы</Tab>
                        <Tab active={current === 'Начинки'} onClick={() => tabClick('Начинки')} value="Начинки">Начинки</Tab>
                    </div>
                    <div onScroll={(e) => handleScroll(e)} className={burgerIngredientsStyle.box_with_ingredients}>
                        <h2 className="text text_type_main-medium">
                            Булки
                        </h2>
                        <ul className={`${burgerIngredientsStyle.lists} pl-2`}>
                            <Ingtrdients setModalIsOpen={setModalIsOpen} data={ingredients} type='bun' />
                        </ul>
                        <h2 className="text text_type_main-medium">Соусы</h2>
                        <ul className={`${burgerIngredientsStyle.lists} pl-2`}>
                            <Ingtrdients setModalIsOpen={setModalIsOpen} data={ingredients} type='sauce' />
                        </ul>
                        <h2 className="text text_type_main-medium">Начинки</h2>
                        <ul className={`${burgerIngredientsStyle.lists} pl-2`}>
                            <Ingtrdients setModalIsOpen={setModalIsOpen} data={ingredients} type='main' />
                        </ul>
                    </div>
                </section>
                {ingredient && (<Modal height={539} closeModal={closeModal}   >
                    <IngredientDetails dataIngrid={ingredient} />
                </Modal>)}
            </>
        )
    }

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
