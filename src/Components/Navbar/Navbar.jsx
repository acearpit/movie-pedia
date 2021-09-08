import "./Navbar.css";

import React from "react";
import { Link } from "react-router-dom";

const navbar = (props) => (
  <div className="navbar">
    <Link to="/movie-pedia" className="nav_left">
      <img src="https://pngimage.net/wp-content/uploads/2018/06/mp-png-5.png" />
    </Link>
    <div className="nav_center">
      <input type="text" placeholder="Search here..." className="input" id="searchBar" onChange={props.handleSearch} />
    </div>
    <div className="nav_right">
      <button type="submit" className="login">
        Login
      </button>
      <button type="submit" className="signup">
        Signup
      </button>
    </div>
  </div>
);

export default navbar;
