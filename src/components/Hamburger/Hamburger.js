import React from 'react';
import './Hamburger.scss';


function Hamburger(props) {

  return (              
    <div  className='hamburger' >
      <div onClick={props.showMenu} className={`hamburger__container hamburger__container--${props.open}`}>
      <div className='hamburger__line'>
        <span></span>
        <span></span>
      </div>
      <div className='hamburger__line'>
      <span></span>
      <span></span>
      </div>
      <div className='hamburger__line'>
      <span></span>
      <span></span>
      </div>      
      </div>
  
    </div>
  )
}

export default Hamburger
