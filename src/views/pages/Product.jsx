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
import infoSlash from "../../assets/svg/info.svg";
import seySlash from "../../assets/svg/sey.svg";
import ProductSmall2 from "../../assets/img/product-small-2.png";
import ProductSmall3 from "../../assets/img/product-small-3.png";
import ProductSmall4 from "../../assets/img/product-small-4.png";
import PriceInfoContainer from "../../assets/img/product-info.png";
import PriceInfoContainerBorder from "../../assets/img/product-info-border.png";
import OseyMobile from "../../assets/img/mobile-kes.png";
import Header from "../../shared/Header";
import $ from "jquery";

import Footer from "../../shared/Footer";
import "../../assets/css/Emir.css";
import {Link} from "react-router-dom"
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
    this.slide = this.slide.bind(this);
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

  slide(w, to) {
    if (to == "right") {
      var now = $(w).scrollLeft()
      $(w).scrollLeft((now + window.innerWidth) - 50)
    } else {
    
      var now = $(w).scrollLeft() - window.innerWidth;
      $(w).scrollLeft(now);
    }
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
               <img src={seySlash} className="d-none d-md-inline-block sey-slash"/>
            </h1>
           
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
            <div className="product-other-thumbs">
              <img src={ProductSmall1} alt="" />
              <img src={ProductSmall1} alt="" />
              <img src={ProductSmall1} alt="" />
              <img src={ProductSmall1} alt="" />
            </div>
            </div>
            <form className="product-available">


            <svg  viewBox="0 0 191 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.544 9.512H2.704C2.74667 9.87467 2.912 10.2053 3.2 10.504C3.49867 10.792 3.888 11.0213 4.368 11.192C4.848 11.352 5.38667 11.432 5.984 11.432C6.528 11.432 6.976 11.3733 7.328 11.256C7.68 11.1387 7.94133 10.9733 8.112 10.76C8.28267 10.5467 8.368 10.2907 8.368 9.992C8.368 9.704 8.26133 9.48533 8.048 9.336C7.83467 9.176 7.49867 9.048 7.04 8.952C6.58133 8.84533 5.97867 8.73867 5.232 8.632C4.64533 8.54667 4.09067 8.42933 3.568 8.28C3.04533 8.12 2.58133 7.91733 2.176 7.672C1.78133 7.42667 1.46667 7.128 1.232 6.776C1.008 6.41333 0.896 5.98667 0.896 5.496C0.896 4.888 1.06667 4.35467 1.408 3.896C1.76 3.43733 2.27733 3.08 2.96 2.824C3.64267 2.568 4.48 2.44 5.472 2.44C6.96533 2.44 8.112 2.76 8.912 3.4C9.72267 4.02933 10.1173 4.89867 10.096 6.008H8.016C7.97333 5.37867 7.70667 4.92533 7.216 4.648C6.736 4.37067 6.128 4.232 5.392 4.232C4.70933 4.232 4.144 4.33333 3.696 4.536C3.25867 4.73867 3.04 5.08533 3.04 5.576C3.04 5.768 3.09333 5.93867 3.2 6.088C3.30667 6.22667 3.488 6.34933 3.744 6.456C4 6.56267 4.34667 6.664 4.784 6.76C5.22133 6.856 5.76533 6.952 6.416 7.048C7.024 7.13333 7.57333 7.25067 8.064 7.4C8.56533 7.53867 8.992 7.72533 9.344 7.96C9.70667 8.184 9.984 8.472 10.176 8.824C10.368 9.176 10.464 9.608 10.464 10.12C10.464 10.7493 10.2987 11.2987 9.968 11.768C9.648 12.2267 9.14667 12.584 8.464 12.84C7.792 13.096 6.91733 13.224 5.84 13.224C5.072 13.224 4.39467 13.144 3.808 12.984C3.22133 12.8133 2.71467 12.5893 2.288 12.312C1.86133 12.0347 1.51467 11.7307 1.248 11.4C0.981333 11.0693 0.789333 10.7387 0.672 10.408C0.565333 10.0773 0.522667 9.77867 0.544 9.512ZM14.4694 8.68V11.224H22.4534V13H12.3414V2.648H22.4374V4.424H14.4694V7H20.9974V8.68H14.4694ZM26.7663 2.648V11.224H33.6463V13H24.6383V2.648H26.7663ZM37.7506 8.68V11.224H45.7346V13H35.6226V2.648H45.7186V4.424H37.7506V7H44.2786V8.68H37.7506ZM59.9058 9.272C59.8098 10.104 59.5164 10.8133 59.0258 11.4C58.5351 11.9867 57.8684 12.4347 57.0258 12.744C56.1831 13.0533 55.1804 13.208 54.0178 13.208C53.0471 13.208 52.1564 13.096 51.3458 12.872C50.5458 12.648 49.8524 12.312 49.2658 11.864C48.6898 11.416 48.2418 10.8613 47.9218 10.2C47.6018 9.528 47.4418 8.744 47.4418 7.848C47.4418 6.952 47.6018 6.168 47.9218 5.496C48.2418 4.824 48.6898 4.264 49.2658 3.816C49.8524 3.35733 50.5458 3.016 51.3458 2.792C52.1564 2.55733 53.0471 2.44 54.0178 2.44C55.1804 2.44 56.1831 2.6 57.0258 2.92C57.8791 3.24 58.5511 3.69867 59.0418 4.296C59.5324 4.88267 59.8204 5.59733 59.9058 6.44H57.7938C57.6551 5.992 57.4204 5.608 57.0898 5.288C56.7698 4.95733 56.3538 4.70667 55.8418 4.536C55.3298 4.36533 54.7218 4.28 54.0178 4.28C53.1431 4.28 52.3751 4.41867 51.7138 4.696C51.0524 4.96267 50.5404 5.36267 50.1778 5.896C49.8151 6.41867 49.6338 7.06933 49.6338 7.848C49.6338 8.616 49.8151 9.26133 50.1778 9.784C50.5404 10.3067 51.0524 10.7067 51.7138 10.984C52.3751 11.2507 53.1431 11.384 54.0178 11.384C54.7218 11.384 55.3244 11.2987 55.8258 11.128C56.3378 10.9573 56.7538 10.712 57.0738 10.392C57.4044 10.072 57.6444 9.69867 57.7938 9.272H59.9058ZM60.7575 2.648H71.6695V4.424H60.7575V2.648ZM65.1575 4.2H67.2855V13H65.1575V4.2ZM76.3878 9.512H78.5478C78.5904 9.87467 78.7558 10.2053 79.0438 10.504C79.3424 10.792 79.7318 11.0213 80.2118 11.192C80.6918 11.352 81.2304 11.432 81.8278 11.432C82.3718 11.432 82.8198 11.3733 83.1718 11.256C83.5238 11.1387 83.7851 10.9733 83.9558 10.76C84.1264 10.5467 84.2118 10.2907 84.2118 9.992C84.2118 9.704 84.1051 9.48533 83.8918 9.336C83.6784 9.176 83.3424 9.048 82.8838 8.952C82.4251 8.84533 81.8224 8.73867 81.0758 8.632C80.4891 8.54667 79.9344 8.42933 79.4118 8.28C78.8891 8.12 78.4251 7.91733 78.0198 7.672C77.6251 7.42667 77.3104 7.128 77.0758 6.776C76.8518 6.41333 76.7398 5.98667 76.7398 5.496C76.7398 4.888 76.9104 4.35467 77.2518 3.896C77.6038 3.43733 78.1211 3.08 78.8038 2.824C79.4864 2.568 80.3238 2.44 81.3158 2.44C82.8091 2.44 83.9558 2.76 84.7558 3.4C85.5664 4.02933 85.9611 4.89867 85.9398 6.008H83.8598C83.8171 5.37867 83.5504 4.92533 83.0598 4.648C82.5798 4.37067 81.9718 4.232 81.2358 4.232C80.5531 4.232 79.9878 4.33333 79.5398 4.536C79.1024 4.73867 78.8838 5.08533 78.8838 5.576C78.8838 5.768 78.9371 5.93867 79.0438 6.088C79.1504 6.22667 79.3318 6.34933 79.5878 6.456C79.8438 6.56267 80.1904 6.664 80.6278 6.76C81.0651 6.856 81.6091 6.952 82.2598 7.048C82.8678 7.13333 83.4171 7.25067 83.9078 7.4C84.4091 7.53867 84.8358 7.72533 85.1878 7.96C85.5504 8.184 85.8278 8.472 86.0198 8.824C86.2118 9.176 86.3078 9.608 86.3078 10.12C86.3078 10.7493 86.1424 11.2987 85.8118 11.768C85.4918 12.2267 84.9904 12.584 84.3078 12.84C83.6358 13.096 82.7611 13.224 81.6838 13.224C80.9158 13.224 80.2384 13.144 79.6518 12.984C79.0651 12.8133 78.5584 12.5893 78.1318 12.312C77.7051 12.0347 77.3584 11.7307 77.0918 11.4C76.8251 11.0693 76.6331 10.7387 76.5158 10.408C76.4091 10.0773 76.3664 9.77867 76.3878 9.512ZM88.4891 2.648H90.6171V13H88.4891V2.648ZM93.1486 2.648H104.269V4.424L95.0366 11.816L94.8446 11.224H104.269V13H93.1486V11.224L102.381 3.832L102.573 4.424H93.1486V2.648ZM108.641 8.68V11.224H116.625V13H106.513V2.648H116.609V4.424H108.641V7H115.169V8.68H108.641Z" fill="white"/>
<path d="M190 1L179 13" stroke="white" stroke-width="0.6" stroke-miterlimit="10"/>
<path d="M184 1L173 13" stroke="white" stroke-width="0.6" stroke-miterlimit="10"/>
<path d="M179 1L167 13" stroke="white" stroke-width="0.6" stroke-miterlimit="10"/>
<path d="M173 1L161 13" stroke="white" stroke-width="0.6" stroke-miterlimit="10"/>
<path d="M167 1L156 13" stroke="white" stroke-width="0.6" stroke-miterlimit="10"/>
<path d="M162 1L150 13" stroke="white" stroke-width="0.6" stroke-miterlimit="10"/>
<path d="M156 1L144 13" stroke="white" stroke-width="0.6" stroke-miterlimit="10"/>
<path d="M151 1L138 13" stroke="white" stroke-width="0.6" stroke-miterlimit="10"/>
<path d="M145 1L133 13" stroke="white" stroke-width="0.6" stroke-miterlimit="10"/>
<path d="M139 1L128 13" stroke="white" stroke-width="0.6" stroke-miterlimit="10"/>
<path d="M133 1L122 13" stroke="white" stroke-width="0.6" stroke-miterlimit="10"/>
</svg>
 

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
          <svg className="price-changes-svg" viewBox="0 0 319 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.832 13.36V10.56H11.816C12.136 10.56 12.4027 10.512 12.616 10.416C12.84 10.3093 12.952 10.0907 12.952 9.76C12.952 9.41867 12.84 9.2 12.616 9.104C12.4027 9.008 12.136 8.96 11.816 8.96H4.088V16H0.0880001V5.76H11.192C11.992 5.76 12.7387 5.81867 13.432 5.936C14.136 6.04267 14.7493 6.24 15.272 6.528C15.7947 6.816 16.2053 7.22133 16.504 7.744C16.8027 8.26667 16.952 8.93867 16.952 9.76C16.952 10.5813 16.8027 11.232 16.504 11.712C16.2053 12.192 15.7947 12.5493 15.272 12.784C14.7493 13.0187 14.136 13.1733 13.432 13.248C12.7387 13.3227 11.992 13.36 11.192 13.36H3.832ZM18.9481 16V5.76H31.3161C32.2868 5.76 33.1561 5.872 33.9241 6.096C34.7028 6.30933 35.3161 6.672 35.7641 7.184C36.2228 7.696 36.4521 8.39467 36.4521 9.28C36.4521 9.86667 36.3455 10.352 36.1321 10.736C35.9188 11.12 35.6255 11.4187 35.2521 11.632C34.8788 11.8453 34.4521 12 33.9721 12.096C33.4921 12.192 32.9908 12.2507 32.4681 12.272L31.3001 12.048C32.5695 12.0587 33.5455 12.112 34.2281 12.208C34.9215 12.304 35.4015 12.48 35.6681 12.736C35.9455 12.9813 36.0841 13.3387 36.0841 13.808V16H32.0841V14.288C32.0841 13.968 32.0201 13.728 31.8921 13.568C31.7748 13.3973 31.5081 13.28 31.0921 13.216C30.6868 13.152 30.0575 13.12 29.2041 13.12H22.9481V16H18.9481ZM22.9481 10.448H31.3161C31.6361 10.448 31.9028 10.3947 32.1161 10.288C32.3401 10.1813 32.4521 9.97867 32.4521 9.68C32.4521 9.40267 32.3401 9.216 32.1161 9.12C31.9028 9.01333 31.6361 8.96 31.3161 8.96H22.9481V10.448ZM38.9069 5.76H42.9069V16H38.9069V5.76ZM64.3456 11.728C64.2923 12.7413 63.9243 13.5893 63.2416 14.272C62.559 14.9547 61.551 15.4667 60.2176 15.808C58.895 16.1493 57.2203 16.32 55.1936 16.32C53.647 16.32 52.2603 16.2347 51.0336 16.064C49.807 15.904 48.7616 15.6267 47.8976 15.232C47.0336 14.8267 46.3723 14.2773 45.9136 13.584C45.455 12.8907 45.2256 12.016 45.2256 10.96C45.2256 9.904 45.455 9.024 45.9136 8.32C46.3723 7.60533 47.0336 7.04 47.8976 6.624C48.7616 6.19733 49.807 5.89333 51.0336 5.712C52.2603 5.53067 53.647 5.44 55.1936 5.44C57.2203 5.44 58.9003 5.62667 60.2336 6C61.567 6.36267 62.575 6.90133 63.2576 7.616C63.9403 8.33067 64.3083 9.2 64.3616 10.224H60.2016C60.0736 9.88267 59.839 9.584 59.4976 9.328C59.1563 9.06133 58.6443 8.85333 57.9616 8.704C57.279 8.55467 56.3563 8.48 55.1936 8.48C53.8283 8.48 52.719 8.56533 51.8656 8.736C51.0123 8.896 50.3883 9.15733 49.9936 9.52C49.599 9.88267 49.4016 10.3627 49.4016 10.96C49.4016 11.504 49.599 11.9467 49.9936 12.288C50.3883 12.6293 51.0123 12.88 51.8656 13.04C52.719 13.2 53.8283 13.28 55.1936 13.28C56.3563 13.28 57.2736 13.2107 57.9456 13.072C58.6283 12.9333 59.1403 12.7467 59.4816 12.512C59.823 12.2667 60.0576 12.0053 60.1856 11.728H64.3456ZM70.4481 11.68V12.96H82.6081V16H66.4481V5.76H82.5761V8.8H70.4481V10.08H80.3681V11.68H70.4481ZM108.596 11.728C108.542 12.7413 108.174 13.5893 107.492 14.272C106.809 14.9547 105.801 15.4667 104.468 15.808C103.145 16.1493 101.47 16.32 99.4436 16.32C97.897 16.32 96.5103 16.2347 95.2836 16.064C94.057 15.904 93.0116 15.6267 92.1476 15.232C91.2836 14.8267 90.6223 14.2773 90.1636 13.584C89.705 12.8907 89.4756 12.016 89.4756 10.96C89.4756 9.904 89.705 9.024 90.1636 8.32C90.6223 7.60533 91.2836 7.04 92.1476 6.624C93.0116 6.19733 94.057 5.89333 95.2836 5.712C96.5103 5.53067 97.897 5.44 99.4436 5.44C101.47 5.44 103.15 5.62667 104.484 6C105.817 6.36267 106.825 6.90133 107.508 7.616C108.19 8.33067 108.558 9.2 108.612 10.224H104.452C104.324 9.88267 104.089 9.584 103.748 9.328C103.406 9.06133 102.894 8.85333 102.212 8.704C101.529 8.55467 100.606 8.48 99.4436 8.48C98.0783 8.48 96.969 8.56533 96.1156 8.736C95.2623 8.896 94.6383 9.15733 94.2436 9.52C93.849 9.88267 93.6516 10.3627 93.6516 10.96C93.6516 11.504 93.849 11.9467 94.2436 12.288C94.6383 12.6293 95.2623 12.88 96.1156 13.04C96.969 13.2 98.0783 13.28 99.4436 13.28C100.606 13.28 101.524 13.2107 102.196 13.072C102.878 12.9333 103.39 12.7467 103.732 12.512C104.073 12.2667 104.308 12.0053 104.436 11.728H108.596ZM114.122 9.296H125.386V12.336H114.122V9.296ZM124.938 5.76H128.938V16H124.938V5.76ZM110.698 5.76H114.698V16H110.698V5.76ZM133.807 14.448V12.048H144.751V14.448H133.807ZM130.223 16L137.087 5.76H141.535L148.463 16H144.063L138.127 6.832H140.511L134.623 16H130.223ZM165.793 12.864L164.305 13.712V5.76H168.305V16H164.305L152.257 9.024L153.745 8.16V16H149.745V5.76H153.745L165.793 12.864ZM179.87 16.32C178.483 16.32 177.209 16.2347 176.046 16.064C174.894 15.904 173.891 15.6267 173.038 15.232C172.195 14.8267 171.539 14.2773 171.07 13.584C170.611 12.8907 170.382 12.016 170.382 10.96C170.382 9.904 170.617 9.024 171.086 8.32C171.555 7.60533 172.227 7.04 173.102 6.624C173.987 6.19733 175.038 5.89333 176.254 5.712C177.481 5.53067 178.846 5.44 180.35 5.44C182.323 5.44 183.977 5.62133 185.31 5.984C186.654 6.34667 187.678 6.864 188.382 7.536C189.086 8.19733 189.465 8.98667 189.518 9.904H185.358C185.23 9.66933 184.995 9.44533 184.654 9.232C184.313 9.008 183.801 8.82667 183.118 8.688C182.435 8.54933 181.513 8.48 180.35 8.48C178.985 8.48 177.875 8.56533 177.022 8.736C176.169 8.896 175.545 9.15733 175.15 9.52C174.755 9.88267 174.558 10.3627 174.558 10.96C174.558 11.4827 174.761 11.9147 175.166 12.256C175.571 12.5973 176.222 12.8533 177.118 13.024C178.014 13.1947 179.198 13.28 180.67 13.28C181.705 13.28 182.601 13.2373 183.358 13.152C184.126 13.056 184.819 12.912 185.438 12.72C186.067 12.528 186.691 12.288 187.31 12L187.694 12.464C187.033 13.712 186.051 14.6667 184.75 15.328C183.449 15.9893 181.822 16.32 179.87 16.32ZM186.606 16C186.606 15.68 186.649 15.3173 186.734 14.912C186.819 14.5067 186.926 14.0853 187.054 13.648C187.193 13.2 187.326 12.7787 187.454 12.384H181.214V10.704H189.742V16H186.606ZM195.979 11.68V12.96H208.139V16H191.979V5.76H208.107V8.8H195.979V10.08H205.899V11.68H195.979ZM209.654 12.24H214.022C214.096 12.464 214.315 12.656 214.678 12.816C215.04 12.9653 215.526 13.0827 216.134 13.168C216.752 13.2427 217.467 13.28 218.278 13.28C219.078 13.28 219.707 13.2587 220.166 13.216C220.635 13.1627 220.966 13.0773 221.158 12.96C221.35 12.832 221.446 12.6613 221.446 12.448C221.446 12.2453 221.291 12.0907 220.982 11.984C220.672 11.8667 220.123 11.7867 219.334 11.744C218.544 11.7013 217.435 11.68 216.006 11.68C214.939 11.68 214.016 11.632 213.238 11.536C212.47 11.4293 211.835 11.2693 211.334 11.056C210.843 10.832 210.48 10.5547 210.246 10.224C210.011 9.88267 209.894 9.47733 209.894 9.008C209.894 8.19733 210.166 7.53067 210.71 7.008C211.264 6.47467 212.096 6.08 213.206 5.824C214.326 5.55733 215.723 5.424 217.398 5.424C219.851 5.424 221.723 5.78133 223.014 6.496C224.315 7.2 224.966 8.21867 224.966 9.552H220.822C220.768 9.2 220.438 8.93333 219.83 8.752C219.222 8.56 218.358 8.464 217.238 8.464C216.128 8.464 215.302 8.528 214.758 8.656C214.224 8.784 213.958 9.00267 213.958 9.312C213.958 9.472 214.032 9.6 214.182 9.696C214.331 9.792 214.587 9.872 214.95 9.936C215.323 9.98933 215.846 10.0267 216.518 10.048C217.19 10.0693 218.043 10.08 219.078 10.08C220.219 10.08 221.19 10.1387 221.99 10.256C222.79 10.3627 223.435 10.528 223.926 10.752C224.427 10.976 224.79 11.264 225.014 11.616C225.238 11.9573 225.35 12.3627 225.35 12.832C225.35 13.6427 225.094 14.304 224.582 14.816C224.07 15.328 223.259 15.7067 222.15 15.952C221.04 16.1973 219.59 16.32 217.798 16.32C216.784 16.32 215.851 16.2613 214.998 16.144C214.155 16.0267 213.403 15.856 212.742 15.632C212.08 15.3973 211.52 15.1147 211.062 14.784C210.603 14.4427 210.251 14.064 210.006 13.648C209.771 13.2213 209.654 12.752 209.654 12.24Z" fill="white"/>
<path d="M318 1L302 17" stroke="white" stroke-miterlimit="10"/>
<path d="M311 1L295 17" stroke="white" stroke-miterlimit="10"/>
<path d="M303 1L288 17" stroke="white" stroke-miterlimit="10"/>
<path d="M296 1L281 17" stroke="white" stroke-miterlimit="10"/>
<path d="M289 1L275 17" stroke="white" stroke-miterlimit="10"/>
<path d="M281 1L268 17" stroke="white" stroke-miterlimit="10"/>
<path d="M274 1L260 17" stroke="white" stroke-miterlimit="10"/>
<path d="M268 1L253 17" stroke="white" stroke-miterlimit="10"/>
<path d="M261 1L246 17" stroke="white" stroke-miterlimit="10"/>
<path d="M254 1L238 17" stroke="white" stroke-miterlimit="10"/>
<path d="M247 1L231 17" stroke="white" stroke-miterlimit="10"/>
</svg>

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

              <img src={infoSlash} className="info-slash"/>
                        
            <svg  viewBox="0 0 334 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 32C1 23.9055 8.82475 17.2146 18.4786 17.2146M18.4786 17.2146C85.4518 17.2146 123.001 17.2147 189.974 17.2147M18.4786 17.2146L189.974 17.2147M189.974 17.2147L203.004 1L316.116 2.76363C325.22 3.22142 332.308 9.98434 333 17.5V32M1 237V111M-1.11377 391.844C-1.11377 399.938 6.71324 406.5 16.3651 406.5H314C323.654 406.5 331.479 399.938 331.481 391.844M333 237V111M316.114 -57.8997H18.4786C8.8268 -57.8997 0.999786 -64.4617 0.999786 -72.5562L0.999817 -200.129C0.999817 -208.223 8.82478 -214.785 18.4786 -214.785L189.974 -214.785L203.004 -231L316.116 -229.236C325.768 -229.236 333.595 -222.674 333.595 -214.58V-72.5562C333.592 -64.4617 325.767 -57.8997 316.114 -57.8997Z" stroke="#34CEA5" stroke-miterlimit="10"/>
<path d="M4.00451 24C3.20331 24.4 1.66767 29.5 1 32H333.499L334 22.5C333.833 20.6667 333.499 16.8 333.499 16C333.499 15 330.995 10.5 330.495 9.5C329.994 8.5 328.573 8.44222 327.49 7C325.988 5 321.481 4.16667 319.478 3.5L315.973 3H311.967L299.448 2.5H272.408L243.364 2L217.826 1.5L203.805 1L202.803 1.5L190.284 17.5H125.687H84.6256H41.0602C38.5564 17.5 19.5278 17 14.5203 17.5C9.51278 18 5.00601 23.5 4.00451 24Z" fill="white" fill-opacity="0.1"/>
</svg>

                  <div className="price-info-container-middle">

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente impedit minima, est officiis nisi consequatur blanditiis praesentium assumenda necessitatibus eum amet fugiat repudiandae in tempora magnam quidem beatae optio aliquid? lorem</p>
                        <p><span>Model color: </span> Pale ivory/black /crimson</p>
                        <p><span>Model: </span> DD3668</p>
                  </div>

                  <svg style={{verticalAlign:"top"}} viewBox="0 0 334 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect />
<path d="M1.00021 -360C1.00021 -368.095 8.82496 -374.785 18.4788 -374.785M18.4788 -374.785C85.452 -374.785 123.001 -374.785 189.974 -374.785M18.4788 -374.785L189.974 -374.785M189.974 -374.785L203.004 -391L316.116 -389.236C325.22 -388.779 332.309 -382.016 333 -374.5V-360M1.00021 -155V-281M1 0C1 8.09452 6.71345 14.5 16.3653 14.5H314C323.654 14.5 332.998 8.09452 333 0M333 -155V-281M316.114 -449.9H18.4788C8.82701 -449.9 1 -456.462 1 -464.556L1.00003 -592.129C1.00003 -600.223 8.82499 -606.785 18.4789 -606.785L189.974 -606.785L203.004 -623L316.116 -621.236C325.768 -621.236 333.595 -614.674 333.595 -606.58V-464.556C333.593 -456.462 325.768 -449.9 316.114 -449.9Z" stroke="#34CEA5" stroke-miterlimit="10"/>
<path d="M332.5 0H1.50007C1.66674 0.5 1 2.5 1.50007 4C1.81634 4.94867 3.50007 8 4.50007 9.5C5.30007 10.7 10.0001 13.5 13.5001 14H44.0001H281C292.667 14.1667 316.3 14.4 317.5 14C319 13.5 323.714 12.5 329.5 8C333.1 5.2 332.5 1 332.5 0Z" fill="white" fill-opacity="0.1"/>
</svg>

                        
         
            </div>
          </div>
        </div>

        <div className="most-recent-item-container">
          <div className="most-recent-item-presentation">
          <svg className="d-md-block d-none rrrr" viewBox="0 0 1069 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1067.35 0.999512L1033.54 37.2924" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M1051.21 1.00748L1017.41 37.3003" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M1035.09 1.01546L1001.27 37.3083" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M1018.95 1.02342L985.136 37.3163" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M1002.82 1.02342L969 37.3242" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M986.681 1.0314L952.873 37.3322" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M970.545 1.03937L936.737 37.3322" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M954.418 1.04735L920.602 37.3402" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M938.282 1.05531L904.466 37.3482" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M922.147 1.06329L888.339 37.3561" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M906.011 1.07126L872.203 37.3641" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M889.875 1.07126L856.067 37.3721" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M873.749 1.07924L839.933 37.3801" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M857.613 1.0872L823.797 37.3801" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M841.477 1.09517L807.669 37.388" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M825.342 1.10295L791.534 37.3958" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M809.214 1.11093L775.398 37.4038" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M793.079 1.1189L759.263 37.4117" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M776.944 1.1189L743.128 37.4197" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M760.808 1.12686L727 37.4277" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M48.99 3.55951L30.36 25.5015V32.9995H18.86V25.5015L0.23 3.55951H13.8L28.934 22.6495H20.424L35.42 3.55951H48.99ZM76.59 33.9195C69.9047 33.9195 64.5227 33.3368 60.444 32.1715C56.3653 30.9755 53.3907 29.2275 51.52 26.9275C49.68 24.5968 48.76 21.7142 48.76 18.2795C48.76 14.8448 49.68 11.9775 51.52 9.67751C53.3907 7.34684 56.3653 5.59884 60.444 4.43351C64.5227 3.23751 69.9047 2.63951 76.59 2.63951C83.2753 2.63951 88.6573 3.23751 92.736 4.43351C96.8147 5.59884 99.774 7.34684 101.614 9.67751C103.485 11.9775 104.42 14.8448 104.42 18.2795C104.42 21.7142 103.485 24.5968 101.614 26.9275C99.774 29.2275 96.8147 30.9755 92.736 32.1715C88.6573 33.3368 83.2753 33.9195 76.59 33.9195ZM76.59 25.1795C79.7487 25.1795 82.478 24.9955 84.778 24.6275C87.078 24.2288 88.8567 23.5388 90.114 22.5575C91.3713 21.5455 92 20.1195 92 18.2795C92 16.4395 91.3713 15.0288 90.114 14.0475C88.8567 13.0355 87.078 12.3455 84.778 11.9775C82.478 11.5788 79.7487 11.3795 76.59 11.3795C73.4313 11.3795 70.656 11.5788 68.264 11.9775C65.9027 12.3455 64.0473 13.0355 62.698 14.0475C61.3793 15.0288 60.72 16.4395 60.72 18.2795C60.72 20.1195 61.3793 21.5455 62.698 22.5575C64.0473 23.5388 65.9027 24.2288 68.264 24.6275C70.656 24.9955 73.4313 25.1795 76.59 25.1795ZM151.758 16.2095V3.55951H163.258V18.2795C163.258 20.8862 162.767 23.1095 161.786 24.9495C160.835 26.7588 159.501 28.2615 157.784 29.4575C156.066 30.6228 154.088 31.5275 151.85 32.1715C149.611 32.8155 147.204 33.2602 144.628 33.5055C142.082 33.7815 139.491 33.9195 136.854 33.9195C134.063 33.9195 131.364 33.7815 128.758 33.5055C126.151 33.2602 123.728 32.8155 121.49 32.1715C119.282 31.5275 117.35 30.6228 115.694 29.4575C114.038 28.2615 112.734 26.7588 111.784 24.9495C110.864 23.1095 110.404 20.8862 110.404 18.2795V3.55951H121.904V16.2095C121.904 18.6628 122.502 20.5335 123.698 21.8215C124.894 23.1095 126.596 23.9988 128.804 24.4895C131.042 24.9495 133.726 25.1795 136.854 25.1795C139.89 25.1795 142.527 24.9495 144.766 24.4895C147.004 23.9988 148.722 23.1095 149.918 21.8215C151.144 20.5335 151.758 18.6628 151.758 16.2095ZM220.465 29.5035H213.565L238.681 3.55951H250.181V32.9995H238.681V12.9435L242.131 14.3695L223.961 32.9995H210.161L191.945 14.4155L195.441 12.9895V32.9995H183.941V3.55951H195.441L220.465 29.5035ZM257.314 3.55951H268.814V32.9995H257.314V3.55951ZM302.759 33.9195C298.772 33.9195 295.107 33.6742 291.765 33.1835C288.453 32.7235 285.57 31.9262 283.117 30.7915C280.694 29.6262 278.808 28.0468 277.459 26.0535C276.14 24.0602 275.481 21.5455 275.481 18.5095C275.481 15.4735 276.155 12.9435 277.505 10.9195C278.854 8.86484 280.786 7.23951 283.301 6.04351C285.846 4.81684 288.867 3.94284 292.363 3.42151C295.889 2.90018 299.815 2.63951 304.139 2.63951C309.812 2.63951 314.565 3.16084 318.399 4.20351C322.263 5.24618 325.207 6.73351 327.231 8.66551C329.255 10.5668 330.343 12.8362 330.497 15.4735H318.537C318.169 14.7988 317.494 14.1548 316.513 13.5415C315.531 12.8975 314.059 12.3762 312.097 11.9775C310.134 11.5788 307.481 11.3795 304.139 11.3795C300.213 11.3795 297.024 11.6248 294.571 12.1155C292.117 12.5755 290.323 13.3268 289.189 14.3695C288.054 15.4122 287.487 16.7922 287.487 18.5095C287.487 20.0122 288.069 21.2542 289.235 22.2355C290.4 23.2168 292.271 23.9528 294.847 24.4435C297.423 24.9342 300.827 25.1795 305.059 25.1795C308.033 25.1795 310.609 25.0568 312.787 24.8115C314.995 24.5355 316.988 24.1215 318.767 23.5695C320.576 23.0175 322.37 22.3275 324.149 21.4995L325.253 22.8335C323.351 26.4215 320.53 29.1662 316.789 31.0675C313.047 32.9688 308.371 33.9195 302.759 33.9195ZM322.125 32.9995C322.125 32.0795 322.247 31.0368 322.493 29.8715C322.738 28.7062 323.045 27.4948 323.413 26.2375C323.811 24.9495 324.195 23.7382 324.563 22.6035H306.623V17.7735H331.141V32.9995H322.125ZM347.418 13.7255H379.802V22.4655H347.418V13.7255ZM378.514 3.55951H390.014V32.9995H378.514V3.55951ZM337.574 3.55951H349.074V32.9995H337.574V3.55951ZM394.626 3.55951H442.466V12.2995H394.626V3.55951ZM412.796 11.7015H424.296V32.9995H412.796V11.7015ZM472.788 3.55951V24.2595H499.606V32.9995H461.288V3.55951H472.788ZM505.373 3.55951H516.873V32.9995H505.373V3.55951ZM548.517 18.5095V15.9335L575.059 32.9995H557.947L535.407 17.3595L556.199 3.55951H572.575L548.517 18.5095ZM523.999 3.55951H535.499V32.9995H523.999V3.55951ZM591.382 20.5795V24.2595H626.342V32.9995H579.882V3.55951H626.25V12.2995H591.382V15.9795H619.902V20.5795H591.382ZM647.236 3.55951H658.736V32.9995H647.236V3.55951ZM664.023 3.55951H711.863V12.2995H664.023V3.55951ZM682.193 11.7015H693.693V32.9995H682.193V11.7015Z" fill="white"/>
</svg>

      <svg className="d-md-none xxxx" viewBox="0 0 258 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.56 0.639999L15.84 12.088V16H9.84V12.088L0.12 0.639999H7.2L15.096 10.6H10.656L18.48 0.639999H25.56ZM39.96 16.48C36.472 16.48 33.664 16.176 31.536 15.568C29.408 14.944 27.856 14.032 26.88 12.832C25.92 11.616 25.44 10.112 25.44 8.32C25.44 6.528 25.92 5.032 26.88 3.832C27.856 2.616 29.408 1.704 31.536 1.096C33.664 0.471999 36.472 0.159999 39.96 0.159999C43.448 0.159999 46.256 0.471999 48.384 1.096C50.512 1.704 52.056 2.616 53.016 3.832C53.992 5.032 54.48 6.528 54.48 8.32C54.48 10.112 53.992 11.616 53.016 12.832C52.056 14.032 50.512 14.944 48.384 15.568C46.256 16.176 43.448 16.48 39.96 16.48ZM39.96 11.92C41.608 11.92 43.032 11.824 44.232 11.632C45.432 11.424 46.36 11.064 47.016 10.552C47.672 10.024 48 9.28 48 8.32C48 7.36 47.672 6.624 47.016 6.112C46.36 5.584 45.432 5.224 44.232 5.032C43.032 4.824 41.608 4.72 39.96 4.72C38.312 4.72 36.864 4.824 35.616 5.032C34.384 5.224 33.416 5.584 32.712 6.112C32.024 6.624 31.68 7.36 31.68 8.32C31.68 9.28 32.024 10.024 32.712 10.552C33.416 11.064 34.384 11.424 35.616 11.632C36.864 11.824 38.312 11.92 39.96 11.92ZM79.1779 7.24V0.639999H85.1779V8.32C85.1779 9.68 84.9219 10.84 84.4099 11.8C83.9139 12.744 83.2179 13.528 82.3219 14.152C81.4259 14.76 80.3939 15.232 79.2259 15.568C78.0579 15.904 76.8019 16.136 75.4579 16.264C74.1299 16.408 72.7779 16.48 71.4019 16.48C69.9459 16.48 68.5379 16.408 67.1779 16.264C65.8179 16.136 64.5539 15.904 63.3859 15.568C62.2339 15.232 61.2259 14.76 60.3619 14.152C59.4979 13.528 58.8179 12.744 58.3219 11.8C57.8419 10.84 57.6019 9.68 57.6019 8.32V0.639999H63.6019V7.24C63.6019 8.52 63.9139 9.496 64.5379 10.168C65.1619 10.84 66.0499 11.304 67.2019 11.56C68.3699 11.8 69.7699 11.92 71.4019 11.92C72.9859 11.92 74.3619 11.8 75.5299 11.56C76.6979 11.304 77.5939 10.84 78.2179 10.168C78.8579 9.496 79.1779 8.52 79.1779 7.24ZM115.025 14.176H111.425L124.529 0.639999H130.529V16H124.529V5.536L126.329 6.28L116.849 16H109.649L100.145 6.304L101.969 5.56V16H95.9691V0.639999H101.969L115.025 14.176ZM134.251 0.639999H140.251V16H134.251V0.639999ZM157.961 16.48C155.881 16.48 153.969 16.352 152.225 16.096C150.497 15.856 148.993 15.44 147.713 14.848C146.449 14.24 145.465 13.416 144.761 12.376C144.073 11.336 143.729 10.024 143.729 8.44C143.729 6.856 144.081 5.536 144.785 4.48C145.489 3.408 146.497 2.56 147.809 1.936C149.137 1.296 150.713 0.839999 152.537 0.568C154.377 0.296 156.425 0.159999 158.681 0.159999C161.641 0.159999 164.121 0.431999 166.121 0.975999C168.137 1.52 169.673 2.296 170.729 3.304C171.785 4.296 172.353 5.48 172.433 6.856H166.193C166.001 6.504 165.649 6.168 165.137 5.848C164.625 5.512 163.857 5.24 162.833 5.032C161.809 4.824 160.425 4.72 158.681 4.72C156.633 4.72 154.969 4.848 153.689 5.104C152.409 5.344 151.473 5.736 150.881 6.28C150.289 6.824 149.993 7.544 149.993 8.44C149.993 9.224 150.297 9.872 150.905 10.384C151.513 10.896 152.489 11.28 153.833 11.536C155.177 11.792 156.953 11.92 159.161 11.92C160.713 11.92 162.057 11.856 163.193 11.728C164.345 11.584 165.385 11.368 166.313 11.08C167.257 10.792 168.193 10.432 169.121 10L169.697 10.696C168.705 12.568 167.233 14 165.281 14.992C163.329 15.984 160.889 16.48 157.961 16.48ZM168.065 16C168.065 15.52 168.129 14.976 168.257 14.368C168.385 13.76 168.545 13.128 168.737 12.472C168.945 11.8 169.145 11.168 169.337 10.576H159.977V8.056H172.769V16H168.065ZM181.261 5.944H198.157V10.504H181.261V5.944ZM197.485 0.639999H203.485V16H197.485V0.639999ZM176.125 0.639999H182.125V16H176.125V0.639999ZM205.892 0.639999H230.852V5.2H205.892V0.639999ZM215.372 4.888H221.372V16H215.372V4.888ZM7.68 29.64V40.44H21.672V45H1.68V29.64H7.68ZM24.6806 29.64H30.6806V45H24.6806V29.64ZM47.1908 37.44V36.096L61.0388 45H52.1108L40.3508 36.84L51.1988 29.64H59.7428L47.1908 37.44ZM34.3988 29.64H40.3988V45H34.3988V29.64ZM69.555 38.52V40.44H87.795V45H63.555V29.64H87.747V34.2H69.555V36.12H84.435V38.52H69.555ZM98.6963 29.64H104.696V45H98.6963V29.64ZM107.454 29.64H132.414V34.2H107.454V29.64ZM116.934 33.888H122.934V45H116.934V33.888Z" fill="white"/>
<path d="M257 25L236 47" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M247 25L227 47" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M237 25L217 47" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M227 25L206 47" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M218 25L196 47" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M208 25L186 47" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M197 25L176 47" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M187 25L167 47" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M177 25L157 47" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M167 25L147 47" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
</svg>

<div className="slider-arrow">
            <div onClick={()=>{this.slide(".pu","left")}} className="slide-mobile sola-ok d-md-none d-lg-block"></div>

            <div  onClick={()=>{this.slide(".pu","right")}} className="slide-mobile saga-ok d-md-none d-lg-block"></div>

            <div  onClick={()=>{this.slide(".pu","left")}} className="d-none d-md-block slide-tablet tablet-sola-ok d-lg-none"></div>
            <div  onClick={()=>{this.slide(".pu","right")}} className="d-none d-md-block slide-tablet tablet-saga-ok d-lg-none"></div>
          </div>
          </div>
          <div className="urunler pu">
          <Link to="/product/2">
            <div className="urun product-urun">
              <img src={Recent1} alt="" />
              <h1 className="urun-adi">Air Jordan 1 Mid</h1>
              <h2>145 €</h2>
            </div>
            </Link>
            <Link to="/product/2">
            <div className="urun product-urun">
              <img src={Recent1} alt="" />
              <h1 className="urun-adi">Air Jordan 1 Mid</h1>
              <h2>145 €</h2>
            </div>
            </Link>
            <Link to="/product/2">
            <div className="urun product-urun">
              <img src={Recent1} alt="" />
              <h1 className="urun-adi">Air Jordan 1 Mid</h1>
              <h2>145 €</h2>
            </div>
            </Link>
            <Link to="/product/2">
            <div className="urun product-urun">
              <img src={Recent1} alt="" />
              <h1 className="urun-adi">Air Jordan 1 Mid</h1>
              <h2>145 €</h2>
            </div>
            </Link>
            <Link to="/product/2">
            <div className="urun product-urun">
              <img src={Recent1} alt="" />
              <h1 className="urun-adi">Air Jordan 1 Mid</h1>
              <h2>145 €</h2>
            </div>
            </Link>
            
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Product);
