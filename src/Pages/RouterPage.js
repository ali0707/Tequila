import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./About";
import Allprosses from "./allProsses";
import Contact from "./contact";
import Home from "./Home";
import Nft from "./Nft";
import Shop from "./Shop";
import LifeStyle from "./lifeStyle"
import Cocktails from "./cocktails";
import Process from "./ourProcess";
import Events from "./events";

export default function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/our-process" element={<Process />} />
          <Route path="/Detail_Prosses" element={<Allprosses />} />
          <Route path="/LifeStyle" element={<LifeStyle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Nft" element={<Nft />} />
          <Route path="/Cocktails" element={<Cocktails />} />
          <Route path="/Events" element={<Events />} />



        </Routes>
      </Router>
    </div>
  );
}
