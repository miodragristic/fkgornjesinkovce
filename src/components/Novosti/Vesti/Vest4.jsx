import React from 'react';
import './Vesti.scss';
import Daka from '../../../assets/foto5.jpg';

const ArticleSection = () => {
  const article = {
    date: "9 Sep 2024",
    title: "“Pomoć potrebna za Nabavku Klupe za Rezervne Igrače”",
    image: Daka, 
    quotes: [
      "FK Gornje Sinkovce se obraća svim svojim podržavaocima i ljubiteljima fudbala sa važnim apelom. Kako bi poboljšali uslove na našem stadionu i omogućili našem timu da funkcioniše na najvišem nivou, potrebno nam je da nabavimo nove klupe za rezervne igrače. ",
      "Naše trenutne klupe za rezervne igrače su u lošem stanju i ne zadovoljavaju standarde koji su nam potrebni. U cilju unapređenja uslova za igru i obezbeđivanja komfora za sve članove tima, odlučili smo da nabavimo nove klupe. ",
      "Imamo rok od samo 2 nedelje da završimo ovaj projekat, što znači da je svaka pomoć dobrodošla. Potrebna nam je finansijska podrška kako bismo mogli da realizujemo ovaj plan i obezbedimo klupe na vreme za predstojeće utakmice. ",
      "Svaka donacija, ma koliko mala bila, može napraviti veliku razliku. Pozivamo sve članove zajednice da se uključe i pomognu u prikupljanju sredstava. ",
      " Vaša podrška je ključna za uspeh ovog projekta. Svaka donacija će pomoći u obezbeđivanju boljih uslova za naš tim i doprineti poboljšanju kvaliteta fudbalskih utakmica.Zahvaljujemo se unapred na vašoj velikodušnosti i podršci. Sa vašom pomoći, sigurni smo da ćemo uspeti da ostvarimo ovaj cilj i pružimo našim igračima bolje uslove za igru. Hvala vam što ste uz nas!",
      " Direktne donacije na račun kluba: 105-0000000003278-89 Agroindustrijska komercijalna banka AIK banka a.d."
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
