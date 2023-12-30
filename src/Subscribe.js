import React, { useState } from "react";
// import { firestore } from "./firebase-config"; // Path to your firebase-config file
import logo from "./default-monochrome.svg"; // Path to your logo image
import "./Subscribe.css";

function Subscribe() {
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
    <div className="page-container main-content">
      <header className="page-header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <div className="subscribe-container">
        <form onSubmit={handleSubmit}>
          <h1>
            Begin Your Child's Champion Journey: Claim the Free Starter Kit
            Today!
          </h1>
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

      <footer class="contact-info">
        <p>
          Have questions? Get in touch at{" "}
          <a href="mailto:info@championkidshub.com">info@championkidshub.com</a>
        </p>
      </footer>
    </div>
  );
}

export default Subscribe;
