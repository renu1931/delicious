import React, { useState } from "react";
import Menu from "./Menu";
import Special from "./special";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import gallery_1 from "../images/gallery_1.jpg";
import gallery_2 from "../images/gallery_2.jpg";
import gallery_3 from "../images/gallery_3.jpg";
import gallery_4 from "../images/gallery_4.jpg";
import gallery_5 from "../images/gallery_5.jpg";
import gallery_6 from "../images/gallery_6.jpg";
import gallery_7 from "../images/gallery_7.jpg";
import gallery_8 from "../images/gallery_8.jpg";
import chefs_bg from "../images/chefs_bg.jpg";
import chefs_1 from "../images/chefs_1.jpg";
import chefs_2 from "../images/chefs_2.jpg";
import chefs_3 from "../images/chefs_3.jpg";
import event_birthday from "../images/event_birthday.jpg";
import event_custom from "../images/event_custom.jpg";
import event_private from "../images/event_private.jpg";
import slider_background from "../images/slider_background.jpg";
import testimonials_1 from "../images/testimonials_1.jpg";
import testimonials_2 from "../images/testimonials_2.jpg";
import testimonials_3 from "../images/testimonials_3.jpg";
import testimonials_4 from "../images/testimonials_4.jpg";
import testimonials_5 from "../images/testimonials_5.jpg";
import testimonials_bg from "../images/testimonials_bg.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 120,
  duration: 400,
  once: false,
});

export default function Home() {
  const [items, setItems] = useState(Menu);
  const [special, setSpecial] = useState(Special);
  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updatedItems);
  };
  const filterSpecials = (categSpecial) => {
    const updatedSpecial = Special.filter((curSpec) => {
      return categSpecial === curSpec.category;
    });

    setSpecial(updatedSpecial);
  };
  return (
    <>
      {/* navbar start */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="nav">
        <a className="navbar-brand" href="home" id="delicious">
          Delicious
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav" id="nav-ul">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/menu">
                Menu
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/specials">
                Specials
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/events">
                Events
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/chefs">
                Chefs
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item dropdown active">
              <a
                href="/dropdown"
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Drop Down
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="/dropdown1" id="dropdown">
                  Drop Down 1
                </a>
                <a className="dropdown-item" href="/dropdown2" id="dropdown">
                  Drop Down 2
                </a>
                <a className="dropdown-item" href="/dropdown3" id="dropdown">
                  Drop Down 3
                </a>
                <a className="dropdown-item" href="/dropdown4" id="dropdown">
                  Drop Down 4
                </a>
                <a className="dropdown-item" href="/dropdown5" id="dropdown">
                  Drop Down 5
                </a>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <button id="nav-btn">
              <a className="nav-link" href="/book a table" id="nav-btn-a">
                Book a table
              </a>
            </button>
          </ul>
        </div>
      </nav>
      {/*navbar complete */}
      {/*crausel start */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div id="home-blank-div"></div>
            <img
              className="d-block w-100 mt-5"
              src={slide1}
              alt="First slide"
              id="home-slider-img"
              height="600px"
            />
            <div
              className="carousel-caption d-none d-md-block"
              id="home-slider-main-div"
            >
              <h1 id="home-slider-h1" data-aos="fade-down">
                Delicious Restaurant
              </h1>
              <p id="home-slider-p" data-aos="fade-up">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil
                <br /> ut aliquam. Occaecati alias dolorem mollitia ut.
                Similique ea voluptatem. Esse
                <br /> doloremque accusamus repellendus deleniti vel. Minus et
                tempore modi architecto.
              </p>
              <div>
                <button id="home-slider-btn" data-aos="fade-up">
                  <a href="/our menu" id="crausel-btn">
                    OUR MENU
                  </a>
                </button>
                <button id="home-slider-btn" data-aos="fade-up">
                  <a href="/book a table" id="crausel-btn">
                    BOOK A TABLE
                  </a>
                </button>
              </div>

              <p id="home-slider-p2" data-aos="fade-up">
                <i className="fa-solid fa-mobile-screen-button"></i>+1 5589
                55488 55
              </p>
              <p id="home-slider-p2" data-aos="fade-up">
                <i className="fa-regular fa-clock"></i>Mon-Sat: 11:00 AM - 23:00
                PM
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div id="home-blank-div"></div>
            <img
              className="d-block w-100 mt-5"
              src={slide2}
              alt="Second slide"
              id="home-slider-img"
              height="600px"
            />
            <div
              className="carousel-caption d-none d-md-block"
              id="home-slider-main-div"
            >
              <h1 id="home-slider-h1" data-aos="fade-down">
                Lorem Ipsum Dolor
              </h1>
              <p id="home-slider-p" data-aos="fade-up">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil
                <br /> ut aliquam. Occaecati alias dolorem mollitia ut.
                Similique ea voluptatem. Esse
                <br /> doloremque accusamus repellendus deleniti vel. Minus et
                tempore modi architecto.
              </p>
              <div>
                <button id="home-slider-btn" data-aos="fade-up">
                  <a href="/our menu" id="crausel-btn">
                    OUR MENU
                  </a>
                </button>
                <button id="home-slider-btn" data-aos="fade-up">
                  <a href="/book a table" id="crausel-btn">
                    BOOK A TABLE
                  </a>
                </button>
              </div>

              <p id="home-slider-p2" data-aos="fade-up">
                <i className="fa-solid fa-mobile-screen-button"></i>+1 5589
                55488 55
              </p>
              <p id="home-slider-p2" data-aos="fade-up">
                <i className="fa-regular fa-clock"></i>Mon-Sat: 11:00 AM - 23:00
                PM
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div id="home-blank-div"></div>
            <img
              className="d-block w-100 mt-5"
              src={slide3}
              alt="Third slide"
              id="home-slider-img"
              height="600px"
            />
            <div
              className="carousel-caption d-none d-md-block"
              id="home-slider-main-div"
            >
              <h1 id="home-slider-h1" data-aos="fade-down">
                Sequi ea ut et est quaerat
              </h1>
              <p id="home-slider-p" data-aos="fade-up">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil
                <br /> ut aliquam. Occaecati alias dolorem mollitia ut.
                Similique ea voluptatem. Esse
                <br /> doloremque accusamus repellendus deleniti vel. Minus et
                tempore modi architecto.
              </p>
              <div>
                <button id="home-slider-btn" data-aos="fade-up">
                  <a href="/our menu" id="crausel-btn">
                    OUR MENU
                  </a>
                </button>
                <button id="home-slider-btn" data-aos="fade-up">
                  <a href="/book a table" id="crausel-btn">
                    BOOK A TABLE
                  </a>
                </button>
              </div>

              <p id="home-slider-p2" data-aos="fade-up">
                <i className="fa-solid fa-mobile-screen-button"></i>+1 5589
                55488 55
              </p>
              <p id="home-slider-p2" data-aos="fade-up">
                <i className="fa-regular fa-clock"></i>Mon-Sat: 11:00 AM - 23:00
                PM
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/*crausel complete */}
      {/*video section start*/}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#f5deb340" }}
      >
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-md-6">
                <video loop autoPlay id="video">
                  <source
                    src="https://rr3---sn-gwpa-pmjs.googlevideo.com/videoplayback?expire=1655556893&ei=vHatYpSHOcyBjAT5tJKQDw&ip=64.145.79.147&id=o-AH8x_JG-DZLLyqritwAYgP3lpIe54XBFlA09Y4CVp-NG&itag=18&source=youtube&requiressl=yes&spc=4ocVC9-y9r73qHMCjkGohTymIx-seOU&vprv=1&mime=video%2Fmp4&ns=b6-ZFII_FIitdAWM9ohRyXoG&cnr=14&ratebypass=yes&dur=60.046&lmt=1653949194900670&fexp=24001373,24007246&c=WEB&txp=6218224&n=bqcIXd8MCRoMag&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgINGPAHvHpoHmk0qx0iwL_QBqa5RQaOUVoQHkZAo1AmUCIQCg_hTv-DI1-SVC07TVTHPfCoN0aXRT5xqIcncnkW4DDw%3D%3D&redirect_counter=1&rm=sn-ab5eee76&req_id=4b87ac771a77a3ee&cms_redirect=yes&ipbypass=yes&mh=eT&mip=2405:201:5804:d008:94c2:d60d:331f:2d4&mm=31&mn=sn-gwpa-pmjs&ms=au&mt=1655534935&mv=m&mvi=3&pl=49&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAL6Pp-QSvqoOdh-_YVuHhmbHrLZcsyrXARxlpWCO0rpgAiAC5PIq7cBowIGlSzvE0N0yqVxJI1W867GsM1KBOUkQbw%3D%3D"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="col-sm-6 pl-4 pr-5">
                <h5 id="video-h5">
                  Eum ipsam laborum deleniti
                  <span id="h5-span">
                    velit pariatur
                    <br /> architecto aut nihil
                  </span>
                </h5>
                <p id="video-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p>
                <p id="video-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p id="video-p1">
                  <i className="fa-solid fa-check-double"></i>Ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
                <p id="video-p1">
                  <i className="fa-solid fa-check-double"></i>Duis aute irure
                  dolor in reprehenderit in voluptate velit.
                </p>
                <p id="video-p1">
                  <i className="fa-solid fa-check-double"></i>Ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>

          <p id="video-p3">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </p>
        </div>
      </div>
      {/*video section complete */}

      {/*reataurant section start */}
      <div className="container my-4 py-5">
        <h5 className="text-center pb-2" id="restaurant-h5">
          Why choose <span id="restaurant-h5-span">Our Restaurant</span>
        </h5>
        <p className="text-center pb-3" id="restaurant-p">
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          <br />
          adipisci expedita at voluptas atque vitae autem.
        </p>
        <div className="row">
          <div className="col-md-3 pt-2" id="restaurant-box">
            <div id="restaurant-animation">
              <h4 id="restaurant-h4">01</h4>
              <h6 id="restaurant-h6">Lorem Ipsum</h6>
              <p id="restaurant-p1">
                Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                consectetur ducimus vero placeat
              </p>
            </div>
          </div>
          <div className="col-md-3 pt-2" id="restaurant-box">
            <div id="restaurant-animation">
              <h4 id="restaurant-h4">02</h4>
              <h6 id="restaurant-h6">Repellat Nihil</h6>
              <p id="restaurant-p1">
                Dolorem est fugiat occaecati voluptate velit esse. Dicta
                veritatis dolor quod et vel dire leno para dest
              </p>
            </div>
          </div>
          <div className="col-md-3 pt-2" id="restaurant-box">
            <div id="restaurant-animation">
              <h4 id="restaurant-h4">03</h4>
              <h6 id="restaurant-h6">Ad ad velit qui</h6>
              <p id="restaurant-p1">
                Molestiae officiis omnis illo asperiores. Aut doloribus vitae
                sunt debitis quo vel nam quis
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*reataurant section complete */}
      {/*check our tasty menu section start */}
      <h1 className="text-center" id="tasty-h1">
        Check our tasty
        <span id="tasty-span">Menu</span>
      </h1>
      <div className="menu-tabs-container text-center">
        <div className="menu-tab ">
          <button className="btn" id="tasty-btn" onClick={() => setItems(Menu)}>
            Show All
          </button>
          <button
            className="btn"
            id="tasty-btn"
            onClick={() => filterItem("Starters")}
          >
            Starters
          </button>
          <button
            className="btn"
            id="tasty-btn"
            onClick={() => filterItem("Salads")}
          >
            Salads
          </button>
          <button
            className="btn"
            id="tasty-btn"
            onClick={() => filterItem("Specialty")}
          >
            Specialty
          </button>
        </div>
      </div>
      {/*  menu description*/}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-11 m-auto">
            <div className="row">
              {items.map((elem) => {
                const { heading, price, description } = elem;
                return (
                  <div className="col-md-6">
                    <h6>
                      <h6 id="tasty-h6">
                        {heading}
                        <span id="tasty-span2">
                          --------------------------------------------------
                        </span>
                        <span id="tasty-span3">{price}</span>
                        <p className="text-center" id="tasty-p2">
                          {description}
                        </p>
                      </h6>
                    </h6>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/*check our tasty menu section complete */}
      {/*check our special section start */}
      <h1 className="text-center pt-5 mt-5" id="special-h1">
        Check our <span>Specials</span>
      </h1>
      <p className="text-center" id="special-para">
        Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
        <br />
        adipisci expedita at voluptas atque vitae autem.
      </p>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="special-tabs-container">
              <div className="special-tab">
                <button
                  id="special-btn"
                  onClick={() => filterSpecials("Modi sit est")}
                >
                  Modi sit est
                </button>
                <button
                  id="special-btn"
                  onClick={() => filterSpecials("Unde praesentium sed")}
                >
                  Unde praesentium sed
                </button>
                <button
                  id="special-btn"
                  onClick={() => filterSpecials("Pariatur explicabo vel")}
                >
                  Pariatur explicabo vel
                </button>
                <button
                  id="special-btn"
                  onClick={() => filterSpecials("Nostrum qui quasi")}
                >
                  Nostrum qui quasi
                </button>
                <button
                  id="special-btn"
                  onClick={() => filterSpecials("Iusto ut expedita aut")}
                >
                  Iusto ut expedita aut
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            {special.map((element) => {
              const { id, image, heading, para, paragraph } = element;
              return (
                <div className="row">
                  <div className="col-md-7 m-auto" key={id}>
                    <h3 id="special-h3">{heading}</h3>
                    <p id="special-p1">{para}</p>
                    <p id="special-p1">{paragraph}</p>
                  </div>

                  <div className="col-md-4">
                    <img src={image} alt="my-pic" className="img-fluid" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/*check our special section complete */}

      {/*event section start */}
      <div id="background-black"></div>
      <div
        className="py-5"
        style={{
          backgroundImage: `url(${slider_background})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          height: "auto",
        }}
      >
        <div className="container" style={{ color: "white" }}>
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center pb-5" id="organise-h1">
                Organize Your <span>Events</span> in our Restaurant
              </h1>
              <OwlCarousel className="owl-theme" loop margin={60} items={1}>
                <div className="item">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={event_birthday} id="products1" alt="my-pic" />
                    </div>
                    <div className="col-md-6">
                      <h1 id="organise-h1">Birthday Perties</h1>
                      <h2 id="organise-h2">$189</h2>
                      <p id="organise-p">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                      </p>
                      <p id="organise-p">
                        <i className="fa-regular fa-circle-check"></i> Ullamco
                        laboris nisi aliquip ex ea commodo sonsequat.
                      </p>
                      <p id="organise-p">
                        <i className="fa-regular fa-circle-check"></i> Duis aute
                        irure dolor in reprehenderit in voluptate velit.
                      </p>
                      <p id="organise-p">
                        <i className="fa-regular fa-circle-check"></i> Ullamco
                        laboris nisi aliquip ex ea commodo sonsequat.
                      </p>
                      <p id="organise-p">
                        Ullamco laboris nisi aliquip ex ea commodo
                        sonsequat.Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={event_private} id="products1" alt="my-pic" />
                    </div>
                    <div className="col-md-6">
                      <h1 id="organise-h1">Private Perties</h1>
                      <h2 id="organise-h2">$290</h2>
                      <p id="organise-p">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                      </p>
                      <p id="organise-p">
                        <i className="fa-regular fa-circle-check"></i> Ullamco
                        laboris nisi aliquip ex ea commodo sonsequat.
                      </p>
                      <p id="organise-p">
                        <i className="fa-regular fa-circle-check"></i> Duis aute
                        irure dolor in reprehenderit in voluptate velit.
                      </p>
                      <p id="organise-p">
                        <i className="fa-regular fa-circle-check"></i> Ullamco
                        laboris nisi aliquip ex ea commodo sonsequat.
                      </p>
                      <p id="organise-p">
                        Ullamco laboris nisi aliquip ex ea commodo
                        sonsequat.Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={event_custom} id="products1" alt="my-pic" />
                    </div>
                    <div className="col-md-6">
                      <h1 id="organise-h1">Custom Perties</h1>
                      <h2 id="organise-h2">$99</h2>
                      <p id="organise-p">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                      </p>
                      <p id="organise-p">
                        <i className="fa-regular fa-circle-check"></i> Ullamco
                        laboris nisi aliquip ex ea commodo sonsequat.
                      </p>
                      <p id="organise-p">
                        <i className="fa-regular fa-circle-check"></i> Duis aute
                        irure dolor in reprehenderit in voluptate velit.
                      </p>
                      <p id="organise-p">
                        <i className="fa-regular fa-circle-check"></i> Ullamco
                        laboris nisi aliquip ex ea commodo sonsequat.
                      </p>
                      <p id="organise-p">
                        Ullamco laboris nisi aliquip ex ea commodo
                        sonsequat.Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur
                      </p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      {/*event section complete */}
      {/*book a table section start */}
      <div className="container py-5 my-3">
        <div className="row">
          <div className="col-md-11 m-auto">
            <h1 className="text-center" id="book-h1">
              Book a <span> Table</span>
            </h1>
            <p className="text-center pb-2 pt-2" id="book-p">
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              <br />
              adipisci expedita at voluptas atque vitae autem.
            </p>
            <div className="row">
              <div className="col-md-4">
                <input type="text" placeholder="Your Name" id="book-input" />
                <input type="date" placeholder="Date" id="book-input" />
              </div>
              <div className="col-md-4">
                <input type="email" placeholder="Your Email" id="book-input" />
                <input type="time" placeholder="Time" id="book-input" />
              </div>
              <div className="col-md-4">
                <input type="number" placeholder="Your Phone" id="book-input" />
                <input
                  type="number"
                  placeholder="No. of people"
                  id="book-input"
                />
              </div>
            </div>

            <textarea placeholder="Meassage" id="book-textarea" />
            <div id="book-btn">
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
      {/*book a table section complete */}
      {/*photos section start */}
      <div className="container-fluid">
        <h1 className="text-center py-2" id="book-h1">
          Some photos from<span> Our Restaurant</span>
        </h1>
        <p className="text-center pb-3" id="photos-p">
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita
          <br /> at voluptas atque vitae autem.
        </p>
        <div className="row pb-5">
          <div className="col-md-3" id="img-container">
            <img src={gallery_1} alt="photos" id="photos" />
          </div>
          <div className="col-md-3" id="img-container">
            <img src={gallery_2} alt="photos" id="photos" />
          </div>
          <div className="col-md-3" id="img-container">
            <img src={gallery_3} alt="photos" id="photos" />
          </div>
          <div className="col-md-3 " id="img-container">
            <img src={gallery_4} alt="photos" id="photos" />
          </div>

          <div className="col-md-3 " id="img-container">
            <img src={gallery_5} alt="photos" id="photos" />
          </div>
          <div className="col-md-3 " id="img-container">
            <img src={gallery_6} alt="photos" id="photos" />
          </div>
          <div className="col-md-3" id="img-container">
            <img src={gallery_7} alt="photos" id="photos" />
          </div>
          <div className="col-md-3" id="img-container">
            <img src={gallery_8} alt="photos" id="photos" />
          </div>
        </div>
      </div>

      {/*photos section complete */}

      {/*chefs  section start */}
      <div id="chefs-div"></div>
      <div
        className="py-5"
        style={{
          backgroundImage: `url(${chefs_bg})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "auto",
        }}
      >
        <div className="container pb-5">
          <div className="row py-3">
            <div className="col-md-11 m-auto">
              <h1 className="text-center py-3" id="book-h1">
                Our Proffesional <span>Chefs</span>
              </h1>
              <p className="text-center pb-3" id="book-p">
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                <br />
                adipisci expedita at voluptas atque vitae autem.
              </p>
              <div className="row">
                <div className="col-md-4" style={{ position: "relative" }}>
                  <img src={chefs_1} alt="chefs-img" id="chefs-img" />
                  <div>
                    <div id="chef-icon-div">
                      <h3 className="text-center" id="chefs-h3">
                        Walter White
                      </h3>
                      <h6 className="text-center" id="chefs-h6">
                        Master Chef
                      </h6>
                      <div className="d-flex justify-content-center">
                        <p>
                          <i className="fa-brands fa-twitter p-1"></i>
                        </p>
                        <p>
                          <i className="fa-brands fa-facebook p-1"></i>
                        </p>
                        <p>
                          <i className="fa-brands fa-instagram p-1"></i>
                        </p>
                        <p>
                          <i className="fa-brands fa-linkedin p-1"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4" style={{ position: "relative" }}>
                  <img src={chefs_2} alt="chefs-img" id="chefs-img" />
                  <div>
                    <div id="chef-icon-div">
                      <h3 className="text-center" id="chefs-h3">
                        Sarah Jhonson
                      </h3>
                      <h6 className="text-center" id="chefs-h6">
                        Patissier
                      </h6>
                      <div className="d-flex justify-content-center">
                        <p>
                          <i className="fa-brands fa-twitter p-1"></i>
                        </p>
                        <p>
                          <i className="fa-brands fa-facebook p-1"></i>
                        </p>
                        <p>
                          <i className="fa-brands fa-instagram p-1"></i>
                        </p>
                        <p>
                          <i className="fa-brands fa-linkedin p-1"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4" style={{ position: "relative" }}>
                  <img src={chefs_3} alt="chefs-img" id="chefs-img" />
                  <div>
                    <div id="chef-icon-div">
                      <h3 className="text-center" id="chefs-h3">
                        William Anderson
                      </h3>
                      <h6 className="text-center" id="chefs-h6">
                        Cook
                      </h6>
                      <div className="d-flex justify-content-center">
                        <p>
                          <i className="fa-brands fa-twitter p-1"></i>
                        </p>
                        <p>
                          <i className="fa-brands fa-facebook p-1"></i>
                        </p>
                        <p>
                          <i className="fa-brands fa-instagram p-1"></i>
                        </p>
                        <p>
                          <i className="fa-brands fa-linkedin p-1"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*chefs  section complete */}
      {/*poision  section start */}
      <div id="poision"></div>
      <div
        className="py-5"
        style={{
          backgroundImage: `url(${testimonials_bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "auto",
        }}
      >
        <div className="container text-center" style={{ color: "white" }}>
          <div className="row">
            <div className="col-md-11 m-auto">
              <OwlCarousel className="owl-theme" loop margin={60} items={1}>
                <div className="item">
                  <img src={testimonials_1} id="testimonial" alt="my-pic" />
                  <h5 id="testimonials-h5">Saul Goodman</h5>
                  <p id="testimonials-p1">Ceo & Founder</p>
                  <p id="testimonials-p2">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </p>
                  <p id="testimonials-p3">
                    <i className="fa-solid fa-quote-left"></i> Proin iaculis
                    purus consequat sem cure digni ssim donec porttitora entum
                    suscipit rhoncus. Accusantium
                    <br /> quam, ultricies eget id, aliquam eget nibh et. Maecen
                    aliquam, risus at semper.
                    <i className="fa-solid fa-quote-right"></i>
                  </p>
                </div>
                <div className="item">
                  <img src={testimonials_2} id="testimonial" alt="my-pic" />
                  <h5 id="testimonials-h5">Sara Wilsson</h5>
                  <p id="testimonials-p1">Designer</p>
                  <p id="testimonials-p2">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </p>
                  <p id="testimonials-p3">
                    <i className="fa-solid fa-quote-left"></i> Export tempor
                    illum tamen malis malis eram quae irure esse labore quem
                    cillum quid cillum eram malis
                    <br /> quorum velit fore eram velit sunt aliqua noster
                    fugiat irure amet legam anim culpa.
                    <i className="fa-solid fa-quote-right"></i>
                  </p>
                </div>
                <div className="item">
                  <img src={testimonials_3} id="testimonial" alt="my-pic" />
                  <h5 id="testimonials-h5">Jena Karlis</h5>
                  <p id="testimonials-p1">Store Owner</p>
                  <p id="testimonials-p2">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </p>
                  <p id="testimonials-p3">
                    <i className="fa-solid fa-quote-left"></i> Enim nisi quem
                    export duis labore cillum quae magna enim sint quorum nulla
                    quem veniam duis minim
                    <br /> tempor labore quem eram duis noster aute amet eram
                    fore quis sint minim.
                    <i className="fa-solid fa-quote-right"></i>
                  </p>
                </div>
                <div className="item">
                  <img src={testimonials_4} id="testimonial" alt="my-pic" />
                  <h5 id="testimonials-h5">Matt Brandon</h5>
                  <p id="testimonials-p1">Freelancer</p>
                  <p id="testimonials-p2">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </p>
                  <p id="testimonials-p3">
                    <i className="fa-solid fa-quote-left"></i> Fugiat enim eram
                    quae cillum dolore dolor amet nulla culpa multos export
                    minim fugiat minim velit minim <br />
                    dolor enim duis veniam ipsum anim magna sunt elit fore quem
                    dolore labore illum veniam.
                    <i className="fa-solid fa-quote-right"></i>
                  </p>
                </div>
                <div className="item">
                  <img src={testimonials_5} id="testimonial" alt="my-pic" />
                  <h5 id="testimonials-h5">John Larson</h5>
                  <p id="testimonials-p1">Entrepreneur</p>
                  <p id="testimonials-p2">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </p>
                  <p id="testimonials-p3">
                    <i className="fa-solid fa-quote-left"></i> Quis quorum
                    aliqua sint quem legam fore sunt eram irure aliqua veniam
                    tempor noster veniam enim
                    <br /> culpa labore duis sunt culpa nulla illum cillum
                    fugiat legam esse veniam culpa fore nisi cillum quid.
                    <i className="fa-solid fa-quote-right"></i>
                  </p>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      {/*poision  section complete */}
      {/*contact us  section start */}
      <div className="container-fluid py-5">
        <h1 className="text-center" id="contact-h1">
          <span>Contact</span> Us
        </h1>
        <p className="text-center" id="contact-p">
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          <br />
          adipisci expedita at voluptas atque vitae autem.
        </p>
        <div className="row">
          <div className="col-md-12">
            {/*map start */}
            <section id="map-section">
              <iframe
                id="map-iframe"
                frameBorder="0"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.36128074302!2d-74.0083263851846!3d40.710062645672046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sin!4v1655537321971!5m2!1sen!2sin"
                width="600"
                height="450"
                title="138, M. C. Colony, Urban Estate II, Hisar, Haryana 125005, India"
                aria-label="138, M. C. Colony, Urban Estate II, Hisar, Haryana 125005, India"
              ></iframe>
            </section>
            {/*map start */}
          </div>
        </div>
      </div>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-3 d-flex" id="location-div">
            <div>
              <p id="location-para">
                <i className="fa-solid fa-location-dot"></i>
              </p>
            </div>
            <div>
              <h3 id="location-h3">Location: </h3>
              <p id="location-p">
                A108 Adam Street
                <br /> New York, NY 535022
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex" id="location-div">
            <div>
              <p id="location-para">
                <i className="fa-regular fa-clock"></i>
              </p>
            </div>
            <div>
              <h3 id="location-h3">Open Hours: </h3>
              <p id="location-p">
                Monday-Saturday:
                <br />
                11:00 AM - 2300 PM
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex" id="location-div">
            <div>
              <p id="location-para">
                <i className="fa-regular fa-envelope"></i>
              </p>
            </div>
            <div>
              <h3 id="location-h3">Email: </h3>
              <p id="location-p">
                info@example.com
                <br />
                contact@example.com
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex" id="location-div">
            <div>
              <p id="location-para">
                <i className="fa-solid fa-mobile-screen-button"></i>
              </p>
            </div>
            <div>
              <h3 id="location-h3">Call: </h3>
              <p id="location-p">
                +1 5589 55488 51
                <br /> +1 5589 22475 14
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*contact us  section complete */}
      {/*message box  section start */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-11 m-auto">
            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="Your Name" id="message-input" />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  placeholder="Your Email"
                  id="message-input"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <input type="text" placeholder="Subject" id="message-input" />
                <br />
                <textarea placeholder="Message" id="message-input1" />
                <div id="book-btn">
                  <button type="button">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*message box  section complete */}
      {/*footer  section start */}
      <div
        className="container-fluid text-center pt-4 pb-2 text-white"
        style={{ backgroundColor: "#35322d" }}
      >
        <div className="row">
          <div className="col-md-12">
            <h1 id="delicious1">Delicious</h1>
            <p id="footer-p">
              Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
              eligendi fuga maxime saepe commodi placeat.
            </p>
            <p className="d-flextext-center" id="footer-icon">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-skype"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </p>
            <p id="footer-p1">
              © Copyright <span id="one">Delicious</span>. All Rights Reserved
              <br />
              Designed by<span id="two"> BootstrapMade</span>
            </p>
          </div>
        </div>
      </div>
      {/*footer  section complete */}
    </>
  );
}
