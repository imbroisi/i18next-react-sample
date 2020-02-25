import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import i18n (needs to be bundled ;))
import './i18n';

const [TLD] = window.location.hostname.split('.').reverse();
const lng = {
  de: 'de',
  mx: 'es',
  br: 'br'
}[TLD] || 'en';
localStorage.setItem('i18nextLng', lng);

ReactDOM.render(<App />, document.getElementById('root'));
