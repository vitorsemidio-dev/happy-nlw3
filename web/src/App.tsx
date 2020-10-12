import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css';

import logoImg from './assets/img/logo.svg';

const App: React.FC = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>
            Visite orfanatos e mudo o dia de muitas crianças.
          </p>
        </main>

        <div className="location">
          <strong>Rio de Janeiro</strong>
          <span>Rio de Janeiro</span>
        </div>

        <a href="#" className="enter-app">
          {'>'}
        </a>
      </div>
    </div>
  );
}

export default App;
