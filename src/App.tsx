import React from 'react';
import './App.css';
import {Session1} from './Components/Session1.tsx';
import { Session2 } from './Components/Session2.tsx';

function App() {
  return (
    <div className="App">
      <h2 className="heading">React Hooks</h2>
      <Session1 />
      <Session2 />
    </div>
  );
}

export default App;
