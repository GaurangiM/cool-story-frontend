import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import spaceReducer from "./spaces/reducer"

export default combineReducers({
  appState,
  user,
  spaces: spaceReducer
});
