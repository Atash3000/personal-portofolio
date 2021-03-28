import React from 'react'
import './Contact.scss';




function Contact() {
  return (
    <div className="contact">
      <div className="contact__box">
      <div className="contact__box-scale">
      <div className="contact__container">
        <ul className="contact__menu">
          <li className="contact__items"><a  rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/atamurad-babakulyyev-b252351ba/" className="contact__link"><i className="fab fa-linkedin-in contact__icon linkedin"></i></a></li>
          <li className="contact__items"><a  rel="noreferrer" target="_blank" href="https://www.facebook.com/" className="contact__link"><i className="fab fa-facebook-f contact__icon facebook"></i></a></li>
          <li className="contact__items"><a  rel="noreferrer" target="_blank" href="https://twitter.com/?lang=en" className="contact__link"><i className="fab fa-twitter contact__icon twitter"></i></a></li>
          <li className="contact__items"><a  rel="noreferrer" target="_blank" href="https://www.instagram.com/yuniver__1/" className="contact__link"><i className="fab fa-instagram contact__icon instagram"></i></a></li>
          <li className="contact__items"><a  rel="noreferrer" target="_blank" href="https://github.com/atash3000" className="contact__link"><i className="fab fa-github contact__icon github"></i></a></li>
          <li className="contact__items"><a  rel="noreferrer" target="_blank" href="mailto:atamurad.babakulyyev@gmail.com" className="contact__link"><i className="fas fa-envelope contact__icon "></i></a></li>
        </ul>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
