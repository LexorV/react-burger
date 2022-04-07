import { OrderCard } from './OrderCard';
import { useState, useEffect } from 'react';
export const CardListOrder = ({orders}:any) => {
    const [ordersTemp, setOrdesTemp] = useState([]);
    useEffect(() => {
        if (orders !== null) {
            setOrdesTemp(orders.orders)
        }
    }, [orders])
    if (ordersTemp.length > 0) {
return (
    <>
    {
        ordersTemp.map((el: any) =>
        <OrderCard key={el._id} ordesData={el} />)
    }
    </>
)

    }
    else {
        return (
            <p>Заказов нет</p>
        )
    }
}