import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import './Klub.scss';
import Kooperant from '../../assets/rsz_kooperant.jpg';
import Gsback from '../../assets/kooperant80.jpg';
import Pehar from '../../assets/pehar5.jpg';
import Gsbp from '../../assets/fkgsbp4.jpg';
import Micko from '../../assets/micko1.jpg';
import Ekipa from '../../assets/ekipags3.jpg';
import Finale from '../../assets/finale.jpg';
import Stopanje from '../../assets/vsgs.jpg';
import Gs2015 from '../../assets/fkgs2015.jpg';
import Fkgs from '../../assets/fkgsnew.jpg'

const Klub = () => {
  return (
    <div className="klub-container">
      <div className="top-section">
        <img src={Kooperant} alt="Kooperant" className="top-image" />
        <div className="text-section">
          <p>FUDBALSKI KLUB KOOPERANT GORNJE SINKOVCE 1980</p>
        </div>
      </div>

      <div className="timeline-section">
        <h1>Vremenska Linija Kluba</h1>
        
        

        <div className="decade">
          <h3>1980 - 1990</h3>
          <div className="year-event">
            <span className="year">1980</span>
            <p>Fudbalski klub Gornje Sinkovce osnovan je 1980. godine. U skladu sa osnivačkim načelima, klub je prvobitno nosio ime "Fudbalski Klub Kooperant", u čast kompaniji Kooperant, koja je bila generalni sponzor kluba. Ova firma iz Gornjeg Sinkovca značajno je doprinela razvoju kluba.

Prvi predsednik kluba bio je Živorad Denić, osnivač i vlasnik prepoznatljive firme DCP Hemigal. Od svog osnivanja, klub je bio prepoznatljiv po crno-belim fudbalskim dresovima. Prema arhivskim podacima, klub u početku nije imao zvaničan logo, osim zvezdica na rukavima dresova, koje su bile pravi hit osamdesetih godina.

Igrači koji su predstavljali klub u tom periodu većinom su potekli iz naselja Gornje Sinkovce, dok je manji broj članova dolazio iz drugih delova grada Leskovca. Klub nije imao svoj stadion, pa su treninzi i utakmice obavljani na stadionu Omladnica u Donjem Sinkovcu ili na terenu Radnika u Šišincu.

</p>
          </div>
          <div className="year-event">
            <span className="year">1982</span>
            <p>Značajniji uspeh je postignut u sezoni 1981/1982, kada je osvojen kup grada Leskovca.</p>
          </div>
          <div className="year-event">
            <span className="year">1990</span>
            <p>Početkom devedesetih, klub prestaje da postoji.</p>
            
          </div>
          
          {/* Dodajte ostale godine i događaje za 2000s */}
        </div>

        <div className="decade">
          <h3>2015 - 2024 </h3>
          <div className="year-event">
            <span className="year">2015</span>
            <p>Novija istorija kluba počinje 2015. godine, kada su na inicijativu Miodraga Ristića i Milana Denića aktivnosti kluba ponovo oživljene. Meštani Gornjeg Sinkovca nestrpljivo su čekali da, posle punih 25 godina, ponovo vide crno-bele dresove na terenu. Klub je, uz saglasnost većine članova, odlučio da se vrati originalnom imenu, Fudbalski klub Gornje Sinkovce, bez ikakvih dodatnih sponzorskih imena.

Tokom kratkog perioda, predsednik kluba bio je Relja Ratomir, koji je ubrzo zamenjen Aleksandrom Kocićem, milicionerom iz Gornjeg Sinkovca. U prvoj sezoni nakon ponovnog pokretanja, klub se takmičio u gradskoj ligi i uspešno zauzeo četvrto mesto.</p>
          </div>
          <div className="year-event">
            <span className="year">2021</span>
            <p>U 2021. godini, Miodrag Ristić preuzima funkciju predsednika kluba, nasledivši Vladicu Zlatkovića na tom položaju.</p>
          </div>
          <div className="year-event">
            <span className="year">2023</span>
            <p>Ova godina je bila posebno značajna za klub, jer je uspeo da se plasira u osminu finala Jablaničkog Kupa. Na putu do ovog značajnog uspeha, klub je eliminisao ekipe Gradac, Jašunju i Zloćudovo. Nažalost, u osmini finala, naš tim je izgubio od ekipe Jedinstvo Gornje Stopanje, koja je kasnije osvojila kup pobedivši u finalu Dubočicu.</p>
          </div>
          {/* Dodajte ostale godine i događaje za 1990s */}
        </div>
      </div>
      <div className="pink-line"></div> {/* Pink line unutar timeline-section */}
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front" style={{ backgroundImage: `url(${Pehar})` }}>
            </div>
            <div className="flip-card-back" style={{ backgroundImage: `url(${Gsback})` }}>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front" style={{ backgroundImage: `url(${Gsbp})` }}>
            </div>
            <div className="flip-card-back" style={{ backgroundImage: `url(${Gsback})` }}>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front" style={{ backgroundImage: `url(${Finale})` }}>
            </div>
            <div className="flip-card-back" style={{ backgroundImage: `url(${Gsback})` }}>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front" style={{ backgroundImage: `url(${Micko})` }}>
            </div>
            <div className="flip-card-back" style={{ backgroundImage: `url(${Gsback})` }}>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front" style={{ backgroundImage: `url(${Gs2015})` }}>
            </div>
            <div className="flip-card-back" style={{ backgroundImage: `url(${Gsback})` }}>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front" style={{ backgroundImage: `url(${Fkgs})` }}>
            </div>
            <div className="flip-card-back" style={{ backgroundImage: `url(${Gsback})` }}>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front" style={{ backgroundImage: `url(${Stopanje})` }}>
            </div>
            <div className="flip-card-back" style={{ backgroundImage: `url(${Gsback})` }}>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front" style={{ backgroundImage: `url(${Ekipa})` }}>
            </div>
            <div className="flip-card-back" style={{ backgroundImage: `url(${Gsback})` }}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Klub;

