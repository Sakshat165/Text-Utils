import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React,{useState} from 'react'
import {
  BrowserRouter,
  Routes,Route
} from "react-router-dom";



function App() {
  const [mode,setmode]=useState('light');
  const togglemode=()=>
  {
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#282A3A';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" home="Home" about="About" mode={mode} togglemode={togglemode}/>
      <div className="container my-3">
            <Routes>
              <Route exact path="/" element={<Textform header="Enter your text"  mode={mode}/>  }></Route>
              <Route exact path="/about" element={<About mode={mode}/>  }></Route>
            </Routes>
        
      </div>
      </BrowserRouter>
      
    </>
                        

  );
}

export default App;
