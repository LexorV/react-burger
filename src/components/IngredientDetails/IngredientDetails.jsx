import React from 'react';
import PropTypes from 'prop-types';
import ingredientDetailsStyles from './ingredientDetails.module.css';
import Modal from '../Modal/Modal';
const IngredientDetails = React.memo(({ modalOpen, closeModal, dataIngrid }) => {

    return (
        <Modal height={539} elementIsOpen={modalOpen} closeModal={closeModal} >
            <h2 className="mt-10 mr-10 ml-10 text text_type_main-large">Детали ингредиента</h2>
            <img className={ingredientDetailsStyles.picture} src={dataIngrid.image} alt={dataIngrid.name} />
            <p className={`${ingredientDetailsStyles.name} mt-4 mb-8 text text_type_main-medium`}>{dataIngrid.name}</p>
            <ul className={ingredientDetailsStyles.сomposition}>
                <li className={ingredientDetailsStyles.сomposition_list_box}>
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{dataIngrid.calories}</p>
                </li>
                <li className={ingredientDetailsStyles.сomposition_list_box}>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{dataIngrid.proteins}</p>
                </li>
                <li className={ingredientDetailsStyles.сomposition_list_box}>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{dataIngrid.fat}</p>
                </li>
                <li className={ingredientDetailsStyles.сomposition_list_box}>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{dataIngrid.carbohydrates}</p>
                </li>
            </ul>
        </Modal>
    )


})
IngredientDetails.propTypes = {
    modalOpen: PropTypes.bool,
    closeModel: PropTypes.bool,
    dataIngrid: PropTypes.object
}


export default IngredientDetails