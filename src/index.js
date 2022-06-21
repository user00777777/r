import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
// let rend = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// };

// rend();

// store.subscribe(() => {
//   rend();
// });
// const root = ReactDOM.createRoot(document.getElementById("root"));

// let rend = () => {.render(
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
// };
// rend();

// store.subscribe(() => {
//   rend();
// });

reportWebVitals();
