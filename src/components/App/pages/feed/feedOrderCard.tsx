import feedStyle from './feed.module.css';
import { FC, useState, useEffect } from 'react';
import {
    CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
export const  FeedOrderCard = ({ordesData}:any) =>{
return (
    <li className={feedStyle.card}>
        <div className={feedStyle.card__number_box}>
            <p className="text text_type_digits-default">{ordesData.number}</p>
            <p className="text text_type_main-default text_color_inactive">{ordesData.createdAt}</p>
        </div>
        <h2 className='text text_type_main-medium pb-6'>{ordesData.name}</h2>
        <div className={feedStyle.card__bottom_box}>
            <div>
                <img className={feedStyle.card__picture} style={{zIndex:8}} alt="Картинка" src="https://code.s3.yandex.net/react/code/sp_1.png"></img>
                <img className={feedStyle.card__picture} style={{zIndex:7}} alt="Картинка" src="https://code.s3.yandex.net/react/code/bun-01.png"></img>
                <img className={feedStyle.card__picture} alt="Картинка" src="https://code.s3.yandex.net/react/code/bun-01.png"></img>
            </div>
            <div className={feedStyle.card__price_box}>
                <p className={`${feedStyle.card__price} text text_type_digits-default `}>340</p>
                <CurrencyIcon type="primary" />
            </div>

        </div>
    </li>
)
}