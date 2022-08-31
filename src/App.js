import { Routes, Route } from 'react-router-dom';

import Header from './Header'
import './App.css';
import Home from './Home';
import ContactUs from './ContactUs';
import Menu from './Menu';
import About from './About';
import Basket from './Basket';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index elemen={<Home />}/>
          <Route path='contact' element={<ContactUs />} />
          <Route path='menu' element={<Menu />} />
          <Route path='about' element={<About />} />
          <Route path='addcard' element={<Basket />} />

        </Route>

      </Routes>

    </div>
  );
}

export default App;
