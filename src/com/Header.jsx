import React, { useState } from 'react';
import '../style/Header.css'; // Importing a CSS file for styling
import JoinForm from '../com/JoinForm'; // Import your new form component
import logo from '../images/logo.png';
const Header = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false); // State to manage nav visibility

  const handleJoinClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className={`header__nav ${isNavVisible ? 'active' : ''}`}>
          <ul>
            <li><a href="#membership">Membership</a></li>
            <li><a href="#masterclass">Masterclass</a></li>
            <li><a href="#newsletter">Newsletter</a></li>
            <li><a href="#tools">Tools</a></li>
            <li><a href="#cfo">Personal</a></li>
            {/* <li><a href="#insurance">Insurance Advisor</a></li> */}
          </ul>
          {/* Move the Join the Club button inside the nav for mobile view */}
          <button className="join-btn-mobile" onClick={handleJoinClick}>Join the Club</button>
        </nav>
        <button className="hamburger" onClick={toggleNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </header>
      {isFormVisible && <JoinForm onClose={handleCloseForm} />}
    </>
  );
}

export default Header;
