import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import spaceReducer from "./spaces/reducer"
import spaceDetailsReducer from "./spaceDetails/reducer"

export default combineReducers({
  appState,
  user,
  spaces: spaceReducer,
  spaceDetails: spaceDetailsReducer
});
