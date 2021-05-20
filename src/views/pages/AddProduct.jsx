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
       
        <div className="add-product-body mt-5">
          <div className="main-heading">

          <svg className="d-md-none mb-4" viewBox="0 0 338 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M337 23L316 45" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M327 23L307 45" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M317 23L297 45" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M307 23L286 45" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M298 23L276 45" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M288 23L266 45" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M277 23L256 45" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M267 23L247 45" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M257 23L237 45" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M247 23L227 45" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M238 23L217 45" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M5.616 13.672V10.072H22.032V13.672H5.616ZM0.24 16L10.536 0.639999H17.208L27.6 16H21L12.096 2.248H15.672L6.84 16H0.24ZM46.8038 0.639999C48.9638 0.639999 50.7478 0.847999 52.1558 1.264C53.5638 1.68 54.6678 2.248 55.4678 2.968C56.2678 3.688 56.8278 4.512 57.1478 5.44C57.4838 6.352 57.6518 7.312 57.6518 8.32C57.6518 9.328 57.4678 10.296 57.0998 11.224C56.7318 12.136 56.1238 12.952 55.2758 13.672C54.4438 14.392 53.3318 14.96 51.9398 15.376C50.5638 15.792 48.8518 16 46.8038 16H29.5238V0.639999H46.8038ZM35.5238 11.2H46.5638C47.4598 11.2 48.2198 11.144 48.8438 11.032C49.4678 10.904 49.9638 10.72 50.3318 10.48C50.7158 10.24 50.9878 9.944 51.1478 9.592C51.3238 9.224 51.4118 8.8 51.4118 8.32C51.4118 7.84 51.3238 7.424 51.1478 7.072C50.9878 6.704 50.7158 6.4 50.3318 6.16C49.9638 5.92 49.4678 5.744 48.8438 5.632C48.2198 5.504 47.4598 5.44 46.5638 5.44H35.5238V11.2ZM78.0459 0.639999C80.2059 0.639999 81.9899 0.847999 83.3979 1.264C84.8059 1.68 85.9099 2.248 86.7099 2.968C87.5099 3.688 88.0699 4.512 88.3899 5.44C88.7259 6.352 88.8939 7.312 88.8939 8.32C88.8939 9.328 88.7099 10.296 88.3419 11.224C87.9739 12.136 87.3659 12.952 86.5179 13.672C85.6859 14.392 84.5739 14.96 83.1819 15.376C81.8059 15.792 80.0939 16 78.0459 16H60.7659V0.639999H78.0459ZM66.7659 11.2H77.8059C78.7019 11.2 79.4619 11.144 80.0859 11.032C80.7099 10.904 81.2059 10.72 81.5739 10.48C81.9579 10.24 82.2299 9.944 82.3899 9.592C82.5659 9.224 82.6539 8.8 82.6539 8.32C82.6539 7.84 82.5659 7.424 82.3899 7.072C82.2299 6.704 81.9579 6.4 81.5739 6.16C81.2059 5.92 80.7099 5.744 80.0859 5.632C79.4619 5.504 78.7019 5.44 77.8059 5.44H66.7659V11.2ZM7.248 41.04V36.84H19.224C19.704 36.84 20.104 36.768 20.424 36.624C20.76 36.464 20.928 36.136 20.928 35.64C20.928 35.128 20.76 34.8 20.424 34.656C20.104 34.512 19.704 34.44 19.224 34.44H7.632V45H1.632V29.64H18.288C19.488 29.64 20.608 29.728 21.648 29.904C22.704 30.064 23.624 30.36 24.408 30.792C25.192 31.224 25.808 31.832 26.256 32.616C26.704 33.4 26.928 34.408 26.928 35.64C26.928 36.872 26.704 37.848 26.256 38.568C25.808 39.288 25.192 39.824 24.408 40.176C23.624 40.528 22.704 40.76 21.648 40.872C20.608 40.984 19.488 41.04 18.288 41.04H7.248ZM29.9222 45V29.64H48.4742C49.9302 29.64 51.2342 29.808 52.3862 30.144C53.5542 30.464 54.4742 31.008 55.1462 31.776C55.8342 32.544 56.1782 33.592 56.1782 34.92C56.1782 35.8 56.0182 36.528 55.6982 37.104C55.3782 37.68 54.9382 38.128 54.3782 38.448C53.8182 38.768 53.1782 39 52.4582 39.144C51.7382 39.288 50.9862 39.376 50.2022 39.408L48.4502 39.072C50.3542 39.088 51.8182 39.168 52.8422 39.312C53.8822 39.456 54.6022 39.72 55.0022 40.104C55.4182 40.472 55.6262 41.008 55.6262 41.712V45H49.6262V42.432C49.6262 41.952 49.5302 41.592 49.3382 41.352C49.1622 41.096 48.7622 40.92 48.1382 40.824C47.5302 40.728 46.5862 40.68 45.3062 40.68H35.9222V45H29.9222ZM35.9222 36.672H48.4742C48.9542 36.672 49.3542 36.592 49.6742 36.432C50.0102 36.272 50.1782 35.968 50.1782 35.52C50.1782 35.104 50.0102 34.824 49.6742 34.68C49.3542 34.52 48.9542 34.44 48.4742 34.44H35.9222V36.672ZM73.7803 45.48C70.2923 45.48 67.4843 45.176 65.3563 44.568C63.2283 43.944 61.6763 43.032 60.7003 41.832C59.7403 40.616 59.2603 39.112 59.2603 37.32C59.2603 35.528 59.7403 34.032 60.7003 32.832C61.6763 31.616 63.2283 30.704 65.3563 30.096C67.4843 29.472 70.2923 29.16 73.7803 29.16C77.2683 29.16 80.0763 29.472 82.2043 30.096C84.3323 30.704 85.8763 31.616 86.8363 32.832C87.8123 34.032 88.3003 35.528 88.3003 37.32C88.3003 39.112 87.8123 40.616 86.8363 41.832C85.8763 43.032 84.3323 43.944 82.2043 44.568C80.0763 45.176 77.2683 45.48 73.7803 45.48ZM73.7803 40.92C75.4283 40.92 76.8523 40.824 78.0523 40.632C79.2523 40.424 80.1803 40.064 80.8363 39.552C81.4923 39.024 81.8203 38.28 81.8203 37.32C81.8203 36.36 81.4923 35.624 80.8363 35.112C80.1803 34.584 79.2523 34.224 78.0523 34.032C76.8523 33.824 75.4283 33.72 73.7803 33.72C72.1323 33.72 70.6843 33.824 69.4363 34.032C68.2043 34.224 67.2363 34.584 66.5323 35.112C65.8443 35.624 65.5003 36.36 65.5003 37.32C65.5003 38.28 65.8443 39.024 66.5323 39.552C67.2363 40.064 68.2043 40.424 69.4363 40.632C70.6843 40.824 72.1323 40.92 73.7803 40.92ZM108.702 29.64C110.862 29.64 112.646 29.848 114.054 30.264C115.462 30.68 116.566 31.248 117.366 31.968C118.166 32.688 118.726 33.512 119.046 34.44C119.382 35.352 119.55 36.312 119.55 37.32C119.55 38.328 119.366 39.296 118.998 40.224C118.63 41.136 118.022 41.952 117.174 42.672C116.342 43.392 115.23 43.96 113.838 44.376C112.462 44.792 110.75 45 108.702 45H91.4222V29.64H108.702ZM97.4222 40.2H108.462C109.358 40.2 110.118 40.144 110.742 40.032C111.366 39.904 111.862 39.72 112.23 39.48C112.614 39.24 112.886 38.944 113.046 38.592C113.222 38.224 113.31 37.8 113.31 37.32C113.31 36.84 113.222 36.424 113.046 36.072C112.886 35.704 112.614 35.4 112.23 35.16C111.862 34.92 111.366 34.744 110.742 34.632C110.118 34.504 109.358 34.44 108.462 34.44H97.4222V40.2ZM144.24 36.24V29.64H150.24V37.32C150.24 38.68 149.984 39.84 149.472 40.8C148.976 41.744 148.28 42.528 147.384 43.152C146.488 43.76 145.456 44.232 144.288 44.568C143.12 44.904 141.864 45.136 140.52 45.264C139.192 45.408 137.84 45.48 136.464 45.48C135.008 45.48 133.6 45.408 132.24 45.264C130.88 45.136 129.616 44.904 128.448 44.568C127.296 44.232 126.288 43.76 125.424 43.152C124.56 42.528 123.88 41.744 123.384 40.8C122.904 39.84 122.664 38.68 122.664 37.32V29.64H128.664V36.24C128.664 37.52 128.976 38.496 129.6 39.168C130.224 39.84 131.112 40.304 132.264 40.56C133.432 40.8 134.832 40.92 136.464 40.92C138.048 40.92 139.424 40.8 140.592 40.56C141.76 40.304 142.656 39.84 143.28 39.168C143.92 38.496 144.24 37.52 144.24 36.24ZM182.042 38.592C181.962 40.112 181.41 41.384 180.386 42.408C179.362 43.432 177.85 44.2 175.85 44.712C173.866 45.224 171.354 45.48 168.314 45.48C165.994 45.48 163.914 45.352 162.074 45.096C160.234 44.856 158.666 44.44 157.37 43.848C156.074 43.24 155.082 42.416 154.394 41.376C153.706 40.336 153.362 39.024 153.362 37.44C153.362 35.856 153.706 34.536 154.394 33.48C155.082 32.408 156.074 31.56 157.37 30.936C158.666 30.296 160.234 29.84 162.074 29.568C163.914 29.296 165.994 29.16 168.314 29.16C171.354 29.16 173.874 29.44 175.874 30C177.874 30.544 179.386 31.352 180.41 32.424C181.434 33.496 181.986 34.8 182.066 36.336H175.826C175.634 35.824 175.282 35.376 174.77 34.992C174.258 34.592 173.49 34.28 172.466 34.056C171.442 33.832 170.058 33.72 168.314 33.72C166.266 33.72 164.602 33.848 163.322 34.104C162.042 34.344 161.106 34.736 160.514 35.28C159.922 35.824 159.626 36.544 159.626 37.44C159.626 38.256 159.922 38.92 160.514 39.432C161.106 39.944 162.042 40.32 163.322 40.56C164.602 40.8 166.266 40.92 168.314 40.92C170.058 40.92 171.434 40.816 172.442 40.608C173.466 40.4 174.234 40.12 174.746 39.768C175.258 39.4 175.61 39.008 175.802 38.592H182.042ZM183.767 29.64H208.727V34.2H183.767V29.64ZM193.247 33.888H199.247V45H193.247V33.888Z" fill="white"/>
</svg>



          <svg className="add-produt-title d-md-block d-none mb-4" viewBox="0 0 1001 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M999.787 3L963.117 31.1352" stroke="url(#paint0_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M788.166 3.00629L751.496 31.1415" stroke="url(#paint1_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M805.668 3L768.998 31.1352" stroke="url(#paint2_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M982.286 3.00629L945.615 31.1415" stroke="url(#paint3_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M964.784 3.00629L928.113 31.1477" stroke="url(#paint4_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M770.665 3.00629L733.994 31.1477" stroke="url(#paint5_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M947.291 3.01181L910.612 31.1532" stroke="url(#paint6_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M929.789 3.01889L893.111 31.1541" stroke="url(#paint7_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M753.172 3.01181L716.493 31.1532" stroke="url(#paint8_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M912.288 3.02518L875.618 31.1604" stroke="url(#paint9_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M894.787 3.03067L858.117 31.1659" stroke="url(#paint10_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M877.294 3.03696L840.615 31.1721" stroke="url(#paint11_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M859.792 3.04404L823.113 31.1793" stroke="url(#paint12_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M842.291 3.04404L805.612 31.1854" stroke="url(#paint13_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M824.789 3.05035L788.119 31.1917" stroke="url(#paint14_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M735.67 3.01889L698.991 31.1541" stroke="url(#paint15_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M718.169 3.02518L681.499 31.1604" stroke="url(#paint16_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M700.668 3.03067L663.998 31.1659" stroke="url(#paint17_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M683.175 3.03696L646.496 31.1721" stroke="url(#paint18_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M665.673 3.04404L628.994 31.1792" stroke="url(#paint19_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M630.67 3.05093L594 31.1923" stroke="url(#paint20_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M648.172 3.04404L611.493 31.1854" stroke="url(#paint21_linear)" stroke-width="2" stroke-miterlimit="10"/>
<path d="M10.764 26.538V19.638H42.228V26.538H10.764ZM0.46 31L20.194 1.56H32.982L52.9 31H40.25L23.184 4.642H30.038L13.11 31H0.46ZM89.7072 1.56C93.8472 1.56 97.2665 1.95866 99.9652 2.756C102.664 3.55333 104.78 4.642 106.313 6.022C107.847 7.402 108.92 8.98133 109.533 10.76C110.177 12.508 110.499 14.348 110.499 16.28C110.499 18.212 110.147 20.0673 109.441 21.846C108.736 23.594 107.571 25.158 105.945 26.538C104.351 27.918 102.219 29.0067 99.5512 29.804C96.9139 30.6013 93.6325 31 89.7072 31H56.5872V1.56H89.7072ZM68.0872 21.8H89.2472C90.9645 21.8 92.4212 21.6927 93.6172 21.478C94.8132 21.2327 95.7639 20.88 96.4692 20.42C97.2052 19.96 97.7265 19.3927 98.0332 18.718C98.3705 18.0127 98.5392 17.2 98.5392 16.28C98.5392 15.36 98.3705 14.5627 98.0332 13.888C97.7265 13.1827 97.2052 12.6 96.4692 12.14C95.7639 11.68 94.8132 11.3427 93.6172 11.128C92.4212 10.8827 90.9645 10.76 89.2472 10.76H68.0872V21.8ZM149.588 1.56C153.728 1.56 157.147 1.95866 159.846 2.756C162.545 3.55333 164.661 4.642 166.194 6.022C167.727 7.402 168.801 8.98133 169.414 10.76C170.058 12.508 170.38 14.348 170.38 16.28C170.38 18.212 170.027 20.0673 169.322 21.846C168.617 23.594 167.451 25.158 165.826 26.538C164.231 27.918 162.1 29.0067 159.432 29.804C156.795 30.6013 153.513 31 149.588 31H116.468V1.56H149.588ZM127.968 21.8H149.128C150.845 21.8 152.302 21.6927 153.498 21.478C154.694 21.2327 155.645 20.88 156.35 20.42C157.086 19.96 157.607 19.3927 157.914 18.718C158.251 18.0127 158.42 17.2 158.42 16.28C158.42 15.36 158.251 14.5627 157.914 13.888C157.607 13.1827 157.086 12.6 156.35 12.14C155.645 11.68 154.694 11.3427 153.498 11.128C152.302 10.8827 150.845 10.76 149.128 10.76H127.968V21.8ZM201.261 23.41V15.36H224.215C225.135 15.36 225.902 15.222 226.515 14.946C227.159 14.6393 227.481 14.0107 227.481 13.06C227.481 12.0787 227.159 11.45 226.515 11.174C225.902 10.898 225.135 10.76 224.215 10.76H201.997V31H190.497V1.56H222.421C224.721 1.56 226.868 1.72867 228.861 2.066C230.885 2.37267 232.648 2.94 234.151 3.768C235.654 4.596 236.834 5.76133 237.693 7.264C238.552 8.76667 238.981 10.6987 238.981 13.06C238.981 15.4213 238.552 17.292 237.693 18.672C236.834 20.052 235.654 21.0793 234.151 21.754C232.648 22.4287 230.885 22.8733 228.861 23.088C226.868 23.3027 224.721 23.41 222.421 23.41H201.261ZM244.72 31V1.56H280.278C283.069 1.56 285.568 1.882 287.776 2.526C290.015 3.13933 291.778 4.182 293.066 5.654C294.385 7.126 295.044 9.13467 295.044 11.68C295.044 13.3667 294.737 14.762 294.124 15.866C293.511 16.97 292.667 17.8287 291.594 18.442C290.521 19.0553 289.294 19.5 287.914 19.776C286.534 20.052 285.093 20.2207 283.59 20.282L280.232 19.638C283.881 19.6687 286.687 19.822 288.65 20.098C290.643 20.374 292.023 20.88 292.79 21.616C293.587 22.3213 293.986 23.3487 293.986 24.698V31H282.486V26.078C282.486 25.158 282.302 24.468 281.934 24.008C281.597 23.5173 280.83 23.18 279.634 22.996C278.469 22.812 276.659 22.72 274.206 22.72H256.22V31H244.72ZM256.22 15.038H280.278C281.198 15.038 281.965 14.8847 282.578 14.578C283.222 14.2713 283.544 13.6887 283.544 12.83C283.544 12.0327 283.222 11.496 282.578 11.22C281.965 10.9133 281.198 10.76 280.278 10.76H256.22V15.038ZM328.781 31.92C322.096 31.92 316.714 31.3373 312.635 30.172C308.557 28.976 305.582 27.228 303.711 24.928C301.871 22.5973 300.951 19.7147 300.951 16.28C300.951 12.8453 301.871 9.978 303.711 7.678C305.582 5.34733 308.557 3.59933 312.635 2.434C316.714 1.238 322.096 0.639999 328.781 0.639999C335.467 0.639999 340.849 1.238 344.927 2.434C349.006 3.59933 351.965 5.34733 353.805 7.678C355.676 9.978 356.611 12.8453 356.611 16.28C356.611 19.7147 355.676 22.5973 353.805 24.928C351.965 27.228 349.006 28.976 344.927 30.172C340.849 31.3373 335.467 31.92 328.781 31.92ZM328.781 23.18C331.94 23.18 334.669 22.996 336.969 22.628C339.269 22.2293 341.048 21.5393 342.305 20.558C343.563 19.546 344.191 18.12 344.191 16.28C344.191 14.44 343.563 13.0293 342.305 12.048C341.048 11.036 339.269 10.346 336.969 9.978C334.669 9.57933 331.94 9.38 328.781 9.38C325.623 9.38 322.847 9.57933 320.455 9.978C318.094 10.346 316.239 11.036 314.889 12.048C313.571 13.0293 312.911 14.44 312.911 16.28C312.911 18.12 313.571 19.546 314.889 20.558C316.239 21.5393 318.094 22.2293 320.455 22.628C322.847 22.996 325.623 23.18 328.781 23.18ZM395.715 1.56C399.855 1.56 403.274 1.95866 405.973 2.756C408.672 3.55333 410.788 4.642 412.321 6.022C413.854 7.402 414.928 8.98133 415.541 10.76C416.185 12.508 416.507 14.348 416.507 16.28C416.507 18.212 416.154 20.0673 415.449 21.846C414.744 23.594 413.578 25.158 411.953 26.538C410.358 27.918 408.227 29.0067 405.559 29.804C402.922 30.6013 399.64 31 395.715 31H362.595V1.56H395.715ZM374.095 21.8H395.255C396.972 21.8 398.429 21.6927 399.625 21.478C400.821 21.2327 401.772 20.88 402.477 20.42C403.213 19.96 403.734 19.3927 404.041 18.718C404.378 18.0127 404.547 17.2 404.547 16.28C404.547 15.36 404.378 14.5627 404.041 13.888C403.734 13.1827 403.213 12.6 402.477 12.14C401.772 11.68 400.821 11.3427 399.625 11.128C398.429 10.8827 396.972 10.76 395.255 10.76H374.095V21.8ZM463.83 14.21V1.56H475.33V16.28C475.33 18.8867 474.839 21.11 473.858 22.95C472.907 24.7593 471.573 26.262 469.856 27.458C468.139 28.6233 466.161 29.528 463.922 30.172C461.683 30.816 459.276 31.2607 456.7 31.506C454.155 31.782 451.563 31.92 448.926 31.92C446.135 31.92 443.437 31.782 440.83 31.506C438.223 31.2607 435.801 30.816 433.562 30.172C431.354 29.528 429.422 28.6233 427.766 27.458C426.11 26.262 424.807 24.7593 423.856 22.95C422.936 21.11 422.476 18.8867 422.476 16.28V1.56H433.976V14.21C433.976 16.6633 434.574 18.534 435.77 19.822C436.966 21.11 438.668 21.9993 440.876 22.49C443.115 22.95 445.798 23.18 448.926 23.18C451.962 23.18 454.599 22.95 456.838 22.49C459.077 21.9993 460.794 21.11 461.99 19.822C463.217 18.534 463.83 16.6633 463.83 14.21ZM536.283 18.718C536.129 21.6313 535.071 24.0693 533.109 26.032C531.146 27.9947 528.248 29.4667 524.415 30.448C520.612 31.4293 515.797 31.92 509.971 31.92C505.524 31.92 501.537 31.6747 498.011 31.184C494.484 30.724 491.479 29.9267 488.995 28.792C486.511 27.6267 484.609 26.0473 483.291 24.054C481.972 22.0607 481.313 19.546 481.313 16.51C481.313 13.474 481.972 10.944 483.291 8.92C484.609 6.86533 486.511 5.24 488.995 4.044C491.479 2.81733 494.484 1.94333 498.011 1.422C501.537 0.900666 505.524 0.639999 509.971 0.639999C515.797 0.639999 520.627 1.17667 524.461 2.25C528.294 3.29267 531.192 4.84133 533.155 6.896C535.117 8.95067 536.175 11.45 536.329 14.394H524.369C524.001 13.4127 523.326 12.554 522.345 11.818C521.363 11.0513 519.891 10.4533 517.929 10.024C515.966 9.59467 513.313 9.38 509.971 9.38C506.045 9.38 502.856 9.62533 500.403 10.116C497.949 10.576 496.155 11.3273 495.021 12.37C493.886 13.4127 493.319 14.7927 493.319 16.51C493.319 18.074 493.886 19.3467 495.021 20.328C496.155 21.3093 497.949 22.03 500.403 22.49C502.856 22.95 506.045 23.18 509.971 23.18C513.313 23.18 515.951 22.9807 517.883 22.582C519.845 22.1833 521.317 21.6467 522.299 20.972C523.28 20.2667 523.955 19.5153 524.323 18.718H536.283ZM539.589 1.56H587.429V10.3H539.589V1.56ZM557.759 9.702H569.259V31H557.759V9.702Z" fill="url(#paint22_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="981.452" y1="3" x2="981.452" y2="31.1352" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="769.831" y1="3.00629" x2="769.831" y2="31.1415" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="787.333" y1="3" x2="787.333" y2="31.1352" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="963.951" y1="3.00629" x2="963.951" y2="31.1415" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint4_linear" x1="946.448" y1="3.00629" x2="946.448" y2="31.1477" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint5_linear" x1="752.33" y1="3.00629" x2="752.33" y2="31.1477" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint6_linear" x1="928.951" y1="3.01181" x2="928.951" y2="31.1532" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint7_linear" x1="911.45" y1="3.01889" x2="911.45" y2="31.1541" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint8_linear" x1="734.833" y1="3.01181" x2="734.833" y2="31.1532" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint9_linear" x1="893.953" y1="3.02518" x2="893.953" y2="31.1604" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint10_linear" x1="876.452" y1="3.03067" x2="876.452" y2="31.1659" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint11_linear" x1="858.954" y1="3.03696" x2="858.954" y2="31.1721" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint12_linear" x1="841.453" y1="3.04404" x2="841.453" y2="31.1793" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint13_linear" x1="823.951" y1="3.04404" x2="823.951" y2="31.1854" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint14_linear" x1="806.454" y1="3.05035" x2="806.454" y2="31.1917" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint15_linear" x1="717.331" y1="3.01889" x2="717.331" y2="31.1541" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint16_linear" x1="699.834" y1="3.02518" x2="699.834" y2="31.1604" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint17_linear" x1="682.333" y1="3.03067" x2="682.333" y2="31.1659" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint18_linear" x1="664.836" y1="3.03696" x2="664.836" y2="31.1721" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint19_linear" x1="647.334" y1="3.04404" x2="647.334" y2="31.1792" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint20_linear" x1="612.335" y1="3.05093" x2="612.335" y2="31.1923" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint21_linear" x1="629.832" y1="3.04404" x2="629.832" y2="31.1854" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint22_linear" x1="294.5" y1="-11" x2="294.5" y2="44" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
</defs>
</svg>

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
                <svg className="add-picture-title pibu mb-4 " viewBox="0 0 369 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.68 12.06V9.06H18.36V12.06H4.68ZM0.2 14L8.78 1.2H14.34L23 14H17.5L10.08 2.54H13.06L5.7 14H0.2ZM39.0031 1.2C40.8031 1.2 42.2898 1.37333 43.4631 1.72C44.6365 2.06667 45.5565 2.54 46.2231 3.14C46.8898 3.74 47.3565 4.42667 47.6231 5.2C47.9031 5.96 48.0431 6.76 48.0431 7.6C48.0431 8.44 47.8898 9.24667 47.5831 10.02C47.2765 10.78 46.7698 11.46 46.0631 12.06C45.3698 12.66 44.4431 13.1333 43.2831 13.48C42.1365 13.8267 40.7098 14 39.0031 14H24.6031V1.2H39.0031ZM29.6031 10H38.8031C39.5498 10 40.1831 9.95333 40.7031 9.86C41.2231 9.75333 41.6365 9.6 41.9431 9.4C42.2631 9.2 42.4898 8.95333 42.6231 8.66C42.7698 8.35333 42.8431 8 42.8431 7.6C42.8431 7.2 42.7698 6.85333 42.6231 6.56C42.4898 6.25333 42.2631 6 41.9431 5.8C41.6365 5.6 41.2231 5.45333 40.7031 5.36C40.1831 5.25333 39.5498 5.2 38.8031 5.2H29.6031V10ZM65.0383 1.2C66.8383 1.2 68.3249 1.37333 69.4983 1.72C70.6716 2.06667 71.5916 2.54 72.2583 3.14C72.9249 3.74 73.3916 4.42667 73.6583 5.2C73.9383 5.96 74.0783 6.76 74.0783 7.6C74.0783 8.44 73.9249 9.24667 73.6183 10.02C73.3116 10.78 72.8049 11.46 72.0983 12.06C71.4049 12.66 70.4783 13.1333 69.3183 13.48C68.1716 13.8267 66.7449 14 65.0383 14H50.6383V1.2H65.0383ZM55.6383 10H64.8383C65.5849 10 66.2183 9.95333 66.7383 9.86C67.2583 9.75333 67.6716 9.6 67.9783 9.4C68.2983 9.2 68.5249 8.95333 68.6583 8.66C68.8049 8.35333 68.8783 8 68.8783 7.6C68.8783 7.2 68.8049 6.85333 68.6583 6.56C68.5249 6.25333 68.2983 6 67.9783 5.8C67.6716 5.6 67.2583 5.45333 66.7383 5.36C66.2183 5.25333 65.5849 5.2 64.8383 5.2H55.6383V10ZM87.5048 10.7V7.2H97.4848C97.8848 7.2 98.2182 7.14 98.4848 7.02C98.7648 6.88667 98.9048 6.61333 98.9048 6.2C98.9048 5.77333 98.7648 5.5 98.4848 5.38C98.2182 5.26 97.8848 5.2 97.4848 5.2H87.8248V14H82.8248V1.2H96.7048C97.7048 1.2 98.6382 1.27333 99.5048 1.42C100.385 1.55333 101.152 1.8 101.805 2.16C102.458 2.52 102.972 3.02667 103.345 3.68C103.718 4.33333 103.905 5.17333 103.905 6.2C103.905 7.22667 103.718 8.04 103.345 8.64C102.972 9.24 102.458 9.68667 101.805 9.98C101.152 10.2733 100.385 10.4667 99.5048 10.56C98.6382 10.6533 97.7048 10.7 96.7048 10.7H87.5048ZM106.7 1.2H111.7V14H106.7V1.2ZM138.498 8.66C138.432 9.92667 137.972 10.9867 137.118 11.84C136.265 12.6933 135.005 13.3333 133.338 13.76C131.685 14.1867 129.592 14.4 127.058 14.4C125.125 14.4 123.392 14.2933 121.858 14.08C120.325 13.88 119.018 13.5333 117.938 13.04C116.858 12.5333 116.032 11.8467 115.458 10.98C114.885 10.1133 114.598 9.02 114.598 7.7C114.598 6.38 114.885 5.28 115.458 4.4C116.032 3.50667 116.858 2.8 117.938 2.28C119.018 1.74667 120.325 1.36667 121.858 1.14C123.392 0.913333 125.125 0.799999 127.058 0.799999C129.592 0.799999 131.692 1.03333 133.358 1.5C135.025 1.95333 136.285 2.62667 137.138 3.52C137.992 4.41333 138.452 5.5 138.518 6.78H133.318C133.158 6.35333 132.865 5.98 132.438 5.66C132.012 5.32667 131.372 5.06667 130.518 4.88C129.665 4.69333 128.512 4.6 127.058 4.6C125.352 4.6 123.965 4.70667 122.898 4.92C121.832 5.12 121.052 5.44667 120.558 5.9C120.065 6.35333 119.818 6.95333 119.818 7.7C119.818 8.38 120.065 8.93333 120.558 9.36C121.052 9.78667 121.832 10.1 122.898 10.3C123.965 10.5 125.352 10.6 127.058 10.6C128.512 10.6 129.658 10.5133 130.498 10.34C131.352 10.1667 131.992 9.93333 132.418 9.64C132.845 9.33333 133.138 9.00667 133.298 8.66H138.498ZM139.936 1.2H160.736V5H139.936V1.2ZM147.836 4.74H152.836V14H147.836V4.74ZM180.708 6.7V1.2H185.708V7.6C185.708 8.73333 185.495 9.7 185.068 10.5C184.655 11.2867 184.075 11.94 183.328 12.46C182.581 12.9667 181.721 13.36 180.748 13.64C179.775 13.92 178.728 14.1133 177.608 14.22C176.501 14.34 175.375 14.4 174.228 14.4C173.015 14.4 171.841 14.34 170.708 14.22C169.575 14.1133 168.521 13.92 167.548 13.64C166.588 13.36 165.748 12.9667 165.028 12.46C164.308 11.94 163.741 11.2867 163.328 10.5C162.928 9.7 162.728 8.73333 162.728 7.6V1.2H167.728V6.7C167.728 7.76667 167.988 8.58 168.508 9.14C169.028 9.7 169.768 10.0867 170.728 10.3C171.701 10.5 172.868 10.6 174.228 10.6C175.548 10.6 176.695 10.5 177.668 10.3C178.641 10.0867 179.388 9.7 179.908 9.14C180.441 8.58 180.708 7.76667 180.708 6.7ZM188.509 14V1.2H203.969C205.183 1.2 206.269 1.34 207.229 1.62C208.203 1.88667 208.969 2.34 209.529 2.98C210.103 3.62 210.389 4.49333 210.389 5.6C210.389 6.33333 210.256 6.94 209.989 7.42C209.723 7.9 209.356 8.27333 208.889 8.54C208.423 8.80667 207.889 9 207.289 9.12C206.689 9.24 206.063 9.31333 205.409 9.34L203.949 9.06C205.536 9.07333 206.756 9.14 207.609 9.26C208.476 9.38 209.076 9.6 209.409 9.92C209.756 10.2267 209.929 10.6733 209.929 11.26V14H204.929V11.86C204.929 11.46 204.849 11.16 204.689 10.96C204.543 10.7467 204.209 10.6 203.689 10.52C203.183 10.44 202.396 10.4 201.329 10.4H193.509V14H188.509ZM193.509 7.06H203.969C204.369 7.06 204.703 6.99333 204.969 6.86C205.249 6.72667 205.389 6.47333 205.389 6.1C205.389 5.75333 205.249 5.52 204.969 5.4C204.703 5.26667 204.369 5.2 203.969 5.2H193.509V7.06ZM218.158 8.6V10.2H233.358V14H213.158V1.2H233.318V5H218.158V6.6H230.558V8.6H218.158Z" fill="url(#paint0_linear)"/>
<path d="M347.688 1.00348L327.35 16.6078" stroke="url(#paint1_linear)" stroke-miterlimit="10"/>
<path d="M357.395 1L337.057 16.6043" stroke="url(#paint2_linear)" stroke-miterlimit="10"/>
<path d="M337.981 1.00348L317.643 16.6112" stroke="url(#paint3_linear)" stroke-miterlimit="10"/>
<path d="M328.28 1.00653L307.937 16.6143" stroke="url(#paint4_linear)" stroke-miterlimit="10"/>
<path d="M368 1.02792L347.662 16.6356" stroke="url(#paint5_linear)" stroke-miterlimit="10"/>
<path d="M318.573 1.01047L298.23 16.6148" stroke="url(#paint6_linear)" stroke-miterlimit="10"/>
<path d="M308.866 1.01395L288.528 16.6182" stroke="url(#paint7_linear)" stroke-miterlimit="10"/>
<path d="M299.16 1.01703L278.822 16.6213" stroke="url(#paint8_linear)" stroke-miterlimit="10"/>
<path d="M289.458 1.02051L269.115 16.6248" stroke="url(#paint9_linear)" stroke-miterlimit="10"/>
<path d="M279.751 1.02444L259.408 16.6288" stroke="url(#paint10_linear)" stroke-miterlimit="10"/>
<path d="M260.338 1.02835L240 16.6361" stroke="url(#paint11_linear)" stroke-miterlimit="10"/>
<path d="M270.045 1.02444L249.702 16.6322" stroke="url(#paint12_linear)" stroke-miterlimit="10"/>
<defs>
<linearGradient id="paint0_linear" x1="134" y1="-5" x2="134" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="337.519" y1="1.00348" x2="337.519" y2="16.6078" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="347.226" y1="1" x2="347.226" y2="16.6043" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="327.812" y1="1.00348" x2="327.812" y2="16.6112" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint4_linear" x1="318.108" y1="1.00653" x2="318.108" y2="16.6143" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint5_linear" x1="357.831" y1="1.02792" x2="357.831" y2="16.6356" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint6_linear" x1="308.402" y1="1.01047" x2="308.402" y2="16.6148" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint7_linear" x1="298.697" y1="1.01395" x2="298.697" y2="16.6182" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint8_linear" x1="288.991" y1="1.01703" x2="288.991" y2="16.6213" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint9_linear" x1="279.287" y1="1.02051" x2="279.287" y2="16.6248" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint10_linear" x1="269.58" y1="1.02444" x2="269.58" y2="16.6288" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint11_linear" x1="250.169" y1="1.02835" x2="250.169" y2="16.6361" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint12_linear" x1="259.873" y1="1.02444" x2="259.873" y2="16.6322" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
</defs>
</svg>

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
