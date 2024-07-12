import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Basket} from "./pages/basket/Basket";
import {HomePage} from "./pages/homePage/HomePage";
import {Navigation} from "./components/navigator/Navigator";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Basket" element={<Basket/>}/>
        <Route path="/404" element={<h1 style={{textAlign: 'center'}}>404:PAGE NOT FOUND</h1>}/>
        <Route path="*" element={<Navigate to="/404"/>}/>
      </Routes>
    </div>
  );
}

export default App;
