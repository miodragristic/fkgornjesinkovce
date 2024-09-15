import React from 'react';
import './Vesti.scss';
import Daka from '../../../assets/foto2.jpg';

const ArticleSection = () => {
  const article = {
    date: "9 Sep 2024",
    title: "“Oni su se vratili u klub: Pavlović, Stanković i Filipović”",
    image: Daka, 
    quotes: [
      "Stefan Franc Pavlović, naš iskusni stoper, vraća se sa čvrstom odbranom i nepopustljivim duhom. Njegova sposobnost da predvodi odbranu i koordinira sa ostatkom tima je nezamenjiva. Povratak Pavlovića donosi stabilnost i sigurnost našem timu, što je od suštinskog značaja za našu igru. ",
      "Stefan Stanković, naš talentovani golman, vraća se sa željom da ponovo pokaže svoje vrhunske veštine između stativa. Njegove reflexe, sposobnost da čita igru i obezbedi sigurno čuvanje gola su neprocenjivi. Njegov povratak nam donosi dodatno samopouzdanje i sigurnost na golu.",
      "Đorđe Bace Filipović, naš neumorni bek, vraća se sa odlučnošću da nastavi sa sjajnim performansama. Njegov rad na terenu, kako u defanzivnim, tako i u ofanzivnim akcijama, čini ga ključnim igračem. Njegova energija i posvećenost će biti ključni za uspeh u predstojećim utakmicama. ",
      "Povratak Pavlovića, Stankovića i Filipovića u FK Gornje Sinkovce je fantastična vest za sve nas. Njihovo iskustvo i veštine doprinose našem cilju da budemo konkurentni i pružimo najbolje predstave na terenu. Radujemo se njihovom povratku i verujemo da će doneti novu dinamiku i uspeh našem timu. Svi zajedno, navijamo za naš tim i očekujemo sjajne trenutke u budućnosti! "
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
