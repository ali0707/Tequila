import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
  return (
    <body class=" dsn-effect-scroll dsn-ajax" data-dsn-mousemove="true">
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
          <div class="header-hero header-hero-2 ">
            <div class="container h-100">
              <div class="row align-items-center h-100">
                <div class="col-lg-12">
                  <div class="contenet-hero">
                    <h1>Discover Who We Are & What We Do</h1>

                    <a href="#" class="view-case scroll-down scroll-to">
                      Scroll Down{" "}
                      <img src="./Assets/img/arrow-right-wight.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="wrapper">
          <div class="root-about">
            <div class="box-seat box-seat-full">
              <div class="container-fluid">
                <div class="inner-img" data-dsn-grid="move-up">
                  <img
                    src="./Assets/img/wow.png"
                    alt=""
                    data-dsn-y="30%"
                    data-dsn-scale="1"
                  />
                </div>
                <div class="pro-text">
                  <h4 data-dsn-animate="up">
                    We are selling a lifestyle paired with emotions hype, good
                    vibes <br />
                    limited supply and prestige.
                  </h4>
                  <p data-dsn-animate="up">
                    We differentiate ourselves by offering a unique experience
                    through a carefully curated & inspirational Instagram
                    gallery feed, influencer marketing and exclusive events
                    worldwide. Inspired by the work of legendary photographers
                    Slim Aarons, Mario Testino, we already started creating
                    content celebrating the unapologetically glamorous lifestyle
                    portrayed by these masters.
                  </p>
                </div>
              </div>
            </div>

            <section class="intro-about section-margin section-padding hidden">
              <div class="mask-bg"></div>
              <div class="container">
                <div class="row align-items-center h-100">
                  <div class="col-lg-6">
                    <div class="box-im">
                      <div
                        class="cover-bg"
                        data-image-src="./Assets/img/skills.jpg"
                      ></div>
                    </div>
                  </div>
                  <div class="col-lg-5 offset-lg-1">
                    <div class="small-title">
                      <span class="counter">01</span>
                      <h5>About Us</h5>
                    </div>

                    <div class="content">
                      <h5>Speaking of employee happiness -</h5>
                      <h3>
                        Our two goals are employee happiness and client
                        happiness
                      </h3>
                      <p>
                        We won the Best Workplace award from Great Place to Work
                        3 times in Finland, and once in all of Europe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="our-services section-margin">
              <div class="container">
                <div class="one-title" data-dsn-animate="up">
                  <h2 class="title-main">OUR STORY</h2>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="services-item">
                      <div class="line-before"></div>
                      <h4 class="subtitle">Etéreo</h4>
                      <p>
                        {" "}
                        We found the perfect balance beteween the past and
                        present clean,minimalist and timeless with a strong
                        creative logo that embodies the true roots of our
                        products. Our logo is defined by two distinct elements
                        The toltec Cyclops symbol discovered in the ancient cave
                        located in mexico. The Eétreo agave plant Surounding our
                        logo as a crown /sun to enhance the importance of our
                        tequila flavors
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="services-item">
                      <div class="line-before"></div>
                      <h4 class="subtitle">
                        “BEYOND TEQUILA, IT IS A LIFESTYLE.
                      </h4>
                      <p>
                        The founders, from all across the globe, met one night
                        at an exclusive nightclub in London. After several
                        tequila shots and despite barely meeting, the newfound
                        group of friends spontaneously booked flights to Ibiza
                        and shared more epic memories together, including being
                        backstage with Black Coffee. The friends wanted to share
                        their out-of-body experience with the world, and Etéreo
                        was born.
                      </p>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="services-item">
                      <div class="line-before"></div>
                      <h4 class="subtitle">
                        “WE ARE CREATING MORE THAN A TEQUILA, WE ARE PURVIVING A
                        LIFESTYLE.
                      </h4>
                      <p>
                        Our logo was also carefully curated to evoke the
                        “Etéreo” brand, which is combined of two designs: (1) an
                        ancient Toltec petroglyph discovered thousands of years
                        ago in a Mexican cave resembling a one-eyed creature
                        described as “out of this world”; and (2) the blue weber
                        agave plant as an ornament on top of its head. Our logo
                        is timeless and intended to pay homage to the Mexican
                        heritage.{" "}
                      </p>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="services-item">
                      <div class="line-before"></div>
                      <h4 class="subtitle">
                        Etéreo is the synergy of an American & French vision
                        rooted in the London nightlife
                      </h4>
                      <p>
                        Etéreo, which is Spanish for “ethereal” in English,
                        means “out of this world or heavenly.” This is the
                        perfect description to capture those unforgettable
                        moments and memories that define your unique lifestyle,
                        and it is the perfect description when you take a sip of
                        Etéreo—a true out-of-body experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="our-team section-margin section-padding">
              <div class="container">
                <div class="one-title" data-dsn-animate="up">
                  <div class="title-sub-container">
                    <p class="title-sub">our team</p>
                  </div>
                  <h2 class="title-main">The best team ever!</h2>
                </div>

                <div class="custom-container">
                  <div class="slick-slider">
                    <div class="team-item slick-slide">
                      <div class="box-img" style={{ borderRadius: "25px" }}>
                        <img src="./Assets/img/one.jpeg" alt="" />
                      </div>

                      <div class="box-content">
                        <h4>HAMADE NASSER</h4>
                        <p>Co-Founder</p>
                      </div>
                    </div>

                    <div class="team-item slick-slide">
                      <div class="box-img" style={{ borderRadius: "25px" }}>
                        <img src="./Assets/img/two.jpeg" alt="" />
                      </div>

                      <div class="box-content">
                        <h4>JAMES LING </h4>
                        <p>Co-Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="our-client section-margin">
              <div class="container">
                <div class="one-title" data-dsn-animate="up">
                  <div class="title-sub-container">
                    <p class="title-sub"> Client see</p>
                  </div>
                  <h2 class="title-main">Feedback from our clients.</h2>
                </div>

                <div class="client-curs">
                  <div class="client-item">
                    <div>
                      <p>
                        Gold color. Inviting aromas of roasted nuts, candied
                        cherries, vanilla bean, and sweet blossoms with a
                        velvety, vibrant, fruity light-to-medium body and a
                        peppery, intriguing, very long ripe melons, toffee, and
                        white pepper finish. A tantalizing melange of complex
                        flavors that reward each sip
                      </p>
                      <h5>ali ben said</h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
