import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Dictionary App with React, work in progress as of April 2022
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
