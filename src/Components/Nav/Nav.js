import React from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css";

export default function Nav() {
  return (
    <div className="navContainer">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/bio">
        <button>Bio</button>
      </Link>
      <Link to="/portfolio">
        <button>Portfolio</button>
      </Link>
    </div>
  );
}
