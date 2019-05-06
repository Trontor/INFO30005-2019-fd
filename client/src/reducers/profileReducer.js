import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE
} from "../actions/types";

const initialState = {
  data: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return { ...state, data: action.payload, loading: false };
    case PROFILE_LOADING:
      return { ...state, loading: true };
    case CLEAR_CURRENT_PROFILE:
      return { ...state, data: null, loading: false };
    default:
      return state;
  }
}
