import { SET_CURRENT_USER } from "../actions/types";
import isEmpty from "../validation/is-empty";

const initialState = {
  isAuthenticated: false,
  user: {},
  isTeacherAuthed: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        isTeacherAuthed: action.payload.hasOwnProperty("unlockedTopics")
      };

    default: {
      return state;
    }
  }
}
