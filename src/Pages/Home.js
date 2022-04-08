import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <body class="dsn-effect-scroll dsn-ajax" data-dsn-mousemove="true">
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
            <div class="dsn-slider">
              <div class="dsn-root-slider">
                <div class="slide-inner">
                  <div class="swiper-wrapper">
                    <div class="slide-item swiper-slide">
                      <div class="slide-content">
                        <div class="slide-content-inner">
                          <div class="project-metas">
                            <div class="project-meta-box project-work cat">
                              <span></span>
                            </div>
                          </div>

                          <div class="title-text-header">
                            <div class="title-text-header-inner">
                              <a class="effect-ajax" data-dsn-ajax="slider">
                                Lifestyle
                              </a>
                            </div>
                          </div>

                          <p>
                            We Are Not Selling Tequila, We Are Purveying A
                            Lifestyle"
                          </p>
                        </div>
                      </div>
                      <div class="image-container">
                        <div
                          class="image-bg cover-bg"
                          data-image-src="./Assets/img/Lifestyle/luca.jpg"
                          data-overlay="0"
                        >
                          <img src="./Assets/img/Lifestyle/luca.jpg" alt="" />
                        </div>
                      </div>
                    </div>

                    <div class="slide-item swiper-slide">
                      <div class="slide-content">
                        <div class="slide-content-inner">
                          <div class="project-metas">
                            <div class="project-meta-box project-work cat">
                              <span></span>
                            </div>
                          </div>

                          <div class="title-text-header">
                            <div class="title-text-header-inner">
                              <a class="effect-ajax" data-dsn-ajax="slider">
                                NFT
                              </a>
                            </div>
                          </div>

                          <p>
                            Etereo is now officially “out of this world” to the
                            metaverse in order to bring you the very first NFT
                            project to link all of its NFTs to real life
                            luxurious and exclusive utilities.
                          </p>
                        </div>
                      </div>
                      <div class="image-container">
                        <div
                          class="image-bg cover-bg"
                          data-image-src="./Assets/img/NFT/diamond.jpeg"
                          data-overlay="4"
                        >
                          <img src="./Assets/img/NFT/diamond.jpeg" alt="" />
                        </div>
                      </div>
                    </div>

                    <div class="slide-item swiper-slide">
                      <div class="slide-content">
                        <div class="slide-content-inner">
                          <div class="project-metas">
                            <div class="project-meta-box project-work cat">
                              <span></span>
                            </div>
                          </div>

                          <div class="title-text-header">
                            <div class="title-text-header-inner">
                              <a class="effect-ajax" data-dsn-ajax="slider">
                                EVENTS{" "}
                              </a>
                            </div>
                          </div>

                          <p>
                            The essence of Etéreo is that our tequila is made
                            without compromise from the field to bottle using
                            ancestral methods that ensures our flavors are
                            distinctly “out of this world.”{" "}
                          </p>
                        </div>
                      </div>
                      <div class="image-container">
                        <div
                          class="image-bg cover-bg"
                          data-image-src="./Assets/img/events/events.jpeg"
                          data-overlay="2"
                        >
                          <img src="./Assets/img/events/events.jpeg" alt="" />
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
                        data-image-src="./Assets/img/steps/1.jpg"
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
                        data-image-src="./Assets/img/steps/2.jpeg"
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
                        data-image-src="./Assets/img/steps/3.jpeg"
                        data-overlay="2"
                      ></div>
                    </div>
                    <div class="content">
                      <p>03</p>
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
                        Lifestyle"
                        <br /> ETÉREO TEQUILA
                      </h2>

                      <p data-dsn-animate="text">
                        ETÉREO is an ultra premium tequila and global Lifestyle
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
                        style={{ borderRadius: "30px 0px 0px 30px" }}
                        data-dsn-y="50%"
                        src="./Assets/img/Lifestyle/d.jpeg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div class="container">
                <div class="one-title">
                  <div class="title-sub-container">
                    <p class="title-sub">TEQUILA</p>
                  </div>
                  <h2 class="title-main">POPULAR PRODUCTS</h2>
                </div>
              </div>

              <div class="container-fluid gallery-col">
                <div class="row">
                  <div class="col-md-4 box-im section-padding">
                    <div data-dsn="parallax">
                      <a class="single-image" href="Shop">
                        <img src="./Assets/img/new/Extra_Anejo.png" alt="" />
                      </a>

                      <div>ETEREO TEQUILA EXTRA ANEJO</div>
                    </div>
                  </div>

                  <div class="col-md-4 box-im section-padding">
                    <div data-dsn="parallax">
                      <a class="single-image" href="Shop">
                        <img src="./Assets/img/new/Coffee.png" alt="" />
                      </a>
                      <div>ETEREO TEQUILA LICOR DE CAFE </div>
                    </div>
                  </div>

                  <div class="col-md-4 box-im section-padding">
                    <div data-dsn="parallax">
                      <a class="single-image" href="Shop">
                        <img src="./Assets/img/new/Blanco.png" alt="" />
                      </a>
                      <div>ETEREO TEQUILA PLATA</div>
                    </div>
                  </div>
                </div>

                <div class="link-custom">
                  <a href="Shop" data-dsn="parallax">
                    <span>VISIT SHOP</span>
                  </a>
                </div>
              </div>
            </section>

            <section class="our-services section-margin">
              <div class="container">
                <div class="one-title" style={{ textAlign: "center" }}>
                  <div class="title-sub-container">
                    <p class="title-sub">OUR STORY</p>
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
                    src="./Assets/img/Lifestyle/woow.jpg"
                    alt=""
                  />
                </div>
                <div class="pro-text">
                  <h3>
                    {" "}
                    Etéreo is the synergy of an American
                    <br /> & French vision rooted in the London nightlife
                  </h3>
                  <p>
                    Etéreo, which is Spanish for “ethereal” in English, means
                    “out of this world or heavenly.” This is the perfect
                    description to capture those unforgettable moments and
                    memories that define your unique Lifestyle, and it is the
                    perfect description when you take a sip of Etéreo—a true
                    out-of-body experience..{" "}
                  </p>
                  <div class="link-custom">
                    <a href="AboutUs" data-dsn="parallax">
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
                    <p class="title-sub">TASTE</p>
                  </div>
                  <h2 class="title-main">OUR COCKTAILS</h2>
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
                            src="./Assets/img/cocktails/1.png"
                            alt=""
                          />
                          <div class="item-border"></div>
                          <div class="item-info">
                            <a href="./Cocktails" data-dsn-grid="move-up">
                              <h5 class="cat">DELICIOUS </h5>
                              <h4>PINA JALAPEÑO</h4>
                              <span>
                                <span>view Cocktail</span>
                              </span>
                            </a>
                          </div>
                        </div>

                        <div class="work-item slick-slide">
                          <img
                            class="has-top-bottom"
                            src="./Assets/img/cocktails/2.png"
                            alt=""
                          />
                          <div class="item-border"></div>
                          <div class="item-info">
                            <a href="./Cocktails" data-dsn-grid="move-up">
                              <h5 class="cat">THE PERFECT TASTE </h5>
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
                            src="./Assets/img/cocktails/3.png"
                            alt=""
                          />
                          <div class="item-border"></div>
                          <div class="item-info">
                            <a href="./Cocktails" data-dsn-grid="move-up">
                              <h5 class="cat">THE PERFECT MIX</h5>
                              <h4>WATERMELON JALAPEÑO MARGUERITA</h4>
                              <span>
                                <span>view Cocktail</span>
                              </span>
                            </a>
                          </div>
                        </div>

                        <div class="work-item slick-slide">
                          <img
                            class="has-top-bottom"
                            src="./Assets/img/cocktails/4.png"
                            alt=""
                          />
                          <div class="item-border"></div>
                          <div class="item-info">
                            <a href="./Cocktails" data-dsn-grid="move-up">
                              <h5 class="cat">OLD & GOLD</h5>
                              <h4>ETÉREO OLD FASHIONED</h4>
                              <span>
                                <span>view Cocktail</span>
                              </span>
                            </a>
                          </div>
                        </div>

                        <div class="work-item slick-slide">
                          <img
                            class="has-top-bottom"
                            src="./Assets/img/cocktails/5.png"
                            alt=""
                          />
                          <div class="item-border"></div>
                          <div class="item-info">
                            <a href="./Cocktails" data-dsn-grid="move-up">
                              <h5 class="cat">THE BEST TASTE</h5>
                              <h4> MARGUERITA COCKTAIL</h4>
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
                        src="./Assets/img/tequila/etlf.jpg"
                        alt=""
                        data-dsn-move="20%"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="box-info">
                      <div class="vertical-title" data-dsn-animate="up">
                        <h2>Lifestyle"</h2>
                      </div>

                      <h6 data-dsn-animate="up">
                        WE ARE NOT SELLING TEQUILA ,WE ARE PURVEYING A
                        Lifestyle.
                      </h6>

                      <p data-dsn-animate="up">
                        We are selling a Lifestyle paired with emotions,
                        hype,good vibes,limited supply and prestige. we
                        diffrentiate ourselves by offering a unique experience
                        through a carefully curated & inspirational instagram
                        gallery feed,influencer marketing and exlusive events
                        worlwide,inspired by the work of legendary photographers
                        slim aarons Mario testino,we already started creating
                        content celebrating the unapologetically glamorous
                        Lifestyle portrayed by these masters.
                      </p>

                      <div class="link-custom">
                        <a href="Lifestyle" data-dsn="parallax">
                          <span>Learn More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section class="our-news section-margin">
              <div class="container">
                <div class="one-title" data-dsn-animate="up">
                  <div class="title-sub-container">
                    <p class="title-sub">LATEST NEWS</p>
                  </div>
                  <h2 class="title-main">Latest And Greatest Events</h2>
                </div>
                <div class="custom-container">
                  <div class="slick-slider">
                    <div class="item-new slick-slide">
                      <div
                        class=""
                        data-overlay="1"
                        style={{ borderRadius: "20px" }}
                      >
                        <img src="./Assets/img/Lifestyle/smoker.jpeg" alt="" />
                      </div>
                      <div class="content">
                        <div
                          class="background"
                          style={{ borderRadius: "20px" }}
                        ></div>
                        <h5>Lifestyle</h5>

                        <div class="cta">
                          <a href="Lifestyle">MORE THAN TEQUILA</a>
                        </div>
                      </div>
                    </div>

                    <div class="item-new slick-slide">
                      <div
                        class=""
                        data-overlay="1"
                        style={{ borderRadius: "20px" }}
                      >
                        <img src="./Assets/img/events/party2.jpeg" alt="" />
                      </div>
                      <div class="content">
                        <div
                          class="background"
                          style={{ borderRadius: "20px" }}
                        ></div>
                        <h5>EVENTS</h5>

                        <div class="cta">
                          <a href="Lifestyle">OUT OF THIS WORLD</a>
                        </div>
                      </div>
                    </div>

                    <div class="item-new slick-slide">
                      <div
                        class=""
                        data-overlay="1"
                        style={{ borderRadius: "20px" }}
                      >
                        <img src="./Assets/img/process.jpeg" alt="" />
                      </div>
                      <div class="content">
                        <div
                          class="background"
                          style={{ borderRadius: "20px" }}
                        ></div>
                        <h5>OUR PROCESS</h5>

                        <div class="cta">
                          <a href="our-process">How We Make Tequila</a>
                        </div>
                      </div>
                    </div>

                    <div class="item-new slick-slide">
                      <div
                        class=""
                        data-overlay="1"
                        style={{ borderRadius: "20px" }}
                      >
                        <img src="./Assets/img/nft.jpeg" alt="" />
                      </div>
                      <div class="content">
                        <div
                          class="background"
                          style={{ borderRadius: "20px" }}
                        ></div>
                        <h5>NFT</h5>

                        <div class="cta">
                          <a href="NFT">DISCOVER OUR COLLECTION</a>
                        </div>
                      </div>
                    </div>

                    <div class="item-new slick-slide">
                      <div
                        class=""
                        data-overlay="1"
                        style={{ borderRadius: "20px" }}
                      >
                        <img src="./Assets/img/events/osman2.jpeg" alt="" />
                      </div>

                      <div class="content">
                        <div
                          class="background"
                          style={{ borderRadius: "20px" }}
                        ></div>
                        <h5>THE CHAMPION USMAN KAMARU</h5>

                        <div class="cta">
                          <a href="Events"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div
              class=" box-gallery-vertical section-margin section-padding"
              data-dsn="color"
            >
              <div class="mask-bg"></div>
              <div class="container">
                <div class="row align-items-center h-100">
                  <div class="col-lg-6 ">
                    <div
                      class="box-im"
                      data-dsn-grid="move-up"
                      style={{ borderRadius: "20px" }}
                    >
                      <img
                        class="has-top-bottom"
                        src="./Assets/img/Lifestyle/event.jpeg"
                        alt=""
                        data-dsn-move="20%"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="box-info">
                      <div class="vertical-title" data-dsn-animate="up">
                        <h2>THE CHAMPION USMAN84</h2>
                      </div>

                      <h6 data-dsn-animate="up">
                        Through our aromatic flavors, exclusive events, and
                        culinary pairing experiences, be prepared for a complete
                        journey that will awaken all of your senses.
                      </h6>

                      <div class="link-custom" data-dsn-animate="up">
                        <a href="Events" data-dsn="parallax">
                          <span>Learn More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section class="brand-client section-margin">
              <div class="container">
                <div class="one-title" data-dsn-animate="up">
                  <div class="title-sub-container">
                    <p class="title-sub"></p>
                  </div>
                  <h2 class="title-main">MEET OUR PARTNERS</h2>
                </div>

                <div class="wapper-client">
                  <div
                    class="logo-box"
                    style={{ padding: -30, borderRadius: "20px" }}
                  >
                    <img
                      src="./Assets/img/partners/p1.jpeg"
                      alt=""
                      style={{ borderRadius: "20px" }}
                    />
                  </div>

                  <div
                    class="logo-box"
                    style={{ padding: -30, borderRadius: "20px" }}
                  >
                    <img
                      src="./Assets/img/partners/p2.jpeg"
                      alt=""
                      style={{ borderRadius: "20px" }}
                    />
                  </div>
                  <div
                    class="logo-box"
                    style={{ padding: -30, borderRadius: "20px" }}
                  >
                    <img
                      src="./Assets/img/partners/p3.jpeg"
                      alt=""
                      style={{ borderRadius: "20px" }}
                    />
                  </div>

                  <div
                    class="logo-box"
                    style={{ padding: -30, borderRadius: "20px" }}
                  >
                    <img
                      src="./Assets/img/partners/p4.png"
                      alt=""
                      style={{ borderRadius: "20px" }}
                    />
                  </div>

                  <div
                    class="logo-box"
                    style={{ padding: -30, borderRadius: "20px" }}
                  >
                    <img
                      src="./Assets/img/partners/p5.jpg"
                      alt=""
                      style={{ borderRadius: "20px" }}
                    />
                  </div>

                  <div
                    class="logo-box"
                    style={{ padding: -30, borderRadius: "20px" }}
                  >
                    <img
                      src="./Assets/img/partners/p6.jpeg"
                      alt=""
                      style={{ borderRadius: "20px" }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <Footer />
        </div>
      </main>

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
