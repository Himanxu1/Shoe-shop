import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import Context from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Context>
      <App />
    </Context>
    </BrowserRouter>
  </React.StrictMode>
);