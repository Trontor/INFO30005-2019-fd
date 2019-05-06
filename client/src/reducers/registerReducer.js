import {
  REGISTER_LOADING,
  SET_REGISTER_ERROR,
  SET_REGISTER_SUCCESS
} from "../actions/types";

const initialState = {
  registerSuccess: false,
  loading: false,
  errors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_REGISTER_SUCCESS: {
      return {
        ...state,
        registerSuccess: true,
        loading: false,
        errors: {}
      };
    }
    case SET_REGISTER_ERROR:
      return { ...state, loading: false, errors: action.payload };
    default: {
      return state;
    }
  }
}
