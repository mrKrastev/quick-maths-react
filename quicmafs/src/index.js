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
      numInputs:1,
      averageGrade:0
    };
  }
  changeState = () => {
    this.setState({show: "false"});
  }
  append = () => {
    window.scrollBy({ 
      top: '500', // could be negative value
      left: 0, 
      behavior: 'smooth' 
    });
    this.setState(prevState => {
      return {numInputs: prevState.numInputs + 1}
   });
  }

  setAverageGrade = () =>{
    //update the average grade
    var gradeSum=0;
    for (let index = 1; index < this.state.numInputs+1; index++) {
      var id="total"+index;
      if(document.getElementById(id).value==""){
        document.getElementById(id).value=0;
      }
      gradeSum +=parseFloat(document.getElementById(id).value);
     }
     var total=gradeSum/this.state.numInputs;
     this.setState({averageGrade:total})
  
  }
  
  render() {
    const content = [];
    if(this.state.show=="true"){
      for (let index = 1; index < this.state.numInputs+1; index++) {
       content.push(<ExamCalculator count={index}/>);
        
      }
      
    return (
    <div className="inputField">
      {content}
    {makeMeAButton("Calculate more",this.append,'160','50','100%','100%')}
    <div><span className="calculatingUnit">
    <input className="inputbar" style={{borderColor:'#9966ff',borderLeft:'transparent',borderRight:'transparent',pointerEvents:'none'}} type="text" pattern="[0-9]{1,3}" maxLength="3" id="averageTotal" value ={this.state.averageGrade}readOnly/>
    <p className="percentages">⇑<br/> Course Average Grade %</p>
    {makeMeAButton("Update",this.setAverageGrade,'75','50','100%','100%')}
    </span>
    </div>
</div>


);
    }else{
      return null;
    }
  }
}


class ExamCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "true",
    };
  }
  changeState = () => {
    this.setState({show: "false"});
  }
  render() {
    const content = [];
    if(this.state.show=="true"){
    return (
      <div>
        <div><span className="calculatingUnit">
    <input onChange={this.updateTotal} className="inputbar" style={{borderColor:'#33ff99',borderLeft:'transparent',borderRight:'transparent'}} type="text" pattern="[0-9]{1,3}" maxLength="3" id={"examWeight"+this.props.count}/>
    <p className="percentages">⇑<br/> Exam Weight %</p>
    </span>
    <span className="calculatingUnit">
    <input onChange={this.updateTotal} className="inputbar" style={{borderColor:'#33ff99',borderLeft:'transparent',borderRight:'transparent'}} type="text" pattern="[0-9]{1,3}" maxLength="3" id={"cwWeight"+this.props.count}/>
    <p className="percentages">⇑<br/> Coursework Weight %</p>
    </span>
    <span className="calculatingUnit">
    <input onChange={this.updateTotal} className="inputbar" style={{borderColor:'#33ff99',borderLeft:'transparent',borderRight:'transparent'}} type="text" pattern="[0-9]{1,3}" maxLength="3" id={"otherWeight"+this.props.count}/>
    <p className="percentages">⇑<br/> Other Sources Weight %</p>
    </span></div>
      <span className="calculatingUnit">
    <input onChange={this.updateTotal} className="inputbar" type="text" pattern="[0-9]{1,3}" maxLength="3" id={"exam"+this.props.count}/>
    <p className="percentages">⇑<br/> Exam %</p>
    </span>
    <span className="calculatingUnit">
    <input onChange={this.updateTotal} className="inputbar" type="text" pattern="[0-9]{1,3}" maxLength="3" id={"cw"+this.props.count}/>
    <p className="percentages">⇑<br/> Coursework %</p>
    </span><span className="calculatingUnit">
    <input onChange={this.updateTotal} className="inputbar" type="text" pattern="[0-9]{1,3}" maxLength="3" id={"other"+this.props.count}/>
    <p className="percentages">⇑<br/> Other Sources %</p>
    </span><span className="calculatingUnit">
    <input className="inputbar" type="text" pattern="[0-9]{1,3}" maxLength="3" id={"total"+this.props.count} style={{pointerEvents:'none',borderColor:'#ffb366',borderLeft:'transparent',borderRight:'transparent',borderTop:'transparent'}} value={this.state.total} readOnly/>
    <p className="percentages">⇑<br/> Module Total %</p>
    </span>
    </div>
);
    }else{
      return null;
    }
  }
  updateTotal = () => {
    //targeting input
    var examID="exam"+this.props.count;
    var examWeightID="examWeight"+this.props.count;
    var cwWeightID="cwWeight"+this.props.count;
    var otherWeightID="otherWeight"+this.props.count;
    var cwID="cw"+this.props.count;
    var otherID="other"+this.props.count;

    //getting values
    var examWeightVal=document.getElementById(examWeightID).value;
    var examVal=document.getElementById(examID).value;
    var cwVal=document.getElementById(cwID).value;
    var otherVal=document.getElementById(otherID).value;
    var cwWeightVal=document.getElementById(cwWeightID).value;
    var otherWeightVal=document.getElementById(otherWeightID).value;

    //autoupdate values:
    
  
  //updating total
    var totalVal=examVal*0.01*examWeightVal+cwVal*0.01*cwWeightVal+otherVal*0.01*otherWeightVal;
    if (totalVal>100) {
      window.alert('Please check if values entered are not exceeding a sum of 100')
    }else{
    this.setState({total: totalVal});
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
