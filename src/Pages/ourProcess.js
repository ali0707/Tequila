import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Header2 from "../components/Header2";

export default function Process() {
  return (
    <div
      class="hamburger-menu dsn-effect-scroll dsn-ajax"
      data-dsn-mousemove="true"
    >
      <div class="preloader">
        <div class="preloader-after"></div>
        <div class="preloader-before"></div>
        <div class="preloader-block">
          <div class="title">Etereo</div>
          <div class="percent">0</div>
          <div class="loading">loading...</div>
        </div>
        <div class="preloader-bar">
          <div class="preloader-progress"></div>
        </div>
      </div>
      <Header2 />
      <div class="dsn-nav-bar">
        <div class="header-top header-top-hamburger">
          <div class="header-container">
            <div class="logo main-logo">
              <a href="index.html">
                <img
                  class="dark-logo"
                  src="assets/img/logo/eterologo-blanc.png"
                  alt=""
                />
                <img
                  class="light-logo"
                  src="assets/img/logo/eterologo-blanc.png"
                  alt=""
                />
              </a>
            </div>

            <div class="menu-icon" data-dsn="parallax" data-dsn-move="5">
              <div class="icon-m">
                <i class="menu-icon-close fas fa-times"></i>
                <span class="menu-icon__line menu-icon__line-left"></span>
                <span class="menu-icon__line"></span>
                <span class="menu-icon__line menu-icon__line-right"></span>
              </div>

              <div class="text-menu">
                <div class="text-button">Menu</div>
                <div class="text-open">Open</div>
                <div class="text-close">Close</div>
              </div>
            </div>

            <div class="nav">
              <div class="inner">
                <div class="nav__content"></div>
              </div>
            </div>
            <div class="nav-content">
              <div class="inner-content">
                <address class="v-middle">
                  <span> California 92606 – USA</span>
                  <span>Etereo Spirits LLC 2855 Michelle Drive Suite 280 , Irvine,</span>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main class="main-root">
        <div id="dsn-scrollbar">
          <div class="dsn-slider">
            <div class="dsn-root-slider">
              <div class="slide-inner">
                <div class="swiper-wrapper">
                  <div class="slide-item swiper-slide">
                    <div class="slide-content">
                      <div class="slide-content-inner">
                        <div class="project-metas">
                          <div class="project-meta-box project-work cat">
                            <span>STEP 1</span>
                          </div>
                        </div>

                        <div class="title-text-header">
                          <div class="title-text-header-inner">
                            <a
                              class="effect-ajax"
                              data-dsn-ajax="slider"
                            >
                              HARVESTING
                            </a>
                          </div>
                        </div>

                        <p>
                          The planting, tending, and harvesting of the blue
                          weber agave plant remains a manual effort that relies
                          on centuries-old know-how that has been passed down
                          from generation to generation. The agave used in
                          Etereo's tequila is grown in the distillery’s own
                          fields in the lowlands which have been cultivated for
                          three generations.
                        </p>


                      </div>
                    </div>
                    <div class="image-container">
                      <div
                        class="image-bg cover-bg"
                        data-image-src="assets/img/steps/1.jpg"
                        data-overlay="0"
                      >
                        <img src="assets/img/steps/1.jpg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div class="slide-item swiper-slide">
                    <div class="slide-content">
                      <div class="slide-content-inner">
                        <div class="project-metas">
                          <div class="project-meta-box project-work cat">
                            <span>STEP 2</span>
                          </div>
                        </div>

                        <div class="title-text-header">
                          <div class="title-text-header-inner">
                            <a

                              class="effect-ajax"
                              data-dsn-ajax="slider"
                            >
                              COOKING
                            </a>
                          </div>
                        </div>

                        <p>
                          During this step, steam injection within traditional
                          brick ovens or stainless steel autoclaves is used to
                          activate a chemical process within the piña that
                          converts complex carbohydrates into simple fermentable
                          sugars. Cooking also softens the piña, making the
                          process of sugar extraction easier.
                        </p>


                      </div>
                    </div>
                    <div class="image-container">
                      <div
                        class="image-bg cover-bg"
                        data-image-src="assets/img/steps/2.jpeg"
                        data-overlay="4"
                      >
                        <img src="assets/img/steps/2.jpeg" alt="" />
                      </div>
                    </div>
                  </div>


                  <div class="slide-item swiper-slide">
                    <div class="slide-content">
                      <div class="slide-content-inner">
                        <div class="project-metas">
                          <div class="project-meta-box project-work cat">
                            <span>STEP 3</span>
                          </div>
                        </div>

                        <div class="title-text-header">
                          <div class="title-text-header-inner">
                            <a

                              class="effect-ajax"
                              data-dsn-ajax="slider"
                            >
                              EXTRACTION{" "}
                            </a>
                          </div>
                        </div>

                        <p>
                          Once cooked, the agave heads are transported to a milling area for sugar extraction. The cooked piñas are crushed in order to release the juice, or “aguamiel,” that will be fermented. The traditional method is to crush the piñas with a “tahona,” a giant grinding wheel operated by mules, oxen or tractors within a circular pit. Modern distilleries now use a mechanical crusher to separate the fiber from the juices. Once the piñas are minced they are washed with water and strained to remove the juices.
                        </p>


                      </div>
                    </div>
                    <div class="image-container">
                      <div
                        class="image-bg cover-bg"
                        data-image-src="assets/img/steps/3.jpeg"
                        data-overlay="2"
                      >
                        <img src="assets/img/steps/3.jpeg" alt="" />
                      </div>
                    </div>
                  </div>


                  <div class="slide-item swiper-slide">
                    <div class="slide-content">
                      <div class="slide-content-inner">
                        <div class="project-metas">
                          <div class="project-meta-box project-work cat">
                            <span>STEP 4</span>
                          </div>
                        </div>

                        <div class="title-text-header">
                          <div class="title-text-header-inner">
                            <a

                              class="effect-ajax"
                              data-dsn-ajax="slider"
                            >
                              FERMENTATION{" "}
                            </a>
                          </div>
                        </div>

                        <p>
                          During the fermentation process the sugars are
                          transformed into alcohol within large wooden vats or
                          stainless steel tanks. Yeast may be added to
                          accelerate and control the fermentation.
                        </p>


                      </div>
                    </div>
                    <div class="image-container">
                      <div
                        class="image-bg cover-bg"
                        data-image-src="assets/img/steps/4.jpeg"
                        data-overlay="2"
                      >
                        <img src="assets/img/steps/4.jpeg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div class="slide-item swiper-slide">
                    <div class="slide-content">
                      <div class="slide-content-inner">
                        <div class="project-metas">
                          <div class="project-meta-box project-work cat">
                            <span>STEP 5</span>
                          </div>
                        </div>
                        <div class="title-text-header">
                          <div class="title-text-header-inner">
                            <a

                              class="effect-ajax"
                              data-dsn-ajax="slider"
                            >
                              DISTILLATION
                            </a>
                          </div>
                        </div>

                        <p>
                          The fifth step of creating tequila is distillation, in which ferments are separated by heat and steam pressure within stainless steel pot stills or distillation towers. While some tequilas are distilled three times, the majority are only distilled twice, including IZKALI Tequila. The first distillation, also known as “deztrozamiento” or “smashing,” takes a couple hours and yields a liquid with an alcohol level of about 20% known as “ordinario.” The second distillation, known as “rectification,” takes three to four hours and yields a liquid with an alcohol level near 55%. After the second distillation the tequila is considered silver, or “blanco,” tequila.
                        </p>


                      </div>
                    </div>
                    <div class="image-container">
                      <div
                        class="image-bg cover-bg"
                        data-image-src="assets/img/steps/5.jpg"
                        data-overlay="2"
                      >
                        <img src="assets/img/steps/5.jpg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div class="slide-item swiper-slide">
                    <div class="slide-content">
                      <div class="slide-content-inner">
                        <div class="project-metas">
                          <div class="project-meta-box project-work cat">
                            <span>STEP 6</span>
                          </div>
                        </div>
                        <div class="title-text-header">
                          <div class="title-text-header-inner">
                            <a

                              class="effect-ajax"
                              data-dsn-ajax="slider"
                            >
                              AGING</a>
                          </div>
                        </div>

                        <p>
                          Almost all containers used in tequila aging
                          are French or American white oak barrels that
                          have previously been used to age bourbon.
                          Reposados are aged between two and twelve months,
                          Añejos are aged between one and three years and Extra Añejos
                          are aged for over three years. The longer the tequila ages,
                          the more color and tannins the final product will have.
                          The condition of the barrels (such as their age,
                          previous use and if their interiors have been burnt or toasted)
                          will also affect the tequila’s taste. </p>


                      </div>
                    </div>
                    <div class="image-container">
                      <div
                        class="image-bg cover-bg"
                        data-image-src="assets/img/steps/6.jpeg"
                        data-overlay="2"
                      >
                        <img src="assets/img/steps/6.jpeg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div class="slide-item swiper-slide">
                    <div class="slide-content">
                      <div class="slide-content-inner">
                        <div class="project-metas">
                          <div class="project-meta-box project-work cat">
                            <span>STEP 7</span>
                          </div>
                        </div>
                        <div class="title-text-header">
                          <div class="title-text-header-inner">
                            <a

                              class="effect-ajax"
                              data-dsn-ajax="slider"
                            >
                              BOTTLING
                            </a>
                          </div>
                        </div>

                        <p>
                          Almost all containers used in tequila aging are French
                          or American white oak barrels that have previously
                          been used to age bourbon. Reposados are aged between
                          two and twelve months, Añejos are aged between one and
                          three years and Extra Añejos are aged for over three
                          years
                        </p>


                      </div>
                    </div>
                    <div class="image-container">
                      <div
                        class="image-bg cover-bg"
                        data-image-src="assets/img/steps/7.jpg"
                        data-overlay="2"
                      >
                        <img src="assets/img/steps/7.jpg" alt="" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div class="dsn-slider-content"></div>

            <div class="nav-slider">
              <div class="swiper-wrapper" role="navigation">
                <div class="swiper-slide">
                  <div class="image-container">
                    <div
                      class="image-bg cover-bg"
                      data-image-src="assets/img/steps/1.jpg"
                      data-overlay="2"
                    ></div>
                  </div>
                  <div class="content">
                    <p>01</p>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="image-container">
                    <div
                      class="image-bg cover-bg"
                      data-image-src="assets/img/steps/2.jpeg"
                      data-overlay="2"
                    ></div>
                  </div>
                  <div class="content">
                    <p>02</p>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="image-container">
                    <div
                      class="image-bg cover-bg"
                      data-image-src="assets/img/steps/3.jpeg"
                      data-overlay="2"
                    ></div>
                  </div>
                  <div class="content">
                    <p>03</p>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="image-container">
                    <div
                      class="image-bg cover-bg"
                      data-image-src="assets/img/steps/4.jpeg"
                      data-overlay="2"
                    ></div>
                  </div>
                  <div class="content">
                    <p>04</p>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="image-container">
                    <div
                      class="image-bg cover-bg"
                      data-image-src="assets/img/steps/5.jpg"
                      data-overlay="2"
                    ></div>
                  </div>
                  <div class="content">
                    <p>05</p>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="image-container">
                    <div
                      class="image-bg cover-bg"
                      data-image-src="assets/img/steps/6.jpeg"
                      data-overlay="2"
                    ></div>
                  </div>
                  <div class="content">
                    <p>06</p>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="image-container">
                    <div
                      class="image-bg cover-bg"
                      data-image-src="assets/img/steps/7.jpg"
                      data-overlay="2"
                    ></div>
                  </div>
                  <div class="content">
                    <p>07</p>
                  </div>
                </div>
              </div>
            </div>

            <section class="footer-slid" id="descover-holder">
              <div class="main-social">
                <div class="social-icon">
                  <div class="social-btn">
                    <div class="svg-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 23.3 23.2"
                      >
                        <path d="M19.4 15.5c-1.2 0-2.4.6-3.1 1.7L7.8 12v-.7l8.5-5.1c.7 1 1.9 1.6 3.1 1.6 2.1 0 3.9-1.7 3.9-3.9S21.6 0 19.4 0s-3.9 1.7-3.9 3.9v.4L7 9.3c-1.3-1.7-3.7-2-5.4-.8s-2.1 3.7-.8 5.4c.7 1 1.9 1.6 3.1 1.6s2.4-.6 3.1-1.6l8.5 5v.4c0 2.1 1.7 3.9 3.9 3.9s3.9-1.7 3.9-3.9c0-2.1-1.7-3.8-3.9-3.8zm0-13.6c1.1 0 1.9.9 1.9 1.9s-.9 1.9-1.9 1.9-1.9-.7-1.9-1.8.8-2 1.9-2zM3.9 13.6c-1.1 0-1.9-.9-1.9-1.9s.9-1.9 1.9-1.9 1.9.9 1.9 1.9-.8 1.9-1.9 1.9zm15.5 7.8c-1.1 0-1.9-.9-1.9-1.9s.9-1.9 1.9-1.9 1.9.9 1.9 1.9-.8 1.8-1.9 1.9z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <ul class="social-network">
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="control-num">
                <span class="sup active">01</span>
              </div>
              <div class="control-nav">
                <div class="prev-container" data-dsn="parallax">
                  <svg viewBox="0 0 40 40">
                    <path
                      class="path circle"
                      d="M20,2A18,18,0,1,1,2,20,18,18,0,0,1,20,2"
                    ></path>
                    <polyline
                      class="path"
                      points="14.6 17.45 20 22.85 25.4 17.45"
                    ></polyline>
                  </svg>
                </div>

                <div class="next-container" data-dsn="parallax">
                  <svg viewBox="0 0 40 40">
                    <path
                      class="path circle"
                      d="M20,2A18,18,0,1,1,2,20,18,18,0,0,1,20,2"
                    ></path>
                    <polyline
                      class="path"
                      points="14.6 17.45 20 22.85 25.4 17.45"
                    ></polyline>
                  </svg>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div class="view-all image-zoom" data-dsn="parallax">
          <div class="view-all-container">
            <div class="icon ">
              <div class="line-1"></div>
              <div class="line-2"></div>
            </div>
            <div class="text">ALL STEPS</div>
          </div>
        </div>

        <div class="dsn-all-work">
          <div class="nav-work-box dsn-work-scrollbar">
            <div class="list-content">
              <ul class="list-main">
                <li class="work-item dsn-active">
                  <img
                    class="dsn-animate-webgl"
                    src="assets/img/steps/1.jpg"
                    alt=""
                  />
                  <a

                    class="effect-ajax"
                    data-dsn-ajax="list"
                  >
                    <div class="num">
                      <small>01</small>
                    </div>
                    <h3>HARVESTING</h3>
                  </a>
                </li>

                <li class="work-item ">
                  <img
                    class="dsn-animate-webgl"
                    src="assets/img/steps/2.jpeg"
                    alt=""
                  />
                  <a

                    class="effect-ajax"
                    data-dsn-ajax="list"
                  >
                    <div class="num">
                      <small>02</small>
                    </div>
                    <h3>COOKING</h3>
                  </a>
                </li>
                <li class="work-item">
                  <img
                    class="dsn-animate-webgl"
                    src="assets/img/steps/3.jpeg"
                    alt=""
                  />

                  <a

                    class="effect-ajax"
                    data-dsn-ajax="list"
                  >
                    <div class="num">
                      <small>03</small>
                    </div>
                    <h3>EXTRACTION</h3>
                  </a>
                </li>

                <li class="work-item">
                  <img
                    class="dsn-animate-webgl"
                    src="assets/img/steps/3.jpeg"
                    alt=""
                  />

                  <a

                    class="effect-ajax"
                    data-dsn-ajax="list"
                  >
                    <div class="num">
                      <small>04</small>
                    </div>
                    <h3>Fermentation</h3>
                  </a>
                </li>

                <li class="work-item">
                  <img
                    class="dsn-animate-webgl"
                    src="assets/img/steps/5.jpg"
                    alt=""
                  />

                  <a

                    class="effect-ajax"
                    data-dsn-ajax="list"
                  >
                    <div class="num">
                      <small>05</small>
                    </div>
                    <h3>DISTILLATION</h3>
                  </a>
                </li>

                <li class="work-item">
                  <img
                    class="dsn-animate-webgl"
                    src="assets/img/steps/6.jpeg"
                    alt=""
                  />

                  <a

                    class="effect-ajax"
                    data-dsn-ajax="list"
                  >
                    <div class="num">
                      <small>06</small>
                    </div>
                    <h3>AGING</h3>
                  </a>
                </li>

                <li class="work-item">
                  <img
                    class="dsn-animate-webgl"
                    src="assets/img/steps/7.jpg"
                    alt=""
                  />

                  <a

                    class="effect-ajax"
                    data-dsn-ajax="list"
                  >
                    <div class="num">
                      <small>07</small>
                    </div>
                    <h3>BOTTLING</h3>
                  </a>
                </li>

                <li class="work-item">
                  <img
                    class="dsn-animate-webgl"
                    src="assets/img/steps/7.jpg"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class="nav-work-img-box" data-overlay="5"></div>
        </div>

        <div style={{ marginTop: "100px" }} class="container intro-project section-margin">
          <div class="intro-text text-center">
            <div
              class="title-cover"
              data-dsn-grid="move-section"
              data-dsn-opacity="0.1"
              data-dsn-duration="170%"
              data-dsn-move="0%"
            >
              P R O C E S S
            </div>
            <div class="inner">
              <h2 data-dsn-animate="text">THIS IS HOW WE MAKE OUR TEQUILA</h2>
              <p data-dsn-animate="up">
                Our tequilas come from the lowlands of Jalisco, where
                volcanic minerals have fertilized the soil and generated
                optimal conditions for our blue weber agave resulting in our
                exceptional and unique flavor profiles.<br />

                With a rich and favorful taste paired with an exceptionally smooth fnish across the range,
                we are bringing the product up to levels of high end champagne, whiskys, and cognacs
                while retaining a more relaxed and upper casual feel.                                </p>


            </div>
          </div>
        </div>


        <div class="box-seat">
          <div class="dsn-v-text">
            <div class="container-fluid">
              <div class="box-middle-text">
                <a href="https://vimeo.com/495196950" class="vid">
                  <div class="play-button">
                    <div class="play-btn">
                      <i class="fas fa-play"></i>
                    </div>
                  </div>
                </a>
              </div>
              <div class="inner-img" data-dsn-grid="move-up">
                <img
                  class="has-top-bottom"
                  src="assets/videos/makin-etereo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />

        <div class="wait-loader">
          <div class="loader-inner">
            <div class="loader-circle">
              <div class="loader-layer"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
