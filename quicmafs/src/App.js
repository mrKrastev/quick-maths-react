import React from 'react';
import logo from './percentagelogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />  
      </header>
      <a
      className="text"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          id="calculateGrades"
        >
          
      <div className="svg-wrapper">
  <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
    <rect className="shape" height="60" width="320" />
    
          
        
  </svg>
</div>
Calculate Grades
</a>
    </div>
  );
}

export default App;
