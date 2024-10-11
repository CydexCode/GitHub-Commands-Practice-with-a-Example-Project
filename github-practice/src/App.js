import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome to the Home Page</h1>
      <p>
        This is the home page of your React application.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
  );
}

export default App;
