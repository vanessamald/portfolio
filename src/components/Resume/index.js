import React from "react";
import resumePreview from "../../assets/images/Vanessa_Resume_Preview.jpg";

function Resume () {
    return (
        <div className="resume-container">
            <div className="resume-content">
                <div className="resume-item">
                    <a className="resume-link" href="">Resume</a>
                    <img src={resumePreview}></img>
                </div>
            </div>
        </div>
    )
}

export default Resume;