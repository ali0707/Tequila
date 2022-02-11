import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Allprosses from "./allProsses";
import Home from "./Home";
import LifeStyle from "./lifeStyle";
import Prosses from "./Prosses";

export default function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Prosses" element={<Prosses />} />
          <Route path="/Detail_Prosses" element={<Allprosses />} />
          <Route path="/LifeStyle" element={<LifeStyle />} />

        </Routes>
      </Router>
    </div>
  );
}
