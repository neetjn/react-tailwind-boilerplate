import React from 'react';
import { Hello } from '../components/Hello';
import logo from '../assets/img/logo.svg';

function App() {
  return (
    <div className="App">
      <img className="block w-1/4 ml-auto mr-auto" src={logo} alt="logo" />
      <Hello />
    </div>
  );
}

export default App;
