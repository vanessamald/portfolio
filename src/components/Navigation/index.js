import React, { useState } from 'react';
import About from '../About';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../src/index.css';
import Portfolio from '../Portfolio';


function Nav(props) {
    const [show, setShow] = useState(false)
    return(
        <div className="nav-right" >
            
              
            <div>
            <a className="nav-link-right"  >About</a>
            </div>           
                  
            <div>
            <a className="nav-link-right"  >Resume</a>
            </div>  

            <div>
            <a className='nav-link-right' onClick={() => setShow(true)} > Portfolio</a>
            <Portfolio fade="false"  onClick={() => setShow(false)} show={show}/>
            </div>
        </div>          
    )
}

export default Nav;