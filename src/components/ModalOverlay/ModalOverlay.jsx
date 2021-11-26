import './modal-overlay.css';
import React from 'react';
export default function ModalOverlay(props) {
    //const [popap, setPopap] = React.useState(document.createElement())
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
        return () => {
            document.removeEventListener('keydown', handleEscClose);
        };
    });
    const handleCloseOverlay = (e) => {
        if (e.target === e.currentTarget) {
            closeModal()
        }
    }
    if (props.elementIsOpen) {
        document.body.appendChild(element)
        return (
            <div onClick={handleCloseOverlay} className="modal-overlay modal-overlay_open">
                    {props.children}
                </div>
        )
    }
    else {
        return null
    }
}/*
ModalOverlay.PropTypes = {
    height: PropTypes.number,
    closeModel: PropTypes.bool,
    elementIsOpen: PropTypes.bool
};*/
