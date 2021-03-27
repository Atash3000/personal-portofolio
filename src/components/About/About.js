import './About.scss';




function About() {
 
  return (
    <div className="about">
      <div className="about__me">
        <h2 className="about__heading u-margin-bottom-med">about me</h2>
        <p>Full stack web developer, former visual designer, polymath. </p>
          <p> Currently seeking to work with awesome people either in an agency setting or on a product development team. </p>
          
          <p>In 2016 I was on winning teams for two hackathons, 1 private invite-only event hosted by Ernst & Young and the Money 20/20 Hackathon in Las Vegas. Over an intense weekend, we developed two react-native apps: a consumer facing mobile app, as well as a merchant point-of-sale app, combining the new Modo Payments API for travel.</p>

          <p> I have a background in visual design and computer science, I am also a graduate of General Assembly's Web Development Immersive in early 2015.</p>
      </div>
      <div className="skills">  <h2 className="about__heading">skills</h2> </div>

      <div className="grid">
      
      
      
      <div className="about__diagrama">
      
      <span className="about__diagrama--react">react</span>
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
