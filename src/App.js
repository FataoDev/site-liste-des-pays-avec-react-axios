import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/portfolio" element={<Portfolio />}></Route> */}
          <Route path="*" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
