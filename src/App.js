import React from "react";
import Home from "pages/Home/Home";
import Nav from "components/Nav/Nav";
import GlobalStyles from "assets/styles/GlobalStyles";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
