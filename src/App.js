
import './App.scss';
import Hamburger from './components/Hamburger/Hamburger';
import Header from './components/Header/Header';
import {useState} from 'react';
import MobileMenu from './components/MobileMenu/MobileMenu';
import HomeSlider from './components/HomeSlider/HomeSlider';
import MediaBar from './components/SocialMedia/MediaBar';
import About from './components/About/About';
import {Route,Switch} from 'react-router-dom';
import WorkFlow from './components/WorkFlow/WorkFlow';


function App() {
  const [open ,setOpen] = useState('')
  const showMenu =()=>{
    setOpen('open');
    
    open && setOpen('') 
  }
  return (
    <div className="App">
      <div className="wrapper">
      <div className={`App__container App__container--${open}`}>
      <Header/>
      
          <HomeSlider/>
          <About />
          <WorkFlow />
        <Hamburger showMenu={showMenu} open={open}/>
      
        <MediaBar/>
        <MobileMenu/>
      </div>
      <main>
     
    
     
      {/* <WorkFlow /> */}
      </main>
      </div>
    
    </div>

  );
}

export default App;
