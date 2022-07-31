import React from "react";
import resumePreview from "../../assets/images/Vanessa_Resume_Preview.jpggit ";

function Resume () {
    return (
        <div className="resume-container">
            <div className="resume-content">
                <div className="resume-item">
                    <a className="resume-link" href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:4b6af2cc-b459-3e23-bef6-cad7f0f7a782">Resume</a>
                    <img src={resumePreview}></img>
                </div>
            </div>
        </div>
    )
}

export default Resume;