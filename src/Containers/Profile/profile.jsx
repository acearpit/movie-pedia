import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "react-avatar";
import { connect } from "react-redux";

import { deleteUser, updateCurrentUserData } from "../../redux/actionCreators/auth";
import { setStateVariable } from "../../redux/actionCreators/stateVariables";

import ClockLoader from "../../Components/Loaders/ClockLoader";

import "./profile.css";

const profile = ({ user, setStateVar, updateUser, updateSuccess, updateLoading, updateError, deleteUserFromDB, deleteLoading, deleteError, deleteSuccess }) => {
  const [edit, setEdit] = useState(false);

  const imageRef = useRef(null);

  const [image, setImage] = useState("");
  const [imageError, setImageError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const history = useHistory();

  useEffect(() => {
    handleUpdation();
  }, []);

  useEffect(() => {
    if (!user.token) history.goBack();
    if (user) {
      setImage(user.profile_pic);
      setImageError("");

      setFirstName(user.first_name);
      setFirstNameError("");

      setLastName(user.last_name);
      setLastNameError("");

      setNewPassword("");
      setNewPasswordError("");

      setConfirmPassword("");
      setConfirmPasswordError("");

      if (updateSuccess) setEdit(false);
    }
  }, [user, updateSuccess]);

  const handleUpdation = () => {
    setStateVar("updateError", "");
    setStateVar("deleteError", "");
    setImageError("");
    setFirstNameError("");
    setLastNameError("");
    setNewPasswordError("");
    setConfirmPasswordError("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    handleUpdation();

    const field = e.target.name;
    const value = e.target.value;

    if (field === "firstName") {
      setFirstName(value);
    } else if (field === "lastName") {
      setLastName(value);
    } else if (field === "newPassword") {
      setNewPassword(value);
    } else {
      setConfirmPassword(value);
    }
  };

  const cancelEdit = (e) => {
    e.preventDefault();

    setFirstName(user.first_name);
    setFirstNameError("");

    setLastName(user.last_name);
    setLastNameError("");

    setImage(user.profile_pic);
    setImageError("");

    setNewPassword("");
    setNewPasswordError("");

    setConfirmPassword("");
    setConfirmPasswordError("");

    setEdit(false);
  };

  const performValidation = () => {
    const errorString = "This field cannot be empty!";

    if (!firstName) {
      setFirstNameError(errorString);
      return false;
    }

    if (!lastName) {
      setLastNameError(errorString);
      return false;
    }

    if (newPassword) {
      if (!confirmPassword) {
        setConfirmPasswordError(errorString);
        return false;
      }

      if (newPassword !== confirmPassword) {
        setNewPasswordError("The passwords do not match");
        setConfirmPasswordError("The passwords do not match");
        return false;
      }
    }

    return true;
  };

  const updateProfile = (e) => {
    e.preventDefault();

    const isValid = performValidation();
    if (!isValid) return;

    // send api req to update the profile
    const data = { profilePic: image, firstName, lastName, newPassword, confirmPassword };
    updateUser(user.token, data);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsBinaryString(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const imageUpload = async (data) => {
    const files = data.target.files;

    if (files && files[0]) {
      const file = files[0];

      // check for file size
      if (file.size > 2097152) {
        setImage("");
        return setImageError("File size should not exceed 2mb!");
      }

      // check for file types (allowed ones are image/jpg, image/jpeg, image/png, image/gif)
      const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif"];
      if (allowedTypes.indexOf(file.type) === -1) {
        setImage("");
        return setImageError("The allowed file types are .png, .jpg, .jpeg, .gif");
      }

      const path = await convertToBase64(file);
      setImage(path);
    }
  };

  return (
    <div className="profile_main_container">
      <div>
        {updateError && <p className="actionsError">{updateError}</p>}
        {deleteError && <p className="actionsError">{deleteError}</p>}
        <div className="avatar">
          <Avatar color={Avatar.getRandomColor("sitebase", ["red", "green", "blue", "violet"])} name={`${firstName} ${lastName}`} size="130" round className="user_avatar_profile" src={image} />
          {imageError && <p className="errorText">{imageError}</p>}
          {edit ? (
            image ? (
              <div className="selected_image">
                <span
                  className="btn remove_image"
                  onClick={(e) => {
                    e.preventDefault();
                    setImage("");
                    setImageError("");
                  }}>
                  Remove
                </span>
                <span
                  className="btn upload_image"
                  onClick={(e) => {
                    e.preventDefault();
                    setImageError("");
                    imageRef.current.click();
                  }}>
                  Update
                </span>
              </div>
            ) : (
              <div className="selected_image">
                <span
                  className="btn upload_image"
                  onClick={(e) => {
                    e.preventDefault();
                    setImageError("");
                    imageRef.current.click();
                  }}>
                  Upload new image
                </span>
              </div>
            )
          ) : null}
          <input ref={imageRef} type="file" name="image_input" accept="image/png, image/jpeg, image/jpg, image/gif" onChange={(data) => imageUpload(data)} style={{ display: "none" }} />
        </div>
        <div className="profile_field">
          <span>First Name</span>
          <input className={`profile_input ${firstNameError && "error_border"}`} type="text" value={firstName} name="firstName" onChange={handleChange} readOnly={!edit} />
          {firstNameError && <p className="errorText">{firstNameError}</p>}
        </div>
        <div className="profile_field">
          <span>Last Name</span>
          <input className={`profile_input ${lastNameError && "error_border"}`} type="text" value={lastName} name="lastName" onChange={handleChange} readOnly={!edit} />
          {lastNameError && <p className="errorText">{lastNameError}</p>}
        </div>
        <div className="profile_field">
          <span>Email</span>
          <input className="profile_input" type="email" value={user.email} readOnly />
        </div>
        {edit && (
          <>
            <div className="profile_field">
              <span>New Password</span>
              <input className={`profile_input ${newPassword && "error_border"}`} type="password" name="newPassword" onChange={handleChange} />
              {newPasswordError && <p className="errorText">{newPasswordError}</p>}
            </div>
            {newPassword.length && (
              <div className="profile_field">
                <span>Confirm new password</span>
                <input className={`profile_input ${confirmPasswordError && "error_border"}`} type="password" name="confirmPassword" onChange={handleChange} />
                {confirmPasswordError && <p className="errorText">{confirmPasswordError}</p>}
              </div>
            )}
          </>
        )}
        <div className="profile_actions">
          {edit ? (
            <>
              <button className="btn cancel_edit" onClick={cancelEdit}>
                Cancel edit
              </button>
              {updateLoading ? (
                <button className="updateLoading">
                  <ClockLoader size={25} color={"white"} loading={updateLoading} />
                </button>
              ) : (
                <button className="btn update_profile" onClick={updateProfile}>
                  Update profile
                </button>
              )}
            </>
          ) : (
            <>
              <button
                className="btn edit_profile"
                onClick={(e) => {
                  e.preventDefault();
                  setEdit(true);
                }}>
                Edit profile
              </button>
              {deleteLoading ? (
                <button className="deleteLoading">
                  <ClockLoader size={25} color={"white"} loading={deleteLoading} />
                </button>
              ) : (
                <button
                  className="btn delete_profile"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteUserFromDB(user.token);
                  }}>
                  Delete profile
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    updateSuccess: state.stateVariables.updateSuccess,
    updateLoading: state.stateVariables.updateLoading,
    updateError: state.stateVariables.updateError,
    deleteSuccess: state.stateVariables.deleteSuccess,
    deleteLoading: state.stateVariables.deleteLoading,
    deleteError: state.stateVariables.deleteError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (token, data) => dispatch(updateCurrentUserData(token, data)),
    deleteUserFromDB: (token) => dispatch(deleteUser(token)),
    setStateVar: (type, val) => dispatch(setStateVariable(type, val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(profile);
