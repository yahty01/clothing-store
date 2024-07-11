import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Basket from "./pages/basket/Basket";
import HomePage from "./pages/homePage/HomePage";
import Navigation from "./components/Navigator/Navigator";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Basket />} />
      </Routes>
    </Router>
  )
}

export default App