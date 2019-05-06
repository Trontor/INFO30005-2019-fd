import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import errorsReducer from "./errorsReducer";
import profileReducer from "./profileReducer";
import registerReducer from "./registerReducer";

export default combineReducers({
  auth: loginReducer,
  errors: errorsReducer,
  profile: profileReducer,
  register: registerReducer
});
