import React from 'react';
import '../Matches/One.scss';
import Logofkgs from '../../../assets/klubovi/fkgs.png';
import Mladostkutles from '../../../assets/klubovi/kutles.png';

const Two = () => {
  const matchDetails = {
    date: "22 Sep 2024 11:00 AM",
    homeTeam: "Gornje Sinkovce",
    homeLogo: Logofkgs,
    awayTeam: "Mladost Kutleš",
    awayLogo: Mladostkutles,
    stadium: "Omladinac, Donje Sinkovce",
    league: "GRADSKA LIGA LESKOVAC"
  };

  return (
    <div className="match-details-page">
      <h1>FKGS - MLA - 22/09/2024 - TREĆE KOLO</h1>
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

export default Two;