import orderDetailsStyles from './orderDetails.module.css';
import done from '../../images/done.png'
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
export default function OrderDetails({ elementIsOpen, closeModal }) {
    return (
        <Modal height={718} elementIsOpen={elementIsOpen} closeModal={closeModal}>
            <h2 className={`${orderDetailsStyles.position_center} mt-30 mb-8 text text_type_digits-large`}>034536</h2>
            <p className={`${orderDetailsStyles.position_center} text text_type_main-medium`}>идентификатор заказа</p>
            <img className={`${orderDetailsStyles.picture} mt-15 mb-15`} src={done} alt='Одобрено' />
            <p className={`${orderDetailsStyles.position_center} text text_type_main-small`}>Ваш заказ начали готовить</p>
            <p className={`${orderDetailsStyles.position_center} mt-2 text text_type_main-small text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
        </Modal>
    )
}
OrderDetails.propTypes = {
    closeModal: PropTypes.func.isRequired,
    elementIsOpen: PropTypes.bool.isRequired
};