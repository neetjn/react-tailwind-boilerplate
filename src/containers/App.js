import React from 'react';
import ReactAnime from 'react-animejs';
import { Hello } from '../components/Hello';
import logo from '../assets/img/logo.svg';

const { Anime } = ReactAnime;

function App() {
  return (
    <div className="App">
      <Anime
        initial={[
          {
            targets: '#logo',
            translateY: [-50, 0],
            easing: 'linear'
          }
        ]}
      >
        <img id="logo" className="block w-1/4 ml-auto mr-auto"
             src={logo}
             alt="logo" />
      </Anime>
      <Hello />
    </div>
  );
}

export default App;
