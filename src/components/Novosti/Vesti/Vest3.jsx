import React from 'react';
import './Vesti.scss';
import Daka from '../../../assets/foto4.jpg';

const ArticleSection = () => {
  const article = {
    date: "9 Sep 2024",
    title: "“U prvom Kolu bod kod kuće: Gornje Sinkovce - Rudar 1:1 (0:0)”",
    image: Daka, 
    quotes: [
      " U prvom poluvremenu, utakmica je bila prilično zatvorena, sa minimalnim šansama s obe strane. Naš tim, FK Gornje Sinkovce, igrao je defanzivnije, nastojeći da neutrališe napade protivnika i izbegne bilo kakve velike rizike. Odbrambeni deo tima bio je dobro organizovan, a i pored nekoliko pokušaja Rudar-a, golmani su bili na visokom nivou. Rezultat na kraju prvog poluvremena bio je 0:0. ",
      "U drugom poluvremenu, Rudar je preuzeo inicijativu i brzo postigao gol. Naša odbrana je pravila greške u kritičnim momentima, što je omogućilo protivniku da se dokopa prednosti. Ipak, FK Gornje Sinkovce nije odustajao i nastavio je borbu. Kao svetla tačka u drugom poluvremenu, Milan Denic je u 80. minutu izveo briljantan lob udarac koji je izjednačio rezultat. Njegov precizan udarac, s nešto više od 25 metara, uspeo je da nadmudri golmana Rudar-a i donese nadu našem timu. ",
      "Utakmica je završena rezultatom 1:1, a naš tim je pokazao karakter i borbenost, posebno nakon što je primio gol. Iako nismo uspeli da pobedimo, ovaj rezultat pokazuje da FK Gornje Sinkovce ima potencijala i spremnosti da se suoči sa izazovima. Nastavljamo sa radom i pripremama za naredne utakmice sa još većim elanom."
    ],
  };

  return (
    <div className="article-section">
      <h2 className="article-title">{article.title}</h2>
      <p className="article-date">{article.date}</p>
      <img src={article.image} alt="Presentation of Arnaut Danjuma" className="article-image" />
      <div className="article-content">
        {article.quotes.map((quote, index) => (
          <p key={index} className="article-quote">{quote}</p>
        ))}
      </div>
    </div>
  );
};

export default ArticleSection;
