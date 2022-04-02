import cardsOrdersStyle from './cardsOrders.module.css';
import { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from '../../services/hooks';
import { useLocation, Link } from "react-router-dom";
import { openOrderCard } from '../../services/action/orderCard';
import { orderDateChange, ordesCardFilter, totalCardOrder } from '../../utils/utils';
import {
    CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
const ListPicture = ({ pictureArray }: any) => {
    if (pictureArray.length > 0) {
        const test = pictureArray.map((el: any, index: any) =>
            <img key={el._id} className={cardsOrdersStyle.card__picture} style={{ zIndex: pictureArray.length - index }} alt={el.name} src={el.image}></img>
        ).slice(0, 5);
        return test
    }
    else {
        return (
            <p>Странно, бургеров в заказе нет</p>
        )
    }
}


export const OrderCard = ({ ordesData }: any) => {
    const { ingredients } = useSelector(state => state.ingredients);
    const { orders } = useSelector(state => state.wsOrdes);
    const [ingredientPictureArray, setIngredientPictureArray] = useState<any>([]);
    const [ordesDate, setOrdesDate] = useState('01.01.2022')
    const [numberMoreSix, setNumberMoreSix] = useState<any>(1);
    const [totalCard, setTotalCard] = useState(0);
    const [isHistory, setIsHistory] = useState(false);
    let location = useLocation();
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
  
   
    useEffect(() => {
        addIngredientsOrder()
        setOrdesDate(orderDateChange(ordesData.createdAt))
    }, [ingredients, ordesData])
    useEffect(() => {
        if(location.pathname === "/profile/orders") {
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
                { isHistory && (<p style={ordesData.status === 'done' ? { color: '#00CCCC' } : { color: 'white' }} className={`${cardsOrdersStyle.details_status_text} text text_type_main-small mb-6`}>{ordesData.status === 'done' ? 'Выполнен' : 'Готовится'}</p>)}
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