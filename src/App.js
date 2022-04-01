import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary App</header>

        <main className="App-main">
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Romina</small>
        </footer>
      </div>
    </div>
  );
}
