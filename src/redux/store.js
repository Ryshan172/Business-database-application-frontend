//Store is the container of the state
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
import dataReducer from "./reducers/dataReducer";
import uiReducer from "./reducers/uiReducer";

const initialState = {};

const middleware = [thunk];

//Our actual state where we get to name our objects inside the state
//and where they come from
const reducers = combineReducers({
  user: userReducer,
  data: dataReducer,
  UI: uiReducer,
});

//Creating store
const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
      compose
  )
);

export default store;
