import React from 'react';
import { CurrencyIcon, DragIcon, ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyle  from  './burgerConstructor.module.css';
import OrderDetails from '../OrderDetails/OrderDetails.jsx';
import PropTypes from 'prop-types';
//import { dataIngredients } from '../../utils/data.js';
export default function BurgerConstructor({ dataIngredients }) {
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
   if (dataIngredients !== null) {
      return (
         <section className={`${burgerConstructorStyle.constructor} pt-25 mt-4 `}>
            <OrderDetails elementIsOpen={modalIsOpen} closeModal={closeModal}  />
            <div className={burgerConstructorStyle.lock_elements}>
               <ConstructorElement type="top" isLocked={true}
                  thumbnail={dataIngredients[0].image} text={`${dataIngredients[0].name} (Верх)`} price={dataIngredients[0].price} />
            </div>
            <div className={`${burgerConstructorStyle.open_elements} pt-4`}>
               <div className={burgerConstructorStyle.open_elements_box}>
                  <DragIcon type="primary" />
                  <ConstructorElement isLocked={false}
                     thumbnail={dataIngredients[6].image} text={dataIngredients[6].name} price={dataIngredients[6].price} />
               </div>
               <div className={burgerConstructorStyle.open_elements_box}>
                  <DragIcon type="primary" />
                  <ConstructorElement isLocked={false}
                     thumbnail={dataIngredients[2].image} text={dataIngredients[2].name} price={dataIngredients[2].price} />
               </div>
               <div className={burgerConstructorStyle.open_elements_box}>
                  <DragIcon type="primary" />
                  <ConstructorElement isLocked={false}
                     thumbnail={dataIngredients[5].image} text={dataIngredients[5].name} price={dataIngredients[5].price} />
               </div>
               <div className={burgerConstructorStyle.open_elements_box}>
                  <DragIcon type="primary" />
                  <ConstructorElement isLocked={false}
                     thumbnail={dataIngredients[3].image} text={dataIngredients[3].name} price={dataIngredients[3].price} />
               </div>
               <div className={burgerConstructorStyle.open_elements_box}>
                  <DragIcon type="primary" />
                  <ConstructorElement isLocked={false}
                     thumbnail={dataIngredients[4].image} text={dataIngredients[4].name} price={dataIngredients[4].price} />
               </div>
               <div className={burgerConstructorStyle.open_elements_box}>
                  <DragIcon type="primary" />
                  <ConstructorElement isLocked={false}
                     thumbnail={dataIngredients[6].image} text={dataIngredients[0].name} price={dataIngredients[0].price} />
               </div>
               <div className={burgerConstructorStyle.open_elements_box}>
                  <DragIcon type="primary" />
                  <ConstructorElement isLocked={false}
                     thumbnail={dataIngredients[7].image} text={dataIngredients[0].name} price={dataIngredients[0].price} />
               </div>
            </div>
            <div className={`${burgerConstructorStyle.lock_elements} pt-4`}>
               <ConstructorElement type="bottom" isLocked={true}
                  thumbnail={dataIngredients[0].image} text={`${dataIngredients[0].name} (Низ)`} price={dataIngredients[0].price} />
            </div>
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