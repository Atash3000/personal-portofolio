import React from 'react'
import './Footer.scss';



function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid-box">
        <div className="footer__left-box">
          <h3 className="footer__text">
          copyright&#169; Atamurad Babakulyyev 2020 All rights reserved.
          </h3>
        </div>
        <div className="footer__right-box">
        <div className="footer__media-container">
        <ul className="footer__menu">
          <li className="footer__items"><a  rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/atamurad-babakulyyev-b252351ba/" className="footer__link"><i className="fab fa-linkedin-in footer__icon linkedin"></i></a></li>
          <li className="footer__items"><a  rel="noreferrer" target="_blank" href="https://www.facebook.com/" className="footer__link"><i className="fab fa-facebook-f footer__icon facebook"></i></a></li>
          <li className="footer__items"><a  rel="noreferrer" target="_blank" href="https://twitter.com/?lang=en" className="footer__link"><i className="fab fa-twitter footer__icon twitter"></i></a></li>
          <li className="footer__items"><a  rel="noreferrer" target="_blank" href="https://www.instagram.com/yuniver__1/" className="footer__link"><i className="fab fa-instagram footer__icon instagram"></i></a></li>
          <li className="footer__items"><a  rel="noreferrer" target="_blank" href="https://github.com/atash3000" className="footer__link"><i className="fab fa-github footer__icon github"></i></a></li>
          
        </ul>
      </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
