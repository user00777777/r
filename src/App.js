import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Content from "./Components/Content/Content";
import { Route, Routes } from "react-router-dom";
import React from "react";
import News from "./Components/Header/News";
import New from "./Components/Content/New/New";
import PContainer from "./Components/Content/Profile/PContainer";
import MessageContainer from "./Components/Message/MessageContainer";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/Profile" element={<PContainer />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/Header" element={<News />} />
        <Route path="/New" element={<New />} />
        <Route path="/Message" element={<MessageContainer />} />
      </Routes>
    </div>
  );
}

export default App;
