import "./Navbar.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Avatar from "react-avatar";
import { logout } from "../../redux/actionCreators/auth";
import { setStateVariable } from "../../redux/actionCreators/stateVariables";

const navbar = ({ handleSearch, isLoggedIn, user, signout, setStateVar }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="navbar">
      <Link to="/movie-pedia" className="nav_left">
        <img src="https://pngimage.net/wp-content/uploads/2018/06/mp-png-5.png" />
      </Link>
      <div className="nav_center">
        <input type="text" placeholder="Search here..." className="input" id="searchBar" onChange={handleSearch} />
      </div>
      <div className="nav_right">
        {isLoggedIn ? (
          <div
            className="user_data"
            onClick={(e) => {
              e.preventDefault();
              setShow(!show);
            }}>
            <Avatar color={Avatar.getRandomColor("sitebase", ["red", "green", "blue", "violet"])} name={`${user.first_name} ${user.last_name}`} size="35" className="user_avatar" />
            <span>
              Hi, {user.first_name}
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "20px", width: "15px", marginLeft: "5px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
              </svg>
            </span>

            {show ? (
              <div className="user_dropdown">
                <span>
                  <Link to="/movie-pedia/profile">My Profile</Link>
                </span>
                <span>
                  <Link to="/movie-pedia/watchlist">My Watchlist</Link>
                </span>
                <span className="divider" />
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    setStateVar("authSuccess", false);
                    signout();
                  }}>
                  Signout
                </span>
              </div>
            ) : null}
          </div>
        ) : (
          <Link to="/movie-pedia/auth" className="login">
            Signin
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.token ? true : false,
    user: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(logout()),
    setStateVar: (type, val) => dispatch(setStateVariable(type, val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(navbar);
