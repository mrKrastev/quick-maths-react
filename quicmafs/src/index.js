import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import logo from './percentagelogo.png';
const Firstscreen = function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />  
      </header>
      <Mybtn/>

</div>
  );
}
class Mybtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "true"
    };
  }
  changeState = () => {
    this.setState({show: "false"});
  }
  render() {
    if(this.state.show=="true"){
    return (
    <div className="svg-wrapper">
    <button onClick={this.changeState}
        className="text"
        target="_blank"
        rel="noopener noreferrer"
        id="calculateGrades"
      >Calculate Grades</button>
<svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
  <rect className="shape" height="60" width="320" />    
</svg>
</div>
);
    }else{
      return <GradeCalculator/>;
    }
  }
}


class GradeCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "true"
    };
  }
  changeState = () => {
    this.setState({show: "false"});
  }
  render() {
    if(this.state.show=="true"){
    return (
    <div className="inputField">
    <input className="inputbar" type="text" id="input1"/>
    <input className="inputbar" type="text" id="input1"/>
    <input className="inputbar" type="text" id="input1"/>
    <input className="inputbar" type="text" id="input1"/>
    <input className="inputbar" type="text" id="input1"/>   
</div>
);
    }else{
      return null;
    }
  }
}




















ReactDOM.render(
  <Firstscreen/>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
