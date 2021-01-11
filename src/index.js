import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import ContactCard from './ContactCard';

const element = <h1>ooh, what does this element do?</h1>
ReactDOM.render(

  <React.StrictMode>
    <ContactCard name = "Dave Sign" number = "123-123-1231" email="dSign@abc.com"/>
    <br/>
    <br/>
    <br/>
    <br/>
    <ContactCard name = "Susan Pole" number = "123-456-7890" email="sPole@abc.com"/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <ContactCard name = "Jeff Lane" number = "123-555-6677" email="jLane@abc.com"/>
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
