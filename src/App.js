import chryslerLogo from "./assets/crysler.png";
import Rootshell from "./components/Rootshell.jsx";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Rootshell />
      <div className="navbar-2"></div>
      <main className="content">
        <div className="logos">
          <img src={chryslerLogo} alt="Chrysler" className="logo" />
        </div>
        <div className="city">OF CHICAGO</div>
      </main>
    </div>
  );
}

export default App;
