import React, { useState } from 'react';
import { BrowserRouter, Router, Route, Link, Routes } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';



// images
import RunBuddy from "../.././assets/images/run-buddy.png";
import portfolioImage from "../.././assets/images/portfolio_screenshot.jpg"

import weatherDashboard from "../.././assets/images/weather-dashboard.jpg";
import hodl from "../../assets/images/hodl-cover.png";
import hodlCrypto from "../../assets/images/hodl-crypto.png";
import friendsQuiz from "../../assets/images/friends-cover.png";
import friendsChoice from "../../assets/images/friends-choices.png";

function Gallery (props){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Run Buddy',
      category: 'run-buddy',
      description: 'Nunc ultricie',
      image: RunBuddy,
    },
    {
      name: 'Friends Timed Quiz',
      category: 'friends',
      description: 'consectetur adipiscing elit. Nunc ultricie',
      image: friendsQuiz,
      image2: friendsChoice
    },
    {
      name: 'Weather Dashboard',
      category: 'weather-dashboard',
      description: 'Lorem ipsum dolor sit amet',
      image: weatherDashboard
    },
    {
      name: 'HODL App',
      category: 'hodl-app',
      description: 'Lorem ipsum dolor sit amet',
      image: hodl,
      image2: hodlCrypto
    }
  ]);
  
  const photosList = photos.map((photo) =>  
  <div className="gallery-content">
  <h2 key={photo.name} >{photo.name}</h2>
  <p key={photo.description} className="gallery-text"> {photo.description}</p>
  
  <img className="gallery-image" src={photo.image} alt={photo.name} width="100%"></img>
  <img className="gallery-image" src={photo.image2} alt={photo.name} width="100%"></img>
  <button className="gallery-link">URL</button>
  </div>

  
  )
  
  console.log(photosList);
  
  return ( 
     
   <div className="gallery">
        
        {photosList}
   </div>
  )
  }


export default Gallery;

       
       
