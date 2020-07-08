import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import apiMiddleware from "./middleware/apiFootballMiddleware";
import rootReducer from "./root-reducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(apiMiddleware, thunk))
);

export default store;
