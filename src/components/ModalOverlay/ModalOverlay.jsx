import './modal-overlay.css';
import React from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
export default function ModalOverlay(props) {
    const element = React.useMemo(() => document.createElement("div"), []);
    const height = "718"
    //const [popap, setPopap] = React.useState(document.createElement())
    const closeModal = () => {
        props.closeModel()
        document.body.removeChild(element)
    }
    React.useEffect(() => {
        const handleEscClose = (e) => {
            e.preventDefault()
            if (e.key === 'Escape') {
                closeModal()
                //document.removeEventListener('keydown', handleEscClose);
            }
        }
        document.addEventListener('keydown', handleEscClose);
        return () => {
            document.removeEventListener('keydown', handleEscClose);
        };
    }, []);
    const handleCloseOverlay = (e) => {
        if (e.target === e.currentTarget) {
            closeModal()
        }
    }
    if (props.elementIsOpen) {
        document.body.appendChild(element)
        return createPortal(
            <div onClick={handleCloseOverlay} className="modal-overlay modal-overlay_open">
                <div className={`modal-overlay__container modal-overlay__container_height_${height}`}>
                    <button onClick={closeModal} type="button" className="modal-overlay__btn-close ">
                        <CloseIcon />
                    </button>
                    {props.children}
                </div>
            </div>, element
        )
    }
    else {
        return null
    }
}