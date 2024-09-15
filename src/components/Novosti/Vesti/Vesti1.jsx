import React from 'react';
import './Vesti.scss';
import Daka from '../../../assets/foto2.jpg';

const ArticleSection = () => {
  const article = {
    date: "9 Sep 2024",
    title: "“FK Gornje Sinkovce pokrenuo novi zvanični web sajt”",
    image: Daka, 
    quotes: [
      " Sa velikim zadovoljstvom, obaveštavamo sve ljubitelje fudbala i naše verne navijače da je Fudbalski klub Gornje Sinkovce lansirao svoj novi zvanični web sajt! Ovaj sajt je zamišljen kao centralno mesto za sve informacije o našem klubu, rezultatima, vestima i dešavanjima iz sveta fudbala, a sve to na samo nekoliko klikova udaljeno od vas. ",
      "Sajt je osmišljen kako bi pružio našim navijačima jedinstveno digitalno iskustvo. Uz atraktivan i moderan dizajn, sajt nudi pregledne informacije o klubu, aktuelnim vestima, rasporedima utakmica, rezultatima i galeriji slika. Takođe, omogućava vam da na brz i lak način stupite u kontakt sa klubom i postanete deo naše zajednice. ",
      " "
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

