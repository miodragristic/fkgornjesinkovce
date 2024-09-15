import React from 'react';
import '../Matches/One.scss';
import Logofkgs from '../../../assets/klubovi/fkgs.png';
import Rudar from '../../../assets/klubovi/rudare.png';

const One = () => {
  const matchDetails = {
    date: "08 Sep 2024 11:00 AM",
    homeTeam: "Gornje Sinkovce",
    homeLogo: Logofkgs,
    awayTeam: "Rudar",
    awayLogo: Rudar,
    stadium: "Omladinac, Donje Sinkovce",
    league: "GRADSKA LIGA LESKOVAC"
  };

  return (
    <div className="match-details-page">
      <h1>FKGS - RDR - 08/09/2024 - PRVO KOLO</h1>
      <div className="match-info">
        <div className="team-info">
          <img src={matchDetails.homeLogo} alt={`${matchDetails.homeTeam} logo`} className="team-logo" />
          <span className="team-name">{matchDetails.homeTeam}</span>
        </div>
        <div className="match-center">
          <span className="match-date">{matchDetails.date}</span>
          <span className="vs">1 x 1</span>
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
