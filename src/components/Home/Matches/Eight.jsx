import React from 'react';
import '../Matches/One.scss';
import Logofkgs from '../../../assets/gslogo.png';
import Dl from '../../../assets/klubovi/mdl.png';

const One = () => {
  const matchDetails = {
    date: "02 Nov 2024 11:00 AM",
    homeTeam: "Mladost Donja Lokošnica",
    homeLogo: Dl,
    awayTeam: "Gornje Sinkovce",
    awayLogo: Logofkgs,
    stadium: "Donja Lokošnica",
    league: "GRADSKA LIGA LESKOVAC"
  };

  return (
    <div className="match-details-page">
      <h1>MDL - FKGS - 02/11/2024 - OSMO KOLO </h1>
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

export default One;