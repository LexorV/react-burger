import modalStyle from './modal.module.css'
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from '../ModalOverlay/ModalOverlay.jsx';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import {CLOSE_INGREDIENT_DETAILS} from '../../services/action/IngredientDetail'
export default function Modal(props) {
    const dispatch = useDispatch();
    const checkHeight = () => {
        if (props.height === 539) {
            return modalStyle.modal_container_height_539
        }
        else {
            return modalStyle.modal_container_height_718
        }
    }
    const closeModal = () =>  {
        dispatch({type: CLOSE_INGREDIENT_DETAILS})
    }
    const element = document.getElementById('modal');
    return createPortal(
        <ModalOverlay element={element}>
            <div className={`${modalStyle.modal_container} ${checkHeight()}`}>
                <button onClick={closeModal} type="button" className={modalStyle.modal_btn_close}>
                    <CloseIcon />
                </button>
                {props.children}
            </div>
        </ModalOverlay>, element
    )
}
Modal.propTypes = {
    elementIsOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    height:PropTypes.number
}