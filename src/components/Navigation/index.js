import React, { useState } from 'react';
import { BrowserRouter, Router, Route, Link, Routes } from "react-router-dom";
import About from '../About';
import Portfolio from '../Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../src/index.css';

import Gallery from '../Gallery';
import Photos from '../Gallery';
import Content from '../Gallery';

function Nav(props)  {
    return(
        <BrowserRouter>
        <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/about" element={<About></About>} />
                <Route path="/portfolio" element={<Portfolio></Portfolio>} /> 
                <Route path="/portfolio/friends" element={<Gallery/>} />    
        </Routes> 
        </BrowserRouter>        
    )
}

function Home() {
    const [show, setShow] = useState(false)
    return(
        <div>
            <nav className="nav-right">
                <Link to="/resume" className="nav-link-right" >Resume</Link>
                <Link to="/about" className="nav-link-right" >About</Link>
                <Link to="/portfolio" className="nav-link-right" >Portfolio</Link>
            </nav>
        </div>
    )
}

export default Nav;