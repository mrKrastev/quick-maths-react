window.onload=function(){


var body = document.getElementsByTagName("body");
var btn=document.getElementById("calculateGrades");
var logo=document.getElementsByClassName("App-logo");
   
btn.onclick =function(){anime({
targets: logo,
  width: {
    value: '-=60px', // 28 - 20 = '8px'
    duration: 1800,
    easing: 'easeInOutSine'
  },height: {
    value: '-=60px', // 28 - 20 = '8px'
    duration: 1800,
    easing: 'easeInOutSine'
  },
  translateY:150,
  duration:4000

});
}}