import logo from './logo.svg';
import './App.css';
import GreetingElement from './myGreetingApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Md Muntahi Hossain
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React in CN5006
        </a>
        <GreetingElement />
      </header>
    </div>
  );
}

export default App;
