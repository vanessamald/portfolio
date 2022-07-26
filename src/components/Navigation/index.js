import React, { useState } from 'react';
import About from '../About';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../src/index.css';
import Portfolio from '../Portfolio';


function Nav(props) {
    const [show, setShow] = useState(false)
    return(
        <div className="d-flex flex-row flex-wrap justify-content-center justify-content-around">
            
            <div className="p-2" >
            <a className="nav-link" class="navigation" >About</a>
            
            </div>  
            <div className="p-2" >
            <a className="nav-link" href="#contact" class="navigation" >Contact</a>
            </div>           
                  
            <div className="p-2">
            <a className="nav-link" href="#resume" class="navigation" >Resume</a>
            </div>  

            <div className="p-2">
            <a className='nav-link' class='navigation' onClick={() => setShow(true)} > Portfolio</a>
            <Portfolio fade={false} onClose={() => setShow(false)} show={show}/>
            </div>
        </div>          
    )
}

export default Nav;