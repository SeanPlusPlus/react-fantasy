import React from 'react';
import Teams from './Teams';
import Managers from './Managers';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="column">
          <Teams />
        </div>
        <div className="column">
          <Managers />
        </div>
      </div>
    </div>
  );
}

export default App;
