import React from "react";
import Header from "../../shared/Header";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import InputRange from "react-input-range";
import Recent1 from "../../assets/img/recent-1.png";
import CheckButton from "../../assets/svg/check-button.svg";
import Footer from "../../shared/Footer";
import Login from "../components/Auth/Login";
import SignIn from "../components/Auth/SignIn";
import Canvas from "../components/Canvas";
import Sidebar from "../../shared/Sidebar";
import Search from "../../shared/Search";
import axios from "axios";
import ESpinner from "../../Spinner/Spinner";
import "../../assets/css/header.css";

class Store extends React.Component {
  constructor() {
    super();
    this.drop = this.drop.bind(this);
    this.ara = this.ara.bind(this);
    this.state = {
      filtreModels: [],
      filtreHtml: [],

      sliderValue: {
        min: 0,
        max: 15000,
      },
      isFilterOpen: true,
      tabletSorterDropdown: false,
      isTabletFilterOpen: false,
      urunler: null,
      searchString: "",
      anim1: "",
      yanMenu: null,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    axios
      .get(
        `/products/get-products?format=json&min=${
          this.state.sliderValue.min
        }&max=${this.state.sliderValue.max}${
          this.state.filtreModels == ""
            ? ""
            : `&model=${this.state.filtreModels}`
        }`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ urunler: res.data });
      })
      .then(() => {
        axios.get(`/products/brands-model?format=json`).then((res) => {
          this.setState({ yanMenu: res.data });
        });
      });

    if (new URLSearchParams(window.location.search).get("filter") == "no") {
      this.setState({ isFilterOpen: false });
    }

    /*for (
      var i = 0;
      i < document.querySelectorAll(".filter-dropdown__icerik .icerik").length;
      i++
    ) {
      document
        .querySelectorAll(".filter-dropdown__icerik .icerik")
        [i].addEventListener("click", (e) => {
          if (e.target.querySelector("div").classList[0] == "tick") {
            e.target.querySelector("div").classList.remove("tick");
          } else {
            e.target.querySelector("div").classList.add("tick");
          }
        });
    }*/
  }

  ara() {
    window.scrollTo(0, 0);
    this.setState({ urunler: null });
    axios
      .get(
        `/products/get-products?format=json&min=${
          this.state.sliderValue.min
        }&max=${this.state.sliderValue.max}${
          this.state.filtreModels == ""
            ? ""
            : `&model=${this.state.filtreModels}`
        }`
      )
      .then((res) => {
        this.setState({ urunler: res.data });
      });
  }

  componentDidUpdate() {}

  drop(e, item) {
    if (document.getElementById(item).style.maxHeight == "300px") {
      for (
        var i = 0;
        i < document.getElementsByClassName("filter-dropdown__icerik").length;
        i++
      ) {
        document.getElementsByClassName("filter-dropdown__icerik")[
          i
        ].style.maxHeight = "0px";
      }
      document.getElementById(item).style.maxHeight = "0px";
      e.currentTarget.innerText = "+";
      e.currentTarget.style.backgroundColor = "#F1F1F1";
      e.currentTarget.style.color = "rgba(189, 189, 189, 1)";
      e.currentTarget.style.boxShadow = "none";
    } else {
      for (
        var i = 0;
        i < document.getElementsByClassName("filter-dropdown__icerik").length;
        i++
      ) {
        document.getElementsByClassName("filter-dropdown__icerik")[
          i
        ].style.maxHeight = "0px";
      }

      document.getElementById(item).style.maxHeight = "300px";

      for (
        var i = 0;
        i < document.querySelectorAll(".filter-dropdown__top .button").length;
        i++
      ) {
        document.querySelectorAll(".filter-dropdown__top .button")[
          i
        ].style.color = "rgba(189, 189, 189, 1)";
        document.querySelectorAll(".filter-dropdown__top .button")[
          i
        ].style.backgroundColor = "#F1F1F1";
        document.querySelectorAll(".filter-dropdown__top .button")[
          i
        ].style.boxShadow = "none";
        document.querySelectorAll(".filter-dropdown__top .button")[
          i
        ].innerText = "+";
      }

      e.currentTarget.innerText = "-";
      e.currentTarget.style.backgroundColor = "rgba(122, 240, 209, 1)";
      e.currentTarget.style.color = "white";
      e.currentTarget.style.boxShadow = "0px 2px 4px 0px rgba(0, 0, 0, 0.1)";
    }
  }
  render() {
    const urlParams = new URLSearchParams(window.location.search);
    const model = urlParams.get("model");
    const size = urlParams.get("size");
    const min = urlParams.get("min");
    const max = urlParams.get("max");
    const filter = urlParams.get("filter");

    return (
      <div className="store container-fluid">
        <div className="home-sign-in-wrapper">
          <SignIn />
        </div>
        <div className="home-login-wrapper">
          <Login />
        </div>

        <div className="home-search-wrapper">
          <Search />
        </div>

        {/** TELEFONN */}
        <div
          className={
            this.state.isTabletFilterOpen
              ? "filter-container filter-container-tablet"
              : "d-none"
          }
        >
          <div
            onClick={() => {
              this.setState({ isTabletFilterOpen: false });
              document.body.classList.remove("kes-lan");
            }}
            className="kapatma"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L20.5 21M1 21L20.5 1.5"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </div>
          <div className="filter-title">Filter</div>
          <div className="kafam-sisti">
            {this.state.yanMenu == null ? (
              <div className="e-spinner">
                <ESpinner color="#7af0d1" width={8} size={50} />
              </div>
            ) : (
              this.state.yanMenu.map((val) => {
                return (
                  <div className="filter-dropdown" key={val.id}>
                    <div className="filter-dropdown__top">
                      <h5 className="title">{val.name}</h5>
                      <div
                        className="button"
                        onClick={(e) => {
                          this.drop(e, `xi-${val.id}`);
                        }}
                      >
                        +
                      </div>
                    </div>

                    <div
                      className="filter-dropdown__icerik"
                      id={"xi-" + val.id}
                    >
                      {val.models.map((v) => {
                        return (
                          <div
                            className="icerik"
                            key={v.id}
                            data-filtre={v.name}
                            onClick={(e) => {
                              if (
                                e.target.querySelector("div").classList[0] ==
                                "tick"
                              ) {
                                e.target
                                  .querySelector("div")
                                  .classList.remove("tick");
                                var array = [...this.state.filtreModels]; // make a separate copy of the array
                                var index = array.indexOf(
                                  e.currentTarget.getAttribute("data-filtre")
                                );
                                if (index !== -1) {
                                  array.splice(index, 1);
                                  this.setState({ filtreModels: array });
                                }
                              } else {
                                this.setState({
                                  filtreModels: [
                                    ...this.state.filtreModels,
                                    e.currentTarget.getAttribute("data-filtre"),
                                  ],
                                });
                                e.target
                                  .querySelector("div")
                                  .classList.add("tick");
                              }
                            }}
                          >
                            <h5>
                              {v.name} <div></div>
                            </h5>
                          </div>
                        );
                      })}

                      <div className="bottomx"></div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div>
            <div className="see-results-mobile d-sm-none">
              <button
                className="see-result-button"
                onClick={(e) => {
                  this.ara();
                  this.setState({ isTabletFilterOpen: false });
                }}
              >
                See Results
              </button>
              <div class="results-cizgi" o></div>
            </div>

            <div className="size-container">
              <h5>Size</h5>
              <select name="cars" id="cars">
                <option value="all">All</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
              </select>
            </div>

            <div className="filter-price-container">
              <h5 className="mb-5">Filter by price</h5>
              <InputRange
                maxValue={15000}
                minValue={0}
                value={this.state.sliderValue}
                onChange={(value) => {
                  this.setState({ sliderValue: value });
                }}
                onChangeStart={() => {
                  document.querySelectorAll(
                    ".input-range__label-container"
                  )[2].style.opacity = "1";
                  document.querySelectorAll(
                    ".input-range__label-container"
                  )[1].style.opacity = "1";
                }}
                onChangeComplete={() => {
                  document.querySelectorAll(
                    ".input-range__label-container"
                  )[2].style.opacity = "0";
                  document.querySelectorAll(
                    ".input-range__label-container"
                  )[1].style.opacity = "0";
                }}
              />

              <div className="price-filter-flex">
                <div className="price-filter-flex__min-max">
                  <input
                    type="number"
                    value={this.state.sliderValue.min}
                    min={this.state.sliderValue.min}
                    max={this.state.sliderValue.max}
                    onChange={(e) => {
                      this.setState((prev) => ({
                        sliderValue: {
                          ...prev.sliderValue,
                          min: e.target.value,
                        },
                      }));
                    }}
                  />
                  <div className="tl">₺</div>
                </div>

                <div className="price-filter-flex__min-max">
                  <input
                    type="number"
                    value={this.state.sliderValue.max}
                    min={this.state.sliderValue.min}
                    max={this.state.sliderValue.max}
                    onChange={(e) => {
                      this.setState((prev) => ({
                        sliderValue: {
                          ...prev.sliderValue,
                          max: e.target.value,
                        },
                      }));
                    }}
                  />
                  <div className="tl">₺</div>
                </div>
              </div>
            </div>
          </div>

          <div className="results-bottom">
            <button
              onClick={() => {
                this.ara();
                this.setState({ isTabletFilterOpen: false });
              }}
              className="see-result-button"
            >
              See Results
            </button>
            <div className="results-cizgi"></div>
          </div>
        </div>

        <div
          className="store-container p-2 text-dark"
          style={{ overflow: "none" }}
        >
          <div className="store-container__top d-none d-xl-block">
            <div className="bread">
              <Link to="/" className="bread__item">
                Home
              </Link>
              <div className="bread__ok"></div>
              <Link to="/store" className="bread__item">
                Marketplace Products
              </Link>
            </div>
          </div>

          <div className="row">
            <div
              className={
                this.state.isFilterOpen ? "col-3 d-none d-xl-block" : "d-none  "
              }
            >
              {/** PC */}
              <div className="calis-lan-artik">
                <div className="filter-container ">
                  <div className="filter-container__search">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.3257 12.8992L19.7057 18.2792C19.8948 18.4685 20.001 18.7251 20.0009 18.9926C20.0008 19.2601 19.8945 19.5166 19.7052 19.7057C19.516 19.8948 19.2594 20.001 18.9919 20.0009C18.7244 20.0008 18.4678 19.8945 18.2787 19.7052L12.8987 14.3252C11.2905 15.5709 9.26802 16.1571 7.24287 15.9646C5.21772 15.7721 3.34198 14.8153 1.99723 13.2888C0.652477 11.7624 -0.0602651 9.78105 0.00399633 7.74778C0.0682577 5.71451 0.904695 3.78209 2.34315 2.34364C3.7816 0.905183 5.71402 0.068746 7.74729 0.00448461C9.78056 -0.0597768 11.7619 0.652965 13.2884 1.99771C14.8148 3.34246 15.7716 5.21821 15.9641 7.24336C16.1566 9.26851 15.5704 11.2909 14.3247 12.8992H14.3257ZM8.00074 14.0002C9.59204 14.0002 11.1182 13.3681 12.2434 12.2429C13.3686 11.1177 14.0007 9.59153 14.0007 8.00023C14.0007 6.40893 13.3686 4.88281 12.2434 3.75759C11.1182 2.63237 9.59204 2.00023 8.00074 2.00023C6.40944 2.00023 4.88332 2.63237 3.7581 3.75759C2.63289 4.88281 2.00074 6.40893 2.00074 8.00023C2.00074 9.59153 2.63289 11.1177 3.7581 12.2429C4.88332 13.3681 6.40944 14.0002 8.00074 14.0002Z"
                        fill="#737373"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search"
                      value={this.state.searchString}
                      onChange={(e) => {
                        this.setState({ urunler: null });
                        this.setState({ searchString: e.target.value });
                        axios
                          .get("/products/search/?search=" + e.target.value)
                          .then((res) => {
                            this.setState({ urunler: res.data });
                          });
                      }}
                    />
                  </div>

                  {this.state.yanMenu == null ? (
                    <div className="e-spinner">
                      <ESpinner color="#7af0d1" width={8} size={50} />
                    </div>
                  ) : (
                    this.state.yanMenu.map((val) => {
                      return (
                        <div className="filter-dropdown" key={val.id}>
                          <div className="filter-dropdown__top">
                            <h5 className="title">{val.name}</h5>
                            <div
                              className="button"
                              onClick={(e) => {
                                this.drop(e, `i-${val.id}`);
                              }}
                            >
                              +
                            </div>
                          </div>

                          <div
                            className="filter-dropdown__icerik"
                            id={"i-" + val.id}
                          >
                            {val.models.map((v) => {
                              return (
                                <div
                                  className="icerik"
                                  key={v.id}
                                  data-filtre={v.name}
                                  onClick={(e) => {
                                    if (
                                      e.target.querySelector("div")
                                        .classList[0] == "tick"
                                    ) {
                                      e.target
                                        .querySelector("div")
                                        .classList.remove("tick");
                                      var array = [...this.state.filtreModels]; // make a separate copy of the array
                                      var index = array.indexOf(
                                        e.currentTarget.getAttribute(
                                          "data-filtre"
                                        )
                                      );
                                      if (index !== -1) {
                                        array.splice(index, 1);
                                        this.setState({ filtreModels: array });
                                      }
                                    } else {
                                      this.setState({
                                        filtreModels: [
                                          ...this.state.filtreModels,
                                          e.currentTarget.getAttribute(
                                            "data-filtre"
                                          ),
                                        ],
                                      });
                                      e.target
                                        .querySelector("div")
                                        .classList.add("tick");
                                    }
                                  }}
                                >
                                  <h5>
                                    {v.name} <div></div>
                                  </h5>
                                </div>
                              );
                            })}

                            <div className="bottomx"></div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
                    
                <div className="size-container">
                  <h5>Size</h5>
                  <select name="cars" id="cars">
                    <option value="all">All</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                  </select>
                </div>

                <div className="filter-price-container">
                  <h5 className="mb-5">Filter by price</h5>
                      
                  <InputRange
                    maxValue={15000}
                    minValue={0}
                    value={this.state.sliderValue}
                    onChange={(value) => {
                      this.setState({ sliderValue: value });
                    }}
                    onChangeStart={() => {
                      document.querySelectorAll(
                        ".input-range__label-container"
                      )[6].style.opacity = "1";
                      document.querySelectorAll(
                        ".input-range__label-container"
                      )[5].style.opacity = "1";
                    }}
                    onChangeComplete={() => {
                      document.querySelectorAll(
                        ".input-range__label-container"
                      )[6].style.opacity = "0";
                      document.querySelectorAll(
                        ".input-range__label-container"
                      )[5].style.opacity = "0";
                    }}
                  />

                  <div className="price-filter-flex">
                    <div className="price-filter-flex__min-max">
                      <input
                        type="number"
                        value={this.state.sliderValue.min}
                        min={this.state.sliderValue.min}
                        max={this.state.sliderValue.max}
                        onChange={(e) => {
                          this.setState((prev) => ({
                            sliderValue: {
                              ...prev.sliderValue,
                              min: e.target.value,
                            },
                          }));
                        }}
                      />
                      <div className="tl">₺</div>
                    </div>

                    <div className="price-filter-flex__min-max">
                      <input
                        type="number"
                        value={this.state.sliderValue.max}
                        min={this.state.sliderValue.min}
                        max={this.state.sliderValue.max}
                        onChange={(e) => {
                          this.setState((prev) => ({
                            sliderValue: {
                              ...prev.sliderValue,
                              max: e.target.value,
                            },
                          }));
                        }}
                      />
                      <div className="tl">₺</div>
                    </div>
                  </div>
                </div>
                <div
                  className="filter-search-button"
                  onClick={() => {
                    this.ara();
                  }}
                >
                  ARA
                </div>
              </div>
            </div>

            <div
              className={
                this.state.isFilterOpen
                  ? "col-xl-9 col-12 calis-artik padding-right-3rem"
                  : "col-12 filter-close calis-artik "
              }
            >
              <div className="store-products">
                <div className="store-products__top d-none d-xl-flex">
                  <div className="filtered">
                    {this.state.filtreModels.length == 0
                      ? ""
                      : this.state.filtreModels.map((val, index) => {
                          return (
                            <div className="filtered-item" key={index}>
                              {val}
                              <div
                                className="close"
                                data-filtre2={val}
                                onClick={(e) => {
                                  document
                                    .querySelectorAll(
                                      `.icerik[data-filtre="${e.currentTarget.getAttribute(
                                        "data-filtre2"
                                      )}"]`
                                    )[0]
                                    .click();
                                  document
                                    .querySelectorAll(
                                      `.icerik[data-filtre="${e.currentTarget.getAttribute(
                                        "data-filtre2"
                                      )}"]`
                                    )[1]
                                    .click();
                                }}
                              ></div>
                            </div>
                          );
                        })}
                  </div>

                  <div className="sorters ms-auto">
                    <div className="sort-by">Sort by :</div>
                    <select>
                      <option value="">Popularity</option>
                      <option value="">Popularity</option>
                      <option value="">Popularity</option>
                    </select>

                    <div
                      onClick={() => {
                        this.setState({
                          isFilterOpen: !this.state.isFilterOpen,
                        });
                      }}
                      className="ayar-box"
                    >
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.5 6.63158C9.08551 6.63158 10.4248 5.63281 10.8551 4.26316L20 4.26316L20 2.36842L10.8551 2.36842C10.4248 0.998768 9.08551 -2.78505e-07 7.5 -2.29903e-07C5.567 -1.7065e-07 4 1.48453 4 3.31579C4 5.14705 5.567 6.63158 7.5 6.63158ZM9 3.31579C9 4.10061 8.32843 4.73684 7.5 4.73684C6.67157 4.73684 6 4.10061 6 3.31579C6 2.53096 6.67157 1.89474 7.5 1.89474C8.32843 1.89474 9 2.53096 9 3.31579Z"
                          fill={this.state.isFilterOpen ? "#adadad" : "#252B42"}
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.5 12.3158C16.0855 12.3158 17.4248 11.317 17.8551 9.94737L20 9.94737L20 8.05263L17.8551 8.05263C17.4248 6.68298 16.0855 5.68421 14.5 5.68421C12.567 5.68421 11 7.16874 11 9C11 10.8313 12.567 12.3158 14.5 12.3158ZM14.5 10.4211C15.3284 10.4211 16 9.78483 16 9C16 8.21517 15.3284 7.57895 14.5 7.57895C13.6716 7.57895 13 8.21517 13 9C13 9.78483 13.6716 10.4211 14.5 10.4211Z"
                          fill={this.state.isFilterOpen ? "#adadad" : "#252B42"}
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.5 18C7.433 18 9 16.5155 9 14.6842C9 12.8529 7.433 11.3684 5.5 11.3684C3.91449 11.3684 2.57521 12.3672 2.14494 13.7368L-4.21087e-07 13.7368L-4.79168e-07 15.6316L2.14494 15.6316C2.57521 17.0012 3.91449 18 5.5 18ZM5.5 16.1053C6.32843 16.1053 7 15.469 7 14.6842C7 13.8994 6.32843 13.2632 5.5 13.2632C4.67157 13.2632 4 13.8994 4 14.6842C4 15.469 4.67157 16.1053 5.5 16.1053Z"
                          fill={this.state.isFilterOpen ? "#adadad" : "#252B42"}
                        />
                        <path
                          d="M10 13.7368L20 13.7368L20 15.6316L10 15.6316L10 13.7368Z"
                          fill={this.state.isFilterOpen ? "#adadad" : "#252B42"}
                        />
                        <path
                          d="M10 8.05263L-2.46844e-07 8.05263L-3.04925e-07 9.94737L10 9.94737L10 8.05263Z"
                          fill={this.state.isFilterOpen ? "#adadad" : "#252B42"}
                        />
                        <path
                          d="M3 2.36842L-7.26011e-08 2.36842L-1.30682e-07 4.26316L3 4.26316L3 2.36842Z"
                          fill={this.state.isFilterOpen ? "#adadad" : "#252B42"}
                        />
                      </svg>
                    </div>
                    <div className="ayar-box">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="9"
                          height="9"
                          rx="2"
                          stroke="#252B42"
                          stroke-width="2"
                        />
                        <rect
                          x="14"
                          y="1"
                          width="9"
                          height="9"
                          rx="2"
                          stroke="#252B42"
                          stroke-width="2"
                        />
                        <rect
                          x="1"
                          y="14"
                          width="9"
                          height="9"
                          rx="2"
                          stroke="#252B42"
                          stroke-width="2"
                        />
                        <rect
                          x="14"
                          y="14"
                          width="9"
                          height="9"
                          rx="2"
                          stroke="#252B42"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="row" id="kucu">
                  <div className="tablet-top d-md-flex d-xl-none">
                    <div className="tablet-search">
                      <input
                        type="text"
                        placeholder="Search Sneakers"
                        value={this.state.searchString}
                        onChange={(e) => {
                          this.setState({ urunler: null });
                          this.setState({ searchString: e.target.value });
                          axios
                            .get("/products/search/?search=" + e.target.value)
                            .then((res) => {
                              console.log(res.data);
                              this.setState({ urunler: res.data });
                            });
                        }}
                      />
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.7114 19.2899L17.0014 15.6099C18.4415 13.8143 19.1389 11.5352 18.9502 9.2412C18.7615 6.94721 17.701 4.81269 15.9869 3.27655C14.2727 1.74041 12.0352 0.919414 9.73429 0.982375C7.43341 1.04534 5.24409 1.98747 3.61651 3.61505C1.98893 5.24263 1.0468 7.43194 0.98384 9.73283C0.920879 12.0337 1.74188 14.2713 3.27801 15.9854C4.81415 17.6996 6.94867 18.76 9.24267 18.9487C11.5367 19.1374 13.8158 18.44 15.6114 16.9999L19.2914 20.6799C19.3843 20.7736 19.4949 20.848 19.6168 20.8988C19.7387 20.9496 19.8694 20.9757 20.0014 20.9757C20.1334 20.9757 20.2641 20.9496 20.3859 20.8988C20.5078 20.848 20.6184 20.7736 20.7114 20.6799C20.8916 20.4934 20.9924 20.2442 20.9924 19.9849C20.9924 19.7256 20.8916 19.4764 20.7114 19.2899ZM10.0014 16.9999C8.6169 16.9999 7.26352 16.5894 6.11238 15.8202C4.96123 15.051 4.06403 13.9578 3.53421 12.6787C3.0044 11.3996 2.86578 9.99214 3.13587 8.63427C3.40597 7.27641 4.07265 6.02912 5.05162 5.05016C6.03059 4.07119 7.27787 3.4045 8.63574 3.13441C9.9936 2.86431 11.4011 3.00293 12.6802 3.53275C13.9592 4.06256 15.0525 4.95977 15.8217 6.11091C16.5908 7.26206 17.0014 8.61544 17.0014 9.9999C17.0014 11.8564 16.2639 13.6369 14.9511 14.9497C13.6384 16.2624 11.8579 16.9999 10.0014 16.9999Z"
                          fill="#7E8389"
                        />
                      </svg>
                    </div>

                    <div className="tablet-ayar d-flex align-items-center ms-auto">
                      <div
                        onClick={() => {
                          this.setState({
                            tabletSorterDropdown:
                              !this.state.tabletSorterDropdown,
                          });
                        }}
                        className="ayar-box"
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.5 11H7.0625"
                            stroke="#7E8389"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17.5625 0.5V21.5L21.5 17.5625"
                            stroke="#7E8389"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M0.5 2.8335H12.3125"
                            stroke="#7E8389"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M0.5 19.1665H4.4375"
                            stroke="#7E8389"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17.5625 21.5L13.625 17.5625"
                            stroke="#7E8389"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <div
                          className={
                            this.state.tabletSorterDropdown
                              ? "tablet-dropdown"
                              : "d-none"
                          }
                        >
                          <div className="tablet-dropdown__item">
                            Popularity
                          </div>
                          <div className="tablet-dropdown__item">
                            Popularity
                          </div>
                          <div className="tablet-dropdown__item">
                            Popularity
                          </div>
                          <div className="tablet-dropdown__item">
                            Popularity
                          </div>
                        </div>
                      </div>

                      <div
                        onClick={() => {
                          this.setState({
                            isTabletFilterOpen: !this.state.isTabletFilterOpen,
                          });
                          document.body.classList.add("kes-lan");
                        }}
                        className="ayar-box"
                      >
                        <svg
                          width="21"
                          height="19"
                          viewBox="0 0 21 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.8953 9.38285V1.03986C10.8953 0.756214 10.6377 0.529297 10.3157 0.529297C9.99375 0.529297 9.73617 0.756214 9.73617 1.03986V9.38285C8.39245 9.62112 7.375 10.6687 7.375 11.9243C7.375 13.1799 8.39245 14.2275 9.73617 14.4658V18.1797C9.73617 18.4633 9.99375 18.6902 10.3157 18.6902C10.6377 18.6902 10.8953 18.4633 10.8953 18.1797V14.4658C12.239 14.2275 13.2565 13.1799 13.2565 11.9243C13.2565 10.6725 12.2433 9.62112 10.8953 9.38285ZM10.3157 13.4938C9.33263 13.4938 8.53412 12.7904 8.53412 11.9243C8.53412 11.0583 9.33263 10.3548 10.3157 10.3548C11.2988 10.3548 12.0973 11.0583 12.0973 11.9243C12.0973 12.7904 11.2988 13.4938 10.3157 13.4938Z"
                            fill="#7E8389"
                          />
                          <path
                            d="M3.80154 5.10168V1.03986C3.80154 0.756214 3.54395 0.529297 3.22198 0.529297C2.9 0.529297 2.64242 0.756214 2.64242 1.03986V5.10168C1.2987 5.33994 0.28125 6.38755 0.28125 7.64315C0.28125 8.89876 1.2987 9.94636 2.64242 10.1846V18.1797C2.64242 18.4633 2.9 18.6902 3.22198 18.6902C3.54395 18.6902 3.80154 18.4633 3.80154 18.1797V10.1808C5.14525 9.94258 6.1627 8.89498 6.1627 7.63937C6.1627 6.38376 5.14525 5.33994 3.80154 5.10168ZM3.22198 9.21267C2.23887 9.21267 1.44037 8.50922 1.44037 7.64315C1.44037 6.77709 2.23887 6.07364 3.22198 6.07364C4.20508 6.07364 5.00358 6.77709 5.00358 7.64315C5.00358 8.50922 4.20079 9.21267 3.22198 9.21267Z"
                            fill="#7E8389"
                          />
                          <path
                            d="M17.95 5.10168V1.03986C17.95 0.756214 17.6924 0.529297 17.3704 0.529297C17.0484 0.529297 16.7909 0.756214 16.7909 1.03986V5.10168C15.4471 5.33994 14.4297 6.38754 14.4297 7.64315C14.4297 8.89876 15.4471 9.94636 16.7909 10.1846V18.1835C16.7909 18.4671 17.0484 18.694 17.3704 18.694C17.6924 18.694 17.95 18.4671 17.95 18.1835V10.1808C19.2937 9.94258 20.3111 8.89498 20.3111 7.63937C20.3111 6.38376 19.298 5.33994 17.95 5.10168ZM17.3704 9.21266C16.3873 9.21266 15.5888 8.50922 15.5888 7.64315C15.5888 6.77709 16.3873 6.07364 17.3704 6.07364C18.3535 6.07364 19.152 6.77709 19.152 7.64315C19.152 8.50922 18.3535 9.21266 17.3704 9.21266Z"
                            fill="#7E8389"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="row d-xl-none ">
                      <div className="filtered">
                        {this.state.filtreModels.length == 0
                          ? ""
                          : this.state.filtreModels.map((val, index) => {
                              return (
                                <div className="filtered-item" key={index}>
                                  {val}
                                  <div
                                    className="close"
                                    data-filtre2={val}
                                    onClick={(e) => {
                                      document
                                        .querySelectorAll(
                                          `.icerik[data-filtre="${e.currentTarget.getAttribute(
                                            "data-filtre2"
                                          )}"]`
                                        )[0]
                                        .click();
                                      document
                                        .querySelectorAll(
                                          `.icerik[data-filtre="${e.currentTarget.getAttribute(
                                            "data-filtre2"
                                          )}"]`
                                        )[1]
                                        .click();
                                    }}
                                  ></div>
                                </div>
                              );
                            })}
                      </div>
                    </div>
                  </div>

                  <div
                    className="store-urunler"
                    style={
                      this.state.urunler == null ||
                      this.state.urunler.length == 0
                        ? {}
                        : { display: "grid" }
                    }
                  >
                    {this.state.urunler == null ? (
                      <div className="e-spinner">
                        <ESpinner color="#7af0d1" width={8} size={100} />
                      </div>
                    ) : this.state.urunler.length == 0 ? (
                      <div className="not-found">
                        <h3 className="text-center">Not Found</h3>
                        <p className="text-center">
                          Please try to search another sneaker
                        </p>
                      </div>
                    ) : (
                      this.state.urunler.map((val) => {
                        return (
                          <div className="store-urun" key={val.id}>
                            <div className="hover-wrapper">
                              <Link to={"/product/" + val.id}>
                                <img
                                  src={CheckButton}
                                  alt="check button"
                                  draggable={false}
                                />
                              </Link>
                            </div>
                            <Link to={"/product/" + val.id}>
                              <img
                                src={"http://127.0.0.1:8000" + val.image}
                                alt={val.product_name}
                              />
                              <div className="store-urun__isim">
                                {val.product_name}
                              </div>
                              <div className="store-urun__fiyat">
                                {val.price} €
                              </div>
                            </Link>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
                {/** pagination d-none d-xl-flex */}
                {/** pagination-tablet d-xl-none */}
                <div
                  className={
                    this.state.urunler == null || this.state.urunler.length == 0
                      ? "d-none"
                      : "row"
                  }
                >
                  <div className="d-none">
                    <Link className="pagination__gray">
                      <svg
                        width="9"
                        height="15"
                        viewBox="0 0 9 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 7.50002C0 7.89782 0.15804 8.27942 0.439336 8.56067L6.43938 14.5607C7.02513 15.1464 7.97493 15.1464 8.56069 14.5607C9.14644 13.9749 9.14644 13.0251 8.56069 12.4394L3.62132 7.50002L8.56069 2.56067C9.14644 1.97488 9.14644 1.02513 8.56069 0.439336C7.97493 -0.146445 7.02513 -0.146445 6.43938 0.439336L0.439336 6.43937C0.15804 6.72062 0 7.10222 0 7.50002Z"
                          fill="#8c8c8c"
                        />
                      </svg>
                      Prev
                    </Link>

                    <Link className="pagination__gray">
                      1
                      <svg
                        width="13"
                        height="8"
                        viewBox="0 0 13 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.36823 7.13297L12.8189 1.56972C13.2057 1.17496 12.9318 0.5 12.3849 0.5H0.615154C0.0682035 0.5 -0.205701 1.17496 0.181041 1.56972L5.63182 7.13297C6.11129 7.62234 6.88876 7.62234 7.36823 7.13297Z"
                          fill="black"
                        />
                      </svg>
                    </Link>

                    <div className="of">of 10</div>

                    <Link className="pagination__active">
                      Next
                      <svg
                        width="9"
                        height="15"
                        viewBox="0 0 9 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9 7.49998C9 7.10218 8.84196 6.72058 8.56066 6.43933L2.56062 0.439314C1.97487 -0.146438 1.02507 -0.146438 0.439314 0.439314C-0.146439 1.02507 -0.146439 1.97487 0.439314 2.56062L5.37868 7.49998L0.439314 12.4393C-0.146439 13.0251 -0.146439 13.9749 0.439314 14.5607C1.02507 15.1464 1.97487 15.1464 2.56062 14.5607L8.56066 8.56063C8.84196 8.27938 9 7.89778 9 7.49998Z"
                          fill="#4CAA91"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="d-none">
                    <div className="pagination-tablet__button">
                      <svg
                        width="9"
                        height="15"
                        viewBox="0 0 9 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.57031 2.14285L3.21317 7.5L8.57031 12.8571L7.49888 15L-0.00111689 7.5L7.49888 -3.57628e-06L8.57031 2.14285Z"
                          fill="#737373"
                        />
                      </svg>
                    </div>
                    <div className="pagination-tablet__button">100</div>
                    <div className="pagination-tablet__button">
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 13.7143L5.71428 8L0 2.28571L1.14286 0L9.14286 8L1.14286 16L0 13.7143Z"
                          fill="#737373"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                      <div className="pagination__box disabled">
                        <svg
                          width="9"
                          height="8"
                          viewBox="0 0 9 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 4L1.5 4M1.5 4L4.5 1M1.5 4L4.5 7"
                            stroke="black"
                          />
                        </svg>
                      </div>
                      <div className="pagination__box active">1</div>
                      <div className="pagination__box">2</div>
                      <div className="pagination__box">3</div>
                      <div className="pagination__box">
                        <svg
                          width="9"
                          height="8"
                          viewBox="0 0 9 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0.5 4H8M8 4L5 7M8 4L5 1" stroke="black" />
                        </svg>
                      </div>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Store);
