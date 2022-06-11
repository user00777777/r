import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Content from "./Components/Content/Content";
import { Route, Routes } from "react-router-dom";

import React from "react";
import News from "./Components/Header/News";
import New from "./Components/Content/New/New";
import Profile from "./Components/Content/Profile/Profile";
import Message from "./Components/Message/Message";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/Profile"
          element={<Profile state={props.state} dispatch={props.dispatch} />}
        />
        <Route path="/Content" element={<Content />} />
        <Route path="/Header" element={<News />} />
        <Route path="/New" element={<New />} />
        <Route
          path="/Message"
          element={
            <Message
              state={props.state}
              dispatch={props.dispatch}
              store={props.store}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
