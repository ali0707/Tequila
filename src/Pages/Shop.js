import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Header2 from "../components/Header2";

export default function Shop() {
    return (
        <div class="hamburger-menu dsn-effect-scroll dsn-ajax" data-dsn-mousemove="true">

            {/* <div class="preloader">
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
            </div> */}

            <Header />

            <div class="main-root">
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
                                    <h2 class="title-cover" data-dsn-grid="move-section" data-dsn-move="-70">Shop</h2>
                                </div>
                                <div class="filterings">
                                    <div class="filtering-wrap">
                                        <div class="filtering">
                                            <div class="selector"></div>

                                            <button type="button" data-filter=".Tequila">Tequila</button>


                                        </div>
                                    </div>
                                </div>

                                <div class="projects-list gallery">
                                    <div class="item Tequila">
                                        <a href="https://www.drinkwithsasha.com/products/etereo-tequila-extra-anejo" data-dsn-ajax="work"
                                            data-dsn-grid="move-up">
                                            <img class="has-top-bottom" src="./Assets/img/tequila/1.jpg" alt="" />
                                            <div class="item-border"></div>
                                            <div class="item-info">
                                                <h5 class="cat">Tequila</h5>
                                                <h4>The Finest</h4>
                                            </div>
                                        </a>
                                    </div>

                                    <div class="item Tequila">
                                        <a href="https://www.drinkwithsasha.com/products/etereo-tequila-licor-de-cafe?_pos=3&_sid=027c0a987&_ss=r" data-dsn-ajax="work"
                                            data-dsn-grid="move-up">
                                            <img class="has-top-bottom" src="./Assets/img/tequila/2.jpg" alt="" />
                                            <div class="item-border"></div>
                                            <div class="item-info">
                                                <h5 class="cat">Tequila</h5>
                                                <h4>Under Armour</h4>
                                            </div>
                                        </a>
                                    </div>

                                    <div class="item Tequila">
                                        <a href="project-3.html" data-dsn-grid="move-up">
                                            <img class="has-top-bottom" src="./Assets/img/tequila/3.jpg" alt="" />
                                            <div class="item-border"></div>
                                            <div class="item-info">
                                                <h5 class="cat">Tequila</h5>
                                                <h4>Re Styling</h4>
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
                                        <span class="hiring">
                                            Sign up for our NEWLETTERS
                                        </span>
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
