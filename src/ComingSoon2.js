import "./App.css";
import logo from "./default-monochrome.svg";
import "./ComingSoon2.css";
import React from "react";

function ComingSoon2() {
  return (
    <div class="page-container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <div class="left-section">
        <h2>Unveiling a world where every child can become a champion.</h2>
      </div>

      <div class="right-section">
        <div class="coming-soon">
          <h2>Coming Soon: The Champion Kids Experience!</h2>
          <p>Be the first to know when we launch.</p>
          <form id="notify-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Notify Me</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon2;
