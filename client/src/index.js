import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);


reportWebVitals();
