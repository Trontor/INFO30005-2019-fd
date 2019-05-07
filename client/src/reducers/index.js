import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import errorsReducer from "./errorsReducer";
import profileReducer from "./profileReducer";
import registerReducer from "./registerReducer";
import threadReducer from "./threadReducer";

export default combineReducers({
  auth: loginReducer,
  errors: errorsReducer,
  profile: profileReducer,
  register: registerReducer,
  submitThread: threadReducer
});
