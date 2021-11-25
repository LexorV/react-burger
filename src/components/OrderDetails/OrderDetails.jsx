import './order-details.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay.jsx';
import done from '../../images/done.png'
import PropTypes from 'prop-types';

export default function OrderDetails({elementIsOpen, closeModel}) {
    return(
        <ModalOverlay height={718} elementIsOpen={elementIsOpen} closeModel={closeModel}>
            <h2 className="mt-30 mb-8 text text_type_digits-large position">034536</h2>
            <p className="text text_type_main-medium position">идентификатор заказа</p>
            <img className="order-details__picture mt-15 mb-15" src={done} alt='Одобрено' />
            <p className="text text_type_main-small position">Ваш заказ начали готовить</p>
            <p className="mt-2 text text_type_main-small text_color_inactive position">Дождитесь готовности на орбитальной станции</p>
        </ModalOverlay>
    )
}
OrderDetails.propTypes = {
    closeModel: PropTypes.bool,
    elementIsOpen: PropTypes.bool
};