import React from 'react';
import { Link } from 'react-router-dom';
import { GiClothes, GiBarefoot, GiDiscGolfBag } from 'react-icons/gi';
import { RiDashboardFill } from 'react-icons/ri';
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
        <li>
          <RiDashboardFill className="sidebar-icon" />
          <div>DashBoard</div>
        </li>
        <li>
          <i class="fa fa-circle fa-2x"></i>
          <GiClothes className="sidebar-icon" /> <div>Clothes</div>
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
          <GiBarefoot className="sidebar-icon" />
          <div>Foot Wear</div>
          <ul class="hidden">
            <li>Sandel</li>
            <li>Shoes</li>
            <li>Socks</li>
          </ul>
        </li>
        <li>
          <i class="fa fa-circle fa-2x"></i>
          <GiDiscGolfBag className="sidebar-icon" /> <div>Bags</div>
          <ul class="hidden">
            <li>College</li>
            <li>Girls Hand Bags</li>
            <li>Pures</li>
            <li>Clushes</li>
          </ul>
        </li>
        <li>
          <i class="fa fa-circle fa-2x"></i>
          <GiClothes className="sidebar-icon" /> <div>Clothes</div>
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
          <GiBarefoot className="sidebar-icon" />
          <div>Foot Wear</div>
          <ul class="hidden">
            <li>Sandel</li>
            <li>Shoes</li>
            <li>Socks</li>
          </ul>
        </li>
        <li>
          <i class="fa fa-circle fa-2x"></i>
          <GiDiscGolfBag className="sidebar-icon" /> <div>Bags</div>
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
