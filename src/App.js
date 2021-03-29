
import './App.scss';
import Hamburger from './components/Hamburger/Hamburger';
import Header from './components/Header/Header';
import {useState,useEffect} from 'react';
import MobileMenu from './components/MobileMenu/MobileMenu';
import HomeSlider from './components/HomeSlider/HomeSlider';
import MediaBar from './components/SocialMedia/MediaBar';
import About from './components/About/About';
import {Route,Switch,Redirect} from 'react-router-dom';
import WorkFlow from './components/WorkFlow/WorkFlow';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {


  

  const [open ,setOpen] = useState('')

  const hideMenu=()=>{
    setOpen('')
  }
  const showMenu =()=>{
    setOpen('open');
    
    open && setOpen('') 
  }
  return (
    <div className="App">
      <div className="wrapper">
      <div className={`App__container App__container--${open}`}>
      <Header/>
      <Redirect to ='/'/>
      <Switch> 
     
      <Route exact path='/workflow' > <WorkFlow /> </Route> 
      <Route exact path='/'> <HomeSlider/> </Route>
      <Route exact path='/about'> <About /> </Route>
      <Route exact path='/contact' > <Contact /> </Route> 
      <Route exact path='/work-flow'> <WorkFlow /> </Route>
    
      </Switch>
       
      {/* <Route  path='/'> <Footer /> </Route> */}
      <Footer/>
        <Hamburger showMenu={showMenu} open={open}/>
        <MediaBar/>
        <MobileMenu hideMenu={hideMenu}/>
      </div>
      <main>
      </main>
      </div>
      
    </div>

  );
}

export default App;
