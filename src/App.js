 import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';
import About from './Component/About';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);
  const showAlert = (message,type)=>{
      setAlert(
        {
          msg: message,
          type: type
        })
        setTimeout(
          ()=>{
            setAlert(null);
          }, 1500);
        
      
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark mode has been Enabled" , "Success");
     // document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert("light mode has been Enabled", "Success");
     // document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
   <Router>
   
  <Navbar title = "TextUtils" abouttext = "About Us" mode = {mode} toggleMode = {toggleMode}/>
  
  <Alert alert = {alert}/>
  <div className="container my-3">
  <Routes>
          <Route exact path="/about"
           element = { <About mode = {mode}/>}/>
          
         
          <Route exact path="/"
           element = { <TextForm showAlert={showAlert} heading = 'Try TextUtils- Word Counter, Character Counter, Remove extra spaces' mode = {mode}/> }/>

          
        </Routes>
   
   

  </div>
  
  </Router>
    </>
  );
}

export default App;
