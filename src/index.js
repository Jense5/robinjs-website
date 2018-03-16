import { h, render } from 'preact';
import App from './App';
import './index.css';

import Assistant from './assistant';

const assistant = new Assistant({
  skills: [
    require('./skills/time'),
    require('./skills/whatsup'), 
  ],
});

assistant.start();

render(
  <App />,
  document.getElementById('root')
);
