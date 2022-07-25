import React from 'react';
import ReactDOM from 'react-dom/client';
import QR from './QR';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QR />
  </React.StrictMode>
);
