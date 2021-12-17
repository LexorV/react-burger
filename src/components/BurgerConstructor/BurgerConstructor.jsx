import React from 'react';
import { CurrencyIcon, DragIcon, ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyle from './burgerConstructor.module.css';
import OrderDetails from '../OrderDetails/OrderDetails.jsx';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal.jsx';
import { IngredientsContext } from '../../services/Context.js';
import { sendOrder } from '../../utils/burgerApi';
const ConstructorIngredient = ({ ingredient, setArrayInConstructor, ingredients }) => {
   const handleClose = () => {
      setArrayInConstructor(ingredients.filter(item => item._id !== ingredient._id))

   }
   return (
      <li className={burgerConstructorStyle.open_elements_box}>
         <DragIcon type="primary" />
         <ConstructorElement isLocked={false} handleClose={handleClose}
            thumbnail={ingredient.image} text={ingredient.name} price={ingredient.price} />
      </li>)
}
const IngredientsInConstructorLock = ({ arrayInConstructor, positionEn, position }) => {
   if (arrayInConstructor !== null) {
      const arrayBun = arrayInConstructor.find(e => e.type === 'bun')
      return (
         <div key={arrayBun._id} className={burgerConstructorStyle.lock_elements}>
            <ConstructorElement type={positionEn} isLocked={true}
               thumbnail={arrayBun.image} text={`${arrayBun.name} ${position}`} price={arrayBun.price} />
         </div>)
   }
   else {
      return (
         <p>Выберите ингредиент</p>)
   }
}
const IngredientsInConstructor = ({ arrayInConstructor, type, setArrayInConstructor }) => {
   const uid = () => Date.now().toString(36) + Math.random().toString(36);
   if (!arrayInConstructor) {
      return <p>Выберите ингредиент</p>;
}
return arrayInConstructor.filter(e => e.type !== type).map((ingredient) =>
            <ConstructorIngredient key={uid()} arrayInConstructor={arrayInConstructor} ingredient={ingredient} setArrayInConstructor={setArrayInConstructor} />
         );
}

export default function BurgerConstructor() {
   const { ingredients } = React.useContext(IngredientsContext);
   const [arrayInConstructor, setArrayInConstructor] = React.useState(null)
   const [modalIsOpen, setModalIsOpen] = React.useState(false)
   const [commonPrice, setCommonPrice] = React.useState(0);
   const [order, setOreder] = React.useState(null)
   const openModal = () => {
      if (modalIsOpen === false) {
         setModalIsOpen(true)
         const arrayId = arrayInConstructor.map(e => e._id);
         sendOrder(arrayId).then((result) => {
            setOreder(result);
         })
            .catch((error) => {
               console.log(error)
            })
      }
   }

   const closeModal = () => {
      if (modalIsOpen === true) {
         setModalIsOpen(false)
         setOreder(null)
      }
   }
   React.useEffect(() => {
      if (ingredients !== null) {
         setArrayInConstructor(ingredients)
      }
   }, [ingredients])
   React.useEffect(
      () => {
         if (arrayInConstructor !== null) {
            let price = 0;
            let bun = arrayInConstructor.find(e => e.type === 'bun');
            price = price + arrayInConstructor.filter(e => e.type !== 'bun').reduce((acc, e) => acc + e.price, 0) + bun.price;
            setCommonPrice(price);
         }
      },
      [arrayInConstructor, setArrayInConstructor]
   )
   if (ingredients !== null) {
      return (
         <section className={`${burgerConstructorStyle.constructor} pt-25 mt-4 `}>
            <Modal height={718} elementIsOpen={modalIsOpen} closeModal={closeModal}>
               <OrderDetails order={order} />
            </Modal>
            <IngredientsInConstructorLock positionEn={'top'} position={'Верх'} arrayInConstructor={arrayInConstructor} />
            <ul className={`${burgerConstructorStyle.open_elements} pt-4`}>
               <IngredientsInConstructor setArrayInConstructor={setArrayInConstructor} type={'bun'} arrayInConstructor={arrayInConstructor} />
            </ul>
            <IngredientsInConstructorLock positionEn={'bottom'} position={'Низ'} arrayInConstructor={arrayInConstructor} />
            <div className={`${burgerConstructorStyle.price_container} mt-10 mr-4`}>
               <div className={`${burgerConstructorStyle.price_text} mr-10`}>
                  <p className="text text_type_digits-medium pr-2">{commonPrice}</p>
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
   dataIngredients: PropTypes.array,
   setIngredients: PropTypes.func,
   elementIsOpen: PropTypes.bool,
   closeModal: PropTypes.bool,
};
ConstructorIngredient.propTypes = {
   ingredient: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.oneOf([null]).isRequired]),
   ingredients: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.oneOf([null]).isRequired]),
   setIngredients: PropTypes.func
}
IngredientsInConstructor.propTypes = {
   type: PropTypes.string,
   ingredients: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.oneOf([null]).isRequired]),
   etIngredients: PropTypes.func
}
IngredientsInConstructorLock.propTypes = {
   positionEn: PropTypes.string,
   position: PropTypes.string,
   ingredients: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.oneOf([null]).isRequired])
}