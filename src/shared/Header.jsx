import React, { useState } from "react";
import Logo from "../assets/img/logo/Logo2Li.svg";
import SearchIcon from "../assets/svg/search-icon.svg";
import SearchIconBlue from "../assets/svg/search-icon-blue.svg";
import Person from "../assets/svg/person.svg";
import BurgerIcon from "../assets/svg/BurgerIcon.svg";
import dPerson from "../assets/svg/dropdown/person.svg";
import dSellerGraph from "../assets/svg/dropdown/seller-graph.svg";
import dMyOffer from "../assets/svg/dropdown/my-offers.svg";
import dMyOrders from "../assets/svg/dropdown/my-order.svg";
import dLogOut from "../assets/svg/dropdown/logout.svg";
import "../assets/css/header.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Header() {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [isDropdown, setIsDropDown] = useState(false);

  return (
    <div className="header" style={isLoggedIn && window.innerWidth > 768  ? {paddingRight:80}: {c:"none"}}>
      <Link to="/">
        <img src={Logo} alt="logo" className="header-logo" />
      </Link>
      <div className="right-side">
        <nav className="header-list">
          {isLoggedIn ? (
            <li>
              <Link to="/store">Shop</Link>
            </li>
          ) : (
            <li>
              <Link to="/store">Sneakers</Link>
            </li>
          )}
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
          ) : (
            <></>
          )}
          <li className="login-option">Sign In</li>
        </nav>

        <img
          src={isLoggedIn ? SearchIconBlue : SearchIcon }
          alt="Search Icon"
          className="search-header-icon"
        />
        <img
          src={BurgerIcon}
          alt="burger Icon"
          className="burger-header-icon"
          onClick={(e) => {
            document.querySelector(".Sidebar").classList.add("active");
          }}
        />
        {
            isLoggedIn ? 
            <button className="sell-button">SELL</button>
            :
            <button className="sign-in-button">Sign Up</button>
        }

        {
            isLoggedIn &&  window.innerWidth > 768  ?
            <div className="profile-con">
            
                <div className="person-icon">
                    <img src={Person} 
                    onClick={()=>{
                        setIsDropDown(!isDropdown)
                    }}/>
                </div>
                <div className="profile-dropdown" style={isDropdown ? {display:"block"} : {display:"none"}}>
                    <ul>
                        <li className="active-pd"><img src={dPerson}/><Link to="/my-account">My Account</Link></li>
                        <li><img src={dSellerGraph}/><Link to="">Seller Profile</Link></li>
                        <li><img src={dMyOffer}/><Link to="">My Offers</Link></li>
                        <li><img src={dMyOrders}/><Link to="">My Orders</Link> <div className="order-count">19</div></li>
                        <li><img src={dLogOut}/><Link to="">Logout</Link></li>
                    </ul>
                </div>
            </div>
            :
            <></>
        }
        
      </div>
    </div>
  );
}

export default Header;
