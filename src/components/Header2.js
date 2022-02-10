import React from "react";

export default function Header2() {
  return (
    <div className="dsn-nav-bar">
      <div className="site-header">
        <div className="extend-container">
          <div className="inner-header">
            <div className="main-logo">
              <a href="index.html">
                <img
                  className="dark-logo"
                  src="assets/img/logo/etero.png"
                  style={{ height: "76px" }}
                  alt=""
                  alt=""
                />
                <img
                  className="light-logo"
                  src="assets/img/logo/etero.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <nav className=" accent-menu main-navigation">
            <ul className="extend-container">
              <li className="custom-drop-down">
                <a href="#">Home</a>
              </li>
              <li className="custom-drop-down">
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="about.html">Life Style</a>
              </li>
              <li>
                <a href="Prosses">OUR PROCESS</a>
              </li>
              <li className="custom-drop-down">
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="contact.html">NFT</a>
              </li>
              <li>
                <a href="Prosses">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header-top header-top-hamburger">
        <div className="header-container">
          <div className="logo main-logo">
            <a href="index.html">
              <img
                className="dark-logo"
                src="assets/img/logo/etero.png"
                alt=""
              />
              <img
                className="light-logo"
                src="assets/img/logo/etero.png"
                alt=""
              />
            </a>
          </div>

          <div className="menu-icon" data-dsn="parallax" data-dsn-move="5">
            <div className="icon-m">
              <i className="menu-icon-close fas fa-times"></i>
              <span className="menu-icon__line menu-icon__line-left"></span>
              <span className="menu-icon__line"></span>
              <span className="menu-icon__line menu-icon__line-right"></span>
            </div>

            <div className="text-menu">
              <div className="text-button">Menu</div>
              <div className="text-open">Open</div>
              <div className="text-close">Close</div>
            </div>
          </div>

          <div className="nav">
            <div className="inner">
              <div className="nav__content"></div>
            </div>
          </div>
          <div className="nav-content">
            <div className="inner-content">
              <address className="v-middle">
                <span>Egypt</span>
                <span>Damietta,El-Mahalla El-Kubra,</span>
                <span>01024552406 , 01004392260</span>
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}