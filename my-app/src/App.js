import React from 'react';
import './App.css';
import Display from "./Display"

export const sum = (a,b) => {
  return a + b 
}
function App() {
  return (
    <div>
      <h2>Baseball Scoreboard</h2>
    <Display /> 
    </div>
  );
}

export default App
