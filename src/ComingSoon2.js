import "./App.css";
import logo from "./default-monochrome.svg";
import "./ComingSoon2.css";
import React from "react";

function ComingSoon2() {
  return (
    <div class="page-container">
      <header className="page-header">
        <img src={logo} alt="Logo" className="logo" />
      </header>

      <div class="left-section">
        <h1>Champion Kids Hub</h1>
        <p>
          Unveiling a world where every child is a champion. An immersive
          experience filled with learning, growth, and adventure.
        </p>
        <div class="feature-highlights">
          <h3>What to Expect:</h3>
          <ul>
            <li>Innovative Goal-Setting Activities</li>
            <li>Interactive Learning Games</li>
            <li>Community Challenges</li>
          </ul>
        </div>
        <div class="testimonials">
          <p>
            "A sneak peek into Champion Kids Hub has already got us excited!" -
            Early Reviewer
          </p>
        </div>
      </div>
      <div class="right-section">
        <div class="coming-soon">
          <h2>Coming Soon: The Champion Kids Experience!</h2>
          <p>Be the first to know when we launch.</p>
          <form id="notify-form">
            {/* <input type="email" placeholder="Enter your email" required> */}
            <button type="submit">Notify Me</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon2;
