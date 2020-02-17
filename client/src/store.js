import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./reducers";

const createStoreWithMiddleware = compose(applyMiddleware(thunkMiddleware))(
  createStore
);

const store = createStoreWithMiddleware(rootReducer);

export default store;
