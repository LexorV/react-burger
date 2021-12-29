import React from 'react';
import { CurrencyIcon, DragIcon, ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyle from './burgerConstructor.module.css';
import OrderDetails from '../OrderDetails/OrderDetails.jsx';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal.jsx';
import { useSelector, useDispatch } from 'react-redux';
import {
   ADD_INGREDIENT,
   DELETE_INGREDIENT,
   SORT_INGERDIENTS,
   DELETE_BUN,
   CLEAR_CONSTRUCTOR
}
   from '../../services/action/constructorArray'
import { sendOrderAction, OPEN_ORDER_MODAL, ORDER_CLEANING } from '../../services/action/order'
import { useDrop, useDrag } from "react-dnd";
const ConstructorIngredient = ({ ingredient, index }) => {
   const DropDragRef = React.useRef(null);
   const dispatch = useDispatch();
   const [{ isDrag }, dragRef] = useDrag({
      type: "ingredientInConstructior",
      item: { ingredient, index },
      collect: monitor => ({
         isDrag: monitor.isDragging()
      })
   });
   const [, dropIngred] = useDrop({
      accept: 'ingredientInConstructior',
      drop(data) {
         dispatch({
            type: SORT_INGERDIENTS,
            dragIndex: data.index,
            dropIndex: index
         })
      }
   })
   dragRef(dropIngred(DropDragRef))
   const handleClose = () => {
      dispatch({ type: DELETE_INGREDIENT, ingredient: ingredient })
   }
   return (
      !isDrag &&
      <li ref={DropDragRef} className={burgerConstructorStyle.open_elements_box}>
         <DragIcon type="primary" />
         <ConstructorElement isLocked={false} handleClose={handleClose}
            thumbnail={ingredient.image} text={ingredient.name} price={ingredient.price} />
      </li>)
}
const IngredientsInConstructorLock = ({ arrayInConstructor, positionEn, position }) => {
   const checkBun = () => { return arrayInConstructor.some(e => e.type === 'bun') }
   if (arrayInConstructor.length !== 0 && checkBun()) {
      const arrayBun = arrayInConstructor.find(e => e.type === 'bun')
      return (
         <div key={arrayBun._id} className={burgerConstructorStyle.lock_elements}>
            <ConstructorElement type={positionEn} isLocked={true}
               thumbnail={arrayBun.image} text={`${arrayBun.name} ${position}`} price={arrayBun.price} />
         </div>)
   }
   else {
      return (
         <p>Выберите булку</p>)
   }
}
const IngredientsInConstructor = ({ arrayInConstructor, type, setArrayInConstructor }) => {
   const uid = () => Date.now().toString(36) + Math.random().toString(36);
   if (!arrayInConstructor) {
      return <p>Выберите ингредиент</p>;
   }
   return arrayInConstructor.filter(e => e.type !== type).map((ingredient, index) =>
      <ConstructorIngredient key={uid()} index={index} arrayInConstructor={arrayInConstructor} ingredient={ingredient} setArrayInConstructor={setArrayInConstructor} />
   );
}

export default function BurgerConstructor() {
   const { ingredients } = useSelector(state => state.ingredients);
   const [modalIsOpen, setModalIsOpen] = React.useState(false)
   const [commonPrice, setCommonPrice] = React.useState(0);
   const { arrayInConstructor } = useSelector(state => state.arrayInConstructor);
   const { orederNumber, orderNumberFailed, orederNumberRequest } = useSelector(state => state.order)
   const dispatch = useDispatch();
   const closeModal = () => {
      setModalIsOpen(false)
      dispatch({ type: ORDER_CLEANING })
      dispatch({ type: CLEAR_CONSTRUCTOR})
      setCommonPrice(0)
   }
   const openModal = () => {
      const arrayId = arrayInConstructor.map(e => e._id);
      dispatch(sendOrderAction(arrayId))
      if (orderNumberFailed) {
         return (
            <p>Произошла ошибка при получении данных</p>
         )
      }
      else if (orederNumberRequest) {
         return (
            <p>Загрузка...</p>
         )
      }
   }
   React.useEffect(() => {
      if (orederNumber !== null) {
         dispatch({ type: OPEN_ORDER_MODAL, order: orederNumber })
      }
   }, [orederNumber])
   React.useEffect(() => {
      if (ingredients !== null) {
      }
   }, [ingredients]);
   React.useEffect(
      () => {
         const checkBun = () => { return arrayInConstructor.some(e => e.type === 'bun') }
         if (arrayInConstructor.length !== 0 && checkBun()) {
            let price = 0;
            let bun = arrayInConstructor.find(e => e.type === 'bun');
            price = price + arrayInConstructor.filter(e => e.type !== 'bun').reduce((acc, e) => acc + e.price, 0) + bun.price;
            setCommonPrice(price);
         }
      },
      [arrayInConstructor]
   )
   const [, dropTarget] = useDrop({
      accept: 'ingredient',
      drop(ingredient) {
         if (ingredient.type === 'bun') {
            const checkBun = () => { return arrayInConstructor.some(e => e.type === 'bun') }
            if (checkBun()) {
               const bunInArray = arrayInConstructor.find(e => e.type === 'bun')
               dispatch({ type: DELETE_BUN, bunInArray: bunInArray })
               dispatch({ type: ADD_INGREDIENT, ingredient: ingredient })
            }
            else {
               dispatch({ type: ADD_INGREDIENT, ingredient: ingredient })
            }
         }
         else {
            dispatch({ type: ADD_INGREDIENT, ingredient: ingredient })
         }

      }
   })
   if (ingredients !== null) {
      return (
         <>
            <section ref={dropTarget} className={`${burgerConstructorStyle.constructor} pt-25 mt-4 `}>
               <IngredientsInConstructorLock positionEn={'top'} position={'Верх'} arrayInConstructor={arrayInConstructor} />
               <ul className={`${burgerConstructorStyle.open_elements} pt-4`}>
                  <IngredientsInConstructor type={'bun'} arrayInConstructor={arrayInConstructor} />
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
            {orederNumber && (<Modal height={718} closeModal={closeModal}>
               <OrderDetails order={orederNumber} />
            </Modal>)}
         </>
      )
   }
   else {
      return (
         <h2> Загрузка...</h2>
      )
   }
}

BurgerConstructor.propTypes = {
   dataIngredients: PropTypes.PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.oneOf([null]).isRequired]),
   closeModal: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.oneOf([undefined]).isRequired]),
};
ConstructorIngredient.propTypes = {
   ingredient: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.oneOf([null]).isRequired]),
   ingredients: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.oneOf([null]).isRequired]),
   index: PropTypes.number.isRequired
}
IngredientsInConstructor.propTypes = {
   type: PropTypes.string.isRequired,
   ingredients: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.oneOf([null]).isRequired]),
   arrayInConstructor: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.oneOf([null]).isRequired]),
}
IngredientsInConstructorLock.propTypes = {
   positionEn: PropTypes.string.isRequired,
   position: PropTypes.string.isRequired,
   ingredients: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.oneOf([null]).isRequired])
}