import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="title">
        <h4>Luc van Kerkvoort</h4>
      </div>
      <div className="navbar-items">
        <a>
          <h4>About</h4>
        </a>
        <a>
          <h4>Projects</h4>
        </a>
        <a>
          <h4>Contact</h4>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
