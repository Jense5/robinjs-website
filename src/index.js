import { h, render } from 'preact';
import { detect } from 'detect-browser';
import App from './App';
import Assistant from './assistant';
import './index.css';

const browser = detect();

if (browser && browser.name === 'chrome') {
  const assistant = new Assistant({
    skills: [
      require('./skills/time'),
      require('./skills/whatsup'), 
    ],
  });
  assistant.start();
}

render(
  <App />,
  document.getElementById('root')
);
