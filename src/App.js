import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather city="San Francisco" />
      </header>

      <footer>
        <a href="https://github.com/misspx12/weather-app-react">Open-source code</a>
        {" "}by Ahriane 💻
      </footer>
    </div>
  );
}

