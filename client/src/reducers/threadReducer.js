import {
  SUBMIT_POST_LOADING,
  SUBMIT_POST_SUCCESS,
  SUBMIT_POST_ERROR
} from "../actions/types";

const initialState = {
  submitSuccess: false,
  loading: false,
  errors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case SUBMIT_POST_SUCCESS:
      return {
        ...state,
        submitSuccess: true,
        loading: false
      };
    case SUBMIT_POST_ERROR:
      return {
        ...state,
        submitSuccess: false,
        loading: false,
        errors: action.payload
      };
    default: {
      return state;
    }
  }
}
