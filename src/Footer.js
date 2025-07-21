import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <p>
        This project was coded by Anneke Viljoen and is open-sourced on
        <a
          href="https://github.com/anneke44/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub
        </a>
      </p>
    </footer>
  );
}
