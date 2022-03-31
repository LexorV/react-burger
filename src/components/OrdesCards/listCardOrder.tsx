import { OrderCard } from './OrderCard';
import { FC, useState, useEffect } from 'react';
export const CardListOrder: any = ({orders}:any) => {
    const [ordersTemp, setOrdesTemp] = useState([]);
    useEffect(() => {
        if (orders !== null) {
            setOrdesTemp(orders.orders)
        }
    }, [orders])
    if (ordersTemp.length > 0) {
        const test = ordersTemp.map((el: any) =>
            <OrderCard key={el._id} ordesData={el} />
        )
        return test
    }
    else {
        return (
            <p>Заказов нет</p>
        )
    }
}