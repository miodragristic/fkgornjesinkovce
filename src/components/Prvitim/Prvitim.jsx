import React from 'react';
import './Prvitim.scss';


import Logo from '../../assets/noplayer.png';
import Daka from '../../assets/Prvi_tim/daka.png';
import Duki from '../../assets/Prvi_tim/duki.png';
import Dzemko from '../../assets/Prvi_tim/dzemko.png';
import Kica from '../../assets/Prvi_tim/kica.png';
import Kleo from '../../assets/Prvi_tim/kleo.png';
import Prca from '../../assets/Prvi_tim/prca-removebg-preview.png';
import Pusa from '../../assets/Prvi_tim/pusa.png';
import Ranko from '../../assets/Prvi_tim/ranko.png';
import Sergej from '../../assets/Prvi_tim/sergej.png';
import Vlada from '../../assets/Prvi_tim/vlada.png';

const players = [
  { name: 'Stefan Stanković', number: 1, img: Logo },
  { name: 'Stefan Denić', number: 2, img: Pusa },
  { name: 'Đorđe Filipović', number: 3, img: Logo },
  { name: 'Stefan Pavlović', number: 4, img: Logo },
  { name: 'Ivan Dimitrijević', number: 5, img: Duki },
  { name: 'Bojan Veličković', number: 6, img: Logo },
  { name: 'Danijel Kostić', number: 7, img: Daka },
  { name: 'Zdravković Aleksandar', number: 8, img: Logo },
  { name: 'Mihajlo Jovanović', number: 9, img: Logo },
  { name: 'Saša Đorđević', number: 10, img: Prca },
  { name: 'Milan Denić', number: 11, img: Logo },
  { name: 'Miodrag Ristić', number: 13, img: Logo },
  { name: 'Miljan Stanković', number: 14, img: Logo },
  { name: 'Sergej Nikolić', number: 15, img: Sergej },
  { name: 'Miloš Veličković', number: 16, img: Logo },
  { name: 'Miloš Stamenković', number: 17, img: Logo },
  { name: 'Igor Antić', number: 18, img: Logo },
  { name: 'Ranko Veličković', number: 19, img: Ranko },
  { name: 'Miloš Sokolović', number: 20, img: Logo },
  { name: 'Dejan Stojković', number: 19, img: Dzemko },
  { name: 'Nikola Grozdanović', number: 21, img: Logo },
  { name: 'Milan Mihajlović', number: 22, img: Logo },
  { name: 'Lazar Petrović', number: 23, img: Logo },
  { name: 'Miroslav Đorić', number: 24, img: Kica },
  { name: 'Saša Pešić', number: 25, img: Logo },
];

const Prvitim = () => {
  return (
    <div className='prvitim'>
      <h1>Igrači</h1>
      <div className="player-cards">
        
        {players.map((player, index) => (
          <div key={index} className="player-card">
            <img src={player.img} alt={player.name} />
            <div className="player-info">
              <h2>{player.number}</h2>
              <p>{player.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pink-line"></div>
    </div>
  );
};

export default Prvitim;


