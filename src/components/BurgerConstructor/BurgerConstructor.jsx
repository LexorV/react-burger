import React from 'react';
import { CurrencyIcon, DragIcon, ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyle from './burgerConstructor.module.css';
import OrderDetails from '../OrderDetails/OrderDetails.jsx';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal.jsx';
import {IngredientsContext} from '../../services/appContext.js'
const IngredientInConstructorLock = ({ingredients, type, position}) => {
   return (
   <div className={burgerConstructorStyle.lock_elements}>
   <ConstructorElement type={type} isLocked={true}
      thumbnail={ingredients[0].image} text={`${ingredients[0].name} ${position}`} price={ingredients[0].price} />
</div>)
}
const IngredientInConstructor = ({ingredients, type}) => {
   if (ingredients !==null) {
      const listItems = ingredients.filter(e => e.type !== type).map((ingredients) => 
      <li key={ingredients._id} className={burgerConstructorStyle.open_elements_box}>
      <DragIcon type="primary" />
      <ConstructorElement  isLocked={false}
         thumbnail={ingredients.image} text={ingredients.name} price={ingredients.price} />
   </li>
      )
      return listItems
   }
   else {
      <p>Выберите ингредиент</p>
   }
}

export default function BurgerConstructor() {
   const {ingredients, setIngredients} = React.useContext(IngredientsContext)
   const [modalIsOpen, setModalIsOpen] = React.useState(false)
   const openModal = () => {
      if (modalIsOpen === false) {
         setModalIsOpen(true)
      }
   }
   const closeModal = () => {
      if (modalIsOpen === true) {
         setModalIsOpen(false)
      }
   }
   if (ingredients !== null) {
      return (
         <section className={`${burgerConstructorStyle.constructor} pt-25 mt-4 `}>
            <Modal height={718} elementIsOpen={modalIsOpen} closeModal={closeModal}>
            <OrderDetails />
            </Modal>
            <IngredientInConstructorLock type={'top'} position={'Верх'} ingredients={ingredients}  />
            <ul className={`${burgerConstructorStyle.open_elements} pt-4`}>
               <IngredientInConstructor type={'bun'} ingredients ={ingredients} />
            </ul>
            <IngredientInConstructorLock type={'bottom'} position={'Низ'} ingredients={ingredients}  />
            <div className={`${burgerConstructorStyle.price_container} mt-10 mr-4`}>
               <div className={`${burgerConstructorStyle.price_text} mr-10`}>
                  <p className="text text_type_digits-medium pr-2"> 400</p>
                  <CurrencyIcon type="primary" />
               </div>
               <Button onClick={openModal} type="primary" size="large">
                  Оформить заказ
               </Button>
            </div>
         </section>
      )
   }
   else {
      return (
         <h2> Загрузка...</h2>
      )
   }
}

BurgerConstructor.propTypes = {
   dataIngredients: PropTypes.array
};