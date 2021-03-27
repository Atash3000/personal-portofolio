import React from 'react'
import './WorkFlow.scss';
import projects from './projects.js';
import {Link} from 'react-router-dom';
import hero from './images/eee.jpg'

function WorkFlow() {
  return (
    <div className="workflow">
      <div className="workflow__heading-box">
        <h2 className="workflow__text">the projects i recently worked on</h2>
      </div>
      <div className="grid-card">
        {projects.map(el =>{
          //const {name,image,description,id,link} = project;
          
          return(
            <div key={el.id} className="grid-card__items"> 
              <div className="grid-card__image-box" >
              <img  className="grid-card__image"  src={el.image} />
              </div>
              <div className="grid-card__description">
              <h3 className="grid-card__name">{el.name}</h3>
                <p className="grid-card__text">
                  {el.description}
                </p>
              </div>

              
            
              <a rel="noreferrer" target="_blank" href={el.link} className="grid-card__link" > learn more &#8594; </a>
              
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WorkFlow
