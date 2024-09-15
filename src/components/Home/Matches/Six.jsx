import React from 'react';
import '../Matches/One.scss';
import Logofkgs from '../../../assets/klubovi/fkgs.png';
import Gradjanski from '../../../assets/klubovi/gradjanski.png';

const Six = () => {
  const matchDetails = {
    date: "12 Okt 2024 17:00 AM",
    homeTeam: "Gradjanski",
    homeLogo: Gradjanski,
    awayTeam: "Gornje Sinkovce",
    awayLogo: Logofkgs,
    stadium: "Pomoćni teren gradskog stadiona, Leskovac",
    league: "GRADSKA LIGA LESKOVAC"
  };

  return (
    <div className="match-details-page">
      <h1>GSK - FKGS - 12/10/2024 - ŠESTO KOLO </h1>
      <div className="match-info">
        <div className="team-info">
          <img src={matchDetails.homeLogo} alt={`${matchDetails.homeTeam} logo`} className="team-logo" />
          <span className="team-name">{matchDetails.homeTeam}</span>
        </div>
        <div className="match-center">
          <span className="match-date">{matchDetails.date}</span>
          <span className="vs">vs</span>
          <span className="stadium">{matchDetails.stadium}</span>
          <span className="league">{matchDetails.league}</span>
        </div>
        <div className="team-info">
          <img src={matchDetails.awayLogo} alt={`${matchDetails.awayTeam} logo`} className="team-logo" />
          <span className="team-name">{matchDetails.awayTeam}</span>
        </div>
      </div>
    </div>
  );
};

export default Six;