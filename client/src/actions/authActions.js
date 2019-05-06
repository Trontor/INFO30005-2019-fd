import axios from "axios";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  REGISTER_LOADING,
  SET_REGISTER_ERROR,
  SET_REGISTER_SUCCESS
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const registerUser = userData => dispatch => {
  dispatch(setRegisterLoading());
  axios
    .post("/api/student/register", userData)
    .then(res => dispatch(setRegisterSuccess(userData)))
    .catch(err => dispatch(setRegisterFailed(err.response.data)));
};

export const loginUser = userData => dispatch => {
  axios
    .post("api/student/login", userData)
    .then(res => {
      // Save to local storage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Token includes user information, need to decode using jwt-decode
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setRegisterLoading = () => {
  return {
    type: REGISTER_LOADING
  };
};

// Set registered status
export const setRegisterSuccess = () => {
  return {
    type: SET_REGISTER_SUCCESS
  };
};

export const setRegisterFailed = errors => {
  return {
    type: SET_REGISTER_ERROR,
    payload: errors
  };
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log out user
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future request
  setAuthToken(false);
  dispatch({ type: SET_CURRENT_USER, payload: {} });
};
