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
import { RegisterForm } from './pages/registerForm/RegisterForm';
import {ForgotPasswordForm} from './pages/forgot-passwordForm/ForgotPassword';
import {ResetPasswordForm} from './pages/reset-passwordForm/ResetPasswordForm';
import {Profile} from './pages/profile/Profile'
import {ProtectedRoute} from './pages/ProtectedRoute'
import { useState} from 'react';

export default function App() {
  const { ingredientsRequest, ingredientsFailed } = useSelector(state => state.ingredients);
  const [isLogin, setIsLogin] = useState<boolean>(true);
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
          <>
            <DndProvider backend={HTML5Backend}>
              <Route path="/">
                <AppHeader />
              </Route>
              <Route path="/login">
                <LoginForm setIsLogin={setIsLogin} />
              </Route>
              <Route path="/register">
              <RegisterForm />
              </Route>
              <Route path="/forgot-password">
              <ForgotPasswordForm />
              </Route>
              <Route path="/reset-password">
              <ResetPasswordForm />
              </Route>
              <ProtectedRoute path="/profile">
              <Profile />
              </ProtectedRoute>
              <Route path="/">
              <main className={appStyle.main}>
                <BurgerIngredients />
                <BurgerConstructor />
              </main>
              </Route>
            </DndProvider>
          </>
        </Switch>
      </Router>
    )
  }
}


