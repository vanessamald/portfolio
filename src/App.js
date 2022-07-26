import React, { useState } from 'react';
import About from './components/About/index.js';
import Header from './components/Header/index.js';
import Nav from './components/Navigation/index.js';
import Contact from './components/Contact/index.js';



function App() {
 
  return (
    <div>
     <main>
     <Header></Header>
     
      <Nav/>

     </main>
    </div>
  );
}

export default App;
