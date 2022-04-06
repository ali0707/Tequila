import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function LifeStyle() {
  return (
    <body
      class="hamburger-menu dsn-effect-scroll dsn-ajax"
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
        <div>
          <header>
            <div class="headefr-fexid" data-dsn-header="project">
              <div class="bg" id="dsn-hero-parallax-img" data-dsn-ajax="img">
                <div
                  class="bg-image cover-bg"
                  data-overlay="0"
                  data-image-src="./Assets/img/Lifestyle/14.png"
                ></div>
              </div>

              <div class="scroll" data-dsn-animate="ajax">
                <span class="background"></span>
                <span class="triangle"></span>
              </div>
              <div class="project-title" id="dsn-hero-parallax-title">
                <div class="title-text-header">
                  <div class="cat">
                    <span>Etéreo</span>
                  </div>
                  <span class="title-text-header-inner">
                    <span data-dsn-animate="ajax">LIFESTYLE</span>
                  </span>
                </div>
                <div class="sub-text-header" data-dsn-animate="ajax">
                  <h5>We Are Not Selling Tequila,</h5>
                  <br />
                  <span>-We Are Purveying A LifeStyle</span>
                </div>
              </div>
            </div>
          </header>

          <div class="wrapper">
            <div class="root-project">
              <div class="container intro-project section-margin">
                <div class="intro-text text-center">
                  <div
                    class="title-cover"
                    data-dsn-grid="move-section"
                    data-dsn-opacity="0.1"
                    data-dsn-duration="170%"
                    data-dsn-move="0%"
                  >
                    L I F E S T Y L E
                  </div>
                  <div class="inner">
                    <h2 data-dsn-animate="text"> L I F E S T Y L E</h2>
                    <p data-dsn-animate="up">
                      We are purveying a sophisticated lifestyle fecting
                      exclusivity, good vibes, and prestige. We di ferentiate
                      ourselves by o fering distinct a unique , out-of-body
                      experience with our favor pro fles and lifestyle
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="headefr-fexid headefr-fexid-onepage"
                data-dsn-header="project"
              >
                <div
                  class="bg has-top-bottom"
                  id="dsn-hero-parallax-img"
                  data-dsn-ajax="img"
                >
                  <video class=" dsn-video" controls autoplay loop playsinline>
                    <source
                      autoplay
                      src="./Assets/videos/Home1.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support HTML5 video.
                  </video>
                </div>

                <div class="project-page__inner">
                  <div class="h-100">
                    <div class="row justify-content-center align-items-center h-100">
                      <div
                        class="project-title"
                        id="dsn-hero-parallax-title"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="container-fluid gallery-col">
                <div class="row">
                  <div class="col-md-4 box-im section-padding">
                    <div class="image-zoom" data-dsn="parallax">
                      <a
                        class="single-image"
                        href="./Assets/img/Lifestyle/d.jpeg"
                      >
                        <img
                          src="./Assets/img/Lifestyle/d.jpeg"
                          alt=""
                          style={{ borderRadius: "20px" }}
                        />
                      </a>

                      {/* <div class="caption">Trevor Bittinger</div> */}
                    </div>
                  </div>
                  <div class="col-md-4 box-im section-padding">
                    <div class="image-zoom" data-dsn="parallax">
                      <a
                        class="single-image"
                        href="./Assets/img/Lifestyle/l2.jpg"
                      >
                        <img
                          src="./Assets/img/Lifestyle/l2.jpg"
                          alt=""
                          style={{ borderRadius: "20px" }}
                        />
                      </a>
                    </div>
                  </div>
                  <div class="col-md-4 box-im section-padding">
                    <div class="image-zoom" data-dsn="parallax">
                      <a
                        class="single-image"
                        href="./Assets/img/Lifestyle/et4.jpg"
                      >
                        <img
                          src="./Assets/img/Lifestyle/et4.jpg"
                          alt=""
                          style={{ borderRadius: "20px" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="gallery-portfolio section-margin">
                <a
                  class="link-pop"
                  href="./Assets/img/tequila/l1.jpg"
                  data-source="./Assets/img/tequila/l1.jpg"
                >
                  <img src="./Assets/img/tequila/l1.jpg" alt="" />
                  <div class="cap"></div>
                </a>

                <a
                  class="link-pop"
                  href="./Assets/img/tequila/l2.jpg"
                  data-source="./Assets/img/tequila/l2.jpg"
                >
                  <img src="./Assets/img/tequila/l2.jpg" alt="" />
                  <div class="cap">
                    <span>etéreolifestyle</span>
                  </div>
                </a>

                <a
                  class="link-pop"
                  href="./Assets/img/tequila/capt.png"
                  data-source="./Assets/img/tequila/capt.png"
                >
                  <img src="./Assets/img/tequila/capt.png" alt="" />
                  <div class="cap">
                    <span>etéreolifestyle</span>
                  </div>
                </a>

                <a
                  class="link-pop"
                  href="./Assets/img/tequila/l3.jpg"
                  data-source="./Assets/img/tequila/l3.jpg"
                >
                  <img src="./Assets/img/tequila/l3.jpg" alt="" />
                  <div class="cap">
                    <span>etéreolifestyle</span>
                  </div>
                </a>

                <a
                  class="link-pop"
                  href="./Assets/img/tequila/l4.jpg"
                  data-source="./Assets/img/tequila/l4.jpg"
                >
                  <img src="./Assets/img/tequila/l4.jpg" alt="" />
                  <div class="cap">
                    <span>etéreolifestyle</span>
                  </div>
                </a>

                <a
                  class="link-pop"
                  href="./Assets/img/tequila/l6.jpg"
                  data-source="./Assets/img/tequila/l6.jpg"
                >
                  <img src="./Assets/img/tequila/l6.jpg" alt="" />
                  <div class="cap">
                    <span>etéreolifestyle</span>
                  </div>
                </a>

                <a
                  class="link-pop"
                  href="./Assets/img/tequila/l5.jpg"
                  data-source="./Assets/img/tequila/l5.jpg"
                >
                  <img src="./Assets/img/tequila/l5.jpg" alt="" />
                  <div class="cap">
                    <span>etéreolifestyle</span>
                  </div>
                </a>
                <a
                  class="link-pop"
                  href="./Assets/img/tequila/l7.jpg"
                  data-source="./Assets/img/tequila/l7.jpg"
                >
                  <img src="./Assets/img/tequila/l7.jpg" alt="" />
                  <div class="cap">
                    <span>etéreolifestyle</span>
                  </div>
                </a>
                <a
                  class="link-pop"
                  href="./Assets/img/tequila/l8.jpg"
                  data-source="./Assets/img/tequila/l8.jpg"
                >
                  <img src="./Assets/img/tequila/l8.jpg" alt="" />
                  <div class="cap">
                    <span>etéreolifestyle</span>
                  </div>
                </a>
                <a
                  class="link-pop"
                  href="./Assets/img/tequila/l9.jpg"
                  data-source="./Assets/img/tequila/l9.jpg"
                >
                  <img src="./Assets/img/tequila/l9.jpg" alt="" />
                  <div class="cap">
                    <span>etéreolifestyle</span>
                  </div>
                </a>
                <a
                  class="link-pop"
                  href="./Assets/img/tequila/l10.jpg"
                  data-source="./Assets/img/tequila/l10.jpg"
                >
                  <img src="./Assets/img/tequila/l10.jpg" alt="" />
                  <div class="cap">
                    <span>etéreolifestyle</span>
                  </div>
                </a>
                <a
                  class="link-pop"
                  href="./Assets/img/tequila/l11.jpg"
                  data-source="./Assets/img/tequila/l11.jpg"
                >
                  <img src="./Assets/img/tequila/l11.jpg" alt="" />
                  <div class="cap">
                    <span>Etéreo</span>
                  </div>
                </a>
                <a
                  class="link-pop"
                  href="./Assets/img/tequila/l13.jpg"
                  data-source="./Assets/img/tequila/l13.jpg"
                >
                  <img src="./Assets/img/tequila/l13.jpg" alt="" />
                  <div class="cap">
                    <span>etéreolifestyle</span>
                  </div>
                </a>
                <a
                  class="link-pop"
                  href="./Assets/img/tequila/l14.jpg"
                  data-source="./Assets/img/tequila/l14.jpg"
                >
                  <img src="./Assets/img/tequila/l14.jpg" alt="" />
                  <div class="cap">
                    <span>etéreolifestyle</span>
                  </div>
                </a>
                <a
                  class="link-pop"
                  href="./Assets/img/tequila/l15.jpg"
                  data-source="./Assets/img/tequila/l15.jpg"
                >
                  <img src="./Assets/img/tequila/l15.jpg" alt="" />
                  <div class="cap">
                    <span>etéreolifestyle</span>
                  </div>
                </a>
                <a
                  class="link-pop"
                  href="./Assets/img/tequila/l16.jpg"
                  data-source="./Assets/img/tequila/l16.jpg"
                >
                  <img src="./Assets/img/tequila/l16.jpg" alt="" />
                  <div class="cap">
                    <span>etéreolifestyle</span>
                  </div>
                </a>
              </div>
              <div class="box-gallery-vertical section-margin section-padding">
                <div class="mask-bg"></div>
                <div class="container">
                  <div class="row align-items-center h-100">
                    <div class="col-lg-6">
                      <div class="box-im" data-dsn-grid="move-up">
                        <img
                          class="has-top-bottom"
                          src="./Assets/img/tequila/l7.jpg"
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
                          ETÉREO is taking a diferent turn on tequila’s
                          traditional folkloric approach. ETÉREO is a perfectly
                          balanced blend of Mexican heritage, European fair and
                          Mediterranean lifestyle. It is the defnition of
                          understated luxury
                        </h6>

                        <p data-dsn-animate="up">
                          With a rich and favorful taste paired with an
                          exceptionally smooth fnish across the range, we are
                          bringing the product up to levels of high end
                          champagne, whiskys, and cognacs while retaining a more
                          relaxed and upper casual feel.
                        </p>

                        <div class="link-custom" data-dsn-animate="up">
                          <a class="image-zoom" href="#" data-dsn="parallax">
                            <span>Learn More</span>
                          </a>
                        </div>
                      </div>
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
