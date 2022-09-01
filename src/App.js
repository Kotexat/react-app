import { Routes, Route } from 'react-router-dom';

import Header from './Header'
import './App.css';
import Home from './Home';
import ContactUs from './ContactUs';
import Menu from './Menu';
import About from './About';
import Basket from './Basket';
import { useState } from 'react';
import { Currency } from "./Context"
import Details from './Details';

let data = require("./data (1).json")

function App() {
  
  const [price, setPrice] = useState('$')
 
 

  

  function changePriceLari () {
    if(price === '$') {
      setPrice('₾') 
      
    }
  }
  function changePriceDollar () {
    if (price === '₾') {
      setPrice ('$')
    }
  }

 


  return (
    <div className='container'>
      <Currency.Provider value={{ fasi: price, fasisCvlileba: () => changePriceLari(), fasisCvlilebaDolarshi: () => changePriceDollar() }}>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/menu/:menuID' element={<Details />}/>
            <Route path='/about' element={<About />} />
            <Route path='/addcard' element={<Basket />} />
            
          </Route>

        </Routes>
      </Currency.Provider>
    </div>
  );
}

export default App;
