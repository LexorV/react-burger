import React from 'react';
import { Typography, Box, CurrencyIcon, Tab, ConstructorElement, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import './BurgerIngredients.css';
import {data} from  '../../utils/data.js';
const IngtrdientBun = ({data}) => {
    const listItems = data.filter(e=>e.type==='bun').map((element) =>
    <li key={element._id} className="ingredients__card-list pl-4">
    <Counter count={1} size="default" />
        <img src={element.image}  className="ingredients__picture pl-4 pr-4 "></img>
        <div className="ingredients__card-price-box pt-1 pb-1">
            <p className = "text text_type_digits-default pr-2">{element.price}</p>
            <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-small">{element.name}</p>
    </li>
    )
    /*
    data.forEach((element, index) => {
        console.log(element);
        <p>Test</p>
    })*/
    return listItems
}
const IngtrdientSauce = ({data}) => {
    const listItems = data.filter(e=>e.type==='sauce').map((element) =>
    <li key={element._id} className="ingredients__card-list pl-4">
    <Counter count={1} size="default" />
        <img src={element.image}  className="ingredients__picture pl-4 pr-4 "></img>
        <div className="ingredients__card-price-box pt-1 pb-1">
            <p className = "text text_type_digits-default pr-2">{element.price}</p>
            <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-small">{element.name}</p>
    </li>
    )
    /*
    data.forEach((element, index) => {
        console.log(element);
        <p>Test</p>
    })*/
    return listItems
}
const IngtrdientMain = ({data}) => {
    const listItems = data.filter(e=>e.type==='main').map((element) =>
    <li key={element._id} className="ingredients__card-list pl-4">
    <Counter count={1} size="default" />
        <img src={element.image}  className="ingredients__picture pl-4 pr-4 "></img>
        <div className="ingredients__card-price-box pt-1 pb-1">
            <p className = "text text_type_digits-default pr-2">{element.price}</p>
            <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-small">{element.name}</p>
    </li>
    )
    /*
    data.forEach((element, index) => {
        console.log(element);
        <p>Test</p>
    })*/
    return listItems
}
export default function BurgerIngredients() {
    console.log(data.length)
    const [state, setState] = React.useState({
    dataIngrid: data,
    })
   
    
   console.log(state.dataIngrid);
    return(
        <section  className="ingredients" >
            
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <div className="mt-10 mb-5" style={{ display: 'flex' }}>
                <Tab value="Булки">Булки</Tab>
                <Tab value="Соусы">Соусы</Tab>
                <Tab value="Начинки">Начинки</Tab>
            </div>
            <div className="ingredients__box" >
            <h2 className="text text_type_main-medium"> Булки </h2>
            <ul className="ingredients__lists pl-4">
            <IngtrdientBun  data={state.dataIngrid}/>
            </ul>
            <h2 className="text text_type_main-medium">Соусы</h2>
            <ul className="ingredients__lists pl-4">
            <IngtrdientSauce  data={state.dataIngrid}/>
            </ul>
            <h2 className="text text_type_main-medium">Начинки</h2>
            <ul className="ingredients__lists pl-4">
            <IngtrdientMain  data={state.dataIngrid}/>
            </ul>
            </div>

        </section>
    )
}