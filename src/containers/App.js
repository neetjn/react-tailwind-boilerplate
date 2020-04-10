import React from 'react';
import ReactAnime from 'react-animejs';
import { Hello } from '../components/Hello';
import logo from '../assets/img/logo.svg';

import styled from 'styled-components';
import tw from 'tailwind.macro';

const { Anime } = ReactAnime;

const Logo = styled.img`
  ${tw`block w-1/4 ml-auto mr-auto`};
`;

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
        <Logo id="logo" src={logo} alt="logo" />
      </Anime>
      <Hello />
    </div>
  );
}

export default App;
