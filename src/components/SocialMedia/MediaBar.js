import React from 'react'

import './MediaBar.scss'



function MediaBar() {
  return (
    <div className='media'>
      <div className="media__container">
        <ul className="media__menu">
          <li className="media__items"><a target="_blank" href="https://www.linkedin.com/in/atamurad-babakulyyev-b252351ba/" className="media__link"><i class="fab fa-linkedin-in media__icon linkedin"></i></a></li>
          <li className="media__items"><a target="_blank" href="https://www.facebook.com/" className="media__link"><i class="fab fa-facebook-f media__icon facebook"></i></a></li>
          <li className="media__items"><a target="_blank" href="https://twitter.com/?lang=en" className="media__link"><i class="fab fa-twitter media__icon twitter"></i></a></li>
          <li className="media__items"><a target="_blank" href="https://www.instagram.com/yuniver__1/" className="media__link"><i class="fab fa-instagram media__icon instagram"></i></a></li>
          <li className="media__items"><a target="_blank" href="https://github.com/atash3000" className="media__link"><i class="fab fa-github media__icon github"></i></a></li>
          
        </ul>
      </div>
      </div>
  )
}

export default  MediaBar
