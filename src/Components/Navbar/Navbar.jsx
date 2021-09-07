import "./Navbar.css";

import React from "react";

const navbar = (props) => (
  <div className="Navbar">
    <a href="/movie-pedia">
      <img src="https://pngimage.net/wp-content/uploads/2018/06/mp-png-5.png" className="img" />
    </a>
    {/* <SearchBar /> */}
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search here..."
        className="input"
        id="searchBar"
        // onChange={props.handleSearch}
        onKeyUp={props.handleSearch}
      />
    </div>
    <button type="submit" className="login">
      Login
    </button>
    <button type="submit" className="signup">
      Signup
    </button>
  </div>
);

export default navbar;
