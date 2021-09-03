import React from 'react'

function Project(props) {
  const { name, image, id, link, description} = props.project;
  return (
    <div className="grid-card__items">
      <div className="grid-card__image-box">
        <img className="grid-card__image" alt="dating-app" src={image} />
      </div>
      <div className="grid-card__description">
        <h3 className="grid-card__name">{ name}</h3>
        <p className="grid-card__text">
         {description}
        </p>
      </div>
      <a
        target="_blank"
        href={link}
        className="grid-card__link"
      >
        learn more &#8594;
      </a>
    </div>
  )
}

export default Project
