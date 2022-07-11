import './App.css';
import Header from './components/Header';
import React from "react";
import Home from './pages/Home';
import Cart from './pages/Cart';
import FullPizzaInfo from './pages/FullPizzaInfo';
import NotFound from './components/NotFound'
import { Route , Routes } from 'react-router-dom';



import './scss/app.scss'


function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />  } />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<FullPizzaInfo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
