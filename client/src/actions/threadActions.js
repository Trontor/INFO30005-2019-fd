import {
  SUBMIT_POST_LOADING,
  SUBMIT_POST_SUCCESS,
  SUBMIT_POST_ERROR
} from "./types";
import axios from "axios";

export const submitPost = postData => dispatch => {
  dispatch(setPostSubmitting());
  axios
    .post("api/thread/", postData)
    .then(() => dispatch(setPostSuccess()))
    .catch(res => {
      dispatch(setPostError(res.response.data.errors));
      console.log("Error posting thread: " + res);
    });
};

const setPostError = errors => {
  return { type: SUBMIT_POST_ERROR, payload: errors };
};

const setPostSuccess = () => {
  return { type: SUBMIT_POST_SUCCESS };
};
const setPostSubmitting = () => {
  return {
    type: SUBMIT_POST_LOADING
  };
};
