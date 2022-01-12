import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
function Sidebar() {
  return (
    <nav class="sidenav">
      <div className="logo-container">
        <div className="logo">
          <img
            width="90%"
            src="https://www.graphicsprings.com/filestorage/stencils/478636faf8262ee79adb7c94525424f1.png?width=500&height=500"
            alt="logo"
          />
        </div>
        <div className="title">Online Bazar</div>
      </div>
      <ul class="main-buttons">
        <li>DashBoard</li>
        <li>
          <i class="fa fa-circle fa-2x"></i>
          Clothes
          <ul class="hidden">
            <Link to="shirts">
              <li>Shirts</li>
            </Link>
            <Link to="t-shirts">
              <li>T-Shirts</li>
            </Link>
            <Link to="shorts">
              <li>Shorts</li>
            </Link>
            <Link to="jeans">
              <li>Jeans</li>
            </Link>
          </ul>
        </li>
        <li>
          <i class="fa fa-circle fa-2x"></i>
          Foot Wear
          <ul class="hidden">
            <li>Sandel</li>
            <li>Shoes</li>
            <li>Socks</li>
          </ul>
        </li>
        <li>
          <i class="fa fa-circle fa-2x"></i>
          Bags
          <ul class="hidden">
            <li>College</li>
            <li>Girls Hand Bags</li>
            <li>Pures</li>
            <li>Clushes</li>
          </ul>
        </li>
        <li>
          <i class="fa fa-circle fa-2x"></i>
          Clothes
          <ul class="hidden">
            <Link to="shirts">
              <li>Shirts</li>
            </Link>
            <Link to="t-shirts">
              <li>T-Shirts</li>
            </Link>
            <Link to="shorts">
              <li>Shorts</li>
            </Link>
            <Link to="jeans">
              <li>Jeans</li>
            </Link>
          </ul>
        </li>
        <li>
          <i class="fa fa-circle fa-2x"></i>
          Foot Wear
          <ul class="hidden">
            <li>Sandel</li>
            <li>Shoes</li>
            <li>Socks</li>
          </ul>
        </li>
        <li>
          <i class="fa fa-circle fa-2x"></i>
          Bags
          <ul class="hidden">
            <li>College</li>
            <li>Girls Hand Bags</li>
            <li>Pures</li>
            <li>Clushes</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
