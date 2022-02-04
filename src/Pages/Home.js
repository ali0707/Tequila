import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <div class="dsn-effect-scroll dsn-ajax" data-dsn-mousemove="true">
      <div class="preloader">
        <div class="preloader-after"></div>
        <div class="preloader-before"></div>
        <div class="preloader-block">
          <div class="title">étereo </div>
          <div class="percent">0</div>
          <div class="loading">
            <iframe src="https://embed.lottiefiles.com/animation/29783"></iframe>
          </div>
        </div>
        <div class="preloader-bar">
          <div class="preloader-progress"></div>
        </div>
      </div>
      <div class="main-root">
        <div id="dsn-scrollbar">
          <header>
            <div
              class="headefr-fexid headefr-fexid-onepage"
              data-dsn-header="project"
            >
              <div
                class="bg has-top-bottom"
                id="dsn-hero-parallax-img"
                data-dsn-ajax="img"
              >
                <div class=" " data-dsn="video" data-overlay="4">
                  <video class=" dsn-video" controls autoplay loop playsinline>
                    <source
                      autoplay
                      src="assets/videos/homevideo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support HTML5 video.
                  </video>
                </div>
              </div>

              <div class="project-page__inner">
                <div class="h-100">
                  <div class="row justify-content-center align-items-center h-100">
                    <div class="project-title" id="dsn-hero-parallax-title">
                      {/* <div class="sub-text-header">
                        <h5 class="arrow-left">We make digital products and services.</h5>
                      </div> */}
                      {/*
                      <div class="title-text-header">
                        <span class="title-text-header-inner">
                          <span class="arrow-left" >We are digital agency.</span>
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div class="wrapper">
            <section class="intro-about section-margin">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="intro-content-text">
                      <h2
                        data-dsn-grid="move-section"
                        data-dsn-move="-30"
                        data-dsn-duration="100%"
                        data-dsn-opacity="1.2"
                        data-dsn-responsive="tablet"
                      >
                        Lifestyle
                        <br /> ETÉREO TEQUILA
                      </h2>

                      <p data-dsn-animate="text">
                        ETÉREO is an ultra premium tequila and global lifestyle
                        brand. Through our aromatic flavors, exclusive events,
                        and culinary pairing experiences, be prepared for a
                        complete journey that will awaken all of your senses.
                      </p>

                      {/* <h6 data-dsn-animate="text">SALVADOR DALI</h6> */}
                      <small data-dsn-animate="text">About Us</small>

                      <div class="exper">
                        <div class="numb-ex">
                          <span class="word" data-dsn-animate="text">
                            6
                          </span>
                        </div>

                        <h4 data-dsn-animate="up">
                          YEARS OF <br /> EXPERIENCE
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="background-mask">
                <div
                  class="background-mask-bg"
                  style={{ borderRadius: "20px" }}
                ></div>
                <div class="img-box">
                  <div
                    class="img-cent"
                    data-dsn-grid="move-up"
                    style={{ borderRadius: "20px" }}
                  >
                    <div class="img-container">
                      <img
                        data-dsn-y="30%"
                        src="assets/img/fond/fond-etereo.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="our-services section-margin">
              <div class="container">
                <div class="one-title" style={{ textAlign: "center" }}>
                  <div class="title-sub-container">
                    <p class="title-sub">OUR SERVCIES</p>
                  </div>
                  <h2 class="title-main"> AWARDS AND REVIEWS </h2>
                </div>

                <div class="row">
                  <div class="col-lg-4">
                    <div class="services-item">
                      <div class="line-before"></div>
                      <h4 class="subtitle">TEQUILA AND SPIRITS</h4>
                      <p>
                        We can say with confidence that Etereo's products stand
                        out among the competition. Each flavor--the blanco,
                        reposado, and extra anejo--take you on a complete
                        journey that is exactly what its name represents--out of
                        this world..{" "}
                      </p>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="services-item">
                      <div class="line-before"></div>
                      <h4 class="subtitle">ALPHA MARKETING</h4>
                      <p>
                        There is no tequila like this on the market. Any tequila
                        aficionado understands the complexity of its flavors and
                        the passion that has gone into every bottle. Salud!{" "}
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="services-item">
                      <h4 class="subtitle">GLOBAL SPIRITS</h4>
                      <p>
                        After tasting hundreds of tequilas, this tequila is by
                        far our favorite. The founders share their entire
                        process using the traditional, lowland blue weber agave.
                        You can taste the sweet agave flavors with each sip.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div class="box-seat box-seat-full section-margin">
              <div class="container-fluid">
                <div class="inner-img" data-dsn-grid="move-up">
                  <img
                    data-dsn-y="30%"
                    src="assets/img/fond/image5.png"
                    alt=""
                  />
                </div>
                <div class="pro-text">
                  <h3>
                    {" "}
                    How is your
                    <br /> visual identity?
                  </h3>
                  <p>
                    With a rich and flavorful taste paired with an exceptionally
                    smooth finish across the range, we are bringing the product
                    up to levels of high end Champagne, Whisky/Cognac & Perfume
                    while retaining a more relaxed and upper casual feel.{" "}
                  </p>
                  <div class="link-custom">
                    <a
                      class="image-zoom effect-ajax"
                      href="project-2.html"
                      data-dsn="parallax"
                    >
                      <span>Learn More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <section
              class="our-work work-under-header  section-margin"
              data-dsn-col="3"
            >
              <div class="container">
                <div class="one-title">
                  <div class="title-sub-container">
                    <p class="title-sub">Our Work</p>
                  </div>
                  <h2 class="title-main">Cocktails</h2>
                </div>
              </div>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-9 offset-lg-3">
                    <div class="work-container">
                      <div class="slick-slider">
                        <div class="work-item slick-slide">
                          <img
                            class="has-top-bottom"
                            src="assets/img/tequila/mexican.png"
                            alt=""
                          />
                          <div class="item-border"></div>
                          <div class="item-info">
                            <a
                              href="project-7.html"
                              data-dsn-grid="move-up"
                              class="effect-ajax"
                            >
                              <h5 class="cat">Cocktail MEXICAN </h5>
                              <h4>MEXICAN NEGRONI</h4>
                              <span>
                                <span>view Cocktail</span>
                              </span>
                            </a>
                          </div>
                        </div>

                        <div class="work-item slick-slide">
                          <img
                            class="has-top-bottom"
                            src="assets/img/tequila/mexican.png"
                            alt=""
                          />
                          <div class="item-border"></div>
                          <div class="item-info">
                            <a
                              href="project-6.html"
                              data-dsn-grid="move-up"
                              class="effect-ajax"
                            >
                              <h5 class="cat">PINA JALAPEÑO DELICIOUS </h5>
                              <h4>THE PERFECT MIX</h4>
                              <span>
                                <span>view Cocktail</span>
                              </span>
                            </a>
                          </div>
                        </div>

                        <div class="work-item slick-slide">
                          <img
                            class="has-top-bottom"
                            src="assets/img/tequila/margou.png"
                            alt=""
                          />
                          <div class="item-border"></div>
                          <div class="item-info">
                            <a
                              href="project-6.html"
                              data-dsn-grid="move-up"
                              class="effect-ajax"
                            >
                              <h5 class="cat">MARGUERITA COCKTAIL </h5>
                              <h4>THE PERFECT MIX</h4>
                              <span>
                                <span>view Cocktail</span>
                              </span>
                            </a>
                          </div>
                        </div>

                        <div class="work-item slick-slide">
                          <img
                            class="has-top-bottom"
                            src="assets/img/tequila/margou.png"
                            alt=""
                          />
                          <div class="item-border"></div>
                          <div class="item-info">
                            <a
                              href="project-5.html"
                              data-dsn-grid="move-up"
                              class="effect-ajax"
                            >
                              <h5 class="cat">WATERMELON</h5>
                              <h4> JALAPEÑO MARGUERITA</h4>
                              <span>
                                <span>view Cocktail</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div class=" box-gallery-vertical section-margin section-padding">
              <div class="mask-bg"></div>
              <div class="container">
                <div class="row align-items-center h-100">
                  <div class="col-lg-6 ">
                    <div
                      class="box-im"
                      data-dsn-grid="move-up"
                      style={{ borderRadius: "13px" }}
                    >
                      <img
                        class="has-top-bottom"
                        src="assets/img/tequila/tequila.jpg"
                        alt=""
                        data-dsn-move="20%"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="box-info">
                      <div class="vertical-title" data-dsn-animate="up">
                        <h2>Life Style.</h2>
                      </div>

                      <h6 data-dsn-animate="up">
                        We ARE NOT SELLING TEQUILA ,WE ARE PURVEYING A
                        LIFESTYLE.
                      </h6>

                      <p data-dsn-animate="up">
                        We are selling a lifestyle paired with emotions,
                        hype,good vibes,limited supply and prestige. we
                        diffrentiate ourselves by offering a unique experience
                        through a carefully curated & inspirational instagram
                        gallery feed,influencer marketing and exlusive events
                        worlwide,inspired by the work of legendary photographers
                        slim aarons Mario testino,we already started creating
                        content celebrating the unapologetically glamorous
                        lifestyle portrayed by these masters.
                      </p>

                      <div class="link-custom" data-dsn-animate="up">
                        <a
                          class="image-zoom effect-ajax"
                          href="project-9.html"
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

            <section class="client-see section-margin">
              <div class="container">
                <div class="inner">
                  <div class="left">
                    <h2
                      class="title"
                      data-dsn-grid="move-section"
                      data-dsn-move="-60"
                      data-dsn-duration="100%"
                      data-dsn-opacity="1"
                      data-dsn-responsive="tablet"
                    >
                      <span class="text">Feedback from our clients.</span>
                    </h2>
                  </div>

                  <div class="items">
                    <div class="bg"></div>
                    <div class="slick-slider">
                      <div class="item">
                        <div class="quote">
                          <p>
                            "The Brief team has been sincerely committed to
                            designing great communication around our projects.
                            Our customers love their creative work - and so do
                            we!"
                          </p>
                        </div>
                        <div class="bottom">
                          <div class="avatar">
                            <img src="assets/img/avatar/1.jpg" alt="" />
                          </div>
                          <div class="label">
                            <div class="cell">
                              - Helen Ginsberg, CEO of Treasure Island
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="item">
                        <div class="quote">
                          <p>
                            "Stage direction, music, ballet, workshops,
                            backstage, the GTG presents the first episode of the
                            series “Les Indes galantes en création"
                          </p>
                        </div>
                        <div class="bottom">
                          <div class="avatar">
                            <img src="assets/img/avatar/2.jpg" alt="" />
                          </div>
                          <div class="label">
                            <div class="cell">
                              - Helen Ginsberg, CEO of Treasure Island
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="item">
                        <div class="quote">
                          <p>
                            "The Brief team has been sincerely committed to
                            designing great communication around our projects.
                            Our customers love their creative work - and so do
                            we!"
                          </p>
                        </div>
                        <div class="bottom">
                          <div class="avatar">
                            <img src="assets/img/avatar/3.jpg" alt="" />
                          </div>
                          <div class="label">
                            <div class="cell">
                              - Helen Ginsberg, CEO of Treasure Island
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="our-news section-margin">
              <div class="container">
                <div class="one-title" data-dsn-animate="up">
                  <div class="title-sub-container">
                    <p class="title-sub">Latest News</p>
                  </div>
                  <h2 class="title-main">Latest and greatest post</h2>
                </div>
                <div class="custom-container">
                  <div class="slick-slider">
                    <div class="item-new slick-slide">
                      <div class="image" data-overlay="5">
                        <img src="assets/img/blog/1.jpg" alt="" />
                      </div>
                      <div class="content">
                        <div class="background"></div>
                        <h5>Web , Brand</h5>

                        <div class="cta">
                          <a href="#">Digital Photography Tips</a>
                        </div>

                        <p>
                          Simple point-and-shoot digital cameras can give
                          surprising quality when they have the right lenses and
                          sensors.
                        </p>
                      </div>
                    </div>

                    <div class="item-new slick-slide">
                      <div class="image" data-overlay="5">
                        <img src="assets/img/blog/2.jpg" alt="" />
                      </div>
                      <div class="content">
                        <div class="background"></div>
                        <h5>Web , Brand</h5>

                        <div class="cta">
                          <a href="#">Digital Photography Tips</a>
                        </div>

                        <p>
                          Simple point-and-shoot digital cameras can give
                          surprising quality when they have the right lenses and
                          sensors.
                        </p>
                      </div>
                    </div>

                    <div class="item-new slick-slide">
                      <div class="image" data-overlay="5">
                        <img src="assets/img/blog/3.jpg" alt="" />
                      </div>
                      <div class="content">
                        <div class="background"></div>
                        <h5>Web , Brand</h5>

                        <div class="cta">
                          <a href="#">Digital Photography Tips</a>
                        </div>

                        <p>
                          Simple point-and-shoot digital cameras can give
                          surprising quality when they have the right lenses and
                          sensors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="brand-client section-margin">
              <div class="container">
                <div class="one-title" data-dsn-animate="up">
                  <div class="title-sub-container">
                    <p class="title-sub">Our clients</p>
                  </div>
                  <h2 class="title-main">Your successful, our reputation</h2>
                </div>

                <div class="wapper-client">
                  <div class="logo-box">
                    <img src="assets/img/logo/eterologo-blanc.png" alt="" />

                    <div class="info">
                      <div class="content">
                        <div class="icon">
                          <i class="fas fa-plus"></i>
                        </div>

                        <div class="entry">
                          <div>
                            <h5>Google</h5>
                            <a href="#">www.google.com</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="logo-box">
                    <img src="assets/img/logo/eterologo-blanc.png" alt="" />

                    <div class="info">
                      <div class="content">
                        <div class="icon">
                          <i class="fas fa-plus"></i>
                        </div>

                        <div class="entry">
                          <div>
                            <h5>Google</h5>
                            <a href="#">www.google.com</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="logo-box">
                    <img src="assets/img/logo/eterologo-blanc.png" alt="" />

                    <div class="info">
                      <div class="content">
                        <div class="icon">
                          <i class="fas fa-plus"></i>
                        </div>

                        <div class="entry">
                          <div>
                            <h5>Google</h5>
                            <a href="#">www.google.com</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="logo-box">
                    <img src="assets/img/logo/eterologo-blanc.png" alt="" />

                    <div class="info">
                      <div class="content">
                        <div class="icon">
                          <i class="fas fa-plus"></i>
                        </div>

                        <div class="entry">
                          <div>
                            <h5>Google</h5>
                            <a href="#">www.google.com</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="logo-box">
                    <img src="assets/img/logo/eterologo-blanc.png" alt="" />

                    <div class="info">
                      <div class="content">
                        <div class="icon">
                          <i class="fas fa-plus"></i>
                        </div>

                        <div class="entry">
                          <div>
                            <h5>Google</h5>
                            <a href="#">www.google.com</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="logo-box">
                    <img src="assets/img/logo/eterologo-blanc.png" alt="" />

                    <div class="info">
                      <div class="content">
                        <div class="icon">
                          <i class="fas fa-plus"></i>
                        </div>

                        <div class="entry">
                          <div>
                            <h5>Google</h5>
                            <a href="#">www.google.com</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

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
    </div>
  );
}
