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
      <Firstbutton/>

</div>
  );
}

function makeMeAButton(text,onclick,width,height,top,left) {
  return (
    <div className="svg-wrapper" 
    style={{width:{width},height:{height}}}
    style={{position:'relative',margin:'25px'}}
    
    >
    <button onClick={onclick}
        style={{width:{width},height:{height}}}
        className="text"
        target="_blank"
        rel="noopener noreferrer"
        id="calculateGrades"  
      >{text}</button>
<svg height={height} width={width} xmlns="http://www.w3.org/2000/svg">
  <rect className="shape" height={height} width={width} />    
</svg>
</div>
);
}
class Firstbutton extends React.Component {
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
      show: "true",
      numInputs:1
    };
  }
  changeState = () => {
    this.setState({show: "false"});
  }
  append = () => {
    this.setState(prevState => {
      return {numInputs: prevState.numInputs + 1}
   });
  }
  render() {
    const content = [];
    if(this.state.show=="true"){
      for (let index = 2; index < this.state.numInputs+1; index++) {
       content.push(getMeInputs(index));
        
      }
      
    return (
    <div className="inputField">
      {content}
    {makeMeAButton("Calculate more",this.append,'160','50','100%','100%')}
</div>


);
    }else{
      return null;
    }
  }
}

function getMeInputs(index){
  return(<div>
      <span className="calculatingUnit">
    <input className="inputbar" type="text" pattern="[0-9]{1,3}" maxLength="3" id="input1"/>
    <p className="percentages">%</p>
    </span>
    <span className="calculatingUnit">
    <input className="inputbar" type="text" pattern="[0-9]{1,3}" maxLength="3" id="input1"/>
    <p className="percentages">%</p>
    </span><span className="calculatingUnit">
    <input className="inputbar" type="text" pattern="[0-9]{1,3}" maxLength="3" id="input1"/>
    <p className="percentages">%</p>
    </span><span className="calculatingUnit">
    <input className="inputbar" type="text" pattern="[0-9]{1,3}" maxLength="3" id="input1"/>
    <p className="percentages">%</p>
    </span><span className="calculatingUnit">
    <input className="inputbar" type="text" pattern="[0-9]{1,3}" maxLength="3" id="input1"/>
    <p className="percentages">%</p>
    </span><span className="calculatingUnit">
    <input className="inputbar" type="text" pattern="[0-9]{1,3}" maxLength="3" id="input1"/>
    <p className="percentages">%</p>
    </span>
    </div>
);
}


















ReactDOM.render(
  <Firstscreen/>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
