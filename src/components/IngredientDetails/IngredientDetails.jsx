import React from 'react';
import './ingredient-details.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay.jsx';
export default function IngredientDetails({ modalOpen, toggleModal, closeModel }) {
    return (
        <ModalOverlay elementIsOpen={modalOpen} toggleModal={toggleModal} closeModel={closeModel} >
            <p>Test</p>
        </ModalOverlay>
    )


}