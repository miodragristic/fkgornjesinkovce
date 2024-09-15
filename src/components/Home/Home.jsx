import React, { useState } from 'react';
import Slider from 'react-slick';
import {Link, LinkProps} from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Image1 from '../../assets/foto1.jpg';
import Image2 from '../../assets/foto2.jpg';
import Image3 from '../../assets/foto3.jpg';
import Image4 from '../../assets/foto4.jpg';
import Image5 from '../../assets/foto5.jpg';
import Logofkgs from '../../assets/gslogo.png';
import Rudar from '../../assets/klubovi/rudare.png';
import Todorovce from '../../assets/klubovi/todorovce.png';
import Kutles from '../../assets/klubovi/kutles.png';
import Marjan from '../../assets/klubovi/marjan.png';
import Navalinfk from '../../assets/klubovi/fknavalin.png';
import Gradjanski from '../../assets/klubovi/gradjanski.png';
import Radnik from '../../assets/klubovi/sisince.png';
import Dl from '../../assets/klubovi/mdl.png';

import './Home.scss';

const Home = () => {
  const [sliderDuration, setSliderDuration] = useState(3000);



  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: sliderDuration,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => {
      // Ažuriraj animaciju
      const dots = document.querySelectorAll('.slick-dots li');
      dots.forEach(dot => {
        dot.style.animation = `colorChange ${sliderDuration}ms ease-in-out`;
      });
    }
  };

  const newsSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const matchSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slidesData = [
    {
      id: 1,
      image: Image1,
      text: 'Upoznajte istoriju "Fudbalskog Kluba Gornje Sinkovce"',
      link: '/klub'
    },
    {
      id: 2,
      image: Image2,
      text: 'FK Gornje Sinkovce pokrenuo novi zvanični web sajt',
      link: '/vest1'
    },
    {
      id: 3,
      image: Image3,
      text: 'Raspored za sezonu 2024/25, Gradske Lige Leskovac',
      link: '/vest2'
    },
    {
      id: 4,
      image: Image4,
      text: 'Spremni smo da otvorimo utakmicu protiv Rudara 1973',
      link: '/vest3'
    },
    {
      id: 5,
      image: Image5,
      text: 'Pomoć potrebna za nabavku klupe za rezervne igrače',
      link: '/vest4'
    }
  ];

  const matchData = [
    {
      "id": 1,
      "date": "08 Sep 2024 11:00 AM",
      "homeTeam": "Gornje Sinkovce",
      "homeLogo": Logofkgs, // Dodajte ovde logo domaćeg tima
      "awayTeam": "Rudar",
      "awayLogo": Rudar, // Dodajte ovde logo domaćeg tima
      "stadium": "Omladinac, Donje Sinkovce",
      "homeResult": "1",
      "awayResult": "1", 
      "league": "GRADSKA LIGA LESKOVAC",
      "link": "/one"
    },
    {
      "id": 2,
      "date": "15 Sep 2024 11:00 AM",
      "homeTeam": "Todorovce",
      "homeLogo": Todorovce, // Dodajte ovde logo domaćeg tima
      "awayTeam": "Gornje Sinkovce",
      "awayLogo": Logofkgs, // Dodajte ovde logo domaćeg tima
      "stadium": "Todorovce",
      "homeResult": "3",
      "awayResult": "0", 
      "link": "/two"
    },
    {
      "id": 3,
      "date": "22 Sep 2024 11:00 AM",
      "homeTeam": "Gornje Sinkovce",
      "homeLogo": Logofkgs, // Dodajte ovde logo domaćeg tima
      "awayTeam": "Mladost Kutleš",
      "awayLogo": Kutles, // Dodajte ovde logo domaćeg tima
      "stadium": "Omladinac, Donje Sinkovce",
      "kickoff": "11:00",
      "link": "/three"
    },    
    {
      "id": 4,
      "date": "29 Sep 2024 11:00 AM",
      "homeTeam": "Marjan MB",
      "homeLogo": Marjan, // Dodajte ovde logo domaćeg tima
      "awayTeam": "Gornje Sinkovce",
      "awayLogo": Logofkgs, // Dodajte ovde logo domaćeg tima
      "stadium": "Mala Biljanica",
      "kickoff": "11:00",
      "link": "/four"
    },
    {
      "id": 5,
      "date": "06 Okt 2024 11:00 AM",
      "homeTeam": "Gornje Sinkovce",
      "homeLogo": Logofkgs, // Dodajte ovde logo domaćeg tima
      "awayTeam": "Navalin",
      "awayLogo": Navalinfk, // Dodajte ovde logo domaćeg tima
      "stadium": "Omladinac, Donje Sinkovce",
      "homeResult": "",
      "awayResult": "", 
      "league": "GRADSKA LIGA LESKOVAC",
      "link": "/five"
    },
    {
      "id": 6,
      "date": "12 Okt 2024 05:00 PM",
      "homeTeam": "Građanski 2023",
      "homeLogo": Gradjanski, // Dodajte ovde logo domaćeg tima
      "awayTeam": "Gornje Sinkovce",
      "awayLogo": Logofkgs, // Dodajte ovde logo domaćeg tima
      "stadium": "Pomoćni Teren Gradskog Stadiona, Leskovac",
      "link": "/six"
    },
    {
      "id": 7,
      "date": "27 Okt 2024 11:00 AM",
      "homeTeam": "Gornje Sinkovce",
      "homeLogo": Logofkgs, // Dodajte ovde logo domaćeg tima
      "awayTeam": "Radnik 2013",
      "awayLogo": Radnik, // Dodajte ovde logo domaćeg tima
      "stadium": "Omladinac, Donje Sinkovce",
      "kickoff": "11:00",
      "link": "/seven"
    },    
    {
      "id": 8,
      "date": "02 Nov 2024 04:00 PM",
      "homeTeam": "Mladost D. Lokošnica",
      "homeLogo": Dl, // Dodajte ovde logo domaćeg tima
      "awayTeam": "Gornje Sinkovce",
      "awayLogo": Logofkgs, // Dodajte ovde logo domaćeg tima
      "stadium": "Donja Lokošnica",
      "kickoff": "04:00 PM",
      "link": "/eight"
    },
  ];
  const latestNews = [
    {
      title: "Upoznajte istoriju Fudbalskog Kluba Gornje Sinkovce",
      date: "09 Sep 2024",
      image: require('../../assets/foto1.jpg'),
      link: '/klub'
    },
    {
      title: "FK Gornje Sinkovce pokrenuo novi zvanični web sajt' ",
      date: "09 Sep 2024",
      image: require('../../assets/foto2.jpg'),
      link: '/vest1'
    },
    {
      title: "Raspored za sezonu 2024/25, Gradske Lige Leskovac",
      date: "09 Sep 2024",
      image: require('../../assets/foto3.jpg'),
      link: '/vest2'
    },
    {
      title: 'U PRVOM KOLU BOD KOD KUĆE: GORNJE SINKOVCE - RUDAR 1:1 (0:0)',
      date: "09 Sep 2024",
      image: require('../../assets/foto4.jpg'),
      link: '/vest3'
    },
    {
      title: "Pomoć potrebna za nabavku klupe za rezervne igrače",
      date: "09 Sep 2024",
      image: require('../../assets/foto5.jpg'),
      link: '/vest4'
    },
    {
      title: "Ko je Miljan Ilić, dugogodišnjeg prijatelja kluba?",
      date: "09 Sep 2024",
      image: require('../../assets/ilic.jpg'),
      link: '/vest5'
    },
  ];


  return (
    <div className='home'>
    <Slider
      className='news-item'
      style={{ cursor: 'pointer' }}
      {...mainSliderSettings}
    >
      {slidesData.map((slide, index) => (
        <div key={slide.id || index} className='slide'>
          <a href={slide.link}>
            <div className='slide-content'>
              <img src={slide.image} alt={slide.text} className='slide-image'/>
              <div className='slide-text'>{slide.text} </div>
              <div className='slick-dots'> </div>
            </div>
          </a>
        </div>
      ))}
    </Slider>
  

      <div className="match-slider-container">
  <Slider {...matchSliderSettings}>
    {matchData.map(match => (
      <div key={match.id} className="match-card">
        <div className="match-card-content">
          <div className="match-stadium">{match.stadium}</div>
          <div className="match-logos">
            <img src={match.homeLogo} alt={`${match.homeTeam} logo`} className="team-logo" />
            <div className="match-teams">
              <span className="home-team">{match.homeTeam}</span>
              <div className="match-result">
                <span className="home-result">{match.homeResult}</span>
                <span className="vs">x</span>
                <span className="away-result">{match.awayResult}</span>
              </div>
              <span className="away-team">{match.awayTeam}</span>
            </div>
            <img src={match.awayLogo} alt={`${match.awayTeam} logo`} className="team-logo" />
          </div>
          <p>{match.date}</p>
          <a href={match.link} className="match-centre-btn">Match Centre</a> {/* Dinamički link */}
        </div>
      </div>
    ))}
  </Slider>
</div>


<div className='pink-line'></div>      

<div className='latest-news-title'>NAJNOVIJE VESTI</div>


     
<div className='latest-news'>
  <div className='news-container'>
    {latestNews.map((news, index) => (
      <div
        key={index}
        className='news-item'
        onClick={() => window.location.href = news.link}
        style={{ cursor: 'pointer' }}  // Stil kursora da jasno pokaže da je div klikabilan
      >
        <img src={news.image} alt={news.title} className='news-image' />
        <div className='news-content'>
          <h3 className='news-title'>{news.title}</h3>
          <p className='news-date'>{news.date}</p>
        </div>
      </div>
    ))}
    <div className='show-more-news'>
      <a href="/Novosti" className="btn">Go to news</a>
    </div>
  </div>
</div>


      
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
      <FaArrowRight className="arrow-icon" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
      <FaArrowLeft className="arrow-icon" />
    </div>
  );
};

export default Home;
