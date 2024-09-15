import React from 'react';
import '../Matches/One.scss';
import Logofkgs from '../../../assets/klubovi/fkgs.png';
import Todorovce from '../../../assets/klubovi/todorovce.png';

const Two = () => {
  const matchDetails = {
    date: "15 Sep 2024 11:00 AM",
    homeTeam: "Todorovce",
    homeLogo: Todorovce,
    awayTeam: "Gornje Sinkovce",
    awayLogo: Logofkgs,
    stadium: "Todorovce",
    league: "GRADSKA LIGA LESKOVAC"
  };

  return (
    <div className="match-details-page">
      <h1>TDR - FKGS - 15/09/2024 - DRUGO KOLO</h1>
      <div className="match-info">
        <div className="team-info">
          <img src={matchDetails.homeLogo} alt={`${matchDetails.homeTeam} logo`} className="team-logo" />
          <span className="team-name">{matchDetails.homeTeam}</span>
        </div>
        <div className="match-center">
          <span className="match-date">{matchDetails.date}</span>
          <span className="vs">3 x 0</span>
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

export default Two;