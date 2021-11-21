import { Typography, Box, CurrencyIcon, DragIcon, ConstructorElement, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import './BurgerConstructor.css';
import {data} from  '../../utils/data.js';

export default function BurgerConstructor () {
return(
    <section className="constructor pt-25 mt-4">
        <div className="constructor__lock-elements">
        <ConstructorElement isLocked={true}
 thumbnail={ data[0].image} text={data[0].name} price ={data[0].price}/>
 </div>
<div className="constructor__open-elements pt-4">
    <div className="constructor__open-elements-box">
    <DragIcon type="primary" />
    <ConstructorElement isLocked={false}
 thumbnail={ data[0].image} text={data[0].name} price ={data[0].price}/>
    </div>
    <div className="constructor__open-elements-box">
    <DragIcon type="primary" />
    <ConstructorElement isLocked={false}
 thumbnail={ data[0].image} text={data[0].name} price ={data[0].price}/>
    </div>
    <div className="constructor__open-elements-box">
    <DragIcon type="primary" />
    <ConstructorElement isLocked={false}
 thumbnail={ data[0].image} text={data[0].name} price ={data[0].price}/>
    </div>
    <div className="constructor__open-elements-box">
    <DragIcon type="primary" />
    <ConstructorElement isLocked={false}
 thumbnail={ data[0].image} text={data[0].name} price ={data[0].price}/>
    </div>
    <div className="constructor__open-elements-box">
    <DragIcon type="primary" />
    <ConstructorElement isLocked={false}
 thumbnail={ data[0].image} text={data[0].name} price ={data[0].price}/>
    </div>
    <div className="constructor__open-elements-box">
    <DragIcon type="primary" />
    <ConstructorElement isLocked={false}
 thumbnail={ data[0].image} text={data[0].name} price ={data[0].price}/>
    </div>
    <div className="constructor__open-elements-box">
    <DragIcon type="primary" />
    <ConstructorElement isLocked={false}
 thumbnail={ data[0].image} text={data[0].name} price ={data[0].price}/>
    </div>
</div>
<div className="constructor__lock-elements mt-4">
        <ConstructorElement isLocked={true}
 thumbnail={ data[0].image} text={data[0].name} price ={data[0].price}/>
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