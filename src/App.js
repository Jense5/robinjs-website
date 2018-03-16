import { h, Component } from 'preact';
import { detect } from 'detect-browser';
import logo from './logo.svg';
import alert from './alert.svg';

const browser = detect();

class App extends Component {
  render() {
    const icon = (!browser || browser.name !== 'chrome') ? alert : logo;
    return (
      <div className="App">
        <div className="Content">
          <img src={icon} className="App-logo" alt="logo" />
          <h2>
            { (!browser || browser.name !== 'chrome')
              ? 'Uh - Oh'
              : 'Hi, I am Robin!'
            }
          </h2>
          <p className="Subtitle">
            { (!browser || browser.name !== 'chrome')
              ? 'You need Chrome to use this website!'
              : 'Start your sentence with "Robin", and I will reply.'
            }
          </p>
        </div>
      </div>
    );
  }
}

export default App;
