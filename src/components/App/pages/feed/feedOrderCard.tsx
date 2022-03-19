import feedStyle from './feed.module.css';
import { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from '../../../../services/hooks';
import {
    CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
const ListPicture = ({pictureArray}:any) => {
    if (pictureArray.length > 0) {
        const test = pictureArray.map((el: any) =>
        <img className={feedStyle.card__picture} style={{zIndex:8}} alt={el.name} src={el.image}></img>
        ).slice(0, 5);
        return test
    }
    else {
        return (
            <p>Странно, бургеров в заказе нет</p>
        )
    }
}


export const  FeedOrderCard = ({ordesData}:any) =>{
    const { ingredients } = useSelector(state => state.ingredients);
    const [ingredientPictureArray, setIngredientPictureArray] = useState<any>([])
    const addIngredientsOrder = () => {
        let ordersIngredient
        if (ingredients) {
            ordersIngredient = ingredients.filter(el => ordesData.ingredients.includes(el._id))
            //console.log(ordersIngredient)
            setIngredientPictureArray(ordersIngredient)
        }
        return ordersIngredient
    }
    useEffect(() => {
        addIngredientsOrder()
    },[ingredients, ordesData])

return (
    <li className={feedStyle.card}>
        <div className={feedStyle.card__number_box}>
            <p className="text text_type_digits-default">{ordesData.number}</p>
            <p className="text text_type_main-default text_color_inactive">{ordesData.createdAt}</p>
        </div>
        <h2 className='text text_type_main-medium pb-6'>{ordesData.name}</h2>
        <div className={feedStyle.card__bottom_box}>
            <div className={feedStyle.card__picture_box} >
                <ListPicture pictureArray= {ingredientPictureArray} />
                {ingredientPictureArray[6] && (<div className={feedStyle.card_picture_number_box}>
                <img className={`${feedStyle.card__picture} ${feedStyle.card_picture_last}`}
                style={{zIndex:8}} alt={ingredientPictureArray[6].name} 
                src={ingredientPictureArray[6].image}></img><p className={feedStyle.card_picture_number_text}>+2</p></div>)}
            </div>
            <div className={feedStyle.card__price_box}>
                <p className={`${feedStyle.card__price} text text_type_digits-default `}>340</p>
                <CurrencyIcon type="primary" />
            </div>

        </div>
    </li>
)
}