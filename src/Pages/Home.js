import React from "react";
import Footer from "../components/Footer";
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
      <Header />

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
                        LIFESTYLE"
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
                        style={{ borderRadius: "30px 0px 0px 30px" }}
                        data-dsn-y="50%"
                        src="assets/img/Lifestyle/d.jpeg"
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
                    <div class="image-zoom" data-dsn="parallax">
                      <a
                        class="single-image"
                        href="assets/img/tequila/1.jpg"
                      >
                        <img src="assets/img/tequila/1.jpg" alt="" />
                      </a>

                      <div class="caption">Trevor Bittinger</div>
                    </div>
                  </div>

                  <div class="col-md-4 box-im section-padding">
                    <div class="image-zoom" data-dsn="parallax">
                      <a
                        class="single-image"
                        href="assets/img/tequila/3.jpg"
                      >
                        <img src="assets/img/tequila/3.jpg" alt="" />
                      </a>
                      <div class="caption">Sef McCullough</div>
                    </div>
                  </div>

                  <div class="col-md-4 box-im section-padding">
                    <div class="image-zoom" data-dsn="parallax">
                      <a
                        class="single-image"
                        href="assets/img/tequila/2.jpg"
                      >
                        <img src="assets/img/tequila/2.jpg" alt="" />
                      </a>
                      <div class="caption">Sef McCullough</div>
                    </div>
                  </div>
                </div>

                <div class="link-custom">
                  <a
                    class="image-zoom effect-ajax"
                    href="Shop"
                    data-dsn="parallax"
                  >
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
                    src="assets/img/Lifestyle/woow.jpg"
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
                    Etéreo, which is Spanish for “ethereal” in English,
                    means “out of this world or heavenly.”
                    This is the perfect description to capture those
                    unforgettable moments and memories that define your
                    unique lifestyle, and it is the perfect description
                    when you take a sip of Etéreo—a true out-of-body experience..{" "}
                  </p>
                  <div class="link-custom">
                    <a
                      class="image-zoom effect-ajax"
                      href="AboutUs"
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
                            src="assets/img/cocktails/1.png"
                            alt=""
                          />
                          <div class="item-border"></div>
                          <div class="item-info">
                            <a
                              href="project-7.html"
                              data-dsn-grid="move-up"
                              class="effect-ajax"
                            >
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
                            src="assets/img/cocktails/2.png"
                            alt=""
                          />
                          <div class="item-border"></div>
                          <div class="item-info">
                            <a
                              href="project-6.html"
                              data-dsn-grid="move-up"
                              class="effect-ajax"
                            >
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
                            src="assets/img/cocktails/3.png"
                            alt=""
                          />
                          <div class="item-border"></div>
                          <div class="item-info">
                            <a
                              href="project-6.html"
                              data-dsn-grid="move-up"
                              class="effect-ajax"
                            >
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
                            src="assets/img/cocktails/4.png"
                            alt=""
                          />
                          <div class="item-border"></div>
                          <div class="item-info">
                            <a
                              href="project-5.html"
                              data-dsn-grid="move-up"
                              class="effect-ajax"
                            >
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
                            src="assets/img/cocktails/5.png"
                            alt=""
                          />
                          <div class="item-border"></div>
                          <div class="item-info">
                            <a
                              href="project-5.html"
                              data-dsn-grid="move-up"
                              class="effect-ajax"
                            >
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
                        src="assets/img/tequila/etlf.jpg"
                        alt=""
                        data-dsn-move="20%"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="box-info">
                      <div class="vertical-title" data-dsn-animate="up">
                        <h2>LIFESTYLE"</h2>
                      </div>

                      <h6 data-dsn-animate="up">
                        WE ARE NOT SELLING TEQUILA ,WE ARE PURVEYING A
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

                      <div class="link-custom">
                        <a
                          class="image-zoom effect-ajax"
                          href="LifeStyle"
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
                      <div class="image" data-overlay="1" style={{ borderRadius: "20px" }}>
                        <img src="assets/img/fond/x.jpg" alt="" />
                      </div>
                      <div class="content"  >
                        <div class="background" style={{ borderRadius: "20px" }}></div>
                        <h5>LifeStyle</h5>

                        <div class="cta">
                          <a href="LifeStyle">Learn More</a>
                        </div>

                      </div>
                    </div>

                    <div class="item-new slick-slide">
                      <div class="image" data-overlay="1" style={{ borderRadius: "20px" }}>
                        <img src="assets/img/fond/et4.jpg" alt="" />
                      </div>
                      <div class="content"  >
                        <div class="background" style={{ borderRadius: "20px" }}></div>
                        <h5>Our Process</h5>

                        <div class="cta">
                          <a href="Prosses">Learn More</a>
                        </div>

                      </div>
                    </div>

                    <div class="item-new slick-slide">
                      <div class="image" data-overlay="1" style={{ borderRadius: "20px" }}>
                        <img src="assets/img/fond/g.jpeg" alt="" />
                      </div>
                      <div class="content"  >
                        <div class="background" style={{ borderRadius: "20px" }} ></div>
                        <h5>LifeStyle</h5>

                        <div class="cta">
                          <a href="Shop">hoodies and hats</a>

                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div class=" box-gallery-vertical section-margin section-padding" data-dsn="color">
              <div class="mask-bg"></div>
              <div class="container">
                <div class="row align-items-center h-100">
                  <div class="col-lg-6 ">
                    <div class="box-im" data-dsn-grid="move-up">
                      <img class="has-top-bottom" src="assets/img/Lifestyle/event.jpeg" alt=""
                        data-dsn-move="20%" />
                    </div>
                  </div>

                  <div class="col-lg-6">


                    <div class="box-info">

                      <div class="vertical-title" data-dsn-animate="up">
                        <h2>THE CHAMPION
                          USMAN84</h2>
                      </div>

                      <h6 data-dsn-animate="up">Through our aromatic flavors, exclusive events, and culinary pairing experiences,
                        be prepared for a complete journey that will awaken all of your senses.</h6>


                      <div class="link-custom" data-dsn-animate="up">
                        <a class="image-zoom effect-ajax" href="project-9.html" data-dsn="parallax">
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
                    <p class="title-sub">OUR COLLECTION</p>

                  </div>
                  <h2 class="title-main">FOLLOW US ON INSTAGRAM</h2>
                </div>

                <div class="wapper-client" >
                  <div class="logo-box" style={{ padding: -30 }}>
                    <img src="assets/img/Lifestyle/sd.jpg" alt="" />

                    <div class="info">
                      <div class="content">
                        <div class="icon">
                          <i class="fas fa-plus"></i>
                        </div>

                        <div class="entry">
                          <div>
                            <h5>Follow Us On Instagram</h5>
                            <a href="http://www.instagram.com/etereolifestyle">étereoLifeStyle</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="logo-box" style={{ padding: -30 }}>
                    <img src="assets/img/Lifestyle/l2.jpg" alt="" />

                    <div class="info">
                      <div class="content">
                        <div class="icon">
                          <i class="fas fa-plus"></i>
                        </div>

                        <div class="entry">
                          <div>
                            <h5>Follow Us On Instagram</h5>
                            <a href="http://www.instagram.com/etereolifestyle">étereoLifeStyle</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="logo-box" style={{ padding: -30 }}>
                    <img src="assets/img/Lifestyle/l4.jpg" alt="" />

                    <div class="info">
                      <div class="content">
                        <div class="icon">
                          <i class="fas fa-plus"></i>
                        </div>

                        <div class="entry">
                          <div>
                            <h5>Follow Us On Instagram</h5>
                            <a href="http://www.instagram.com/etereolifestyle">étereoLifeStyle</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="logo-box" style={{ padding: -30 }}>
                    <img src="assets/img/tequila/l5.jpg" alt="" />

                    <div class="info">
                      <div class="content">
                        <div class="icon">
                          <i class="fas fa-plus"></i>
                        </div>

                        <div class="entry">
                          <div>
                            <h5>Follow Us On Instagram</h5>
                            <a href="http://www.instagram.com/etereolifestyle">étereoLifeStyle</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="logo-box" style={{ padding: -30 }}>
                    <img src="assets/img/tequila/l12.jpg" alt="" />

                    <div class="info">
                      <div class="content">
                        <div class="icon">
                          <i class="fas fa-plus"></i>
                        </div>

                        <div class="entry">
                          <div>
                            <h5>Follow Us On Instagram</h5>
                            <a href="http://www.instagram.com/etereolifestyle">étereoLifeStyle</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="logo-box" style={{ padding: -30 }}>
                    <img src="assets/img/tequila/l7.jpg" alt="" />

                    <div class="info">
                      <div class="content">
                        <div class="icon">
                          <i class="fas fa-plus"></i>
                        </div>

                        <div class="entry">
                          <div>
                            <h5>Follow Us On Instagram</h5>
                            <a href="http://www.instagram.com/etereolifestyle">étereoLifeStyle</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer />

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
