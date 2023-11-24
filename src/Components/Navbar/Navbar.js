import React, { useState } from 'react'
import './Navbar.css';
import { IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom';

function Navbar() {
    const [menu,setMenu] = useState('shop');
  return (
    <>
        <div className='navbar'>
            <div className="navbar-logo">
                <Link to='/'><img src="https://images.pngnice.com/download/2007/Shopping-Bag-Transparent-Background.png" alt="logo-img" /></Link>
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu('shop')}}><Link to='/'>Shop</Link> {menu === 'shop' ?  <hr /> : <></>}</li>
                <li onClick={()=>{setMenu('men')}}><Link to='/mens'>Men</Link> {menu === 'men' ?  <hr /> : <></>}</li>
                <li onClick={()=>{setMenu('women')}}><Link to='/womens'>Women</Link> {menu === 'women' ?  <hr /> : <></>}</li>
                <li onClick={()=>{setMenu('kids')}}><Link to='/kids'>Kids</Link> {menu === 'kids' ?  <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><IoMdCart className='cart-icon'/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    </>
  )
}

export default Navbar