import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Optional placeholder for content */}
      <div className="main-content">
        <h1>Welcome to Aggie Assistant</h1>
        <p></p>
        <p>This is the homepage content.</p>
      </div>
    </div>
  );
}

export default App;
