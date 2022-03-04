import React from 'react';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CurrencyIcon, DragIcon, ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyle from './burgerConstructor.module.css';
import OrderDetails from '../OrderDetails/OrderDetails';
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from '../../services/hooks'
import { ingredientsType } from '../../services/constants'
import {
   Tingredient,
   TconstructorDrop
} from '../../services/types/ingredientsType'
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
const ConstructorIngredient: FC<{ ingredient: Tingredient, index: number }> = ({ ingredient, index }) => {
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
      drop(data: TconstructorDrop) {
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
      <>
         {!isDrag &&
            (<li ref={DropDragRef} className={burgerConstructorStyle.open_elements_box}>
               <DragIcon type="primary" />
               <ConstructorElement isLocked={false} handleClose={handleClose}
                  thumbnail={ingredient.image ?? ''} text={ingredient.name ?? ''} price={ingredient.price ?? 0} />
            </li>)}
      </>
   )
}
const IngredientsInConstructorLock: FC<{ ingredientsInConstructor: Tingredient[], positionEn: 'top' | 'bottom', position: string }> =
   ({ ingredientsInConstructor, positionEn, position }) => {
      const arrayBun: Tingredient | undefined = ingredientsInConstructor.find((e: Tingredient) => e.type === ingredientsType.bun)
      if (ingredientsInConstructor.length !== 0 && arrayBun) {
         return (
            <div key={arrayBun._id} className={burgerConstructorStyle.lock_elements}>
               <ConstructorElement type={positionEn} isLocked={true}
                  thumbnail={arrayBun?.image ?? ''} text={`${arrayBun.name} ${position}`} price={arrayBun.price ?? 0} />
            </div>)
      }
      else {
         return (
            <p>Выберите булку</p>)
      }
   }
const IngredientsInConstructor: FC<{ ingredientsInConstructor: any, type: string }> = ({ ingredientsInConstructor, type }) => {
   if (!ingredientsInConstructor) {
      return <p>Выберите ингредиент</p>;
   }
   return ingredientsInConstructor.filter((e: Tingredient) => e.type !== type).map((ingredient: Tingredient, index: number) =>
      <ConstructorIngredient key={uuidv4()} index={index} ingredient={ingredient} />
   );
}

export default function BurgerConstructor() {
   const { ingredients } = useSelector((state) => state.ingredients);
   const [commonPrice, setCommonPrice] = React.useState(0);
   const { ingredientsInConstructor } = useSelector((state) => state.arrayInConstructor);
   const { orederNumber, orderNumberFailed, orederNumberRequest } = useSelector((state) => state.order)
   const dispatch = useDispatch();
   const bunInArray = ingredientsInConstructor.find((e: Tingredient) => e.type === ingredientsType.bun);
   const closeModal = () => {
      dispatch({ type: ORDER_CLEANING })
      dispatch({ type: CLEAR_CONSTRUCTOR })
      setCommonPrice(0)
   }
   const navigate = useNavigate()
   const arrayId: any = ingredientsInConstructor.map((e: Tingredient) => e._id);
   const openModal = () => {
      dispatch(sendOrderAction(arrayId))
      if (orderNumberFailed) {
         navigate('/login')
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
      if (orderNumberFailed) {
         navigate('/login')
         dispatch({ type: ORDER_CLEANING })
      }

   }, [orderNumberFailed])

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
         if (ingredientsInConstructor.length !== 0 && bunInArray) {
            const price = ingredientsInConstructor.filter((e: Tingredient) => e.type !== ingredientsType.bun).reduce((acc: number, e: any) => acc + e.price, 0) + bunInArray.price;
            setCommonPrice(price);
         }
      },
      [ingredientsInConstructor]
   )
   const [, dropTarget] = useDrop({
      accept: 'ingredient',
      drop(ingredient: Tingredient) {
         if (ingredient.type === ingredientsType.bun) {
            if (bunInArray) {
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
               <IngredientsInConstructorLock positionEn={'top'} position={'Верх'} ingredientsInConstructor={ingredientsInConstructor} />
               <ul className={`${burgerConstructorStyle.open_elements} pt-4`}>
                  <IngredientsInConstructor type={ingredientsType.bun} ingredientsInConstructor={ingredientsInConstructor} />
               </ul>
               <IngredientsInConstructorLock positionEn={'bottom'} position={'Низ'} ingredientsInConstructor={ingredientsInConstructor} />
               <div className={`${burgerConstructorStyle.price_container} mt-10 mr-4`}>
                  <div className={`${burgerConstructorStyle.price_text} mr-10`}>
                     <p className="text text_type_digits-medium pr-2">{commonPrice}</p>
                     <CurrencyIcon type="primary" />
                  </div>
                  {ingredientsInConstructor.length > 0 ? <Button onClick={openModal} type="primary" size="large">
                     Оформить заказ
                  </Button> : null}
               </div>
               {orederNumberRequest && (<p>Загрузка...</p>)}
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