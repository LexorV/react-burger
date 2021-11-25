import React from 'react';
import PropTypes from 'prop-types';
import './ingredient-details.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay.jsx';
 const IngredientDetails = React.memo (({ modalOpen, closeModel, dataIngrid }) => {
    return (
        <ModalOverlay height={539} elementIsOpen={modalOpen} closeModel={closeModel} >
            <h2 className="mt-10 mr-10 ml-10 text text_type_main-large">Детали ингредиента</h2>
            <img className="ingredient-details__picture" src={dataIngrid.image} alt={dataIngrid.name} />
            <p className="mt-4 mb-8 text text_type_main-medium ingredient-details__name">{dataIngrid.name}</p>
            <ul className="ingredient-details__сomposition">
                <li className="ingredient-details__сomposition-list-box">
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{dataIngrid.calories}</p>
                </li>
                <li className="ingredient-details__сomposition-list-box">
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{dataIngrid.proteins}</p>
                </li>
                <li className="ingredient-details__сomposition-list-box">
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{dataIngrid.fat}</p>
                </li>
                <li className="ingredient-details__сomposition-list-box">
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{dataIngrid.carbohydrates}</p>
                </li>
            </ul>
        </ModalOverlay>
    )


})
IngredientDetails.propTypes = {
    modalOpen: PropTypes.bool,
    closeModel:PropTypes.bool,
    dataIngrid:PropTypes.object
}


export default IngredientDetails