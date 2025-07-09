import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import logoImage from './assets/logo.png'; // adjust path if needed

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Optional placeholder for content */}
      <div className="main-title">
        <img src={logoImage} alt="Logo" className="logo-img" />
        <h1>Howdy, Aggies!</h1>
       
      </div>
      <div className="main-subtitle">
        <p>Your comprehensive AI-powered academic counselor. Get personalized guidance on </p>
        <p> courses, GPA planning, career paths, graduation requirements, and everything you </p>
        <p> need to succeed at Texas A&M.</p>
      </div>

      <div className="badge-container">
        <span className="custom-badge">
          One Smart AI • All Your Academic Needs
        </span>
      </div>

    </div>  
  );
}

export default App;
