import React from "react";
import HomeItemCard from "../components/home/HomeItemCard";
import Recent1 from "../../assets/img/recent-1.png";
import Recent2 from "../../assets/img/recent-2.png";
import Recent3 from "../../assets/img/recent-3.png";
import Recent4 from "../../assets/img/recent-4.png";
import SliderLeftArrow from "../../assets/svg/slide-left-arrow.svg";
import SliderRightArrow from "../../assets/svg/slide-right-arrow.svg";
import ProductLarge from "../../assets/img/product-large.png";
import ProductSmall1 from "../../assets/img/product-small-1.png";
import ProductSmall2 from "../../assets/img/product-small-2.png";
import ProductSmall3 from "../../assets/img/product-small-3.png";
import ProductSmall4 from "../../assets/img/product-small-4.png";
import PriceInfoContainer from "../../assets/img/product-info.png";
import PriceInfoContainerBorder from "../../assets/img/product-info-border.png";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import "../../assets/css/Emir.css";
import "../../assets/css/product.css";
// import { Doughnut, Pie } from "react-chartjs-2";
import { CustomSelect } from "../../assets/js/Events/CustomSelect";
import { Line as LineChart } from "react-chartjs-2";
import Login from "../components/Auth/Login";
import Search from "../../shared/Search";
import Sidebar from "../../shared/Sidebar";
import SignIn from "../components/Auth/SignIn";
import { HandleSigninPopUp } from "../../assets/js/Events/PopUp";
import { render } from "@testing-library/react";
import { withRouter } from "react-router";
import axios from "axios";

class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      urun: null,
      model: null,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{}],
          yAxes: [{}],
        },
      },

      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "#51d7bf",
            borderWidth: 1,
            borderJoinStyle: "miter",
            borderCapStyle: "butt",
            pointBackgroundColor: "#51d7bf",
            pointBorderColor: "#51d7bf",
            pointBorderWidth: 2,
            pointRadius: 7,
            pointHoverRadius: 10,
            borderWidth: 2,
            data: [150, 200, 150, 300, 350, 400, 450],
          },
        ],
      },
    };
  }

  componentDidMount() {
    HandleSigninPopUp();
    const url = "http://127.0.0.1:8000";
    const j = "/?format=json";
    console.log("yolllaa");
    const id = this.props.match.params.id;

    fetch(url + "/products/shoes/" + id + j)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ urun: data });
      })
      .then(() => {
        axios.get(url + "/products/brands" + j).then((res) => {
          this.setState({ model: res.data[this.state.urun[0].brand - 1].name });
        });
      });
  }

  render() {
    return (
      <div className="Product">
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

        <div className="selection-area">
          <p className="location">
            {this.state.model === null ? (
              <>Loading...</>
            ) : (
              "Home / " + this.state.model + " / " + this.state.urun[0].name
            )}
          </p>
          <div className="product-name">
            <h1>
              {this.state.urun === null ? (
                <>loading...</>
              ) : (
                this.state.urun[0].name
              )}
            </h1>
            <p>//////</p>
          </div>
          <div className="product-information-wrapper">
            <div className="pure-product">
              {this.state.urun === null ? (
                <></>
              ) : (
                <img
                  src={this.state.urun[0].image
                    .replace("/media/", "")
                    .replace("https%3A/", "https://")}
                  alt=""
                  id="buyuk-resim"
                />
              )}
              <div className="product-reel">
                <img
                  src={ProductSmall1}
                  alt=""
                  onClick={(e) => {
                    document
                      .querySelector("#buyuk-resim")
                      .setAttribute("src", e.currentTarget.src);
                  }}
                />
                <img
                  src={ProductSmall2}
                  alt=""
                  onClick={(e) => {
                    document
                      .querySelector("#buyuk-resim")
                      .setAttribute("src", e.currentTarget.src);
                  }}
                />
                <img
                  src={ProductSmall3}
                  onClick={(e) => {
                    document
                      .querySelector("#buyuk-resim")
                      .setAttribute("src", e.currentTarget.src);
                  }}
                />
                <img
                  src={ProductSmall4}
                  alt=""
                  onClick={(e) => {
                    document
                      .querySelector("#buyuk-resim")
                      .setAttribute("src", e.currentTarget.src);
                  }}
                />
              </div>
            </div>
            <form className="product-available">
              <h2>SELECT SIZE</h2>
              <div className="size-buttons">
                <div className="size">
                  <input type="radio" name="size" id="size1" />
                  <label htmlFor="size1">US 3.5 (EU 35.5)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size2" disabled />
                  <label htmlFor="size2">US 4 (EU 36)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size3" disabled />
                  <label htmlFor="size3">US 4.5 (EU 36.5)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size4" />
                  <label htmlFor="size4">US 5 (EU 37)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size5" disabled />
                  <label htmlFor="size5">US 5 (EU 37.5)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size6" disabled />
                  <label htmlFor="size6">US 6 (EU 38)</label>
                </div>

                <div className="size">
                  <input type="radio" name="size" id="size7" />
                  <label htmlFor="size7">US 7 (EU 38.5)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size8" disabled />
                  <label htmlFor="size8">US 4 (EU 39)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size9" />
                  <label htmlFor="size9">US 4 (EU 40)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size10" />
                  <label htmlFor="size10">US 4 (EU 40.5)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size11" disabled />
                  <label htmlFor="size11">US 4 (EU 41)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size12" disabled />
                  <label htmlFor="size12">US 4 (EU 42)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size13" disabled />
                  <label htmlFor="size13">US 4 (EU 42.5)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size14" disabled />
                  <label htmlFor="size14">US 4 (EU 43)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size15" disabled />
                  <label htmlFor="size15">US 4 (EU 44)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size16" disabled />
                  <label htmlFor="size16">US 4 (EU 44.5)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size17" disabled />
                  <label htmlFor="size17">US 4 (EU 45)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size18" disabled />
                  <label htmlFor="size18">US 4 (EU 45.5)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size19" disabled />
                  <label htmlFor="size19">US 4 (EU 46)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size20" disabled />
                  <label htmlFor="size20">US 4 (EU 46.5)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size21" disabled />
                  <label htmlFor="size21">US 4 (EU 47)</label>
                </div>

                <div className="size">
                  <input type="radio" name="size" id="size22" disabled />
                  <label htmlFor="size22">US 4 (EU 48)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size23" disabled />
                  <label htmlFor="size23">US 4 (EU 49)</label>
                </div>
                <div className="size">
                  <input type="radio" name="size" id="size24" disabled />
                  <label htmlFor="size24">US 4 (EU 50)</label>
                </div>
              </div>

              <div className="buy-now-button-wrapper">
                <p>250 €</p>
                <button>buy</button>
              </div>
            </form>
          </div>
        </div>

        <div className="price-changes-container">
          <div className="price-changes-main-heading">
            <h1>pRICE CHANGES</h1>
            <p>//////////</p>
          </div>

          <div className="price-changes-content">
            <div className="chart-area">
              <div className="custom-select-wrapper">
                <div className="custom-select">
                  <div
                    className="select-head"
                    onClick={(e) => CustomSelect(".options")}
                  >
                    <p>Select Size</p>
                    <svg
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0L5 5L10 0L0 0Z" fill="#7AF0D1" />
                    </svg>
                  </div>

                  <div className="options">
                    <div className="option">
                      <input
                        type="radio"
                        name="dropdownSize"
                        id="dropdown-size1"
                      />
                      <label
                        htmlFor="dropdown-size1"
                        onClick={(e) => {
                          document.querySelector(".select-head p").innerText =
                            e.currentTarget.innerText;
                        }}
                      >
                        Demidsad Size
                      </label>
                    </div>

                    <div className="option">
                      <input
                        type="radio"
                        name="dropdownSize"
                        id="dropdown-size2"
                      />
                      <label
                        htmlFor="dropdown-size2"
                        onClick={(e) => {
                          document.querySelector(".select-head p").innerText =
                            e.currentTarget.innerText;
                        }}
                      >
                        Demi Size
                      </label>
                    </div>

                    <div className="option">
                      <input
                        type="radio"
                        name="dropdownSize"
                        id="dropdown-size3"
                      />
                      <label htmlFor="dropdown-size3">Demi Size</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="line-chart-wrapper">
                <LineChart data={this.state.data} option={this.state.options} />
              </div>

              <div className="time-selection-wrapper">
                <div className="time-selection">
                  <input
                    type="radio"
                    name="TimeSelection"
                    id="TimeSelectionCheckbox1"
                  />
                  <label htmlFor="TimeSelectionCheckbox1">1 Week</label>
                </div>
                <div className="time-selection">
                  <input
                    type="radio"
                    name="TimeSelection"
                    id="TimeSelectionCheckbox2"
                  />
                  <label htmlFor="TimeSelectionCheckbox2">1 Month</label>
                </div>
                <div className="time-selection">
                  <input
                    type="radio"
                    name="TimeSelection"
                    id="TimeSelectionCheckbox3"
                  />
                  <label htmlFor="TimeSelectionCheckbox3">3 Month</label>
                </div>
              </div>
            </div>
            <div className="price-info-container">
              <div className="info-button-wrapper">
                <button>Info</button>
                <p>////////////</p>
              </div>
              <div className="price-info-content">
                <div className="price-info-presentation">
                  <p>
                    {" "}
                    The Air Jordan XXXV "Paris" sneaker is a colorful version of
                    a popular model in superior materials, inspired by Paris.
                    Gold and marble tones symbolize the grandeur of the city's
                    architecture, while pastel accents recall the fragrant
                    spring flowers of the city's streets. The inscription Paname
                    on the back and embossed numbers 75 are unique symbols of
                    Paris.
                  </p>
                  <p>
                    <span>Model Color:</span>Pale Ivory/Black/Crimson
                    Tint/Golden Metallic
                  </p>
                  <p>
                    <span>Model:</span>DD3668-100
                  </p>
                </div>

                <img
                  src={PriceInfoContainer}
                  alt=""
                  className="price-info-container-img"
                />
                <img
                  src={PriceInfoContainerBorder}
                  className="price-info-border-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="most-recent-item-container">
          <div className="most-recent-item-presentation">
            <h1>YOU MIGHT LIKE IT</h1>
            <p>//////////</p>
            <div className="slider-arrow">
              <img src={SliderLeftArrow} alt="" />
              <img src={SliderRightArrow} alt="" />
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
              img={Recent3}
              ItemName="Yeezy QNTM"
              ItemPrice="300 €"
            />
            <HomeItemCard
              img={Recent4}
              ItemName="Air Jordan 1 Zoom"
              ItemPrice="180 €"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Product);
