import React from "react";

// Stateless Functional Component - getting all info from props
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Counter App</span>
      <span className="badge-pill badge-secondary">{props.totalCounters}</span>
    </nav>
  );
};

export default NavBar;
