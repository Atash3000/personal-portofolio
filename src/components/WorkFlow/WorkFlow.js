import React from 'react'
import './WorkFlow.scss';


import datingApp from './images/dating-app.jpg';
import safari from './images/safari.jpg';
import jeyhun from './images/jeyhun.jpg';
import todo from './images/todo.jpg';



function WorkFlow() {
  return (
    <div className="workflow">
      <div className="workflow__heading-box">
        <h2 className="workflow__text">the projects i recently worked on</h2>
      </div>
      <div className="grid-card">
        <div className="grid-card__items"> 
          <div className="grid-card__image-box" >
              <img  className="grid-card__image" alt='dating-app' src={datingApp} />
            </div>
          <div className="grid-card__description">
              <h3 className="grid-card__name">Datinggggg app</h3>
              <p className="grid-card__text">
                A dating website to find people eact other and get connected.
              </p>
          </div>
            <a target="_blank" href='https://github.com/Atash3000/dateing-web' className="grid-card__link" > learn more &#8594; </a>
          </div>
          <div className="grid-card__items"> 
          <div className="grid-card__image-box" >
              <img  className="grid-card__image" alt='safari' src={safari} />
            </div>
          <div className="grid-card__description">
              <h3 className="grid-card__name">Safari Tours</h3>
              <p className="grid-card__text">
               Dubai Safari Tours to give people most advanture tour.
              </p>
          </div>
            <a  target="_blank" href='https://safari-dubai.netlify.app/' className="grid-card__link" > learn more &#8594; </a>
          </div>

          <div className="grid-card__items"> 
          <div className="grid-card__image-box" >
              <img  className="grid-card__image" alt='jeyhun' src={jeyhun} />
            </div>
          <div className="grid-card__description">
              <h3 className="grid-card__name">Jeyhun restaurant</h3>
              <p className="grid-card__text">
                Single page application build in HTML/CSS.              </p>
          </div>
            <a  target="_blank" href='https://github.com/Atash3000/Jeyhun-restaurant' className="grid-card__link" > learn more &#8594; </a>
          </div>


          <div className="grid-card__items"> 
          <div className="grid-card__image-box" >
              <img  className="grid-card__image" alt='todo app' src={todo} />
            </div>
          <div className="grid-card__description">
              <h3 className="grid-card__name">To Do App</h3>
              <p className="grid-card__text">
                To Do app fully functional created in React using REACT CONTEXT.
              </p>
          </div>
            <a  target="_blank" href='https://react-context-todo.netlify.app/' className="grid-card__link" > learn more &#8594; </a>
          </div>


          <div className="grid-card__items"> 
          <div className="grid-card__image-box" >
              <img  className="grid-card__image" alt='safari' src={datingApp} />
            </div>
          <div className="grid-card__description">
              <h3 className="grid-card__name">Dating app</h3>
              <p className="grid-card__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ex at dicta.
              </p>
          </div>
            <a  target="_blank" href='#' className="grid-card__link" > learn more &#8594; </a>
          </div>


          <div className="grid-card__items"> 
          <div className="grid-card__image-box" >
              <img  className="grid-card__image" alt='safari' src={datingApp} />
            </div>
          <div className="grid-card__description">
              <h3 className="grid-card__name">Dating app</h3>
              <p className="grid-card__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ex at dicta.
              </p>
          </div>
            <a  target="_blank" href='#' className="grid-card__link" > learn more &#8594; </a>
          </div>


          
      </div>
    </div>
  )
}

export default WorkFlow
