import React from 'react';
import Header from './Header.jsx';
import './Landing.css';

function Landing() {
  return (
    <div className="landing-root">
      <div className="landing">
        <Header />
        <main className="landing-content">
          <div className="content-wrapper">
            <h1>Welcome to Whisker</h1>
            <p>A Scratch-themed social media platform</p>
            <a href="/app" className="enter-button">Jump in</a>
          </div>
        </main>
      </div>
    </div>
  );
}


export default Landing;
