import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import App from './app/App';

ReactDOM.render(
  (
    <Router>
      <App />
    </Router>
  ),
  document.querySelector('#root'),
);
