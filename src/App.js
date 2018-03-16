import { h, Component } from 'preact';
import logo from './logo.svg';

class App extends Component {
  render() {
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
