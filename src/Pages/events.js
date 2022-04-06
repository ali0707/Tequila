import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Events() {
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
          <div>
            <header>
              <div class="headefr-fexid" data-dsn-header="project">
                <div class="bg" id="dsn-hero-parallax-img" data-dsn-ajax="img">
                  <div
                    class="bg-image  cover-bg"
                    data-overlay="2"
                    data-image-src="./Assets/img/Lifestyle/l5.jpeg"
                  ></div>
                </div>

                <div class="scroll" data-dsn-animate="ajax">
                  <span class="background"></span>
                  <span class="triangle"></span>
                </div>
                <div class="project-title" id="dsn-hero-parallax-title">
                  <div class="title-text-header">
                    <div class="cat">
                      <span>LATEST NEWS</span>
                    </div>
                    <span class="title-text-header-inner">
                      <span data-dsn-animate="ajax">THE CHAMPION USMAN84</span>
                    </span>
                  </div>

                  <div class="sub-text-header" data-dsn-animate="ajax">
                    <h5>BY</h5>
                    <span>- ETÉREO</span>
                  </div>
                </div>
              </div>
            </header>

            <div class="wrapper">
              <div class="root-project">
                <div class="container intro-project section-margin">
                  <div class="intro-text">
                    <div
                      class="title-cover"
                      data-dsn-grid="move-section"
                      data-dsn-opacity="0.1"
                      data-dsn-duration="170%"
                      data-dsn-move="0%"
                    >
                      ETÉREO
                    </div>
                    <div class="inner">
                      <h2 data-dsn-animate="text">ETÉREO</h2>
                      <p data-dsn-animate="up">
                        The Spanish translation for ethereal in English means:
                      </p>
                      <ul class="mt-20" data-dsn-animate="up">
                        <h3>"OUT OF THIS WORLD"</h3>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="container-fluid gallery-col section-margin">
                  <div class="row">
                    <div
                      class="col-md-4 box-im section-padding"
                      style={{ padding: 10 }}
                    >
                      <div class="image-zoom" data-dsn="parallax">
                        <a
                          class="single-image"
                          href="./Assets/img/events/e8.jpg"
                        >
                          <img src="./Assets/img/events/e8.jpg" alt="" />
                        </a>

                        <div class="caption"></div>
                      </div>
                    </div>

                    <div
                      class="col-md-4 box-im section-padding"
                      style={{ padding: 10 }}
                    >
                      <div class="image-zoom" data-dsn="parallax">
                        <a
                          class="single-image"
                          href="./Assets/img/events/e16.jpg"
                        >
                          <img src="./Assets/img/events/e16.jpg" alt="" />
                        </a>
                        <div class="caption"></div>
                      </div>
                    </div>

                    <div
                      class="col-md-4 box-im section-padding"
                      style={{ padding: 10 }}
                    >
                      <div class="image-zoom" data-dsn="parallax">
                        <a
                          class="single-image"
                          href="./Assets/img/events/e10.jpg"
                        >
                          <img src="./Assets/img/events/e10.jpg" alt="" />
                        </a>
                        <div class="caption"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class=" box-gallery-vertical section-margin section-padding">
                  <div class="mask-bg"></div>
                  <div class="container">
                    <div class="row align-items-center h-100">
                      <div class="col-lg-6 ">
                        <div class="box-im" data-dsn-grid="move-up">
                          <img
                            class="has-top-bottom"
                            src="./Assets/img/events/e14.jpg"
                            alt=""
                            data-dsn-move="20%"
                          />
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <div class="box-info">
                          <div class="vertical-title">
                            <h2 data-dsn-animate="up">IT STARTS WITH US.</h2>
                          </div>

                          <h6 data-dsn-animate="up">
                            The essence of Etéreo is that our tequila is made
                            without compromise from the field to bottle using
                            ancestral methods that ensures our flavors are
                            distinctly “out of this world.”.
                          </h6>

                          <p data-dsn-animate="up">
                            ETÉREO is taking a diferent turn on tequila’s
                            traditional folkloric approach.
                          </p>

                          <div class="link-custom" data-dsn-animate="up">
                            <a
                              class="image-zoom"
                              href="AboutUs"
                              data-dsn="parallax"
                            >
                              <span>Learn More</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="gallery-portfolio section-margin">
                  <a
                    class="link-pop"
                    href="./Assets/img/events/e1.jpg"
                    data-source="./Assets/img/events/e1.jpg"
                  >
                    <img src="./Assets/img/events/e1.jpg" alt="" />
                    <div class="cap">
                      <span></span>
                    </div>
                  </a>
                  <a
                    class="link-pop"
                    href="./Assets/img/events/e2.jpg"
                    data-source="./Assets/img/events/e2.jpg"
                  >
                    <img src="./Assets/img/events/e2.jpg" alt="" />
                    <div class="cap">
                      <span>ETÉREO</span>
                    </div>
                  </a>

                  <a
                    class="link-pop"
                    href="./Assets/img/events/e3.jpg"
                    data-source="./Assets/img/events/e3.jpg"
                  >
                    <img src="./Assets/img/events/e3.jpg" alt="" />
                    <div class="cap">
                      <span>étereo</span>
                    </div>
                  </a>

                  <a
                    class="link-pop"
                    href="./Assets/img/events/e4.jpg"
                    data-source="./Assets/img/events/e4.jpg"
                  >
                    <img src="./Assets/img/events/e4.jpg" alt="" />
                    <div class="cap">
                      <span>étereo</span>
                    </div>
                  </a>

                  <a
                    class="link-pop"
                    href="./Assets/img/events/e5.jpg"
                    data-source="./Assets/img/events/e5.jpg"
                  >
                    <img src="./Assets/img/events/e5.jpg" alt="" />
                    <div class="cap">
                      <span>étereo</span>
                    </div>
                  </a>

                  <a
                    class="link-pop"
                    href="./Assets/img/events/e6.jpg"
                    data-source="./Assets/img/events/e6.jpg"
                  >
                    <img src="./Assets/img/events/e6.jpg" alt="" />
                    <div class="cap">
                      <span>étereo</span>
                    </div>
                  </a>

                  <a
                    class="link-pop"
                    href="./Assets/img/events/e7.jpg"
                    data-source="./Assets/img/events/e7.jpg"
                  >
                    <img src="./Assets/img/events/e7.jpg" alt="" />
                    <div class="cap">
                      <span>étereo</span>
                    </div>
                  </a>

                  <a
                    class="link-pop"
                    href="./Assets/img/events/e11.jpg"
                    data-source="./Assets/img/events/e11.jpg"
                  >
                    <img src="./Assets/img/events/e11.jpg" alt="" />
                    <div class="cap">
                      <span>étereo</span>
                    </div>
                  </a>

                  <a
                    class="link-pop"
                    href="./Assets/img/events/e12.jpg"
                    data-source="./Assets/img/events/e12.jpg"
                  >
                    <img src="./Assets/img/events/e12.jpg" alt="" />
                    <div class="cap">
                      <span>étereo</span>
                    </div>
                  </a>

                  <a
                    class="link-pop"
                    href="./Assets/img/events/e17.jpg"
                    data-source="./Assets/img/events/e17.jpg"
                  >
                    <img src="./Assets/img/events/e17.jpg" alt="" />
                    <div class="cap">
                      <span>étereo</span>
                    </div>
                  </a>
                </div>
              </div>

              <div class="next-project" data-dsn-footer="project">
                <div id="dsn-next-parallax-img" class="bg">
                  <div
                    class="bg-image cover-bg"
                    data-overlay="4"
                    data-image-src="./Assets/img/events/e9.jpg"
                  ></div>
                </div>

                <div id="dsn-next-parallax-title" class="project-title">
                  <a
                    href="project-5.html"
                    class="effect-ajax"
                    data-dsn-ajax="next-project"
                  >
                    <div class="title-text-header">
                      <div class="title-text-header-inner">
                        <span>ANOMALIA DIMANT</span>
                      </div>
                    </div>
                    <div class="sub-text-header">
                      <h5>WHATS NEXT ?</h5>
                    </div>
                  </a>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
