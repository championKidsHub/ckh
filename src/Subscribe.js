import React, { useState } from "react";
import logo from "./default-monochrome.svg"; // Path to your logo image
import "./Subscribe.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDYsRJMLg-Ck7FTv0rYBPHEcK58wOhAKB0",
  authDomain: "championkidshub.firebaseapp.com",
  databaseURL: "https://championkidshub-default-rtdb.firebaseio.com",
  projectId: "championkidshub",
  storageBucket: "championkidshub.appspot.com",
  messagingSenderId: "196789947226",
  appId: "1:196789947226:web:fc685f4a33cde4eab30163",
  measurementId: "G-Q988XJYHZT",
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

function Subscribe() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showStarterKit, setShowStarterKit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "subscribers"), {
        email: email,
        subscribedAt: new Date(),
      });
      setShowStarterKit(true);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="page-container main-content">
      <header className="page-header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <div className="subscribe-container">
        {!showStarterKit && (
          <form onSubmit={handleSubmit}>
            <h1>
              Begin Your Champion Kid's Journey: Claim the Champion Starter Kit
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
        )}
        {showStarterKit && (
          <>
            <h1>Champion Kids Starter Kit</h1>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/championkidshub.appspot.com/o/public%2FStarterKit.zip?alt=media&token=0fcd06fb-58bd-4197-83b7-716d7d8a86b1"
              download="ChampionKidshub_StarterKit.zip"
              className="download-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Starter Kit
            </a>
          </>
        )}
        <p className="quotes">
          "The secret of getting ahead is getting started." - Mark Twain
        </p>
      </div>

      <footer className="contact-info">
        <p>
          Have questions? Get in touch at{" "}
          <a href="mailto:info@championkidshub.com">info@championkidshub.com</a>
        </p>
      </footer>
    </div>
  );
}

export default Subscribe;
