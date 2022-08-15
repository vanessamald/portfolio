import React, { useState, useEffect } from 'react';
//import { ReactDOM } from 'react';
import Header from './components/Header/index.js';
import Nav from './components/Navigation/index.js';
import About from './components/About/index.js';
import Gallery from './components/Gallery/index.js';
import Footer from './components/Footer/index.js';
import Cover from './components/Cover/index.js';



function App() {
  
  return (
  <>
    
  <div>
    <div>
    
    <Header></Header>
      
    </div>
      <main>
        <div>
          <About></About>
        </div>
        <div>
          <Gallery></Gallery>
          <Footer></Footer>
        </div>
      </main>            
    </div>
  </> 
)}

     
export default App;
