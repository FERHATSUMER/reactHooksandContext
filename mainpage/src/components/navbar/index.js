import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-right">
        <img
          alt="logo"
          className="navbar-logo"
          src="https://media.licdn.com/dms/image/D4D03AQFMfnp5H1M-vA/profile-displayphoto-shrink_800_800/0/1667210919849?e=1701907200&v=beta&t=LpKqBog9O5FAQFtfDZ_a8iK0CqgCbDuQicq45YK5DNY"
        />
        <h2 className="navbar-title">Ferhat Sümer</h2>
      </div>
      <div className="navbar-left">
        <ul className="navbar-ul">
          <li>About</li>
          <li>Member</li>
          <li>Project</li>
          <li>Blog</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
