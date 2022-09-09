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
import Footer from './Footer';

let data = require("./data (1).json")

function App() {

  const [number, setNumber] = useState(0)
  const [info, setInfo] = useState(data)
  const [price, setPrice] = useState('$')
  const [totalprice, setTotalprice] = useState(0)
  const [isclicked, setIsclicked] = useState(false)

  let totalSum = []
  let sumTotalprice = 0
  function totalItems() {
    info.map((item) => {
      if (item.status === 'Added') {
        return totalSum.push(item.price)
      }
    })

    for (let x = 0; x < totalSum.length; x++) {
      sumTotalprice += totalSum[x]
    }
    setTotalprice(sumTotalprice)
    console.log(totalprice);
  }




  function changeStatus(cardID) {
    let findCard = info.find((item) => {

      return (item.id == cardID)
    })
    findCard.status = 'Added'
    setNumber(number + 1)
    document.querySelector(`.btn-${cardID}`).setAttribute('disabled', " ")
    totalItems()
  }

  function Delete(cardID) {
    let findCard = info.find((item) => {
      return (item.id == cardID)
    })

    findCard.status = 'Add to cart'
    setNumber(number - 1)
    setTotalprice(totalprice - findCard.price)
  }

  function deleteAll() {
    info.map((item) => {
      if (item.status == 'Added') {
        return item.status = "Add to cart"
      }
      setIsclicked(true)
      renew()
    })


  }


   function renew (){
    setNumber(0);
    setTotalprice(0)
   }
 




  function changePriceLari() {
    if (price === '$') {
      setPrice('₾')

    }else {
      setPrice ('$')
    }
  }
 
  




  return (
    <div className='container'>
      <Currency.Provider value={{ mtlianiInfo: info, fasi: price, fasisCvlileba: () => changePriceLari(),  statusisShecvla: (e) => changeStatus(e), cardisGaqroba: (e) => Delete(e), kalatashiDamateba: number, jami: totalprice, deleteCards: () => deleteAll() }}>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/menu/:menuID' element={<Details />} />
            <Route path='/about' element={<About />} />
            <Route path='/addcard' element={<Basket />} />

          </Route>

        </Routes>
        <Footer />
      </Currency.Provider>
    </div>
  );
}

export default App;
