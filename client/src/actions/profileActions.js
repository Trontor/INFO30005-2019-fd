import axios from "axios";
import { PROFILE_LOADING, GET_PROFILE } from "./types";

export const getCurrentProfile = isTeacher => dispatch => {
  dispatch(setProfileLoading());

  const endPoint = `api/${isTeacher ? "teacher" : "student"}/profile`;
  axios
    .get(endPoint)
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("Error retrieving profile :(");
      console.log(err);
    });
};

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};
