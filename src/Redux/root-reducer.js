import { combineReducers } from "redux";
import { showReducer, showFavReducer } from "./Reducers/show.reducer";

export default combineReducers({
  showmore: showReducer,
  showfavmore: showFavReducer,
});
