import "./Navbar.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Avatar from "react-avatar";
import { logout } from "../../redux/actionCreators/auth";
import { setStateVariable } from "../../redux/actionCreators/stateVariables";

const navbar = ({ handleSearch, isLoggedIn, user, signout, setStateVar }) => {
  const [show, setShow] = useState(false);
  const [showMenu, setshowMenu] = useState(false);

  return (
    <div className="navbar">
      <div className={`mobile_menu ${showMenu && "animate"}`}>
        {showMenu &&
          (isLoggedIn ? (
            <>
              <span>
                Hi, {user.first_name} {user.last_name}
              </span>
              <span className="divider" />
              <span>
                <Link
                  to="/profile"
                  onClick={() => {
                    setshowMenu(false);
                  }}>
                  My Profile
                </Link>
              </span>
              <span>
                <Link
                  to="/watchlist"
                  onClick={() => {
                    setshowMenu(false);
                  }}>
                  My Watchlist
                </Link>
              </span>
              <span className="divider" />
              <span
                onClick={(e) => {
                  e.preventDefault();
                  setStateVar("authSuccess", false);
                  setshowMenu(false);
                  signout();
                }}>
                Signout
              </span>
            </>
          ) : (
            <span>
              <Link
                to="/auth"
                className="menu_signin"
                onClick={() => {
                  setshowMenu(false);
                }}>
                Signin
              </Link>
            </span>
          ))}
      </div>
      <div className="nav_left">
        <Link to="/">
          <img src="https://pngimage.net/wp-content/uploads/2018/06/mp-png-5.png" />
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 hamburger"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
          onClick={(e) => {
            e.preventDefault();
            setshowMenu(!showMenu);
          }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="nav_center">
        <input type="text" placeholder="Search movies..." className="input" id="searchBar" onChange={handleSearch} />
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
                  <Link to="/profile">My Profile</Link>
                </span>
                <span>
                  <Link to="/watchlist">My Watchlist</Link>
                </span>
                <span className="divider" />
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    setStateVar("authSuccess", false);
                    setShow(false);
                    signout();
                  }}>
                  Signout
                </span>
              </div>
            ) : null}
          </div>
        ) : (
          <Link to="/auth" className="login">
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
