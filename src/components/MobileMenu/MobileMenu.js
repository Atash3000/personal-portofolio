import './MobileMenu.scss';

import {Link} from 'react-router-dom';
import React from 'react';

function MobileMenu() {
  return (
    <div className="mobile-menu">
      <div className="mobile__inner">
        <nav className='mobile__nav'>
        <ul className='mobile__menu'>
        <li className='mobile__items'><Link className='mobile__link' to="/">home</Link></li>

        <li className='mobile__items'><Link className='mobile__link' to="/workflow">work flow</Link></li>

        <li className='mobile__items'><Link className='mobile__link' to="/about">about me</Link></li>

        <li className='mobile__items'><Link className='mobile__link' to="/">contact</Link></li>

      </ul>
    </nav>      
    </div>
    </div>
  )
}

export default MobileMenu
