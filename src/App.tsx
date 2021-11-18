import React from 'react';
import logo from './logo.svg';
import AppHeader from './components/AppHeader/AppHeader.jsx';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients.jsx';
import './App.css';

export default function App() {
  return (
    <div>
      <AppHeader />
      <main>
      <BurgerIngredients />
      </main>
    </div>
  )
}


