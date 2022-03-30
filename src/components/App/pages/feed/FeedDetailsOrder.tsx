import feedStyle from './feed.module.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from '../../../../services/hooks';
import { wsConnectionStart } from '../../../../services/action/wsOrdes';
import { urlWebSoketFeed } from '../../../../utils/burgerApi'
import { orderDateChange, ordesCardFilter, totalCardOrder } from '../../../../utils/utils';
import {
    CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
const IngredientsInOrder = ({ oderData }: any) => {
    if (oderData) {
        return oderData.map((el: any) =>
        (<li key={el._id} className={feedStyle.details_list_ingredient}>
            <img className={`${feedStyle.card__picture} mr-4`} alt='картинка' src={el.image}></img>
            <p className='text text_type_main-small mr-6'>{el.name}</p>
            <div className={feedStyle.details_ingredient_price_box}>
                <p>{`${el.numberIngred} x ${el.numberIngred * el.price}`}</p>
                <CurrencyIcon type="primary" />
            </div>
        </li>)

        )
    }
    else {
        return (
            <p>Странно ингредиетов нет</p>
        )
    }
}


export const FeedDetailsOrder = () => {
    const { orders } = useSelector(state => state.wsOrdes);
    const { ingredients } = useSelector(state => state.ingredients);
    const [ordersTemp, setOrdesTemp] = useState<any>(null);
    const [ingredientsArray, setingredientsArray] = useState<any>(null);
    const [totalCard, setTotalCard] = useState(0);
    const [ordesDate, setOrdesDate] = useState('01.01.2022');
    const dispatch = useDispatch();
    const urlIdData = useParams();
    useEffect(() => {
        if (orders && ingredients) {
            const ordersCard: any = orders.orders.find((e: any) => e._id === urlIdData.id);
            setingredientsArray(ordesCardFilter(ordersCard, ingredients))
            setOrdesTemp(ordersCard)
        }
        else {
            dispatch(wsConnectionStart(urlWebSoketFeed));
        }
    }, [orders, ingredients])
    useEffect(() => {
        if (ordersTemp) {
            setOrdesDate(orderDateChange(ordersTemp.createdAt))
        }
    }, [ordersTemp])
    useEffect(() => {
        if (ingredientsArray) {
            setTotalCard(totalCardOrder(ingredientsArray))
        }
    }, [ingredientsArray])

    return (
        <>
            {ordersTemp && ingredients && (
                <section className={feedStyle.details_main}>
                    <div className={feedStyle.details_main_popap}>
                        <h2 className={`text_type_main-small mt-10  mb-10 ${feedStyle.details_number_order}`}>{`#${ordersTemp.number}`}</h2>
                        <p className={`text text_type_main-medium mb-3 ${feedStyle.details_name}`}>{ordersTemp.name}</p>
                        <p style={ordersTemp.status === 'done' ? { color: '#00CCCC' } : { color: 'red' }} className={`${feedStyle.details_status_text} text text_type_main-small mb-15`}>{ordersTemp.status === 'done' ? 'Выполнен' : 'не выполнен'}</p>
                        <p className='text text_type_main-medium mb-6'>Cостав:</p>
                        <ul className={feedStyle.details_lists}>
                            <IngredientsInOrder oderData={ingredientsArray} />
                        </ul>
                        <div className={feedStyle.details_bottom_box}>
                            <p className='text_color_inactive'>{ordesDate}</p>
                            <div className={feedStyle.details_box_price}>
                                <p className='text text_type_digits-default'>{totalCard}</p>
                                <CurrencyIcon type="primary" />
                            </div>
                        </div>
                    </div>
                </section>)
            }
        </>
    )
}