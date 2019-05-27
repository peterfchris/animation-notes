import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <nav>
          <span>
            <h1>Company Name</h1>
          </span>
          <ul className="desktop-navigation">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="mobile-navigation">
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
