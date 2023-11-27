import './App.css';
import  {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Registrationform from './components/Registrationform';
import Loginn from './components/Loginn';
//import Home from './components/Home';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CONTACTUS from './components/CONTACTUS';
import Navbar from './components/Navbar';
 import React from 'react';
 
import Pricing from'./components/Pricing';
 import Technologies from "./components/Technologies";
import Service from './components/Service';

function App() {
  return (
    // <Router>
    // <div className="App">
    //   <Home/>
    //   <Routes>
    //     <Route path="/" element={<Hero/>}/>
    //     <Route path="/Login" element={<Loginn/>}/>
    //     <Route path="/Register" element={<Registrationform/>}/>
    //   </Routes>
    //   <Footer/>
    // </div>
    // </Router>

    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/login" element={<Loginn/>}/>
          <Route path="/register" element={<Registrationform/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/technologies" element={<Technologies/>}/>
          <Route path="/Contactus" element={<CONTACTUS/>}/>
          <Route path="/Nav" element={<Navbar/>}/>
          <Route path="/home" element={<Hero/>}/>
          
        </Routes>
          <Footer/>
      </div>
    </Router>
 
    
  
  );
}

export default App;
