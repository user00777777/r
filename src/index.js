import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rend = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        {" "}
        <StoreContext.Provider value={store}>
          <App
          // state={state}
          // dispatch={store.dispatch.bind(store)}
          // store={store}
          />
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
rend();
reportWebVitals();
store.subscribe(() => {
  rend();
});
