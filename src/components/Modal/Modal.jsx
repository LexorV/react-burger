import React from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay  from '../ModalOverlay/ModalOverlay.jsx';
import '../ModalOverlay/modal-overlay.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
export default function Modal(props) {
    const element = document.getElementById('modal');
    console.log(props.closeModal)
    return createPortal(
        <ModalOverlay element={element} closeModal={props.closeModal} elementIsOpen={props.elementIsOpen}>
            <div className={`modal-overlay__container modal-overlay__container_height_${props.height}`}>
                <button onClick={props.closeModal} type="button" className="modal-overlay__btn-close ">
                    <CloseIcon />
                </button>
                {props.children}
            </div>
        </ModalOverlay>, element
    )
}