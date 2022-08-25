import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/index';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div id='pokemonBody'>
          <div id='content_pokemon'>
            <div id="pokemonButtonsTop" className="pokemonButtons">
                    <div id="pokemonButtonsTopContent">
                        <span className="pokedexCircle circleLow"></span>
                        <span className="pokedexCircle circleLow"></span>
                    </div>
                </div>
                <div id="screenDiv">
                  <div id='screen'>
                    <App/>
                  </div>
                </div>
              <footer id="pokemonButtonsLow" className="pokemonButtons"></footer>
          </div>
      </div>
  </React.StrictMode>
);
