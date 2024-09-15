import React from 'react';
import './Vesti.scss';
import Image5 from '../../../assets/ilic.jpg'

const ArticleSection = () => {
  const article = {
    date: "9 Sep 2024",
    title: "“Ko je Miljan Ilić, dugogodišnjeg prijatelja kluba?”",
    image: Image5, 
    quotes: [
      " Miljan Ilić: Izvanredan Auto Mehaničar i Poštovan Član Zajednice. Renomirani auto mehaničar iz Gornjeg Sinkovca, čiji rad i posvećenost radu su odavno prepoznati u našem kraju. Sa posebnim talentom za popravku vozila francuskih marki, Miljan je stekao reputaciju stručnjaka koji se odlikuje izuzetnim veštinama i preciznošću. ",
      "Šta čini Miljana Posebnim? Stručnost i Kvalitet: Miljan Ilić je specijalizovan za popravku vozila francuskih marki, uključujući renomirane brendove kao što su Renault, Peugeot i Citroën. Njegovo znanje o ovim vozilima i njegova sposobnost da pruži vrhunski servis čine ga jednim od najcenjenijih mehaničara u regionu. Lokalna Povezanost: Kao ponosni stanovnik Gornjeg Sinkovca, Miljan je duboko ukorenjen u lokalnoj zajednici. Njegova posvećenost i podrška našem klubu ne samo da doprinosi njegovoj profesionalnoj reputaciji, već i jača veze unutar naše zajednice. Strast prema Zanatu: Miljanova strast za automobilski zanat je očigledna u svakom njegovom radu. Njegova sposobnost da identifikuje i reši složene probleme s vozilima je rezultat godina iskustva i kontinuiranog usavršavanja. ",
      "Miljan Ilić nije samo stručnjak u svom polju, već i posvećen član zajednice koji se ističe svojom velikodušnošću i podrškom lokalnim inicijativama. Njegova predanost i stručnost čine ga ne samo cenjenim auto mehaničarom, već i istinskim prijateljem našeg kluba. Hvala ti, Miljane, što si deo naše priče i što svojim radom doprinosiš uspehu FK Gornje Sinkovce! "
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
