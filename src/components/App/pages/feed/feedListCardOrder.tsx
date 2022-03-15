import {FeedOrderCard} from './feedOrderCard';
import feedStyle from './feed.module.css'
import {FC} from 'react';
export const FeedListCardOrder:FC = () => {
    return (
        <div className={feedStyle.box_cards}>
            <h1 className='text text_type_main-large mt-10 pb-2'>Лента заказов</h1>
            <ul className={feedStyle.card__list}>
                <FeedOrderCard />
                <FeedOrderCard />
                <FeedOrderCard />
                <FeedOrderCard />
                <FeedOrderCard />
            </ul>

        </div>
    )
}