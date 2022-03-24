import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import './stylenft.scss'
export default function Nft() {
    return (
        <div class="hamburger-menu dsn-effect-scroll dsn-ajax" data-dsn-mousemove="true">

            {/* <div class="preloader">
                <div class="preloader-after"></div>
                <div class="preloader-before"></div>
                <div class="preloader-block">
                    <div class="title">étereo </div>
                    <div class="percent">0</div>
                
                </div>
                <div class="preloader-bar">
                    <div class="preloader-progress"></div>
                </div>
            </div> */}

            <Header />

            <div class="main-root">
                <div >
                    <div style={{ marginTop: "200px" }} class="container intro-project section-margin">
                        <div class="intro-text text-center">
                            <div
                                class="title-cover"
                                data-dsn-grid="move-section"
                                data-dsn-opacity="0.1"
                                data-dsn-duration="170%"
                                data-dsn-move="0%"
                            >
                                N F T
                            </div>
                            <div class="inner">
                                <h2 data-dsn-animate="text">NFT COLLECTION</h2>
                                <p data-dsn-animate="up">
                                    Etéreo can undoubtedly be ranked amongst the best Tequilas on the market, but our sole
                                    purpose besides providing you with the finest beverages has always been to purvey an exclusive
                                    lifestyle to all our clients.<br />

                                    This ultimate goal will very soon be achieved through the launch of our NFT collection.
                                </p>


                            </div>
                        </div>
                    </div>


                    <div class="wrapper">
                        <div class="root-work">
                            <div class="container">


                                <div class="inner" style={{ marginTop: "50px", marginBottom: "100px" }}>

                                    <p data-dsn-animate="up">
                                        Etéreo is now officially “out of this world” to the metaverse in order to bring you the very first NFT
                                        project to link all of its NFTs to real life luxurious and exclusive utilities.
                                    </p>


                                </div>


                                <div style={{ marginTop: "50px", marginBottom: "50px" }} class="container-fluid gallery-col">
                                    <div class="row">
                                        <div class="col-md-4 box-im section-padding" style={{ padding: 10 }} >
                                            <div class="image-zoom" data-dsn="parallax"
                                            >
                                                <a
                                                    class="single-image"
                                                    href="./Assets/img/NFT/1.png"
                                                >
                                                    <img src="./Assets/img/347.png" alt=""
                                                        style={{ borderRadius: "20px" }}
                                                    />
                                                </a>

                                                {/* <div class="caption">Trevor Bittinger</div> */}
                                            </div>
                                        </div>
                                        <div class="col-md-4 box-im section-padding" style={{ padding: 10 }}>
                                            <div class="image-zoom" data-dsn="parallax">
                                                <a
                                                    class="single-image"
                                                    href="./Assets/img/NFT/2.png"
                                                >
                                                    <img src="./Assets/img/Montre.png" alt=""
                                                        style={{ borderRadius: "20px" }}

                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-4 box-im section-padding" style={{ padding: 10 }}>
                                            <div class="image-zoom" data-dsn="parallax">
                                                <a
                                                    class="single-image"
                                                    href="./Assets/img/NFT/3.png"
                                                >
                                                    <img src="./Assets/img/369.png" alt=""
                                                        style={{ borderRadius: "20px" }}
                                                    />
                                                </a>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="intro-text text-center">

                                    <div class='ctrl' style={{ justifyContent: "center" }}>
                                        <div class='ctrl__button ctrl__button--decrement'>-</div>
                                        <div class='ctrl__counter'>
                                            <input class='ctrl__counter-input' maxlength='10' type='text' value='0'></input>
                                            <div class='ctrl__counter-num'>0</div>
                                        </div>
                                        <div class='ctrl__button ctrl__button--increment'>+</div>
                                        <div class='ctrl__button mint'>MINT</div>
                                    </div>
                                </div>


                                <div style={{ marginTop: "100px" }} class="container intro-project section-margin">
                                    <div class="intro-text text-center">

                                        <div class="inner">
                                            <h4 data-dsn-animate="text">Available Soon..</h4>
                                            <p data-dsn-animate="up">
                                                2200 NFTs will be available for mint on our platform all of which will provide unique
                                                Real life experiences.

                                                Indeed and for the first time in NFT history each and every digital piece of art issued will
                                                instantly and permanently give access to real life benefits for all our holders to enjoy.
                                            </p>
                                            <div class="box-title" data-dsn-title="cover">
                                                <h2 class="title-cover" data-dsn-grid="move-section" data-dsn-move="-70">Explore Collections
                                                </h2>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <article>
                                    <div class="text">
                                        <img style={{ borderRadius: "20px" }} class="has-top-bottom" src="./Assets/img/nft02.jpeg" alt="" />
                                        <div style={{ marginTop: "10px" }}>Etéreo EVENTS</div>
                                    </div>
                                    <div class="image"
                                        style={{
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            position: "relative",
                                            top: "50%"
                                        }}
                                    >

                                        Ever dreamed of all-inclusive trips to Etéreo
                                        events worldwide as prime guests ?

                                    </div>
                                    <div class="text">
                                        <img style={{ borderRadius: "20px" }} class="has-top-bottom" src="./Assets/img/nft01.jpeg" alt="" />
                                        <div style={{ marginTop: "10px" }}>COACHELLA VIP ACCESS</div>

                                    </div>
                                    <div class="image"
                                        style={{
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            position: "relative",
                                            top: "50%"
                                        }}
                                    >
                                        Ever dreamed of flying a private jet to
                                        Coachella and partying with all the world’s
                                        celebrities ?
                                    </div>
                                    <div class="text">
                                        <img style={{ borderRadius: "20px" }} class="has-top-bottom" src="./Assets/img/nft0.jpeg" alt="" />
                                        <div style={{ marginTop: "10px" }}>RANGE ROVER</div>

                                    </div>
                                    <div class="image"
                                        style={{
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            position: "relative",
                                            top: "50%"
                                        }}
                                    >
                                        Ever dreamed of being gifted a SUV from a brand
                                        that represents the pinnacle of English craftsmanship
                                        and luxury  ?
                                    </div>




                                </article>
                                <article>
                                    <div class="image"
                                        style={{
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            position: "relative",
                                            top: "50%"
                                        }}
                                    >
                                        Ever dreamed of spending a summer with
                                        your friends on a Super Yacht sailing across
                                        the Adriatic Sea ?
                                    </div>

                                    <div class="text">
                                        <img style={{ borderRadius: "20px" }} class="has-top-bottom" src="./Assets/img/nft1.jpeg" alt="" />
                                        <div style={{ marginTop: "10px" }}>YACHT</div>

                                    </div>
                                    <div class="text"
                                        style={{
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            position: "relative",
                                            top: "50%"
                                        }}
                                    >
                                        Ever dreamed of being gifted the most exquisite
                                        diamonds and rings from one of London’s finest
                                        jeweller ?
                                    </div>
                                    <div class="text">

                                        <div class="box-seat">
                                            <div class="dsn-v-text" >
                                                <div class="container-fluid" >
                                                    <div class="box-middle-text">
                                                        <a

                                                            href="./Assets/videos/zoom1.mp4" class="vid">
                                                            <div class="play-button">
                                                                <div class="play-btn">
                                                                    <i class="fas fa-play"></i>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div class="" data-dsn-grid="move-up" style={{ borderRadius: "20px" }}>
                                                        <img

                                                            src="./Assets/img/videch.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>     <div style={{ marginTop: "10px" }}>CADARO LONDON</div>

                                    </div>
                                    <div class="image"

                                        style={{
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            position: "relative",
                                            top: "50%"
                                        }}>

                                        Ever dreamed of being gifted the most iconique
                                        watches from the two best watchmakers to ever
                                        be ?
                                    </div>

                                    <div class="text">

                                        <img style={{ borderRadius: "20px" }} class="has-top-bottom" src="./Assets/img/nft2.jpeg" alt="" />

                                        <div style={{ marginTop: "10px" }}>ROLEX & AUDEMART PIGUET</div>


                                    </div>





                                </article>

                                <article>
                                    <div class="text">
                                        <img style={{ borderRadius: "20px" }} class="has-top-bottom" src="./Assets/img/nft3.jpeg" alt="" />

                                        <div style={{ marginTop: "10px" }}>UFC EXCLUSIVE ACCESS</div>
                                    </div>
                                    <div class="image"
                                        style={{
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            position: "relative",
                                            top: "50%"
                                        }}
                                    >
                                        Ever dreamed of sitting front row at every UFC
                                        fight before partying with the champion?
                                    </div>
                                    <div class="text">
                                        <img style={{ borderRadius: "20px" }} class="has-top-bottom" src="./Assets/img/nft4.jpeg" alt="" />
                                        <div style={{ marginTop: "10px" }}>Etéreo DISTILLERY</div>

                                    </div>
                                    <div class="image"

                                        style={{
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            position: "relative",
                                            top: "50%"
                                        }}
                                        data-dsn-animate="up">
                                        Ever dreamed of a unique trip to Mexico’s
                                        finest and most genuine tequila distillery ?
                                    </div>
                                    <div class="text">
                                        <img style={{ borderRadius: "20px" }} class="has-top-bottom" src="./Assets/img/nft5.jpeg" alt="" />
                                        <div style={{ marginTop: "10px" }}>SW Clinic</div>

                                    </div>
                                    <div class="image"
                                        style={{
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            position: "relative",
                                            top: "50%"
                                        }}
                                        data-dsn-animate="up">
                                        Ever dreamed of being offered all the plastic
                                        surgery you have wished for in the most high-end
                                        cliniques ?
                                    </div>
                                </article>

                                <article>
                                    <div class="text"
                                        style={{
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            position: "relative",
                                            top: "50%"
                                        }}
                                        data-dsn-animate="up">
                                        Ever dreamed of free life-memberships to the
                                        most exclusive Yoga Center in London ?
                                    </div>
                                    <div class="image">
                                        <img style={{ borderRadius: "20px" }} class="has-top-bottom" src="./Assets/img/nft6.jpeg" alt="" />
                                        <div style={{ marginTop: "10px" }}>YOGA</div>

                                    </div>
                                    <div class="text"
                                        style={{
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            position: "relative",
                                            top: "50%"
                                        }}
                                        data-dsn-animate="up">
                                        Ever dreamed of unlimited supply of the finest
                                        Caviar ?
                                    </div>
                                    <div class="image">
                                        <img style={{ borderRadius: "20px" }} class="has-top-bottom" src="./Assets/img/nft7.jpeg" alt="" />
                                        <div style={{ marginTop: "10px" }}>Caviar</div>

                                    </div>
                                    <div class="text"
                                        style={{
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            position: "relative",
                                            top: "50%"
                                        }}
                                        data-dsn-animate="up">
                                        Ever dreamed of waking up one morning with
                                        a free 50 000 $ on your bank account ?
                                    </div>
                                    <div class="image">
                                        <img style={{ borderRadius: "20px" }} class="has-top-bottom" src="./Assets/img/nft8.jpeg" alt="" />
                                        <div style={{ marginTop: "10px" }}>50 000 $</div>

                                    </div>
                                    <div class="text">
                                        <img style={{ borderRadius: "20px" }} class="has-top-bottom" src="./Assets/img/nft9.jpeg" alt="" />
                                        <div style={{ marginTop: "10px" }} data-dsn-animate="down"> ALAN & STEVE</div>

                                    </div>
                                    <div class="image" style={{
                                        textAlign: "center",
                                        verticalAlign: "middle",
                                        position: "relative",
                                        top: "50%"
                                    }}>
                                        Ever dreamed of receiving free merchandise from
                                        one of the most up and coming brand of sustainable
                                        fashion ?
                                    </div>
                                    <div class="text"
                                        style={{
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            position: "relative",
                                            top: "50%"
                                        }}
                                        data-dsn-animate="left">
                                        Ever dreamed of the finest dining experiences
                                        as Etéreo’s exclusive guest
                                    </div>
                                    <div class="image">
                                        <img style={{ borderRadius: "20px" }} class="has-top-bottom" src="./Assets/img/nft10.jpeg" alt="" />
                                        <div style={{ marginTop: "10px" }}>UKIYO SPECIAL TREATMENT</div>

                                    </div>

                                </article>

                            </div>
                        </div>

                        <section class="contact-up section-margin section-padding">
                            <div class="container">
                                <div style={{ marginTop: "100px" }} class="container intro-project section-margin">
                                    <div class="intro-text text-center">

                                        <div class="inner">
                                            <p data-dsn-animate="up">
                                                Well thanks to Etéreo, making all these dreams your reality has never been simpler.<br />

                                                Just like we were not only creating a Tequila…
                                                We are not only creating NFTs…<br />


                                                We are purveying a lifestyle.<br />


                                                The only question is, are you truly ready for this lifestyle?<br />
                                            </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <Footer />
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


            {/* <div class="cursor">

                <div class="cursor-helper cursor-view">
                    <span>VIEW</span>
                </div>

                <div class="cursor-helper cursor-close">
                    <span>Close</span>
                </div>

                <div class="cursor-helper cursor-link"></div>
            </div> */}

        </div>
    );
}

