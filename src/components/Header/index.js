import React, { useEffect, useState, Component } from 'react';
import Nav from "../Navigation";
import Contact from "../Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../.././index.css';
//import Milky from 'https://www.behance.net/gallery/147602097/Milky-Walky-Font/modules/833805801';

function Header() {
    const [ offset, setOffset ] = useState(0);

    useEffect(() => {
        const onScroll= () => setOffset(window.scrollY);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
      }, []);

        return (       
        <div className="container">
          <div className="nav-left">
           <div className="nav-left-item">
                <a className="nav-left-link" href="/portfolio/">home</a>
            </div>
            <div className="nav-left-line" ></div>

            <div className="nav-left-item">
                <a className="nav-left-link" href="https://github.com/vanessamald" target="_blank" >git</a>
            </div> 
            <div className="nav-line" ></div>
            <Contact ></Contact>
        </div>
        <div 
            style= {{
            width: "100%",
            height: `${offset > 0 ? "10%" : "100%"}`,
            position: "fixed",
            //zIndex: "500",
            backgroundColor: "rgb(249, 247, 241)",
            top: "0",
            left: "0",
            paddingBottom: "100px",
            paddingTop: "0px",
            //borderBottom: '1px solid #272727',
            // color below 
            //background: "linear-gradient(-45deg, #cdeef3, #ffeee5, #f7bfd4, #c1ecf3",
            //background: `${offset > 0 ? "transparent" : "linear-gradient(-40deg, rgb(205, 238, 243), rgb(213, 75, 2), rgb(159, 126, 105), rgb(193, 236, 243)"}`,
            //background: `${offset > 0 ? "transparent" : "linear-gradient(-45deg, #cdeef3, #ffeee5, #f7bfd4, #c1ecf3"}`,
            //opacity: `${offset > 0 ? "1" : "0.3"}`,

            //backgroundSize: "400% 400%",
            //animation: "gradient 5s ease infinite", 
            
            
            }}
        > 
        <div
        style={{
            //#9f7e69 #ffeee5 
            //background: `${offset > 0 ? "transparent" : "linear-gradient(-40deg, #cdeef3, #ffeee5,#f7bfd4, #c1ecf3 "}`,
            // color below
            background: "linear-gradient(-45deg, rgb(205, 238, 243), rgb(213, 75, 2), rgb(159, 126, 105), rgb(193, 236, 243)",
            backgroundSize: "400% 400%",
            animation: "gradient 5s ease-in-out infinite", 
            position: "absolute",
            //opacity: "1",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            opacity: "0.3",
            
        }}
        ></div>
            <Nav></Nav>     
           
            <h1 className="header-name" 
            style={{
                color: "#3d352e",
                verticalAlign: "middle",
                fontSize: `${offset > 0 ? "32px" : "14vw"}`,
                fontWeight: `${offset > 0 ? "normal" : "normal"}`,
                color: `${offset > 0 ? "black" : "black"}`,
                textDecoration: "none",
                marginTop: `${offset > 0 ? "20px" : "300px"}`,
                textAlign: "center",
                //background: "transparent",
                opacity: "1",
                transition: "all 2s",
                marginBottom: "-20px",
                
                
                //fontFamily: "Styrene",
                //letterSpacing: "4px",
                //marginBottom: "0px",
                /*
                fontStyle: "italic",
                opacity: "0.7",
                fontFamily: "Ogg",
                //fontSize: "80px",
                letterSpacing: "-5px",
                textTransform: "lowercase",
                marginBottom: '-10px',
                */
            }}   
            >Vanessa</h1>
           
            <h2 className="header-lastname" 
            style={{
            //color: "#3d352e",
            textAlign: "center",
            verticalAlign: "middle",
            fontSize: `${offset > 0 ? "40px" : "16vw"}`,
            fontWeight: `${offset > 0 ? "normal" : "normal"}`,
            color: `${offset > 0 ? "black" : "black"}`,
            textDecoration: "none",
            background: "transparent",
            opacity: "1",
            transition: "all 2s",
            marginTop: "0px",
            paddingBottom: "100px",
            //letterSpacing: "2px",

            /*
            fontStyle: "italic",
                opacity: "0.7",
                fontFamily: "Ogg",
                //fontSize: "80px",
                letterSpacing: "-5px",
                textTransform: "lowercase"
            */
            }}   
            >Maldonado</h2>
            </div> 
    </div>
    );
}

export default Header;