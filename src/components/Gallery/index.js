import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

// images
import hodl from "../../assets/images/hodl-cover.png";
import hodlCrypto from "../../assets/images/hodl-crypto.png";
import hodlDesktop1 from "../../assets/images/hodl-desktop.png";
import hodlDesktop2 from "../../assets/images/hodl-desktop2.png";
import friendsQuiz from "../../assets/images/friends-cover.png";
import friendsChoice from "../../assets/images/friends-choices.png";
import weatherDesktop from "../../assets/images/weather-desktop.png";
import weatherDesktop2 from "../../assets/images/weather-desktop2.png";
import weatherMobile from "../../assets/images/weather-mobile.png";
import weatherMobile2 from "../../assets/images/weather-mobile2.png";
import friendsDesktop from "../../assets/images/friends-desktop.png";
import friendsDesktop2 from "../../assets/images/friends-desktop2.png";

function Gallery (props){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState ([
    {
      name: 'Friends Timed Quiz',
      category: 'friends',
      id: 1,
      description: 'A timed Friends trivia quiz game that lets the user save their high scores and see the top scores.',
      image: friendsQuiz,
      image2: friendsChoice,
      image3: friendsDesktop,
      image4: friendsDesktop2,
      url: 'https://vanessamald.github.io/API-timed-quiz/'
    },
    {
      name: 'Weather Dashboard',
      id: 2,
      category: 'weather-dashboard',
      description: 'A weather dashboard application that allows users to search for weather conditions by city name',
      image: weatherMobile,
      image2: weatherMobile2,
      image3: weatherDesktop,
      image4: weatherDesktop2,
      url: 'https://vanessamald.github.io/weather-dashboard/'
    },
    {
      name: 'Hold on for Dear Life Ape',
      id: 3,
      category: 'hodl-app',
      description: 'A crypto currency app that lets users compare the value of crypto to the value of popular stocks',
      image: hodl,
      image2: hodlCrypto,
      image3: hodlDesktop1,
      image4: hodlDesktop2,
      url: 'https://drkevinfriday.github.io/Hold-On-for-Dear-Life-Ape/'
    }
  ]);

  const [index, setIndex] = useState(0);
  const [ offset, setOffset ] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
 
  useEffect(() => {
    const onScroll= () => setOffset(window.scrollY);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  

  return (
   
    <Carousel 
    style= {{
      overflow: 'visible', 
      
    }}
     variant="dark"  activeIndex={index} onSelect={handleSelect}>
      {photos.map(({ name, category, id, description, image, image2, image3, image4, url }) => (
       
        <Carousel.Item key={id} className= 'gallery-carousel'
        >
          <h2
          style= {{
            textAlign: 'center',
            backgroundColor: '#63594f',
            paddingTop: '100px',
            

          }}
          >My Work</h2>
          <img
            className="d-block w-100 gallery-image"
            src={image}
            alt={name}
            style= {{
              transform: `translate3d(0px, -${offset}px, 0px) skewY(${offset/100}deg)`,
              transition: 'transform 0.5s ease-in-out',
              background: 'transparent',
              position: 'bottom',
            }}
            />
            <h3 
            className="gallery-title" 
            style= {{
              transform: `translate3d(0px, ${offset}px, 0px)`,
              transition: 'transform 0.5s ease-in-out',
              background: 'transparent',
            }}
            >
            {name}</h3>
           
             <img
            className="d-block w-100 gallery-image"
            src={image2}
            alt={name}
            style= {{
              transform: `translate3d(0px, -${offset}px, 0px)`,
              transition: 'transform 0.5s ease-in-out',
              background: 'transparent',
              
            }}
            />

            <p className="gallery-text"
            style= {{
              transform: `translate3d(0px, ${offset}px, 0px) `,
              transition: 'transform 0.5s ease-in-out',
              background: 'transparent',
              
            }}
            >{description}</p>
        
            <img
            className="d-block w-100 gallery-image"
            src={image3}
            alt={name}
            style= {{
              transform: `translate3d(0px, -${offset}px, 0px)`,
              transition: 'transform 0.5s ease-in-out',
              background: 'transparent',
              position: 'bottom',
            }}
            />
             <img
            className="d-block w-100 gallery-image"
            src={image4}
            alt={name}
            
            style= {{
              transform: `translate3d(0px, -${offset}px, 0px)`,
              transition: 'transform 0.5s ease-in-out',
              background: 'transparent',
              position: 'bottom',
              
            }}
            />
             <Carousel.Caption className="gallery-content"
             style= {{
              transform: `translate3d(0px, -${offset}px, 0px)`,
              transition: 'transform 0.5s ease-in-out',
              background: 'transparent',
              
            }}
             >
             <a href={url} className="gallery-link" target="_blank" >Check it out!</a>
           
            
            </Carousel.Caption>
            
        </Carousel.Item>
        
      ))}
    </Carousel>
    
   
  )}; 
  
 

export default Gallery ;