import React from 'react';
import './ingredient-details.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay.jsx';
 const IngredientDetails = React.memo (({ modalOpen, closeModel, dataIngrid }) => {
    return (
        <ModalOverlay elementIsOpen={modalOpen} closeModel={closeModel} >
            <p>{dataIngrid.name}</p>
        </ModalOverlay>
    )


})
export default IngredientDetails