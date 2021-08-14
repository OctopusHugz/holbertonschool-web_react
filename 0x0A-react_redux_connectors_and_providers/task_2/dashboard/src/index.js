import React from "react";
import ReactDOM from "react-dom";
import App, { ConnectedApp } from "./App/App";
import { createStore } from "redux";
import uiReducer from "./reducers/uiReducer";
import { Provider } from "react-redux";

const store = createStore(
  uiReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);
