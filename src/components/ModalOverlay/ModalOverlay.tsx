import modalOverlayStyle from './modalOverlay.module.css'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {TmodalOverlayComponent} from '../../services/types/ModalType';
import {FC} from 'react';


export const ModalOverlay:FC<TmodalOverlayComponent> = (props) => {
    const { modalOpen } = useSelector((state:any) => state.ingredientDetail)
    const handleCloseOverlay = (e:any) => {
        if (e.target === e.currentTarget) {
            props.closeModal()
        }
    }
    if (modalOpen) {
       // document.body.appendChild(element)
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
    closeModal: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.oneOf([undefined]).isRequired]),
};
export default ModalOverlay
