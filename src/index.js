import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rend = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        {" "}
        <App
          state={state}
          dispatch={store.dispatch.bind(store)}
          store={store}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};
rend(store.getState());
reportWebVitals();
store.subscribe(() => {
  let state = store.getState();
  rend(state);
});
