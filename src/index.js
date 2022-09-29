import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import Home from './pages/Home';
import './styles/bootstrap.min.css';
import './styles/config.css';
import './styles/global.css';
import './styles/custom.css';
import './styles/responsive.css'

// @import url(./bootstrap.min.css);
// @import url(./config.css);
// @import url(./global.css);
// @import url(./custom.css);
// @import url(./responsive.css);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);