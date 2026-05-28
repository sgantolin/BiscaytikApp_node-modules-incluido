import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import '@fortawesome/fontawesome-pro/css/all.css';

import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';

import "primereact/resources/primereact.min.css";
/*import "./themePrimeReact/theme.css";*/

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
