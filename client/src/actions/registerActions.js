import {
  REGISTER_LOADING,
  SET_REGISTER_ERROR,
  SET_REGISTER_SUCCESS
} from "../actions/types";
import axios from "axios";

export const registerUser = userData => dispatch => {
  dispatch(setRegisterLoading());
  axios
    .post("/api/student/register", userData)
    .then(res => dispatch(setRegisterSuccess(userData)))
    .catch(err => dispatch(setRegisterFailed(err.response.data)));
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
