import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { loadingBarMiddleware } from "react-redux-loading-bar";

import rootReducer from "./reducers";

const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware,
    loadingBarMiddleware({
      promiseTypeSuffixes: ["REQUEST", "SUCCESS", "FAILURE"]
    })
  )
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

export default store;
