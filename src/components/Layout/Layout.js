import React from 'react';
import Gallery from '../Gallery';
import Header from '../Header';
import About  from '../About';
import  Nav  from '../Navigation';

const Layout = ({ children }) => {
    return (
        <>
        <div>
            <div>
            <Header></Header>
            
            </div>

          
            
            <main>{children}
            <About> </About>
            <Gallery> </Gallery>
            </main>
                
                
                
                
                
        </div>
        </>
    )
}

export default Layout;