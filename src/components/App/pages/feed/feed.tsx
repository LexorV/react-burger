import feedStyle from  './feed.module.css';
import {FeedListCardOrder} from './feedListCardOrder';
import { FeedOrderStatistics } from './feedOrderStatistics';
import { useSelector, useDispatch } from '../../../../services/hooks';
import { FC, useState, useEffect } from 'react';
import { wsConnectionStart, wsConnectionClosed } from '../../../../services/action/wsOrdes';
export const Feed = () => {
    const { orders } = useSelector(state => state.wsOrdes)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(wsConnectionStart());
        return () => {
            dispatch(wsConnectionClosed())
        }
    }, [dispatch]);
return (
    <section className={feedStyle.feed}>
        <FeedListCardOrder />
        <FeedOrderStatistics />
    </section>
)
}