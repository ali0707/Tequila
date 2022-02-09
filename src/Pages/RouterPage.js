import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Allprosses from "./allProsses";
import Home from "./Home";
import Prosses from "./Prosses";

export default function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Prosses" element={<Prosses />} />
          <Route path="/Detail_Prosses" element={<Allprosses />} />
        </Routes>
      </Router>
    </div>
  );
}
