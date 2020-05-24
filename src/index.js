import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button';
import './index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navigation from './layout/Navigation/Navigation';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
  document.getElementById('root'),
);
