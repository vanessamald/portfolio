import React from 'react';
import Gallery from '../Gallery';
import Header from '../Header';
import About from '../About';
import Nav from '../Navigation';

const Layout = ({ children }) => {
    return (
        <>
        <div>
            <Header></Header>
            <Nav/>
            <div>
                <a  className="main-title permahover">Vanessa Maldonado</a>
            </div>
            <Gallery/>
            <About/> 
            <main>{children}</main>
        </div>
        </>
    )
}

export default Layout;