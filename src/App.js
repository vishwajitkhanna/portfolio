import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Aside from "./Components/Aside";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Skill from "./Components/Skill";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  let onTog = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <div className="container">
      <HashRouter>
        <Aside onTog={onTog} />
        <div className={isActive ? "container1" : "container2"}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
