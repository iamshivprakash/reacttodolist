import React from 'react';
import ReactDOM from 'react-dom';
import './ToDoList.css';
import App from './App';
const currDate = new Date();
const hours = currDate.getHours();
let greeting = '';
const cssStyle ={ };
if (hours>=1 && hours <12){
    greeting ="  Good Morning...";
    cssStyle.color = 'green';
}else if (hours>=12 && hours<20) {
    greeting = "  Good Afternoon...";
    cssStyle.color = "pink";
} else {
    greeting = "  Good Night.........";
    cssStyle.color = "yellow";
}

ReactDOM.render(
  <>
  <h1>Hello Sir!<span style={cssStyle}>{greeting}</span></h1>
  <App/>
  </>,
  document.getElementById("root")
);

