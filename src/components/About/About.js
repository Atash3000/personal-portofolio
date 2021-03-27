import './About.scss';




function About() {
 
  return (
    <div className="about">
      <div className="about__me">
        <h2 className="about__heading u-margin-bottom-med">about me</h2>
        <p>Full stack web developer, former visual designer </p>
          <p> Currently seeking to work with awesome people either in an agency setting or on a product development team. </p>
          
          <p>In 2019 I worked with caompany, we developed two react apps: a consumer facing web app, as well as a merchant point-of-sale app, combining the new Modo Payments API for travel.</p>

          <p> I have a background in visual design, I am also a graduate of Skill Box Web Development Immersive in early 2019.</p>
      </div>
      <div className="skills">  <h2 className="about__heading">skills</h2> </div>

      <div className="grid">
      
      
      
      <div className="about__diagrama">
      
      <span className="about__diagrama--react">react/redux</span>
      <span className="about__diagrama--html">html</span>
      <span className="about__diagrama--css">css/sass/scss</span>
      <span className="about__diagrama--javascript">javascript</span>
      <span className="about__diagrama--node">node js</span>
      <span className="about__diagrama--express">express js</span>
      <span className="about__diagrama--mongo">mongo DB</span>
      <span className="about__diagrama--github">git/github</span>

      </div>
      </div>
     
      </div>
    
  )
}

export default About
