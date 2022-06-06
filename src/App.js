
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import Alert from './components/Alert';
import React, {useState}from 'react'
// import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode,setMode] = useState("light"); //Navbars Dark Mode
  const [alert,setalert] = useState(null);  //in this case alert is an Object

  const showalert = (message,type)=>{
    setalert({
            msg: message,
            type: type
    })

    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  setInterval(()=>{
    document.title = 'TextUtils are Amazing';
  },2000);

  setInterval(()=>{
    document.title = 'TextUtils - Word counter';
  },2500); 

  setInterval(()=>{
    document.title = 'TextUtils - Character counter';
  },2200);

   setInterval(()=>{
    document.title = 'TextUtils - Lowercase to Uppercase ';
  },2100);

   setInterval(()=>{
    document.title = 'TextUtils - Uppercase to Lowercase';
  },2300);
  
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showalert("Dark Mode has been Enabled","success");
      document.title = 'TextUtils - Dark Mode';
  
    }else{ 
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode has been Enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }
 
  return (
  
     <>
      <Router>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
     <Alert alert={alert}/>
     <Routes  Routes>
        <Route path="/" element={<TextForm showalert={showalert} heading= "Enter the text to analyze" mode ={mode}/>}/>     this is the main page
        <Route path="/about" element={<About  mode ={mode}/>} />
       </Routes> 
     </Router>  
   </>
  );
}

export default App;
