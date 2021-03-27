import React from 'react'
import './WorkFlow.scss';
import projects from './projects';
import {Link} from 'react-router-dom';

function WorkFlow() {
  return (
    <div className="workflow">
      <div className="workflow__heading-box">
        <h2 className="workflow__text">the projects i recently worked on</h2>
      </div>
      <div className="grid">
        {projects.map(project =>{
          const {name,image,description,id,link} = project;
          return(
            <div key={id} className="grid__items"> 
              <div className="grid__image-box">
              <img  className="grid__image" src={image} alt=""/>
              </div>
              <div className="grid__description">
              <h3 className="grid__name">{name}</h3>
                <p className="grid__text">
                  {description}
                </p>
              </div>

              
            
              <Link to={link} className="grid__link" > learn more &#8594; </Link>
              
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WorkFlow
