import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Login from './Login';

function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  /*const handleLoginClick = () => {
    setShowLoginForm(true);
  };*/

  const handleCancelClick = () => {
    setShowLoginForm(false);
  };

  return (
    <>
      <nav>
        <ul>
<<<<<<< HEAD
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li><Link to="/budget">Budget</Link></li>
=======
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/events.js">Events</Link></li>
          <li><Link to="/ContactUs">Contact Us</Link></li>
>>>>>>> 152eb5dd8d53599e6d15cafd7fefb873dc077694
        </ul>
      </nav>
      <div className={`overlay ${showLoginForm ? 'show' : ''}`} onClick={handleCancelClick}></div>
      {showLoginForm && (
        <div className="login-container">
          <Login onLogin={() => {}} onCancel={handleCancelClick} />
        </div>
      )}
    </>
  );
}

export default Navbar;