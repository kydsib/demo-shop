import { FiShoppingCart } from 'react-icons/fi';
import Button from '../Button/Button';
import Burger from '../Burger/Burger'

import './Nav.css'
import logo from './logo192.png'
import { useState } from 'react';


function Navigation(){
    const[ isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    function toggleNav(newState) {
        setIsMobileNavOpen(newState)
    }

    return (
        <nav className='main-nav'>
            <div className="main-nav__header">
            <div className="logo">
            <a href='/'> 
                <img src={logo} alt="" />
            </a>
            
        </div>
        <div className="desktop-nav">
            <ul className='desktop-nav__left'>
                <li key='Jackets'>Jackets </li>
                <li key='Shoes'>Shoes</li>
                <li key='Accessories'>Accessories</li>
                <li key='Bags'>Bags</li>
            </ul>
            <ul className='desktop-nav__right'>
                <li>For Employers</li>
                <li>For Headhunters</li>
            </ul>
            <div className="desktop-nav__buttons">
                <Button type="secondary" text="Login" />
                <Button type="primary" text="Sign up" />
            </div>
        </div>
        <div className="menu-mobile">
        {/* add number with items in the cart  */}
            <a href='/cart'>
                <FiShoppingCart className='cart' size={24} />
            </a>
            <Burger  getStateToParent={toggleNav}/>
        </div>
        </div>
        {/* add transitions for navigation showing and disappearing */}
        <div className={`main-nav__mobile-body ${isMobileNavOpen ? 'active' : ''}`}>
            <ul className='mobile-body'>
                <li key='Jackets' className='mobile-body__item'>Jackets </li>
                <li key='Shoes'  className='mobile-body__item'>Shoes</li>
                <li key='Accessories' className='mobile-body__item'>Accessories</li>
                <li key='Bags' className='mobile-body__item'>Bags</li>
            </ul>
        </div>
        </nav>
    )
}

export default Navigation