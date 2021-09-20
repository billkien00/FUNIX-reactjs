import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";

export const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk, logger)
);
