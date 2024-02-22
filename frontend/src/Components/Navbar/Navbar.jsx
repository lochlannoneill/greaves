import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import icon_search from '../Assets/icons/search.png'
import icon_user  from '../Assets/icons/user.png'
import icon_heart_solid from '../Assets/icons/heart_solid.png'
import icon_cart from '../Assets/icons/cart.png'

export const Navbar = () => {
    const [menu,setMenu] = useState("shop")

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            {/* <img src={logo} alt='logo' /> */}
            <p>Greaves</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link to="/" style={{ textDecoration: 'none', color: '#171717'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link to="/men" style={{ textDecoration: 'none', color: '#171717'}}>Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link to="/women" style={{ textDecoration: 'none', color: '#171717'}}>Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to="/kids" style={{ textDecoration: 'none', color: '#171717'}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <img className='nav-search' src={icon_search} alt='search' />
            <Link to="/login-signup" style={{ textDecoration: 'none'}}><img className='nav-login' src={icon_user} alt='user' /></Link>
            <Link to="/hearts" style={{ textDecoration: 'none'}}><img className='nav-cart' src={icon_heart_solid} alt='heart' /></Link>
            <Link to="/cart" style={{ textDecoration: 'none'}}><img className='nav-cart' src={icon_cart} alt='cart' /></Link>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}
