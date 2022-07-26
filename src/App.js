import React, { useState } from 'react';
import About from './components/About/index.js';
import Header from './components/Header/index.js';
import Nav from './components/Navigation/index.js';
import Contact from './components/Contact/index.js';



function App() {
  //const [show, setShow] = useState(false)
  return (
    <div>
     <main>
      <Header></Header>

      <Contact></Contact>

      <About />
     </main>
    </div>
  );
}

export default App;
