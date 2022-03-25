import feedStyle from './feed.module.css';
import { useSelector } from '../../../../services/hooks';
import { FC, useState, useEffect } from 'react';
const OrdesDoneList: any = () => {
    const { orders } = useSelector(state => state.wsOrdes);
    const [ordersTemp, setOrdesTemp] = useState([]);
    const filterDoneOrder = () => {
        if (orders !== null) {
            const tempOrder = orders.orders.filter((el: any) => el.status === 'done')
                .slice(0, 5).map((el: any) => el.number)
            setOrdesTemp(tempOrder)
        }
    }
    useEffect(() => {
        filterDoneOrder()
    }, [orders])
    if (ordersTemp.length > 0) {
        const temp = ordersTemp.map((el: any) =>
            <li className={`text text_type_digits-default ${feedStyle.statistics__number}`}>{el}</li>
        )
        return temp
    }
    return (
        <li className={'text text_type_main-small'}>Готовых заказов нет</li>
    )
}
const OrdesNotDoneList: any = () => {
    const { orders } = useSelector(state => state.wsOrdes);
    const [ordersTemp, setOrdesTemp] = useState([]);
    const filterDoneOrder = () => {
        if (orders !== null) {
            const tempOrder = orders.orders.filter((el: any) => el.status === 'pending')
                .slice(0, 5).map((el: any) => el.number)
            setOrdesTemp(tempOrder)
        }
    }
    useEffect(() => {
        filterDoneOrder()
        console.log(ordersTemp)
    }, [orders])
    if (ordersTemp.length > 0) {
        const temp = ordersTemp.map((el: any) =>
            <li className={'text text_type_digits-default'}>{el}</li>
        )
        return temp
    }
    return (
        <li className={'text text_type_main-small'}>Все заказы готовы</li>
    )
}




export const FeedOrderStatistics = () => {
    const { orders } = useSelector(state => state.wsOrdes);

    // console.log(orders)
    return (
        <div className={feedStyle.statistics}>
            <div className={feedStyle.statistics__number_order}>
                <div className={feedStyle.statistics__number_box}>
                    <p className='text text_type_main-medium mb-6'>Готовы:</p>
                    <ul className={feedStyle.statistics__number_list}>
                        <OrdesDoneList />
                    </ul>
                </div>
                <div className={feedStyle.statistics__number_box}>
                    <p className='text text_type_main-medium  mb-6'>В работе:</p>
                    <ul className={feedStyle.statistics__number_list}>
                        <OrdesNotDoneList />
                    </ul>
                </div>
            </div>
            <div>
                <p className="text text_type_main-medium">
                    Выполнено за все время:
                </p>
                {orders && (<p className="text text_type_digits-large">{orders.total}</p>)}
            </div>
            <div>
                <p className="text text_type_main-medium">
                    Выполнено за сегодня:
                </p>

                {orders && (<p className="text text_type_digits-large">{orders.totalToday}</p>)}

            </div>

        </div>
    )
}