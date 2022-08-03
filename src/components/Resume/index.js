import React, { useState, useEffect } from 'react';
import resumePreview from "../../assets/images/Vanessa_Resume_Preview.jpg";

function Resume () {
    const [ offset, setOffset ] = useState(0);

    useEffect(() => {
        const onScroll= () => setOffset(window.scrollY);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
      }, []);

    return (
        <div className="resume-container">
            <div className="resume-content">
                <div className="resume-item">
                    
                    <a className="resume-link" target="_blank" 
                    
                    href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:4b6af2cc-b459-3e23-bef6-cad7f0f7a782"
                    >
                    <h2>Resume</h2>
                    </a>
                    </div>

                    <img className="resume-preview" src={resumePreview}
                    style = {{ 
                    marginBottom: "100px",
                    }}
                    ></img>
    
                
            </div>
        </div>
    )
}

export default Resume;