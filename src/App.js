import './App.css';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

import { useState } from 'react';

import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform.js";
import Alert from './components/Alert.js';
// import About from './components/About.js';

function App() {
  const[mode, setMode] = useState('light');
  const[alert,setAlert] = useState(null)

  const showAlert =(messege,type)=>{
    setAlert({
      msg:messege,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);

  }

  const togglemodedark=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#242424'
      showAlert('Dark mode has been enabled',"success ")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode has been enabled',"success ")

    }
  }

  
  const togglemodeblue=()=>{
    if(mode === 'light'){
      setMode('blue')
      document.body.style.backgroundColor = '#787cff'
      showAlert('blue mode has been enabled',"success ")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode has been enabled',"success ")

    }
  }

    const togglemodegreen=()=>{
    if(mode === 'light'){
      setMode('green')
      document.body.style.backgroundColor = '#1f7d27'
      showAlert('blue mode has been enabled',"success ")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode has been enabled',"success ")

    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title = "TextUtils" about = "About TextUtils" mode={mode} togglemodedark = {togglemodedark}togglemodeblue = {togglemodeblue} togglemodegreen = {togglemodegreen}/>
      <Alert alert= {alert}/>
      <div className="container" my-3 >
        {/* <Routes>
            <Route exact path="/about" element = {<About />} />
            <Route exact  path="/" element = { */}
              <Textform heading= "Enter the text to analyse" showAlert= {showAlert} mode={mode}/>
              {/* }/>
        </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
