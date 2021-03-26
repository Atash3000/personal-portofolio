
import './App.scss';
import Hamburger from './components/Hamburger/Hamburger';
import Header from './components/Header/Header';
import {useState} from 'react';



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
      </div>
    </div>

  );
}

export default App;
