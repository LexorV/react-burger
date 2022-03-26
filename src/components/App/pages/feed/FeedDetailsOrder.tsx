import feedStyle from './feed.module.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from '../../../../services/hooks';
import { wsConnectionStart } from '../../../../services/action/wsOrdes';
import { v4 as uuidv4 } from 'uuid';
import {
    CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
const IngredientsInOrder = ({oderData}:any) => {
    console.log(oderData)
if(oderData) {
    return  oderData.map((el:any) =>
    (<li className = {feedStyle.details_list_ingredient}>
                    <img className={`${feedStyle.card__picture} mr-4`} alt='картинка'  src={el.image}></img>
                    <p className='text text_type_main-small mr-6'>{el.name}</p>
                    <div className={feedStyle.details_ingredient_price_box}>
                        <p>{`${el.numberIngred} x ${el.numberIngred * el.price}`}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                </li>)

)}
else {
    return(
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
    const dispatch = useDispatch();
    const urlIdData = useParams();
    
    useEffect(() => {
        if (orders && ingredients) {
            const ordersCard:any = orders.orders.find((e: any) => e._id === urlIdData.id);
            const testArray = ordersCard.ingredients.map((el:any) => {
                const test2 = ordersCard.ingredients.map((element:any) => {
                    let number = 0
                    number = element === el ? number + 1: number;
                    return number
                })
                const test4 = test2.reduce((a:any, b:any) => a + b)

                const test1 = {id:el, number:test4 }
                return test1
            })
            const ingredientsArrayCard = ingredients.filter(el => ordersCard.ingredients.includes(el._id)).map((element) => {
                const result = testArray.find((e:any) => e.id === element._id)
                element['numberIngred'] =  result.number
                return element
            })
            const totalCardTemp = ingredientsArrayCard.map((el:any) => el.price * el.numberIngred).reduce((sum, current) => sum + current);
            setTotalCard(totalCardTemp)
            //console.log(ordersCard)
            setingredientsArray(ingredientsArrayCard)
            setOrdesTemp(ordersCard)

        }
        else {
            dispatch(wsConnectionStart());
        }
    }, [orders, ingredients])
    return (
        <>
        { ordersTemp && ingredients && (
        <section className={feedStyle.details_main}>
        <div  className={feedStyle.details_main_popap}>
            <h2 className={`text_type_main-small mt-10  mb-10 ${feedStyle.details_number_order}`}>{`#${ordersTemp.number}`}</h2>
            <p className='text text_type_main-small mb-3'>{ordersTemp.name}</p>
            <p className='text text_type_main-small mb-15'>Выполнен</p>
            <p className ='text text_type_main-medium mb-6'>Cостав:</p>
            <ul className={feedStyle.details_lists}>
               <IngredientsInOrder oderData={ingredientsArray} />
            </ul>
            <div className={feedStyle.details_bottom_box}>
                <p className='text_color_inactive'>{ordersTemp.createdAt}</p>
                <div className ={feedStyle.details_box_price}>
                <p className ='text text_type_digits-default'>{totalCard}</p>
                <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
        </section>)
        }
        </>
    )
}