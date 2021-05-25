import React, { Component } from "react";
import Header from "../../shared/Header";
import "../../assets/css/home.css";
import "../../assets/css/Emir.css";
import SearchIcon from "../../assets/svg/search-icon.svg";
import ShoeWithChart from "../../assets/img/shoe-with-chart.png";
import DownArrow from "../../assets/svg/down-arrow.svg";
import PopularBrands from "../components/home/PopularBrands";
import HomeItemCard from "../components/home/HomeItemCard";
import SliderLeftArrow from "../../assets/img/ok/sol-ok.svg";
import SliderRightArrow from "../../assets/img/ok/sag-ok.svg";
import SliderLeftArrowMavi from "../../assets/img/ok/sol-ok-mavi.svg";
import SliderRightArrowMavi from "../../assets/img/ok/sag-ok-mavi.svg";
import Recent1 from "../../assets/img/recent-1.png";
import Recent2 from "../../assets/img/recent-2.png";
import Recent3 from "../../assets/img/recent-3.png";
import Recent4 from "../../assets/img/recent-4.png";
import $ from "jquery";
import AirJordan1 from "../../assets/img/air-jordan1.png";
import AirJordan2 from "../../assets/img/air-jordan2.png";
import AirJordan3 from "../../assets/img/air-jordan3.png";
import AirJordan4 from "../../assets/img/air-jordan4.png";
import Sneakers1 from "../../assets/img/sneakers1.png";
import Sneakers2 from "../../assets/img/sneakers2.png";
import Sneakers3 from "../../assets/img/sneakers3.png";
import Sneakers4 from "../../assets/img/sneakers4.png";
import Footer from "../../shared/Footer";
import { HandleSigninPopUp } from "../../assets/js/Events/PopUp";
import SignIn from "../components/Auth/SignIn";
import Services from "../components/home/Services";
import Login from "../components/Auth/Login";
import Search from "../../shared/Search";
import Sidebar from "../../shared/Sidebar";
import Slash from "../../assets/svg/slash.svg";
import MostRecentDeskopSlash from "../../assets/svg/most-recent-desktop-slash.svg";
import MostRecentMobileSlash from "../../assets/svg/most-recent-mobile-slash.svg";
import PopularBrandDesltopSlash from "../../assets/svg/popuar-brands-desktop-slash.svg";
import PopularBrandMobileSlash from "../../assets/svg/popular-brands-mobile-slash.svg";
import AirJordanDesktopSlash from "../../assets/svg/air-jorder-desktop-slash.svg";
import AirJordanMobileSlash from "../../assets/svg/air-jorder-desktop-slash.svg";
import ServiceDesktopSlash from "../../assets/svg/services-desktop-slash.svg";
import TabletSlash from "../../assets/svg/tablet-slash.svg";
import ServiceMobileSlash from "../../assets/svg/services-desktop-slash.svg";
import BigTriangle from "../../assets/img/home-triangle-bg.png";
import { render } from "@testing-library/react";
import BigServiceCircleSol from "../../assets/img/atom-sag.png"
class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
    this.slide = this.slide.bind(this);
    this.handleArama = this.handleArama.bind(this);
  }

  componentDidMount() {
    HandleSigninPopUp();
  }

  handleArama(e) {
    e.preventDefault();
  }

  slide(w, to) {
    if (to == "right") {
      var wi = $(w).outerWidth();
      var now = $(w).scrollLeft() + wi;
      $(w).scrollLeft(now);
    } else {
      var wi = $(".home-card-reel").width();
      var now = $(w).scrollLeft() - wi;
      $(w).scrollLeft(now);
    }
  }

  render() {
    return (
      <>
        <div className="home">
          <Sidebar />
          <div className="home-sign-in-wrapper">
            <SignIn />
          </div>
          <div className="home-login-wrapper">
            <Login />
          </div>

          <div className="home-search-wrapper">
            <Search />
          </div>
          <Header />
          <div className="home-hero">
            <img src={BigTriangle} alt="" />

            <div className="left">
              <h1>
                HYPE <span>AND</span>
                <br />
                LIMITED
              </h1>
              <p>Turkey's first sneaker stock market</p>
              <form onSubmit={this.handleArama}>
                <div className="search-input-wrapper">
                  <input
                    type="text"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={(e) => {
                      this.setState({ search: e.target.value });
                    }}
                  />

                  <img src={SearchIcon} alt="Search Icon" />
                </div>
                <div className="button-wrapper">
                  <button>Buy</button>
                  <p>{"&"}</p>
                  <button>Sell</button>
                </div>
              </form>
            </div>
            <div className="right">
              <img src={ShoeWithChart} alt="" />
            </div>
          </div>

          <div className="down-arrrow-wrapper">
            <img src={DownArrow} className="d-none d-lg-block mx-auto" />
            <div className="mobile-arrow d-flex d-md-none">
              <svg
                width="22"
                height="13"
                viewBox="0 0 22 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0161 0.999918L10.605 11.4612L1 1.17773"
                  stroke="#7AF0D1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <PopularBrands
            PopularBrandDesltopSlash={PopularBrandDesltopSlash}
            PopularBrandMobileSlash={PopularBrandMobileSlash}
          />
        </div>

        <div className="most-recent-tablet-bg">
          <div className="most-recent-item-container">
            <div className="most-recent-item-presentation">




              {/* <p>//////////</p> */}
              <div className="slider-arrow">
                <div
                  className="slide-ok"
                  onClick={() => this.slide(".recent-reel", "left")}
                >
                  <img
                    src={SliderLeftArrow}
                    className="d-lg-none d-md-block "
                    draggable="false"
                  />
                  <img
                    src={SliderLeftArrowMavi}
                    className="d-lg-block d-none"
                    alt=""
                    draggable="false"
                  />
                </div>
                <div
                  className="slide-ok"
                  onClick={() => this.slide(".recent-reel", "right")}
                >
                  <img
                    src={SliderRightArrow}
                    className="d-lg-none d-md-block "
                    draggable="false"
                  />
                  <img
                    src={SliderRightArrowMavi}
                    className="d-lg-block d-none"
                    alt=""
                    draggable="false"
                  />
                </div>{" "}
              </div>
            </div>
            <div className="home-card-reel recent-reel">
              <HomeItemCard
                img={Recent1}
                ItemName="Air Jordan 1 Mid"
                ItemPrice="145 €"
              />
              <HomeItemCard
                img={Recent2}
                ItemName="Air Jordan XXXV “Paris”"
                ItemPrice="250 €"
              />
              <HomeItemCard
                img={Recent2}
                ItemName="Air Jordan XXXV “Paris”"
                ItemPrice="250 €"
              />
              <HomeItemCard
                img={Recent2}
                ItemName="Air Jordan XXXV “Paris”"
                ItemPrice="250 €"
              />
              <HomeItemCard
                img={Recent2}
                ItemName="Air Jordan XXXV “Paris”"
                ItemPrice="250 €"
              />
              <HomeItemCard
                img={Recent2}
                ItemName="Air Jordan XXXV “Paris”"
                ItemPrice="250 €"
              />
              <HomeItemCard
                img={Recent2}
                ItemName="Air Jordan XXXV “Paris”"
                ItemPrice="250 €"
              />
              <HomeItemCard
                img={Recent2}
                ItemName="Air Jordan XXXV “Paris”"
                ItemPrice="250 €"
              />
              <HomeItemCard
                img={Recent2}
                ItemName="Air Jordan XXXV “Paris”"
                ItemPrice="250 €"
              />
              <HomeItemCard
                img={Recent1}
                ItemName="Air Jordan 1 Mid"
                ItemPrice="145 €"
              />
              <HomeItemCard
                img={Recent2}
                ItemName="Air Jordan XXXV “Paris”"
                ItemPrice="250 €"
              />
              <HomeItemCard
                img={Recent2}
                ItemName="Air Jordan XXXV “Paris”"
                ItemPrice="250 €"
              />
              <HomeItemCard
                img={Recent2}
                ItemName="Air Jordan XXXV “Paris”"
                ItemPrice="250 €"
              />
              <HomeItemCard
                img={Recent2}
                ItemName="Air Jordan XXXV “Paris”"
                ItemPrice="250 €"
              />
              <HomeItemCard
                img={Recent2}
                ItemName="Air Jordan XXXV “Paris”"
                ItemPrice="250 €"
              />
              <HomeItemCard
                img={Recent2}
                ItemName="Air Jordan XXXV “Paris”"
                ItemPrice="250 €"
              />
              <HomeItemCard
                img={Recent2}
                ItemName="Air Jordan XXXV “Paris”"
                ItemPrice="250 €"
              />
              <HomeItemCard
                img={Recent2}
                ItemName="Air Jordan XXXV “Paris”"
                ItemPrice="250 €"
              />
            </div>
          </div>

          <div className="brand-item-container">
            <div className="brand-presentation">
              <h1>
                Air Jordan 1
                {
                  window.innerWidth < 769 ? 
                  <img
                  src={TabletSlash}
                  alt=""
                  className="tablet-slash"
                /> : <>
               
                <img
                  src={MostRecentDeskopSlash}
                  alt=""
                  className="desktop-slash"
                />
                <img
                  src={MostRecentMobileSlash}
                  alt=""
                  className="mobile-slash"
                />
</>
}
              </h1>

              <div className="slider-arrow">
                <div
                  className="slide-ok"
                  onClick={() => this.slide(".jordan-reel", "left")}
                >
                  <img
                    src={SliderLeftArrow}
                    className="d-lg-none d-md-block "
                    draggable="false"
                  />
                  <img
                    src={SliderLeftArrowMavi}
                    className="d-lg-block d-none"
                    alt=""
                    draggable="false"
                  />
                </div>
                <div
                  className="slide-ok"
                  onClick={() => this.slide(".jordan-reel", "right")}
                >
                  <img
                    src={SliderRightArrow}
                    className="d-lg-none d-md-block "
                    draggable="false"
                  />
                  <img
                    src={SliderRightArrowMavi}
                    className="d-lg-block d-none"
                    alt=""
                    draggable="false"
                  />
                </div>
              </div>
            </div>
            <div className="home-card-reel jordan-reel">
              <HomeItemCard
                img={AirJordan1}
                ItemName="Air Jordan 1 Mid"
                ItemPrice="145 €"
              />
              <HomeItemCard
                img={AirJordan2}
                ItemName="Air Jordan XXXV “Paris”"
                ItemPrice="250 €"
              />
              <HomeItemCard
                img={AirJordan3}
                ItemName="Yeezy QNTM"
                ItemPrice="300 €"
              />
              <HomeItemCard
                img={AirJordan4}
                ItemName="Air Jordan 1 Zoom"
                ItemPrice="180 €"
              />
              <HomeItemCard
                img={AirJordan1}
                ItemName="Air Jordan 1 Mid"
                ItemPrice="145 €"
              />
              <HomeItemCard
                img={AirJordan2}
                ItemName="Air Jordan XXXV “Paris”"
                ItemPrice="250 €"
              />
              <HomeItemCard
                img={AirJordan3}
                ItemName="Yeezy QNTM"
                ItemPrice="300 €"
              />
              <HomeItemCard
                img={AirJordan4}
                ItemName="Air Jordan 1 Zoom"
                ItemPrice="180 €"
              />
            </div>
          </div>
        </div>
        
        <div className="atom-bg">
          asdasdasddsad
        </div>

        <div className="home">
        <Services ServiceDesktopSlash={ServiceDesktopSlash} />
        </div>
     
        <div className="s-t-b">
        <div className="sneaker-news-container">
            <div className="brand-presentation">
              <h1>
                Sneaker news
                {
                  window.innerWidth < 769 ? 
                  <img
                  src={TabletSlash}
                  alt=""
                  className="tablet-slash"
                /> : <>
               
                <img
                  src={MostRecentDeskopSlash}
                  alt=""
                  className="desktop-slash"
                />
                <img
                  src={MostRecentMobileSlash}
                  alt=""
                  className="mobile-slash"
                />
</>
}
              </h1>

              <div className="slider-arrow">
                <div
                  className="slide-ok"
                  onClick={() => this.slide(".jordan-reel-2", "left")}
                >
                  <img
                    src={SliderLeftArrow}
                    className="d-lg-none d-md-block "
                    draggable="false"
                  />
                  <img
                    src={SliderLeftArrowMavi}
                    className="d-lg-block d-none"
                    alt=""
                    draggable="false"
                  />
                </div>
                <div
                  className="slide-ok"
                  onClick={() => this.slide(".jordan-reel-2", "right")}
                >
                  <img
                    src={SliderRightArrow}
                    className="d-lg-none d-md-block "
                    draggable="false"
                  />
                  <img
                    src={SliderRightArrowMavi}
                    className="d-lg-block d-none"
                    alt=""
                    draggable="false"
                  />
                </div>{" "}
              </div>
            </div>
            <div className="home-card-reel jordan-reel-2">
              <HomeItemCard
                img={Sneakers1}
                ItemName="Top 10 tall sneakers Nike 2021"
                ItemPrice="March 3, 2021                "
              />

              <HomeItemCard
                img={Sneakers2}
                ItemName="Top 10 tall sneakers Nike 2021"
                ItemPrice="March 3, 2021                "
              />

              <HomeItemCard
                img={Sneakers3}
                ItemName="Top 10 tall sneakers Nike 2021"
                ItemPrice="March 3, 2021                "
              />

              <HomeItemCard
                img={Sneakers4}
                ItemName="Top 10 tall sneakers Nike 2021"
                ItemPrice="March 3, 2021                "
              />

<HomeItemCard
                img={Sneakers1}
                ItemName="Top 10 tall sneakers Nike 2021"
                ItemPrice="March 3, 2021                "
              />

              <HomeItemCard
                img={Sneakers2}
                ItemName="Top 10 tall sneakers Nike 2021"
                ItemPrice="March 3, 2021                "
              />

              <HomeItemCard
                img={Sneakers3}
                ItemName="Top 10 tall sneakers Nike 2021"
                ItemPrice="March 3, 2021                "
              />

              <HomeItemCard
                img={Sneakers4}
                ItemName="Top 10 tall sneakers Nike 2021"
                ItemPrice="March 3, 2021                "
              />

<HomeItemCard
                img={Sneakers1}
                ItemName="Top 10 tall sneakers Nike 2021"
                ItemPrice="March 3, 2021                "
              />

              <HomeItemCard
                img={Sneakers2}
                ItemName="Top 10 tall sneakers Nike 2021"
                ItemPrice="March 3, 2021                "
              />

              <HomeItemCard
                img={Sneakers3}
                ItemName="Top 10 tall sneakers Nike 2021"
                ItemPrice="March 3, 2021                "
              />

              <HomeItemCard
                img={Sneakers4}
                ItemName="Top 10 tall sneakers Nike 2021"
                ItemPrice="March 3, 2021                "
              />
    
            </div>
          </div>
        </div>

        <div className="home">
        
         



          {/* footer */}
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
