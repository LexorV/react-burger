import { FeedOrderCard } from './OrderCard';
import feedStyle from './feed.module.css';
import { FC, useState, useEffect } from 'react';
import { dataOrder } from '../../../../utils/testDataOrder';
import { wsConnectionStart } from '../../../../services/action/wsOrdes';
import { useSelector, useDispatch } from '../../../../services/hooks';

const CardListOrder: any = () => {
    const { orders } = useSelector(state => state.wsOrdes);
    const [ordersTemp, setOrdesTemp] = useState([]);
    useEffect(() => {
        if (orders !== null) {
            console.log(orders)
            setOrdesTemp(orders.orders)
        }
    }, [orders])
    if (ordersTemp.length > 0) {
        const test = ordersTemp.map((el: any) =>
            <FeedOrderCard ordesData={el} />
        )
        return test
    }
    else {
        return (
            <p>Заказов нет</p>
        )
    }
}
export const FeedListCardOrder: FC = () => {
    const { orders } = useSelector(state => state.wsOrdes)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(wsConnectionStart());
    }, []);


    return (
        <div className={feedStyle.box_cards}>
            <h1 className='text text_type_main-large mt-10 pb-2'>Лента заказов</h1>
            <ul className={feedStyle.card__list}>
                <CardListOrder />
            </ul>

        </div>
    )
}