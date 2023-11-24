import React, { useState } from 'react'
import './Navbar.css';
import { IoMdCart } from "react-icons/io";

function Navbar() {
    const [menu,setMenu] = useState('shop');
  return (
    <>
        <div className='navbar'>
            <div className="navbar-logo">
                <img src="https://images.pngnice.com/download/2007/Shopping-Bag-Transparent-Background.png" alt="logo-img" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu('shop')}}>Shop {menu === 'shop' ?  <hr /> : <></>}</li>
                <li onClick={()=>{setMenu('men')}}>Men {menu === 'men' ?  <hr /> : <></>}</li>
                <li onClick={()=>{setMenu('women')}}>Women {menu === 'women' ?  <hr /> : <></>}</li>
                <li onClick={()=>{setMenu('kids')}}>Kids {menu === 'kids' ?  <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <IoMdCart className='cart-icon'/>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    </>
  )
}

export default Navbar