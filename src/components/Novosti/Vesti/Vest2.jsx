import React from 'react';
import './Vesti.scss';
import Daka from '../../../assets/foto3.jpg';

const ArticleSection = () => {
  const article = {
    date: "9 Sep 2024",
    title: "“Raspored za sezonu 2024/25, Gradske Lige Leskovac”",
    image: Daka,
    quotes: [
      `Sa zadovoljstvom vas obaveštavamo da je određen raspored takmičenja Gradske lige Leskovac za sezonu 2024/2025. Fudbalski klub Gornje Sinkovce je spreman da se suoči sa novim izazovima i pruži maksimum na terenu u predstojećim utakmicama. Pozivamo sve navijače da podrže naš tim i prisustvuju utakmicama kako bi zajedno proslavili uspehe kluba.`
    ],
    schedule: [
      { round: 1, date: "08.09.2024 11:00", match: "Gornje Sinkovce - Rudar 1973" },
      { round: 2, date: "15.09.2024 11:00", match: "Todorovce - Gornje Sinkovce" },
      { round: 3, date: "22.09.2024 11:00", match: "Gornje Sinkovce - Mladost (K)" },
      { round: 4, date: "29.09.2024 11:30", match: "Marjan MB - Gornje Sinkovce" },
      { round: 5, date: "06.10.2024 11:00", match: "Gornje Sinkovce - Navalin" },
      { round: 6, date: "12.10.2024", match: "Građanski 2023 - Gornje Sinkovce" },
      { round: 8, date: "27.10.2024 11:00", match: "Gornje Sinkovce - Radnik 2013" },
      { round: 9, date: "02.11.2024", match: "Mladost (DL) - Gornje Sinkovce" },
    ],
  };

  return (
    <div className="article-section">
        <h2 className="article-title">{article.title}</h2>
        <p className="article-date">{article.date}</p>
      <img src={article.image} alt="FK Gornje Sinkovce" className="article-image" />
      <div className="article-content">
        {article.quotes.map((quote, index) => (
          <p key={index} className="article-quote">{quote}</p>
        ))}
        <h3>Raspored Utakmica FK Gornje Sinkovce</h3>
        <table className="schedule-table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4', fontWeight: 'bold' }}>Kolo</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4', fontWeight: 'bold' }}>Datum/Vreme</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4', fontWeight: 'bold' }}>Utakmica</th>
            </tr>
          </thead>
          <tbody>
            {article.schedule.map((game, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{game.round}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{game.date}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{game.match}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArticleSection;


