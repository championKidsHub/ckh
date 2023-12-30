import React, { useState } from "react";
// import { firestore } from "./firebase-config"; // Path to your firebase-config file
import logo from "./default-monochrome.svg"; // Path to your logo image
import "./Subscribe2.css";

function Subscribe2() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //   await firestore.collection("subscribers").add({
      //     email: email,
      //     subscribedAt: new Date(),
      //   });
      alert("Subscribed successfully!");
      setEmail("");
      setName("");
    } catch (error) {
      console.error("Error adding subscriber: ", error);
      alert("Error subscribing!");
    }
  };

  return (
    <div class="page-container">
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <h1>Join the Champions - Download Your Starter Kit Today!</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Download Now</button>
        </form>
        <p class="quotes">
          "The first step towards getting somewhere is to decide you're not
          going to stay where you are." - J.P. Morgan"
        </p>
      </div>

      <div class="content-section">
        <h1>Champion Kids Hub</h1>

        <div class="kit-description">
          <h2>What's Inside the First Champion Kit?</h2>
          <p>Our carefully crafted kit empowers your child...</p>
        </div>

        <div class="benefits">
          <h2>Benefits of the Kit</h2>
          <ul>
            <li>Enhances goal-setting skills</li>
            <li>Boosts creativity and problem-solving</li>
            <li>Encourages persistence and resilience</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Subscribe2;
