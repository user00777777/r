import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import React from "react";
import News from "./Components/Header/News";
import New from "./Components/Content/New/New";
import PContainer from "./Components/Content/Profile/PContainer";
import MessageContainer from "./Components/Message/MessageContainer";
import ContentContainer from "./Components/Content/Contents/ContentContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/Profile" element={<PContainer />} />
        <Route path="/Contents" element={<ContentContainer />} />
        <Route path="/Header" element={<News />} />
        <Route path="/New" element={<New />} />
        <Route path="/Message" element={<MessageContainer />} />
      </Routes>
    </div>
  );
}

export default App;
