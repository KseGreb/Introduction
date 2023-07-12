import logo from './logo.svg';
import './App.css';
import newFile from './newFile'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let's try and push it
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with me
        </a>
      </header>
      <newFile.js/>
    </div>
  );
}

export default App;
