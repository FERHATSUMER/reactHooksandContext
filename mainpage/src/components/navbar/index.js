import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
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
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/member">
            <li>Member</li>
          </Link>
          <Link to="/project">
          <li>Project</li>
          </Link>
          <Link to="/blog">
          <li>Blog</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
