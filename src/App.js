import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Klub from './components/Klub/Klub';
import Prvitim from './components/Prvitim/Prvitim';
import Kontakt from './components/Kontakt/Kontakt';
import Novosti from './components/Novosti/Novosti';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import One from './components/Home/Matches/One';
import Two from './components/Home/Matches/Two';
import Three from './components/Home/Matches/Three';
import Four from './components/Home/Matches/Four';
import Five from './components/Home/Matches/Five';
import Six from './components/Home/Matches/Six';
import Seven from './components/Home/Matches/Seven';
import Eight from './components/Home/Matches/Eight';
import Vesti1 from './components/Novosti/Vesti/Vesti1';
import Vesti2 from './components/Novosti/Vesti/Vest2';
import Vesti3 from './components/Novosti/Vesti/Vest3';
import Vesti4 from './components/Novosti/Vesti/Vest4';
import Vesti5 from './components/Novosti/Vesti/Vest5';
import Vesti6 from './components/Novosti/Vesti/Vest6';
import ErrorPage from './components/ErrorPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import Legal from './components/Legal';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/klub" element={<Klub />} />
        <Route path="/prvitim" element={<Prvitim />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/novosti" element={<Novosti />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/four" element={<Four />} />
        <Route path="/five" element={<Five />} />
        <Route path="/six" element={<Six />} />
        <Route path="/seven" element={<Seven />} />
        <Route path="/eight" element={<Eight />} />
        <Route path="/vest1" element={<Vesti1 />} />
        <Route path="/vest2" element={<Vesti2 />} />
        <Route path="/vest3" element={<Vesti3 />} />
        <Route path="/vest4" element={<Vesti4 />} />
        <Route path="/vest5" element={<Vesti5 />} />
        <Route path="/vest6" element={<Vesti6 />} />
        <Route path="*" element={<ErrorPage />} /> 
        <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
        <Route path='/legal' element={<Legal/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
