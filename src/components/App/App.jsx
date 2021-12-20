import React from 'react';
import AppHeader from '../AppHeader/AppHeader.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';
import appStyle from './App.module.css'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import {getIngredients} from '../../utils/burgerApi.js';
import {IngredientsContext} from '../../services/Context.js'

export default function App() {
  const [error, setError] = React.useState(null);
  const [ingredients, setIngredients] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    getIngredients()
      .then((result) => {
        setIsLoaded(true);
        setIngredients(result.data)
      },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      .catch((error) => {
        console.log(error)
      })
  }, [])
  if (error) {
    return <div>Произошла ошибка</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  }
  else {
    return (
      <div>

        <AppHeader />
        <main className={appStyle.main}>
          <BurgerIngredients />
          <IngredientsContext.Provider value={{ ingredients, setIngredients}}>
          <BurgerConstructor />
          </IngredientsContext.Provider>

        </main>
      </div>
    )
  }
}


