import orderDetailsStyles from './orderDetails.module.css';
import done from '../../images/done.png';
export default function OrderDetails({ order }: any) {
    if (order !== null) {
        return (
            <div className={orderDetailsStyles.main}>
                <h2 className={`${orderDetailsStyles.position_center} mt-30 mb-8 text text_type_digits-large`}>{order.number}</h2>
                <p className={`${orderDetailsStyles.position_center} text text_type_main-medium`}>идентификатор заказа</p>
                <img className={`${orderDetailsStyles.picture} mt-15 mb-15`} src={done} alt='Одобрено' />
                <p className={`${orderDetailsStyles.position_center} text text_type_main-small`}>Ваш заказ начали готовить</p>
                <p className={`${orderDetailsStyles.position_center} mt-2 text text_type_main-small text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
            </div>
        )
    }
    else { return (<h2> Загрузка...</h2>) }
}