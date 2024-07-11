// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Basket from './pages/basket/Basket';
import HomePage from './pages/homePage/HomePage';
import Navigation from './components/navigator/Navigator';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
