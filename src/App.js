import React from "react";
import "./App.css";
import logo from "./assets/logo.png"; 

function App() {
  return (
    <div className="landing-container">
      <div className="left-section">
        <div className="app-header">
          <img src={logo} alt="Cabinmate Logo" className="app-logo" />
          <span className="app-title">Cabinmate</span>
        </div>

        <h1 className="main-heading">Download Our App</h1>
        <p className="description">
          Simplify your daily commute with Cabinmate. Connect, share, and travel
          smarter with just one tap.
        </p>

        <div className="store-buttons">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="store-btn"
            />
          </a>
          <a
            href="https://apple.com/app-store"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on the App Store"
              className="store-btn"
            />
          </a>
        </div>
      </div>

    
      <div className="right-section">
        <div className="phone-frame">
          <div className="phone-notch"></div>
          <div className="phone-screen">
            <img src={logo} alt="Cabinmate Logo" className="app-logo" />
            <h2 className="mockup-title">Cabinmate</h2>
            <form className="login-form">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="button">Log in</button>
              <a href="#" className="forgot">
                Forgot password?
              </a>
              <a href="#" className="signup">
                Sign Up
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
