import React from 'react';
import AppHeader from '../AppHeader/AppHeader.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';
import appStyle from './App.module.css'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import { DndProvider } from "react-dnd";
import { useSelector, useDispatch } from '../../services/hooks'
import { HTML5Backend } from "react-dnd-html5-backend";
import { getIngredientsAction } from '../../services/action/Ingredients'

export default function App() {
  const { ingredientsRequest, ingredientsFailed } = useSelector(state => state.ingredients);
  const dispatch = useDispatch();
  React.useEffect(() => {
      dispatch(getIngredientsAction())
    }, [dispatch])
  if (ingredientsFailed) {
    return <div>Произошла ошибка</div>;
  } else if ( ingredientsRequest) {
    return <div>Загрузка...</div>;
  }
  else {
    return (
      <div>
<DndProvider backend={HTML5Backend}>
        <AppHeader />
        <main className={appStyle.main}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
        </DndProvider>
      </div>
    )
  }
}


