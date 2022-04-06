import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Header2 from "../components/Header2";

export default function Shop() {
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
        <div id="dsn-scrollbar">
          <header>
            <div class="container header-hero">
              <div class="row">
                <div class="col-lg-6">
                  <div class="contenet-hero">
                    <h5>Our </h5>
                    <h1>Shop</h1>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div class="wrapper">
            <div class="root-work">
              <div class="container">
                <div class="box-title" data-dsn-title="cover">
                  <h2
                    class="title-cover"
                    data-dsn-grid="move-section"
                    data-dsn-move="-70"
                  >
                    Shop
                  </h2>
                </div>
                <div class="filterings">
                  <div class="filtering-wrap">
                    <div class="filtering">
                      <div class="selector"></div>

                      <button type="button" data-filter=".Tequila">
                        Tequila
                      </button>
                    </div>
                  </div>
                </div>

                <div class="projects-list gallery">
                  <div class="item Tequila">
                    <a
                      href="https://www.drinkwithsasha.com/products/etereo-tequila-extra-anejo?_pos=2&_sid=da1d1160c&_ss=r"
                      data-dsn-ajax="work"
                      data-dsn-grid="move-up"
                    >
                      <img
                        class="has-top-bottom"
                        src="./Assets/img/new/Extra_Anejo.png"
                        alt=""
                      />
                      <div class="item-border"></div>
                      <div class="item-info">
                        <h5 class="cat">ETEREO TEQUILA </h5>
                        <h4>EXTRA ANEJO</h4>
                      </div>
                    </a>
                  </div>

                  <div class="item Tequila">
                    <a
                      href="https://www.drinkwithsasha.com/products/etereo-tequila-licor-de-cafe?_pos=3&_sid=027c0a987&_ss=r"
                      data-dsn-ajax="work"
                      data-dsn-grid="move-down"
                    >
                      <img
                        class="has-top-bottom"
                        src="./Assets/img/new/Coffee.png"
                        alt=""
                      />
                      <div class="item-border"></div>
                      <div class="item-info">
                        <h5 class="cat">ETEREO TEQUILA</h5>
                        <h4>LICOR DE CAFE</h4>
                      </div>
                    </a>
                  </div>

                  <div class="item Tequila">
                    <a
                      href="https://www.drinkwithsasha.com/products/etereo-tequila-plata?_pos=1&_sid=da1d1160c&_ss=r"
                      data-dsn-grid="move-up"
                    >
                      <img
                        class="has-top-bottom"
                        src="./Assets/img/new/Blanco.png"
                        alt=""
                      />
                      <div class="item-border"></div>
                      <div class="item-info">
                        <h5 class="cat">ETEREO TEQUILA</h5>
                        <h4> PLATA</h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <section class="contact-up section-margin section-padding">
              <div class="container">
                <div class="c-wapp">
                  <a class="effect-ajax">
                    <span class="hiring">Sign up for our NEWLETTERS</span>
                    <span class="career">
                      <label>
                        YOUR Email:
                        <input type="text" name="EMAIL" />
                      </label>
                      <input type="submit" value="SEND" />
                    </span>
                  </a>
                </div>
              </div>
            </section>
          </div>
          <Footer />
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
