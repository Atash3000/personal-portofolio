import React from 'react'
import './Navigation.scss';
import About from '../About/About';
import {Link} from 'react-router-dom';


 

function Navigation(props) {                              
  return (
    <nav className='navbar'>
    <ul className='navbar__menu'>
        <li className='navbar__items'><Link className='navbar__link' to="/">home</Link></li>

        <li className='navbar__items'><Link className='navbar__link' to="/">work flow</Link></li>

        <li className='navbar__items'><Link className='navbar__link' to="/about">about me</Link></li>

        <li className='navbar__items'><Link className='navbar__link' to="/contact">contact</Link></li>

      </ul>
     
    </nav>      
  )
}

export default Navigation
