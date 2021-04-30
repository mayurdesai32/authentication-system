import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import States from './component/context/States';
ReactDOM.render(
  <States>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </States>,
  document.getElementById('root')
);
