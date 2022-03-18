import { FeedOrderCard } from './feedOrderCard';
import feedStyle from './feed.module.css';
import { useSelector, useDispatch } from '../../../../services/hooks';
import { FC, useState, useEffect } from 'react';
import { dataOrder } from '../../../../utils/testDataOrder';
import { wsConnectionStart } from '../../../../services/action/webSoket';

const CardListOrder: any = () => {
    const { orders } = useSelector(state => state.ws);
    const [ordersTemp, setOrdesTemp] = useState([]);
    useEffect(() => {
        if (orders !== null) {
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
    const { ingredients } = useSelector(state => state.ingredients);
    const { orders } = useSelector(state => state.ws)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(wsConnectionStart());
    }, []);
    /*
    useEffect(() => {
        console.log(orders.orders)
    },[orders]);
*/

    const addIngredientsOrder = () => {
        let ordersIngredient
        if (ingredients) {
            console.log(ingredients)
            ordersIngredient = ingredients.filter(el => dataOrder.orders.ingredients.includes(el._id))
            console.log(ordersIngredient)
            return ordersIngredient
        }
    }


    return (
        <div className={feedStyle.box_cards}>
            <h1 className='text text_type_main-large mt-10 pb-2'>Лента заказов</h1>
            <ul className={feedStyle.card__list}>
                <CardListOrder />
            </ul>

        </div>
    )
}