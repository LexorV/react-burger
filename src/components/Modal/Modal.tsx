import React from 'react';
import {FC} from 'react';
import modalStyle from './modal.module.css'
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {TmodalComponent} from '../../services/types/ModalType';
export const Modal:FC<TmodalComponent> = (props) => {
    const checkHeight = () => {
        if (props.height === 539) {
            return modalStyle.modal_container_height_539
        }
        else {
            return modalStyle.modal_container_height_718
        }
    }
    console.log( typeof props.closeModal)
    React.useEffect(() => {
        const handleEscClose = (e:any) => {
            e.preventDefault()
            e.key === 'Escape' &&  props.closeModal();
        }
        document.addEventListener('keydown', handleEscClose);
        return () => {
            document.removeEventListener('keydown', handleEscClose);
        }
    }, [props.closeModal]);
    const element:any = document.getElementById('modal');
    return createPortal(
        <ModalOverlay closeModal={props.closeModal}>
            <div className={`${modalStyle.modal_container} ${checkHeight()}`}>
                <button onClick={() => props.closeModal()} type="button" className={modalStyle.modal_btn_close}>
                    <CloseIcon type="primary" />
                </button>
                {props.children}
            </div>
        </ModalOverlay>, element
    )
}
export default Modal
/*
Modal.propTypes = {
    closeModal: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.oneOf([undefined]).isRequired]),
    height: PropTypes.number.isRequired
}*/