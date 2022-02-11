import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Allprosses from "./allProsses";
import Contact from "./contact";
import Home from "./Home";
import Prosses from "./Prosses";
import Saif from "./saif";

export default function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Prosses" element={<Prosses />} />
          <Route path="/Detail_Prosses" element={<Allprosses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Shop" element={<Saif />} />
        </Routes>
      </Router>
    </div>
  );
}
