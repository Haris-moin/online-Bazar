import React from 'react';
import './style.css';

function Header() {
  return (
    <div className="header-container">
      <div className="left-container">
        <div></div>
      </div>
      <div className="right-container">
        <div className="cart">
          <img
            width="90%"
            src="https://www.pngarts.com/files/3/Shopping-Cart-PNG-Pic.png"
            alt="cart"
          />
        </div>
        <div className="person-img">
          <img
            width="90%"
            src="https://i.dlpng.com/static/png/4296907-user-outline-people-person-icon-with-png-and-vector-format-for-people-icon-png-512_512_preview.webp"
            alt="person"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
