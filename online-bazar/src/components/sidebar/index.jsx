import React from 'react';

import './style.css';
function Sidebar() {
  return (
    <nav class="sidenav">
      <ul class="main-buttons">
        <li>
          <i class="fa fa-circle fa-2x"></i>
          Clothes
          <ul class="hidden">
            <li>Shirts</li>
            <li>T-Shirts</li>
            <li>Shorts </li>
            <li>Jeans</li>
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
