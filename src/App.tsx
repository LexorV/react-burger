import React from 'react';
import logo from './logo.svg';
import AppHeader from './components/AppHeader/AppHeader.jsx';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients.jsx';
import './App.css';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';

export default function App() {
  return (
    <div>
      <AppHeader />
      <main className="main">
      <BurgerIngredients />
      <BurgerConstructor />
      </main>
    </div>
  )
}


