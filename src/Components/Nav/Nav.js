import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <nav>
      <div class="container">
        <div class="box">
          <div class="logo">
            <img src="/images/Vector.png" alt="logo" />
          </div>
          <div class="nav-item">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
            <div>
              <a class="btn">Contact us</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
