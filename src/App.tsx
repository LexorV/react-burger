import React from 'react';
import AppHeader from './components/AppHeader/AppHeader.jsx';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients.jsx';
import './App.css';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import ModalOverlay from './components/ModalOverlay/ModalOverlay.jsx';

export default function App() {
  const [error, setError] = React.useState(null);
  const [ingredients, setIngredients] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isOpenModal, setIsOpenModal ] = React.useState(false);
  React.useEffect(() => {
 fetch("https://norma.nomoreparties.space/api/ingredients")
 .then(res => res.json())
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
  if(error) {
    return <div>Произошла ошибка</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  }
  else {
  return (
    <div>
      
      <AppHeader />
      <main className="main">
      <BurgerIngredients dataIngrid = {ingredients}/>
      <BurgerConstructor dataIngredients = {ingredients} />
      </main>
    </div>
  )}
}


