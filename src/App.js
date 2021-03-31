import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather city="San Francisco" />
      </header>

      <footer>
        <a href="https://github.com/misspx12/weather-app-react">Open-source code</a>
        {" "}by Ahriane 💻
      </footer>
      </div>
    </div>
  );
}

