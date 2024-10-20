import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Trova l'elemento radice
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizza l'app
root.render(
  <Router>
    <App />
  </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
