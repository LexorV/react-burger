import './modal-overlay.css';
import React from 'react';
import {createPortal} from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
export default function ModalOverlay({elementOpen}) {
    const [isOpen, setIsopen] = React.useState(elementOpen);
    const element = React.useMemo(() => document.createElement("div"), []);
    const height = "718"
    //const [popap, setPopap] = React.useState(document.createElement())
    console.log(isOpen);
    React.useEffect(() => {
        document.body.appendChild(element)
        return () => {
          document.body.removeChild(element)
        }
      }, [element])

      const closeModal = () => {
        setIsopen(isOpen === false ? true: false )
      }
      React.useEffect(() => {
        const handleEscClose = (e) => {
            if(e.key === 'Escape') {
                closeModal()
                document.removeEventListener('keydown', handleEscClose);
            }

        }
        document.addEventListener('keydown',handleEscClose);
        return () => {
          document.removeEventListener('keydown', handleEscClose);
        };
      }, []);
      const handleCloseOverlay = (e) => {
        if(e.target === e.currentTarget) {
            closeModal()
        }
    }
if (isOpen) {
    return createPortal(
        <div onClick={handleCloseOverlay} className="modal-overlay modal-overlay_open">
            <div className={`modal-overlay__container modal-overlay__container_height_${height}`}>
                <button type="button" onClick={closeModal} className="modal-overlay__btn-close ">
                    <CloseIcon />
                </button>
            </div>
        </div>, element
    )
}
else {
    return null
}
}