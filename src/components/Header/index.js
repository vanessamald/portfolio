import React, { useEffect, useState, Component } from 'react';
import Nav from "../Navigation";
import Contact from "../Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../.././index.css';

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
        <div style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', }}>
        <div 
            style= {{
            width: "100%",
            height: `${offset > 0 ? "10%" : "100%"}`,
            position: "fixed",
            zIndex: "500",
            backgroundColor: `${offset > 0 ? "rgb(249, 247, 241)" : "white"}`,
            
            top: "0",
            left: "0",
            paddingBottom: "100px",
            paddingTop: "0px",
            borderBottom: "1px solid #272727"
            
            }}
        > 
            <Nav></Nav>     
           <div style={{
                lineHeight: '2px'
           }}>
            <h1 className="" 
            style={{
                color: "#3d352e",
                verticalAlign: "middle",
                fontSize: `${offset > 0 ? "20px" : "8vw"}`,
                fontWeight: `${offset > 0 ? "normal" : "normal"}`,
                color: `${offset > 0 ? "#3d352e" : "black"}`,
                textDecoration: "none",
                marginTop: `${offset > 0 ? "0px" : "300px"}`,
                textAlign: "center",
                background: "transparent",
                opacity: "1",
                transition: "all 2s",
                fontFamily: "",
                fontWeight: '100',
                letterSpacing: "-3px",
                marginBottom: "0px",
            }}   
            >Vanessa</h1>
           
            <h2 className="" 
            style={{
            color: "#3d352e",
            textAlign: "center",
            verticalAlign: "middle",
            fontSize: `${offset > 0 ? "26px" : "10vw"}`,
            fontWeight: `${offset > 0 ? "100" : "300"}`,
            color: `${offset > 0 ? "#3d352e" : "black"}`,
            marginTop: `${offset > 0 ? "-10px" : "-25px"}`,
            textDecoration: "none",
            background: "transparent",
            opacity: "1",
            transition: "all 2s",
            paddingBottom: "100px",
            letterSpacing: "-3px",
            }}   
            >Maldonado</h2>
            </div>
        </div> 
    </div>
</div>
)}

export default Header;