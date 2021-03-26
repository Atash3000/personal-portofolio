import React from 'react'
import {Link} from 'react-router-dom';
import './Navigation.scss';




function Navigation() {
  return (
    <nav className='navbar'>
      <ul className="navbar__menu">
        <li className="navbar__items"><Link className='navbar__link' to="/">home</Link></li>
        <li className="navbar__items"><Link className='navbar__link' to="/">work flow</Link></li>
        <li className="navbar__items"><Link className='navbar__link' to="/">about me</Link></li>
        <li className="navbar__items"><Link className='navbar__link' to="/">contact</Link></li>

      </ul>
    </nav>
  )
}

export default Navigation