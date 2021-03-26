
import './App.scss';
import Hamburger from './components/Hamburger/Hamburger';
import Header from './components/Header/Header';
import {useState} from 'react';
import MobileMenu from './components/MobileMenu/MobileMenu';



function App() {
  const [open ,setOpen] = useState('')
  const showMenu =()=>{
    setOpen('open');
    
    open && setOpen('') 
  }
  return (
    <div className="App">
      <div className={`App__container App__container--${open}`}>
        <Header/>
        <Hamburger showMenu={showMenu} open={open}/>
        <MobileMenu/>
      </div>
    </div>

  );
}

export default App;
