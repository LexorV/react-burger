import React from 'react';
import { CurrencyIcon, DragIcon, ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyle from './burgerConstructor.module.css';
import OrderDetails from '../OrderDetails/OrderDetails.jsx';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal.jsx';
import { IngredientsContext } from '../../services/Context.js';
import { sendOrder } from '../../utils/burgerApi';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_INGREDIENT } from '../../services/action/constructorArray'
import { dataIngredients } from '../../utils/data'
import { sendOrderAction, OPEN_ORDER_MODAL } from '../../services/action/order'
import { getIngredientsAction } from '../../services/action/Ingredients'
import { useDrop } from "react-dnd";
const ConstructorIngredient = ({ ingredient }) => {
   const dispatch = useDispatch()
   console.log(ingredient)
   const handleClose = () => {
      console.log(ingredient.idConstr)
      dispatch({ type: 'DELETE_INGREDIENT', ingredient })
      // setArrayInConstructor(ingredients.filter(item => item._id !== ingredient._id))
     
   }
   return (
      <li className={burgerConstructorStyle.open_elements_box}>
         <DragIcon type="primary" />
         <ConstructorElement isLocked={false} handleClose={handleClose}
            thumbnail={ingredient.image} text={ingredient.name} price={ingredient.price} />
      </li>)
}
const IngredientsInConstructorLock = ({ arrayInConstructor, positionEn, position }) => {
   if (arrayInConstructor.length !== 0) {
     const checkBun =  arrayInConstructor.some(e => e.type === 'bun')
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
   console.log(arrayInConstructor)
   if (!arrayInConstructor) {
      return <p>Выберите ингредиент</p>;
   }
   return arrayInConstructor.filter(e => e.type !== type).map((ingredient) =>
      <ConstructorIngredient key={uid()} arrayInConstructor={arrayInConstructor} ingredient={ingredient} setArrayInConstructor={setArrayInConstructor} />
   );
}

export default function BurgerConstructor() {
   //const { ingredients } = React.useContext(IngredientsContext);
   //const ingredients = dataIngredients
   const { ingredients } = useSelector(state => state.ingredients);
   //const [arrayInConstructor, setArrayInConstructor] = React.useState(null)
   const [modalIsOpen, setModalIsOpen] = React.useState(false)
   const [commonPrice, setCommonPrice] = React.useState(0);
   // const {order} = useSelector(state => state.ingredients);
   const { arrayInConstructor } = useSelector(state => state.arrayInConstructor);
   const { orederNumber, orderNumberFailed, orederNumberRequest } = useSelector(state => state.order)
   const dispatch = useDispatch();
   const closeModal = () => {
      setModalIsOpen(false)
      dispatch({ type: 'ORDER_CLEANING' })
   }
   const openModal = () => {
      const arrayId = arrayInConstructor.map(e => e._id);
      console.log(arrayId)
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

      /*
            if (modalIsOpen === false) {
               setModalIsOpen(true)
               sendOrder(arrayId).then((result) => {
                  dispatch(result)
               })
                  .catch((error) => {
                     console.log(error)
                  })
            }*/
   }
   React.useEffect(() => {
      if (orederNumber !== null) {
         dispatch(OPEN_ORDER_MODAL(orederNumber))
      }
   }, [orederNumber])
   /*
      const closeModal = () => {
         if (modalIsOpen === true) {
            setModalIsOpen(false)
            setOreder(null)
         }
      }*/
   React.useEffect(() => {
      if (ingredients !== null) {
         console.log(ingredients)
         //dispatch(ADD_INGREDIENT(ingredients))
         // setArrayInConstructor(ingredients)
      }
   }, [ingredients]);
   React.useEffect(
      () => {
         console.log(arrayInConstructor)
         if (arrayInConstructor.length !== 0) {
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
      drop(test) {
         console.log(test)
         dispatch(ADD_INGREDIENT(test))
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