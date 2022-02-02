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
                      <img src="assets/img/logo.png" alt="" />
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
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
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
                  <p>
                    <strong>T</strong> <span>:</span> +001 225 3351
                  </p>
                  <p>
                    <strong>F</strong> <span>:</span>+001 225 3351
                  </p>
                  <p className="over-hidden">
                    <strong>E</strong> <span>:</span>
                    <a
                      className="link-hover"
                      data-hover-text="info@dsngrid.com"
                      href="#"
                    >
                      info@dsngrid.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-md-3 dsn-col-footer">
                <div className="col-address">
                  <h4 className="footer-title">Address</h4>

                  <p>
                    El-Mahalla El-Kubra 37
                    <br />
                    1776 Damietta
                    <br />
                    Egypt
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright">
            <div className="text-center">
              <p>© 2020 Droow Digital Agency</p>
              <div className="copright-text over-hidden">
                Designed by{" "}
                <a
                  className="link-hover"
                  data-hover-text="DSN Grid"
                  href="#"
                  target="_blank"
                >
                  DSN Grid
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
