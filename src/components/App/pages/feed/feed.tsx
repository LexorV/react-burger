import feedStyle from  './feed.module.css';
import { FeedOrderStatistics } from './feedOrderStatistics';
import { useSelector, useDispatch } from '../../../../services/hooks';
import { FC, useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import {urlWebSoketFeed} from '../../../../utils/burgerApi';
import {CardListOrder} from '../../../../components/OrdesCards/listCardOrder'
import { wsConnectionStart, wsConnectionClosed } from '../../../../services/action/wsOrdes';
const FeedListCardOrder: FC = () => {
    const { orders } = useSelector(state => state.wsOrdes)
    return (
        <div className={feedStyle.box_cards}>
            <h1 className='text text_type_main-large mt-10 pb-2'>Лента заказов</h1>
            <ul className={feedStyle.card__list}>
                <CardListOrder  orders={orders} />
            </ul>

        </div>
    )
}
export const Feed = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(wsConnectionStart(urlWebSoketFeed));
        return () => {
            dispatch(wsConnectionClosed())
        }
    }, [dispatch]);
    useEffect(() => {
        if(location.pathname !== '/feed') {
            navigate('/feed');
        }
    }, [])
return (
    <section className={feedStyle.feed}>
        <FeedListCardOrder/>
        <FeedOrderStatistics />
    </section>
)
}