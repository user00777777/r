import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Content from "./Components/Content/Content";
import { Route, Routes } from "react-router-dom";
import React from "react";
import News from "./Components/Header/News";
import New from "./Components/Content/New/New";
import MessageComtainer from "./Components/Message/MessageContainer";
//C:\Users\borman\g4\r\src\Components\Message\MessageContainer.js
//C:\Users\borman\g4\r\src\Components\Content\Profile\PContainer.js
import PContainer from "./Components/Content/Profile/PContainer";
function App(props) {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/Profile" element={<PContainer store={props.store} />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/Header" element={<News />} />
        <Route path="/New" element={<New />} />
        <Route
          path="/Message"
          element={<MessageComtainer store={props.store} />}
        />
      </Routes>
    </div>
  );
}

export default App;
