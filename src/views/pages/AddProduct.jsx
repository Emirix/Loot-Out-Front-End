import React, { Component } from "react";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import Login from "../components/Auth/Login";
import Search from "../../shared/Search";
import Sidebar from "../../shared/Sidebar";
import SignIn from "../components/Auth/SignIn";
import "../../assets/css/AddProduct.css";
import { HandleSigninPopUp } from "../../assets/js/Events/PopUp";
import DownArrow from "../../assets/svg/down-arrow-add-product.svg";
import UpArrow from "../../assets/svg/up-arrow-add-product.svg";
import InfoIcon from "../../assets/svg/info-icon.svg";
import AddProductBox from "../../assets/img/add-product-rect.png";
import AddProductBoxBorder from "../../assets/img/add-product-rect-border.png";
import Sneaker from "../components/AddProduct/Sneaker";
import AddProductShoe from "../../assets/img/add-product-shoe.png";
import AddProductBoxPic from "../../assets/img/add-product-box.png";
import AddProductDonePopUp from "../../shared/AddProductDonePopUp";
import { AddProductEvents } from "../../assets/js/Events/AddProduct";
import Sneaker1 from "../../assets/img/sneaker-add-product.png";
import Slash from "../../assets/svg/most-recent-desktop-slash.svg";
import BlueSlash from "../../assets/svg/blue-slash.svg";
import PreLegit from "../../assets/svg/prelegit.svg";

class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      dSneaker: "Choose Sneaker Model",
      
      dSize: "Choose Size",
      dOffers: "Open",
      dPrice: "Ask Price",
      isInfoWrapperOpen:false,
      isInfoWrapperOpenMd:false,
      isInfoWrapperOpenSm:false
    };
  }

  componentDidMount() {
    HandleSigninPopUp();
    AddProductEvents();
  }

  render() {
    return (
      <div className="AddProduct">
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

        <AddProductDonePopUp />

        <Header />
       
        <div className="add-product-body">
          <div className="main-heading">
            <h1 className="agabu">ADD<br class="kir"/>PRODUCT</h1>
            <img src={Slash} alt="slash" draggable="false" className=""/>
            <img src={Slash} alt="slash" draggable="false" className="d-none d-md-none d-lg-block"/>
            <img src={Slash} alt="slash" draggable="false" className=" d-none d-md-none d-lg-block"/>
          </div>
        </div>

        <div className="add-product-area">
          <form className="add-product-pure-form">
              <input type="file" id="photo" style={{display:"none"}} />
              <input type="file" id="photo2" style={{display:"none"}} />
            <div className="add-product-form-fields">
              <div
                className="input-wrapper"
                onClick={(e) => {
                  document
                    .querySelector(".drop-down-content")
                    .classList.toggle("active");
                }}
              >
                <label htmlFor="">
                  SELECT SNEAKER{" "}
                  <img
                    src={Slash}
                    className="kucuk-slash"
                    alt="slash"
                    draggable="false"
                  />
                </label>
                <div className="drop-down">
                  {this.state.dSneaker}
                  <div className="icons-wrapper">
                    <img src={UpArrow} alt="" />
                    <img src={DownArrow} alt="" />
                  </div>

                  <div className="drop-down-content">
                    <Sneaker
                      resim={Sneaker1}
                      isim="Air jordan"
                      fiyat="1250"
                      oc={(e) => {
                        // e.target.children[1].querySelector("h1").innerText
                        this.setState({
                          dSneaker: e.currentTarget.children[1].querySelector(
                            "h1"
                          ).innerText,
                        });
                        console.log(e.target);
                      }}
                    />
                    <Sneaker
                      oc={(e, data) => {
                        this.setState({
                          dSneaker: e.currentTarget.children[1].querySelector(
                            "h1"
                          ).innerText,
                        });
                      }}
                      resim={Sneaker1}
                      isim="Air jordaasdm"
                      fiyat="1250"
                    />
                    <Sneaker
                      oc={(e, data) => {
                        this.setState({
                          dSneaker: e.currentTarget.children[1].querySelector(
                            "h1"
                          ).innerText,
                        });
                      }}
                      resim={Sneaker1}
                      isim="Air jorasdsaddam"
                      fiyat="1250"
                    />
                  </div>
                </div>
              </div>

              <div
                className="input-wrapper"
                onClick={(e) => {
                  this.setState({ dSize: e.target.innerText });
                  document
                    .querySelector("#dropdown-content-2")
                    .classList.toggle("active");
                }}
              >
                <label htmlFor="">
                  SELECT SIZE{" "}
                  <img
                    src={Slash}
                    className="kucuk-slash"
                    alt="slash"
                    draggable="false"
                  />
                </label>
                <div className="drop-down ">
                  {this.state.dSize}
                  <div className="icons-wrapper">
                    <img src={UpArrow} alt="" />
                    <img src={DownArrow} alt="" />

                    <div className="drop-down-content" id="dropdown-content-2">
                      <div
                        className="size"
                        onClick={(e) => {
                          this.setState({ dSize: e.target.innerText });
                        }}
                      >
                        buyuk boyut
                      </div>
                      <div className="size dc-1">küçük boyut</div>
                      <div className="size dc-1">xll boyut</div>
                      
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="input-wrapper"
                onClick={(e) => {
                  document
                    .querySelector("#dropdown-content-3")
                    .classList.toggle("active");
                }}
              >
                <label htmlFor="">
                  OFFERS{" "}
                  <img
                    src={Slash}
                    className="kucuk-slash"
                    alt="slash"
                    draggable="false"
                  />
                </label>
                <div className="drop-down">
                  {this.state.dOffers}
                  <div className="icons-wrapper">
                    <img src={UpArrow} alt="" />
                    <img src={DownArrow} alt="" />

                    <div className="drop-down-content" id="dropdown-content-3">
                      <div
                        className="size dc-2"
                        onClick={(e) => {
                          this.setState({ dOffers: e.target.innerText });
                        }}
                      >
                        Open
                      </div>
                      <div
                        className="size dc-2"
                        onClick={(e) => {
                          this.setState({ dOffers: e.target.innerText });
                        }}
                      >
                        Close
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="input-wrapper">
                <label htmlFor="">
                  PRICE YOU ASK{" "}
                  <img
                    src={Slash}
                    className="kucuk-slash"
                    alt="slash"
                    draggable="false"
                  />
                </label>
                <input type="text" placeholder="Ask Price" />
              </div>

              <input
                type="submit"
                value="ADD PRODUCT"
                className="submit-button"
              />
            </div>
            <div className="add-product-form-media">
              <div className="main-heading d-block d-md-none d-lg-block">
                <h1 className="pibu">ADD PICTURE  <img src={Slash} alt="slash" /></h1>
               
              </div>
              <div className="boxes">
                <div className="box-wrapper">
                  <div className="box">
                    <label for="photo2" className="upload-photo-btn">
                      <svg
                        width="35"
                        height="29"
                        viewBox="0 0 35 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 10.875C14.6003 10.875 12.25 13.3103 12.25 16.3125C12.25 19.3158 14.6003 21.75 17.5 21.75C20.399 21.75 22.75 19.3158 22.75 16.3125C22.75 13.3103 20.399 10.875 17.5 10.875ZM31.5 5.4375H27.3C26.7225 5.4375 26.1002 4.9735 25.9179 4.40583L24.8321 1.03131C24.6491 0.464 24.0275 0 23.45 0H11.55C10.9725 0 10.3502 0.464 10.1679 1.03167L9.08215 4.40619C8.8991 4.9735 8.2775 5.4375 7.7 5.4375H3.5C1.575 5.4375 0 7.06875 0 9.0625V25.375C0 27.3688 1.575 29 3.5 29H31.5C33.425 29 35 27.3688 35 25.375V9.0625C35 7.06875 33.425 5.4375 31.5 5.4375ZM17.5 25.375C12.6676 25.375 8.75 21.3175 8.75 16.3125C8.75 11.3078 12.6676 7.25 17.5 7.25C22.3317 7.25 26.25 11.3078 26.25 16.3125C26.25 21.3175 22.3317 25.375 17.5 25.375ZM30.275 11.5975C29.5988 11.5975 29.05 11.0298 29.05 10.3287C29.05 9.62836 29.5988 9.05996 30.275 9.05996C30.9519 9.05996 31.5 9.62836 31.5 10.3287C31.5 11.0298 30.9515 11.5975 30.275 11.5975Z"
                          fill="white"
                        />
                      </svg>
                    </label>
                    <div className="image-wrapper">
                      <svg
                        width="105"
                        height="62"
                        viewBox="0 0 105 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M63.5703 4.11934C63.5703 4.11934 60.6415 32.1374 6.45086 40.3535C-9.86968 53.625 36.9984 59.1028 36.9984 59.1028C36.9984 59.1028 53.7371 59.7344 60.8506 56.5751C67.9641 53.4157 82.1923 64.1583 100.395 54.0473C100.395 54.0473 103.743 53.2052 101.231 44.1457C98.7195 35.0862 93.071 21.816 91.8164 8.75496C91.8164 8.75496 87.6317 7.06939 78.0076 8.9655C68.3836 10.8616 66.9186 -0.515042 63.5703 4.11934Z"
                          stroke="white"
                          stroke-width="5"
                          stroke-miterlimit="10"
                        />
                        <g clip-path="url(#clip0)">
                          <path
                            d="M55 39.0009C55 39.0009 88.7433 36.4843 86.9286 25.0731C85.114 13.6618 76.2248 25.0731 76.2248 25.0731C76.2248 25.0731 66.2481 36.5782 55 39.0009Z"
                            fill="#7AF0D1"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="32"
                              height="19"
                              fill="white"
                              transform="translate(55 20)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <p>APPEARANCE</p>
                </div>

                <div className="box-wrapper" >
                  <div className="box">
                    <div className="image-wrapper">
                      <svg
                        width="87"
                        height="72"
                        viewBox="0 0 87 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path
                            d="M83.4546 22.2597H3.54548C1.37295 22.2597 -0.0918688 20.0524 0.766344 18.0699L7.58035 2.33044C8.05828 1.22739 9.15086 0.513306 10.3595 0.513306H76.4235C77.6195 0.513306 78.704 1.2137 79.1888 2.2985L86.22 18.0379C87.1069 20.0239 85.6421 22.2597 83.4546 22.2597Z"
                            stroke="white"
                            stroke-width="5"
                            stroke-miterlimit="10"
                          />
                          <path
                            d="M86.1556 35.2454H0.844439C0.506668 35.2454 0.232086 34.9739 0.232086 34.6374V19.7763L1.45679 20.6432V34.0294H85.5444V20.7938L86.7691 20.2839V34.6374C86.7679 34.9739 86.4945 35.2454 86.1556 35.2454Z"
                            fill="white"
                          />
                          <path
                            d="M85.0963 34.8519H1.90372V71.4867H85.0963V34.8519Z"
                            stroke="white"
                            stroke-width="4"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M37.1994 65.9919H7.93519C7.39407 65.9919 6.9552 65.5562 6.9552 65.0189V54.1423C6.9552 53.6051 7.39407 53.1693 7.93519 53.1693H37.1994C37.7406 53.1693 38.1794 53.6051 38.1794 54.1423V65.0189C38.1794 65.5562 37.7406 65.9919 37.1994 65.9919Z"
                            fill="#7AF0D1"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="87" height="72" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <label for="photo" className="upload-photo-btn">
                      <svg
                        width="35"
                        height="29"
                        viewBox="0 0 35 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 10.875C14.6003 10.875 12.25 13.3103 12.25 16.3125C12.25 19.3158 14.6003 21.75 17.5 21.75C20.399 21.75 22.75 19.3158 22.75 16.3125C22.75 13.3103 20.399 10.875 17.5 10.875ZM31.5 5.4375H27.3C26.7225 5.4375 26.1002 4.9735 25.9179 4.40583L24.8321 1.03131C24.6491 0.464 24.0275 0 23.45 0H11.55C10.9725 0 10.3502 0.464 10.1679 1.03167L9.08215 4.40619C8.8991 4.9735 8.2775 5.4375 7.7 5.4375H3.5C1.575 5.4375 0 7.06875 0 9.0625V25.375C0 27.3688 1.575 29 3.5 29H31.5C33.425 29 35 27.3688 35 25.375V9.0625C35 7.06875 33.425 5.4375 31.5 5.4375ZM17.5 25.375C12.6676 25.375 8.75 21.3175 8.75 16.3125C8.75 11.3078 12.6676 7.25 17.5 7.25C22.3317 7.25 26.25 11.3078 26.25 16.3125C26.25 21.3175 22.3317 25.375 17.5 25.375ZM30.275 11.5975C29.5988 11.5975 29.05 11.0298 29.05 10.3287C29.05 9.62836 29.5988 9.05996 30.275 9.05996C30.9519 9.05996 31.5 9.62836 31.5 10.3287C31.5 11.0298 30.9515 11.5975 30.275 11.5975Z"
                          fill="white"
                        />
                      </svg>
                    </label>
                  </div>
                  <p>
                    Box condıtıon <span>(ıf necessery)</span>
                  </p>
                </div>
              
                <div className="pre-legit-mobile d-inline-block d-sm-none d-md-none">
                <div className="info-icon-wrapper" onClick={()=>{
                  this.setState({isInfoWrapperOpenSm:!this.state.isInfoWrapperOpenSm})
              }}>
                <img src={InfoIcon} alt="" />
                <img src={DownArrow} alt="" />
                {this.state.isInfoWrapperOpenSm ? 
                <div className="pre-legit-mobile-text">
                  We Are Going To Pre-Legit Check Your Shoe Before Adding It to Our Inventory, If You Think Your Box Has some major/minor Damages please upload its picture and let us to decide if it would pass our quality cotnrol test or not
                </div> : "" }

              </div> 
                </div>


                <div className="pre-legit-res d-none d-md-block d-xl-none">
                <div className="info-icon-wrapper" onClick={()=>{
                  this.setState({isInfoWrapperOpenMd:!this.state.isInfoWrapperOpenMd})
              }}>
                <img src={InfoIcon} alt="" />
                <img src={DownArrow} alt="" />
              </div>
                {this.state.isInfoWrapperOpenMd ? <>
                <div className="pre-legit__title">PRE-LEGIT</div>
                <p>We Are Going To Pre-Legit Check Your Shoe Due To Appearance Before Adding It To Our Inventory Please Be Sure That Your Pictures Are Clear And Not Blurred. If You Think Your Box Has Some Major/Minor Damages Pelase Upload Its Picture And Let Us To Decide If They Would Pass Our Quality Control Test or Not.</p>
               </> : ""}
                </div>
              </div>
              <div className="info-icon-wrapper d-none d-xl-flex" onClick={()=>{
                  this.setState({isInfoWrapperOpen:!this.state.isInfoWrapperOpen})
              }}>
                <img src={InfoIcon} alt="" />
                <img src={DownArrow} alt="" />
              </div>
             {this.state.isInfoWrapperOpen ?
              <div className="info-wrapper ">
                <div className="info-wrapper-content">
                  <img src={AddProductBox} alt="" />
                  <img src={AddProductBoxBorder} alt="" />
                  <div className="presentation">
                    <p>
                      We Are Going To Pre-Legit Check Your Shoe Due To
                      Appearance Before Adding It To Our Inventory Please Be
                      Sure That Your Pictures Are Clear And Not Blurred. If You
                      Think Your Box Has Some Major/Minor Damages Pelase Upload
                      Its Picture And Let Us To Decide If They Would Pass Our
                      Quality Control Test or Not.
                    </p>
                  </div>
                </div>
                <div className="button-wrapper">
                <img src={PreLegit} alt="" />
                  <p className="d-flex"><img src={BlueSlash}/></p>
                </div>
              </div>
              : ""
              }
            </div>
          </form>
        </div>
       
        <Footer />
      </div>
    );
  }
}

export default AddProduct;
