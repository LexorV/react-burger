import modalOverlayStyle from './modalOverlay.module.css'
import React from 'react';
import PropTypes from 'prop-types';
export default function ModalOverlay(props) {
    const element = document.getElementById('modal');
    const closeModal = () => {
        props.closeModal()
    }
    React.useEffect(() => {
        const handleEscClose = (e) => {
            e.preventDefault()
            if (e.key === 'Escape') {
                document.removeEventListener('keydown', handleEscClose);
                props.closeModal()
            }
        }
        document.addEventListener('keydown', handleEscClose);
    });
    const handleCloseOverlay = (e) => {
        if (e.target === e.currentTarget) {
            closeModal()
        }
    }
    if (props.elementIsOpen) {
        document.body.appendChild(element)
        return (
            <div onClick={handleCloseOverlay} className={modalOverlayStyle.modal_overlay}>
                {props.children}
            </div>
        )
    }
    else {
        return null
    }
}

ModalOverlay.propTypes = {
    elementIsOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};
