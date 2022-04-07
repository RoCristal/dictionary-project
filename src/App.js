import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Welcome to my dictionary made in Java Script and React.
        </header>

        <main className="App-main">
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Romina - Open source code -
            <a href="https://github.com/RoCristal/dictionary-project">
              {" "}
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
