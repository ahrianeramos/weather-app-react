import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="San Francisco" />
      <footer>
        <a href="https://github.com/misspx12/weather-app-react">Open-source code</a>
        {" "}by Ahriane 💻
      </footer>
      </div>
    </div>
  );
}

