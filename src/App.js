import chryslerLogo from "./assets/crysler.png";
import Appskeleton from "./components/Appskeleton/Appskeleton.jsx";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="full-width full-height absolute root_globalMenu_base">
      <Appskeleton />
      <main className="main-content">
        <div className="home-logo">
          <img src={chryslerLogo} alt="Chrysler" className="centre-logo" />
        </div>
      </main>
    </div>
  );
}

export default App;
