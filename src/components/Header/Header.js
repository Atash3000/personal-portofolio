import './Header.scss';
import React from 'react';
import Navigation from './Navigation';
import {Route,Switch} from 'react-router-dom';
import HomeSlider from '../HomeSlider/HomeSlider';
import About from '../About/About';
import WorkFlow from '../WorkFlow/WorkFlow';

function Header() {
  return (
    <header className='header'>
      <Navigation/>
      <Route exact path='/'> <HomeSlider/> </Route>
    
          <About />
          <WorkFlow />
    </header>
  )
}

export default Header
