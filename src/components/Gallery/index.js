import React, { useState } from 'react';
import { BrowserRouter, Router, Route, Link, Routes } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

// images
import hodl from "../../assets/images/hodl-cover.png";
import hodlCrypto from "../../assets/images/hodl-crypto.png";
import hodlDesktop1 from "../../assets/images/hodl-desktop.png";
import hodlDesktop2 from "../../assets/images/hodl-desktop2.png";
import friendsQuiz from "../../assets/images/friends-cover.png";
import friendsChoice from "../../assets/images/friends-choices.png";
import weatherDesktop from "../../assets/images/weather-desktop.png";
import weatherMobile from "../../assets/images/weather-mobile.png";
import friendsDesktop from "../../assets/images/friends-desktop.png";
import friendsDesktop2 from "../../assets/images/friends-desktop2.png";

function Gallery (props){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Friends Timed Quiz',
      category: 'friends',
      description: 'consectetur adipiscing elit. Nunc ultricie',
      image: friendsQuiz,
      image2: friendsChoice,
      image3: friendsDesktop,
      image4: friendsDesktop2,
      url: 'https://vanessamald.github.io/API-timed-quiz/'
    },
    {
      name: 'Weather Dashboard',
      category: 'weather-dashboard',
      description: 'Lorem ipsum dolor sit amet',
      image: weatherMobile,
      image2: weatherDesktop,
      url: 'https://vanessamald.github.io/weather-dashboard/'
    },
    {
      name: 'HODL App',
      category: 'hodl-app',
      description: 'Lorem ipsum dolor sit amet',
      image: hodl,
      image2: hodlCrypto,
      image3: hodlDesktop1,
      image4: hodlDesktop2,
      url: 'https://drkevinfriday.github.io/Hold-On-for-Dear-Life-Ape/'
    }
  ]);
  
  const photosList = photos.map((photo) =>  
  <div className="gallery-content">
  <h2 key={photo.name} >{photo.name}</h2>
  <p key={photo.description} className="gallery-text"> {photo.description}</p>
  
  <img className="gallery-image" src={photo.image} alt={photo.name} width="100%"></img>
  <img className="gallery-image" src={photo.image2} alt={photo.name} width="100%"></img>
  <img className="gallery-image" src={photo.image3} alt={photo.name} width="100%"></img>
  <img className="gallery-image" src={photo.image4} alt={photo.name} width="100%"></img>
  <a href={photo.url} className="gallery-link" >URL </a>
  
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

       
       
