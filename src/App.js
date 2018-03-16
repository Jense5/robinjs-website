import { h, Component } from 'preact';
import { detect } from 'detect-browser';
import logo from './logo.svg';

const browser = detect();

class App extends Component {
  render() {
    if (!browser || browser.name !== 'chrome') 
      return <div>Woops, you need chrome to run this app!</div>;
    return (
      <div className="App">
        <div className="Content">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hi, I am Robin!</h2>
          <p className="Subtitle">
            Start your sentence with "Robin", and I will reply.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
