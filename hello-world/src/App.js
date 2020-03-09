import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.component';
import Welcome from './components/Welcome.component';

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;
