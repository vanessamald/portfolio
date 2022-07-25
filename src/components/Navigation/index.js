import React from 'react';

function Nav(props) {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
            <a className="navbar-brand" href="#">Vanessa Maldonado</a>
  
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;