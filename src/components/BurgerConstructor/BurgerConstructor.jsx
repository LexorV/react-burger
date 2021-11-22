import { Typography, Box, CurrencyIcon, DragIcon, ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import './BurgerConstructor.css';
import { dataIngredients } from '../../utils/data.js';

export default function BurgerConstructor() {
   return (
      <section className="constructor pt-25 mt-4">
         <div className="constructor__lock-elements">
            <ConstructorElement isLocked={true}
               thumbnail={dataIngredients[0].image} text={dataIngredients[0].name} price={dataIngredients[0].price} />
         </div>
         <div className="constructor__open-elements pt-4">
            <div className="constructor__open-elements-box">
               <DragIcon type="primary" />
               <ConstructorElement isLocked={false}
                  thumbnail={dataIngredients[6].image} text={dataIngredients[6].name} price={dataIngredients[6].price} />
            </div>
            <div className="constructor__open-elements-box">
               <DragIcon type="primary" />
               <ConstructorElement isLocked={false}
                  thumbnail={dataIngredients[2].image} text={dataIngredients[2].name} price={dataIngredients[2].price} />
            </div>
            <div className="constructor__open-elements-box">
               <DragIcon type="primary" />
               <ConstructorElement isLocked={false}
                  thumbnail={dataIngredients[5].image} text={dataIngredients[5].name} price={dataIngredients[5].price} />
            </div>
            <div className="constructor__open-elements-box">
               <DragIcon type="primary" />
               <ConstructorElement isLocked={false}
                  thumbnail={dataIngredients[3].image} text={dataIngredients[3].name} price={dataIngredients[3].price} />
            </div>
            <div className="constructor__open-elements-box">
               <DragIcon type="primary" />
               <ConstructorElement isLocked={false}
                  thumbnail={dataIngredients[4].image} text={dataIngredients[4].name} price={dataIngredients[4].price} />
            </div>
            <div className="constructor__open-elements-box">
               <DragIcon type="primary" />
               <ConstructorElement isLocked={false}
                  thumbnail={dataIngredients[0].image} text={dataIngredients[0].name} price={dataIngredients[0].price} />
            </div>
            <div className="constructor__open-elements-box">
               <DragIcon type="primary" />
               <ConstructorElement isLocked={false}
                  thumbnail={dataIngredients[0].image} text={dataIngredients[0].name} price={dataIngredients[0].price} />
            </div>
         </div>
         <div className="constructor__lock-elements mt-4">
            <ConstructorElement isLocked={true}
               thumbnail={dataIngredients[0].image} text={dataIngredients[0].name} price={dataIngredients[0].price} />
         </div>
         <div className="constructor__price-container mt-10 mr-4">
            <div className="constructor__price-text mr-10">
               <p className="text text_type_digits-medium pr-2"> 400</p>
               <CurrencyIcon type="primary" />
            </div>
            <Button type="primary" size="large">
               Оформить заказ
            </Button>
         </div>

      </section>
   )
}