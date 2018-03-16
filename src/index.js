import { h, render } from 'preact';
import App from './App';
import './index.css';

import Assistant from './assistant';

const assistant = new Assistant({
  name: 'Alexa',
  skills: [
    require('./skills/time'),
    require('./skills/whatsup'), 
  ],
});

assistant.process('turn on the heating');
assistant.process('how are you');
assistant.process('what time is it');

render(
  <App />,
  document.getElementById('root')
);
