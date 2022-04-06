import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <body
      class=" hamburger-menu dsn-effect-scroll dsn-ajax"
      data-dsn-mousemove="true"
    >
      <div class="preloader">
        <div class="preloader-after"></div>
        <div class="preloader-before"></div>
        <div class="preloader-block">
          <div class="title">Etéreo </div>
          <div class="percent">0</div>
          <div class="loading">
            <img
              src="./Assets/img/logo/etero.png"
              style={{ width: "90px", hight: "90px" }}
            />{" "}
          </div>
        </div>
        <div class="preloader-bar">
          <div class="preloader-progress"></div>
        </div>
      </div>

      <Header />

      <main class="main-root">
        <div id="dsn-scrollbar">
          <header>
            <div class="container header-hero">
              <div class="row">
                <div class="col-lg-6">
                  <div class="contenet-hero">
                    <h5>Let's Get</h5>
                    <h1>In Touch</h1>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div class="wrapper">
            <div class="root-contact">
              <div class="container section-margin">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="box-info-contact">
                      <h3>
                        WE ARE CREATING MORE THAN TEQUILA, WE ARE PURVIVING A
                        LIFESTYLE "
                      </h3>

                      <ul>
                        <li>
                          <span>Email</span>
                          <br />
                          <a href="#">JAMES@ETEREOLIFESTYLE.COM</a>
                          <br />
                          <a href="#">HAMADE@ETEREOLIFESTYLE.COM</a>
                        </li>
                        <li>
                          <span>Address</span>
                          <a href="#">
                            Etéreo Spirits LLC 2855 Michelle Drive Suite 280 ,
                            Irvine, California 92606 – USA
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-box">
                      <h3>Write A Comment</h3>
                      <form
                        id="contact-form"
                        class="form"
                        method="post"
                        action="contact.php"
                        data-toggle="validator"
                      >
                        <div class="messages"></div>
                        <div class="input__wrap controls">
                          <div class="form-group">
                            <div class="entry">
                              <label>What's your name?</label>
                              <input
                                id="form_name"
                                type="text"
                                name="name"
                                placeholder="Type your name"
                                required="required"
                                data-error="name is required."
                              />
                            </div>
                            <div class="help-block with-errors"></div>
                          </div>

                          <div class="form-group">
                            <div class="entry">
                              <label>What's your email address?</label>
                              <input
                                id="form_email"
                                type="email"
                                name="email"
                                placeholder="Type your Email Address"
                                required="required"
                                data-error="Valid email is required."
                              />
                            </div>
                            <div class="help-block with-errors"></div>
                          </div>

                          <div class="form-group">
                            <div class="entry">
                              <label>What's up?</label>
                              <textarea
                                id="form_message"
                                class="form-control"
                                name="message"
                                placeholder="Tell us about you and the world"
                                required="required"
                                data-error="Please,leave us a message."
                              ></textarea>
                            </div>
                            <div class="help-block with-errors"></div>
                          </div>

                          <div class="image-zoom" data-dsn="parallax">
                            <button>Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </main>

      <div class="wait-loader">
        <div class="loader-inner">
          <div class="loader-circle">
            <div class="loader-layer"></div>
          </div>
        </div>
      </div>

      <div class="cursor">
        <div class="cursor-helper cursor-view">
          <span>VIEW</span>
        </div>

        <div class="cursor-helper cursor-close">
          <span>Close</span>
        </div>

        <div class="cursor-helper cursor-link"></div>
      </div>
    </body>
  );
}
