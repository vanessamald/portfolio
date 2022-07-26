import React from 'react';
import About from '../About';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../src/index.css';


function Nav(props) {
    return(
        <div className="d-flex flex-row flex-wrap justify-content-center justify-content-around">
            
            
            <div className="p-2" >
            <a className="nav-link" href="#contact" class="navigation" >Contact</a>
            </div>           
                  
            <div className="p-2">
            <a className="nav-link" href="#resume" class="navigation" >Resume</a>
            </div>  

            <div className="p-2">
            <a className="nav-link" href="#portfolio" class="navigation" >Portfolio</a>
            </div>        
 
            

            </div>
    )
}

export default Nav;