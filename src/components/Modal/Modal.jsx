import React from 'react';
import modalStyle from './modal.module.css'
import { createPortal } from 'react-dom';
import ModalOverlay  from '../ModalOverlay/ModalOverlay.jsx';
//import '../ModalOverlay/modal-overlay.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
export default function Modal(props) {
    const checkHeight = () => {
        if(props.height === 718) {
            return modalStyle.modal_container_height_718
        }
        else {
            return modalStyle.modal_container_height_539
        }

    }
    const element = document.getElementById('modal');
    console.log(props.closeModal)
    return createPortal(
        <ModalOverlay element={element} closeModal={props.closeModal} elementIsOpen={props.elementIsOpen}>
            <div className={ `${modalStyle.modal_container} ${checkHeight()}`}>
                <button onClick={props.closeModal} type="button" className={modalStyle.modal_btn_close}>
                    <CloseIcon />
                </button>
                {props.children}
            </div>
        </ModalOverlay>, element
    )
}