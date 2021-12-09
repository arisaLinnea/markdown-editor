import React from 'react';
import logo from './logo.svg';
import './App.css';
import MarkupContainer from './MarkupContainer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Skriv in markdown här
        </p>
        <MarkupContainer />
      </header>
    </div>
  );
}

export default App;
