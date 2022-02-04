import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="footer-links p-relative">
            <div className="row">
              <div className="col-md-3 dsn-col-footer">
                <div className="footer-block">
                  <div className="footer-logo">
                    <a href="">
                      <img src="assets/img/logo/etero.png" alt="" />
                    </a>
                  </div>

                  <div className="footer-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-behance"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/etereolifestyle/">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 dsn-col-footer">
                <div className="footer-block col-menu">
                  <h4 className="footer-title">Navigation</h4>
                  <nav>
                    <ul>
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">News</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-md-3 dsn-col-footer">
                <div className="footer-block col-contact">
                  <h4 className="footer-title">Contact</h4>
                  <p>HAMADE@ETEREOLIFESTYLE.COM</p>
                  <p>JAMES@ETEREOLIFESTYLE.COM</p>
                </div>
              </div>

              <div className="col-md-3 dsn-col-footer">
                <div className="col-address">
                  <h4 className="footer-title">Address</h4>

                  <p>
                    Etereo Spirits LLC , Irvine, California 92606 – USA <br />
                    1776 Damietta
                    <br />
                    2855 Michelle Drive Suite 280
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright">
            <div className="text-center">
              <p>© 2022 étereolifestyle </p>
              <div className="copright-text over-hidden">
                Designed by{" "}
                <a
                  className="link-hover"
                  data-hover-text="DSN Grid"
                  href="#"
                  target="_blank"
                >
                  SilverInternational
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
