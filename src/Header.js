import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './reset.css'
import './Header.css'
import Home from './Images/Home.png'
import Menu from './Images/Menu.png'
import Contact from './Images/Contact.png'
import About from './Images/About.png'
import Basket from './Images/Basket.png'
import Button from './Button'

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to='/' style={{ transition: "all 0.3s" }}>
                <div className='headerDivs'>
                  <img src={Home}></img>
                  <p>Home</p>

                </div>
              </NavLink>

            </li>
            <li>
              <NavLink to='menu' style={{transition: "all 0.3s"}}>
                <div className='headerDivs'>
                  <img src={Menu} ></img>
                  <p>Menu</p>
                </div>
              </NavLink>

            </li>
            <li>
              <NavLink to='contact' style={{ transition: "all 0.3s" }}>
                <div className='headerDivs'>
                  <img src={Contact}></img>
                  <p>Contact</p>
                </div>
              </NavLink>

            </li>
            <li>
              <NavLink to='about' style={{ transition: "all 0.3s" }}>
                <div className='headerDivs'>
                  <img src={About}></img>
                  <p>About</p>
                </div>
              </NavLink>

            </li>

           
          
          </ul>
        </nav>
        <Button />

        <NavLink to='addcard' style={{ transition: "all 0.3s" }}>
          <div className='divBasket'>
            <img className='imgBasket' src={Basket}></img>

          </div>
        </NavLink>
      </header>
      <Outlet />
  </>
  )
}
