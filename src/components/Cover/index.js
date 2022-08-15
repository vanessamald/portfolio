import React from "react";
import { useEffect } from "react";
//import ReactDOM from "react-dom";
import '../.././index.css';

const cover = document.querySelector(".cover");
const showCover = () => cover.classList.remove('hide-cover');
const hideCover = () => cover.classList.add('hide-cover');

function Cover() {
  useEffect(() => {
    showCover();
    setTimeout(hideCover, 2000);
  } , []);
  return (
    <div className="cover">
      <div className="cover-content">
        <h1>vanessa maldonado</h1>
        <h2>web developer</h2>
      </div>
    </div>
  );
}


export default Cover;