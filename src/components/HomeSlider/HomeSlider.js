import React from 'react'
import './HomeSlider.scss';
import {Link} from 'react-router-dom';



function HomeSlider() {

  return (
    <div className='image-slider '>
      <div className="image-container">
        <div className="text-box">
          <h1 className="heading">
              <span className="heading--greet">
              h&#206;
            </span>
            <span className="heading--main">
              i am a sofware engineer
            </span>
            <span className="heading--sub">a full stack</span>
          </h1>
          <Link className="heading--link" to='/workflow'>learn more</Link>
        </div>
      </div>
      
    </div>
  )
}

export default HomeSlider
