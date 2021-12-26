import modalStyle from './modal.module.css'
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from '../ModalOverlay/ModalOverlay.jsx';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
export default function Modal(props) {
    const checkHeight = () => {
        if (props.height === 539) {
            return modalStyle.modal_container_height_539
        }
        else {
            return modalStyle.modal_container_height_718
        }
    }
    const element = document.getElementById('modal');
    return createPortal(
        <ModalOverlay closeModal={props.closeModal} element={element} elementIsOpen={props.elementIsOpen}>
            <div className={`${modalStyle.modal_container} ${checkHeight()}`}>
                <button onClick={props.closeModal} type="button" className={modalStyle.modal_btn_close}>
                    <CloseIcon />
                </button>
                {props.children}
            </div>
        </ModalOverlay>, element
    )
}
Modal.propTypes = {
    elementIsOpen: PropTypes.bool,
    closeModal: PropTypes.func,
    height: PropTypes.number
}