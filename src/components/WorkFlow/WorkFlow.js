import React from 'react'
import './WorkFlow.scss'

import data from './data';
import Project from './Project'

function WorkFlow() {
  return (
    <div className="workflow">
      <div className="workflow__heading-box">
        <h2 className="workflow__text">the projects i recently worked on</h2>
      </div>
      <div className="grid-card">
        {data.slice(0,2).map(element => <Project key={ element.id} project={element} />)}
        
      </div>
    </div>
  )
}

export default WorkFlow
