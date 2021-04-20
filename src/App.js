import logo from './logo.svg';
import './App.css';
import TitleBanner from './TitleBanner.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TitleBanner/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="Nav-box">
          <div className="Nav-list">
              HOME<br></br>
              BACK<br></br>
              ALL LOCATIONS<br></br>
              SEARCH BY NAME<br></br>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
