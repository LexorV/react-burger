import feedStyle from './feed.module.css';
import { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from '../../../../services/hooks';
import { useLocation, Link } from "react-router-dom";
import { openOrderCard } from '../../../../services/action/orderCard';
import { orderDateChange, ordesCardFilter, totalCardOrder } from '../../../../utils/utils';
import {
    CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
const ListPicture = ({ pictureArray }: any) => {
    if (pictureArray.length > 0) {
        const test = pictureArray.map((el: any, index: any) =>
            <img className={feedStyle.card__picture} style={{ zIndex: pictureArray.length - index }} alt={el.name} src={el.image}></img>
        ).slice(0, 5);
        return test
    }
    else {
        return (
            <p>Странно, бургеров в заказе нет</p>
        )
    }
}


export const FeedOrderCard = ({ ordesData }: any) => {
    const { ingredients } = useSelector(state => state.ingredients);
    const { orders } = useSelector(state => state.wsOrdes);
    const [ingredientPictureArray, setIngredientPictureArray] = useState<any>([]);
    const [ordesDate, setOrdesDate] = useState('01.01.2022')
    const [numberMoreSix, setNumberMoreSix] = useState<any>(1);
    const [totalCard, setTotalCard] = useState(0);
    const addIngredientsOrder = () => {
        if (ingredients && orders && ordesData) {
            const ordersIngredient = ingredients.filter(el => ordesData.ingredients.includes(el._id));
            setNumberMoreSix(ordersIngredient.length - 5);
            setTotalCard(totalCardOrder(ordesCardFilter(ordesData, ingredients)))
            setIngredientPictureArray(ordersIngredient)
        }
    }
    const dispatch = useDispatch()
    const openModal = () => {
        dispatch(openOrderCard(ordesData))
    }
    let location = useLocation();
    useEffect(() => {
        addIngredientsOrder()
        setOrdesDate(orderDateChange(ordesData.createdAt))
    }, [ingredients, ordesData])

    return (
        <Link className={feedStyle.card__liks_style} to={{ pathname: `/feed/${ordesData._id}` }} state={{ positionPopap: location }}>
            <li onClickCapture={openModal} className={feedStyle.card}>
                <div className={feedStyle.card__number_box}>
                    <p className="text text_type_digits-default">{ordesData.number}</p>
                    <p className="text text_type_main-default text_color_inactive">{ordesDate}</p>
                </div>
                <h2 className='text text_type_main-medium pb-6'>{ordesData.name}</h2>
                <div className={feedStyle.card__bottom_box}>
                    <div className={feedStyle.card__picture_box} >
                        <ListPicture pictureArray={ingredientPictureArray} />
                        {ingredientPictureArray[6] && (<div className={feedStyle.card_picture_number_box}>
                            <img className={`${feedStyle.card__picture} ${feedStyle.card_picture_last}`}
                                style={{ zIndex: 8 }} alt={ingredientPictureArray[6].name}
                                src={ingredientPictureArray[6].image}></img><p className={feedStyle.card_picture_number_text}>{`+${numberMoreSix}`}</p></div>)}
                    </div>
                    <div className={feedStyle.card__price_box}>
                        <p className={`${feedStyle.card__price} text text_type_digits-default `}>{totalCard}</p>
                        <CurrencyIcon type="primary" />
                    </div>

                </div>
            </li> </Link>
    )
}