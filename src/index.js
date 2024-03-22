import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AOS from 'aos';

AOS.init({
  duration: 1200,
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

