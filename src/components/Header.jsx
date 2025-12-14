import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Whisker</h1>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/explore">Explore</a>
          <a href="/login" className="enter-app">Login</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
