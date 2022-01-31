import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import appStyle from './App.module.css'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { DndProvider } from "react-dnd";
import { useSelector, useDispatch } from '../../services/hooks'
import { HTML5Backend } from "react-dnd-html5-backend";
import { getIngredientsAction } from '../../services/action/Ingredients'
import {LoginForm} from './pages/LoginForm/LoginForm'

export default function App() {
  const { ingredientsRequest, ingredientsFailed } = useSelector(state => state.ingredients);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getIngredientsAction())
  }, [dispatch])
  if (ingredientsFailed) {
    return <div>Произошла ошибка</div>;
  } else if (ingredientsRequest) {
    return <div>Загрузка...</div>;
  }
  else {
    return (
      <Router>
        <Switch>
          <div>
            <DndProvider backend={HTML5Backend}>
              <Route path="/">
                <AppHeader />
              </Route>
              <Route path="/login">
                <LoginForm />
              </Route>
              <Route path="/">
              <main className={appStyle.main}>
                <BurgerIngredients />
                <BurgerConstructor />
              </main>
              </Route>
            </DndProvider>
          </div>
        </Switch>
      </Router>
    )
  }
}


