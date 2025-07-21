import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <Footer />
      </header>
    </div>
  );
}

export default App;
