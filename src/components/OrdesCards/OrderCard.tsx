import cardsOrdersStyle from './cardsOrders.module.css';
import { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from '../../services/hooks';
import { useLocation, Link } from "react-router-dom";
import { openOrderCard } from '../../services/action/orderCard';
import { orderDateChange, ordesCardFilter, totalCardOrder } from '../../utils/utils';
import { Tingredient } from '../../services/types/ingredientsType';
import { TordersCard } from '../../services/types/ordersType'
import {
    CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
const ListPicture: FC<{ pictureArray: Tingredient[] }> = ({ pictureArray }) => {
    if (pictureArray.length > 0) {
        return (
            <>
                {
                    pictureArray.slice(0, 4).map((el, index: number) => (
                        <img key={el._id} className={cardsOrdersStyle.card__picture} style={{ zIndex: pictureArray.length - index }} alt={el.name} src={el.image}></img>
                    ))
                }
            </>
        )
    }
    else {
        return (
            <p>Странно, бургеров в заказе нет</p>
        )
    }
}


export const OrderCard: FC<{ ordesData: TordersCard }> = ({ ordesData }) => {
    const { ingredients } = useSelector(state => state.ingredients);
    const { orders } = useSelector(state => state.wsOrdes);
    const [ingredientPictureArray, setIngredientPictureArray] = useState<Tingredient[] | []>([]);
    const [ordesDate, setOrdesDate] = useState<string>('01.01.2022')
    const [numberMoreSix, setNumberMoreSix] = useState<number>(1);
    const [totalCard, setTotalCard] = useState<number>(0);
    const [isHistory, setIsHistory] = useState<boolean>(false);
    let location = useLocation();
    const addIngredientsOrder = () => {
        if (ingredients && orders && ordesData) {
            const ordersIngredient = ingredients.filter(el => ordesData.ingredients.includes(el._id));
            setNumberMoreSix(ordersIngredient.length - 5);
            //console.log(ingredients)
            setTotalCard(totalCardOrder(ordesCardFilter(ordesData, ingredients)))
            setIngredientPictureArray(ordersIngredient)
        }
    }
    const dispatch = useDispatch()
    const openModal = () => {
        dispatch(openOrderCard(ordesData))
    }


    useEffect(() => {
        addIngredientsOrder()
        setOrdesDate(orderDateChange(ordesData.createdAt))
    }, [ingredients, ordesData])
    useEffect(() => {
        if (location.pathname === "/profile/orders") {
            setIsHistory(true)
        }
        else {
            setIsHistory(false)
        }
    }, [ordesData])


    return (
        <Link className={cardsOrdersStyle.card__liks_style} to={{ pathname: `${location.pathname}/${ordesData._id}` }} state={{ positionPopap: location }}>
            <li key={ordesData._id} onClickCapture={openModal} className={cardsOrdersStyle.card}>
                <div className={cardsOrdersStyle.card__number_box}>
                    <p className="text text_type_digits-default">{ordesData.number}</p>
                    <p className="text text_type_main-default text_color_inactive">{ordesDate}</p>
                </div>
                <h2 className='text text_type_main-medium pb-6'>{ordesData.name}</h2>
                {isHistory && (<p style={ordesData.status === 'done' ? { color: '#00CCCC' } : { color: 'white' }} className={`${cardsOrdersStyle.details_status_text} text text_type_main-small mb-6`}>{ordesData.status === 'done' ? 'Выполнен' : 'Готовится'}</p>)}
                <div className={cardsOrdersStyle.card__bottom_box}>
                    <div className={cardsOrdersStyle.card__picture_box} >
                        <ListPicture pictureArray={ingredientPictureArray} />
                        {ingredientPictureArray[6] && (<div className={cardsOrdersStyle.card_picture_number_box}>
                            <img className={`${cardsOrdersStyle.card__picture} ${cardsOrdersStyle.card_picture_last}`}
                                style={{ zIndex: 8 }} alt={ingredientPictureArray[6].name}
                                src={ingredientPictureArray[6].image}></img><p className={cardsOrdersStyle.card_picture_number_text}>{`+${numberMoreSix}`}</p></div>)}
                    </div>
                    <div className={cardsOrdersStyle.card__price_box}>
                        <p className={`${cardsOrdersStyle.card__price} text text_type_digits-default `}>{totalCard}</p>
                        <CurrencyIcon type="primary" />
                    </div>

                </div>
            </li> </Link>
    )
}