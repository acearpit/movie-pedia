import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { authoriseUser } from "../../redux/actionCreators/auth";
import { setStateVariable } from "../../redux/actionCreators/stateVariables";

import ClockLoader from "../Loaders/ClockLoader";
import "./Auth.css";

const Auth = ({ loading, error, success, user, authorise, setStateVar }) => {
  const [isLogin, setIsLogin] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const updateState = (e) => {
    handleUpdation();

    const field = e.target.name;
    const value = e.target.value;
    if (field === "first_name") {
      setFirstName(value);
    } else if (field === "last_name") {
      setLastName(value);
    } else if (field === "email") {
      setEmail(value);
    } else if (field === "password") {
      setPassword(value);
    } else {
      setConfirmPassword(value);
    }
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const validate = () => {
    const error_string = "This field is required!";

    if (!isLogin) {
      if (!firstName) {
        setFirstNameError(error_string);
        return false;
      }

      if (!lastName) {
        setLastNameError(error_string);
        return false;
      }
    }

    if (!email) {
      setEmailError(error_string);
      return false;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email!");
      return false;
    }

    if (!password) {
      setPasswordError(error_string);
      return false;
    }

    if (!isLogin) {
      if (!confirmPassword) {
        setConfirmPasswordError(error_string);
        return false;
      }

      if (password !== confirmPassword) {
        setConfirmPasswordError("The passwords do not match");
        return false;
      }
    }

    return true;
  };

  const handleAuth = (e) => {
    e.preventDefault();

    if (!loading) {
      setStateVar("authError", "");
      const isValid = validate();

      if (!isValid) return;

      let data;
      if (isLogin) data = { email, password };
      else data = { first_name: firstName, last_name: lastName, email, password };

      authorise(isLogin, data);
    }
  };

  const handleUpdation = () => {
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setStateVar("authError", false);
    setStateVar("authLoading", false);
  };

  const history = useHistory();

  useEffect(() => {
    if (success && user.token) {
      history.goBack();
    }
  }, [success, error, loading, user]);

  return (
    <div className="auth_bg">
      <div className="auth_middle_cntnr">
        {error && <p className="auth_error">{error}</p>}
        {!isLogin && (
          <>
            <div className="auth_field">
              <span className="auth_label">
                First Name <span style={{ color: "red" }}>*</span>
              </span>
              <input type="text" name="first_name" value={firstName} className={firstNameError ? "error_border" : ""} onChange={updateState} />
              {firstNameError && <p className="error">{firstNameError}</p>}
            </div>
            <div className="auth_field">
              <span className="auth_label">
                Last Name <span style={{ color: "red" }}>*</span>
              </span>
              <input type="text" name="last_name" value={lastName} className={lastNameError ? "error_border" : ""} onChange={updateState} />
              {lastNameError && <p className="error">{lastNameError}</p>}
            </div>
          </>
        )}
        <div className="auth_field">
          <span className="auth_label">
            Email <span style={{ color: "red" }}>*</span>
          </span>
          <input type="email" name="email" value={email} className={emailError ? "error_border" : ""} onChange={updateState} />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="auth_field">
          <span className="auth_label">
            Password <span style={{ color: "red" }}>*</span>
          </span>
          <input type="password" name="password" value={password} className={passwordError ? "error_border" : ""} onChange={updateState} />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>
        {!isLogin && (
          <div className="auth_field">
            <span className="auth_label">
              Confirm Password <span style={{ color: "red" }}>*</span>
            </span>
            <input type="password" name="confirm_pass" className={confirmPasswordError ? "error_border" : ""} value={confirmPassword} onChange={updateState} />
            {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
          </div>
        )}
        <button className="signup" onClick={handleAuth}>
          {loading ? <ClockLoader size={25} color={"white"} loading={loading} /> : isLogin ? "Login" : "Signup"}
        </button>
        <div
          className="switch"
          onClick={(e) => {
            e.preventDefault();
            handleUpdation();
            setIsLogin(!isLogin);
          }}>
          {!isLogin ? "Already have an account? Login" : "Don't have an account? Signup"}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.stateVariables.authLoading,
    error: state.stateVariables.authError,
    success: state.stateVariables.authSuccess,
    user: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authorise: (isLogin, data) => dispatch(authoriseUser(isLogin, data)),
    setStateVar: (type, val) => dispatch(setStateVariable(type, val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
