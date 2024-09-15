import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/foto1.jpg';
import Image2 from '../../assets/foto2.jpg';
import Image3 from '../../assets/foto3.jpg';
import Image4 from '../../assets/foto4.jpg';
import Image5 from '../../assets/ilic.jpg'
import Image6 from '../../assets/foto5.jpg';
import './Novosti.scss';

const News = () => {
  const topRef = useRef(null);
  const initialItemsToShow = 8;
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);


  const newsItems = [
    { id: 1, image: Image1, title: 'Upoznajte istoriju "Fudbalskog Kluba Gornje Sinkovce"', description: '09.05.2024', link: '/klub' },
    { id: 2, image: Image2, title: 'FK Gornje Sinkovce pokrenuo novi zvanični web sajt',  description: '09.05.2024', link: '/vest1' },
    { id: 3, image: Image3, title: 'Raspored za sezonu 2024/25, Gradske Lige Leskovac',  description: '09.05.2024', link: '/vest2' },
    { id: 4, image: Image4, title: 'U PRVOM KOLU BOD KOD KUĆE: GORNJE SINKOVCE - RUDAR 1:1 (0:0)', description: '09.05.2024', link: '/vest3' },
    { id: 5, image: Image6, title: 'Pomoć potrebna za nabavku klupe za rezervne igrače', description: '09.05.2024', link: '/vest4' },
    { id: 6, image: Image5, title: 'Ko je Miljan Ilić, dugogodišnjeg prijatelja kluba?', description: '09.05.2024', link: '/vest5' },
    { id: 7, image: Image2, title: 'Pogledajte igrače koji će igrati u novoj sezoni', description: '09.05.2024', link: '/prvitim' },
    { id: 8, image: Image4, title: 'Oni su se vratili u klub: Pavlović, Stanković i Filipović', description: '09.05.2024', link: '/vest6' },
    // { id: 9, image: Image1, title: 'News Title 9', description: 'Brief description of the news article goes here.' },
    // { id: 10, image: Image2, title: 'News Title 10', description: 'Brief description of the news article goes here.' },
    // { id: 11, image: Image3, title: 'News Title 11', description: 'Brief description of the news article goes here.' },
    // { id: 12, image: Image4, title: 'News Title 12', description: 'Brief description of the news article goes here.' },
    // { id: 13, image: Image1, title: 'News Title 13', description: 'Brief description of the news article goes here.' },
    // { id: 14, image: Image2, title: 'News Title 14', description: 'Brief description of the news article goes here.' },
    // { id: 15, image: Image3, title: 'News Title 15', description: 'Brief description of the news article goes here.' },
    // { id: 16, image: Image4, title: 'News Title 16', description: 'Brief description of the news article goes here.' },
    // { id: 17, image: Image1, title: 'News Title 17', description: 'Brief description of the news article goes here.' },
    // { id: 18, image: Image2, title: 'News Title 18', description: 'Brief description of the news article goes here.' },
    // { id: 19, image: Image3, title: 'News Title 19', description: 'Brief description of the news article goes here.' },
    // { id: 20, image: Image4, title: 'News Title 20', description: 'Brief description of the news article goes here.' },
    // { id: 21, image: Image1, title: 'News Title 21', description: 'Brief description of the news article goes here.' },
    // { id: 22, image: Image2, title: 'News Title 22', description: 'Brief description of the news article goes here.' },
    // { id: 23, image: Image3, title: 'News Title 23', description: 'Brief description of the news article goes here.' },
    // { id: 24, image: Image4, title: 'News Title 24', description: 'Brief description of the news article goes here.' },
  ];

  const displayedItems = newsItems.slice(0, itemsToShow);
  const hasMoreItems = newsItems.length > itemsToShow;

  return (
    <div className="news-container">
      <div ref={topRef} className="news-header">
        <h1>Vesti</h1>
      </div>
      <div className="news-grid">
        {displayedItems.map((news) => (
          <a key={news.id} href={news.link} className="news-item">
  <img src={news.image} alt={`News ${news.id}`} />
  <div className="news-content">
    <h2>{news.title}</h2>
    <p>{news.description}</p>
    <span className="news-link">Pročitajte više</span>
  </div>
</a>

        ))}
      </div>
      {hasMoreItems && (
        <div className="show-more-news">
          <button onClick={() => setItemsToShow(itemsToShow + 8)} className="btn">See More</button>
        </div>
      )}
      <div className="pink-line"></div> {/* Dodata roze linija */}
    </div>
  );
};

export default News;