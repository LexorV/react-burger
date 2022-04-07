import modalOverlayStyle from './modalOverlay.module.css';
import { useSelector } from '../../services/hooks';
import { TmodalOverlayComponent } from '../../services/types/ModalType';
import { FC } from 'react';


export const ModalOverlay: FC<TmodalOverlayComponent> = (props) => {
    const { modalOpen } = useSelector((state: any) => state.ingredientDetail)
    const handleCloseOverlay = (e: any) => {
        if (e.target === e.currentTarget) {
            props.closeModal()
        }
    }
    if (modalOpen) {
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
export default ModalOverlay