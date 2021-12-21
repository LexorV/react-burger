import modalOverlayStyle from './modalOverlay.module.css'
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {CLOSE_INGREDIENT_DETAILS} from '../../services/action/IngredientDetail'


export default function ModalOverlay(props) {
    const element = document.getElementById('modal');
    const {modalOpen} = useSelector(state => state.ingredientDetail)
    const dispatch = useDispatch();
    React.useEffect(() => {
        const handleEscClose = (e) => {
            e.preventDefault()
            if (e.key === 'Escape') {
                document.removeEventListener('keydown', handleEscClose);
                dispatch({type: CLOSE_INGREDIENT_DETAILS})
            }
        }
        document.addEventListener('keydown', handleEscClose);
    });
    const handleCloseOverlay = (e) => {
        if (e.target === e.currentTarget) {
            dispatch({type: CLOSE_INGREDIENT_DETAILS})
        }
    }
    if (modalOpen) {
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
