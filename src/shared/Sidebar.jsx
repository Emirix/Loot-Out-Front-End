import React, { useState } from 'react'
import CloseIcon from '../assets/svg/close.svg'
import SideBarBackground from '../assets/svg/SideBarBackground.svg'
import SideBarSearch from '../assets/svg/SideBarSearch.svg'
import SidebarLogo from '../assets/img/logo/Logo2Li.svg'
import {Link} from "react-router-dom"
import Person from "../assets/svg/person.svg";
import BurgerIcon from "../assets/svg/BurgerIcon.svg";
import dPerson from "../assets/svg/dropdown/person.svg";
import dSellerGraph from "../assets/svg/dropdown/seller-graph.svg";
import dMyOffer from "../assets/svg/dropdown/my-offers.svg";
import dMyOrders from "../assets/svg/dropdown/my-order.svg";
import dLogOut from "../assets/svg/dropdown/logout.svg";

function Sidebar() {

    const [isLoggedIn, setLoggedIn] = useState(false)
    const [isDropdown, setIsDropDown] = useState(false)

    return (
        <div className="Sidebar">
            <div className="sidebar-top">
                <div className="left-side">
                    <img src={SidebarLogo} alt=""/>
                </div>
                <div className="right-side">
                <img src={SideBarSearch} alt=""/>
                <img src={CloseIcon} alt=""  onClick={e=>{
                    document.querySelector(".Sidebar").classList.remove("active")
                }}/>
                </div>
            </div>
            <div className="sidebar-body">
            <div className="d-flex" style={{width:"100%"}}>

            
            {
            isLoggedIn ?
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
        
                <div className="auth-buttons ms-auto">
                    {isLoggedIn ? "": <>
                    <button className="sign-in-button">sign up</button>
                <button className="login-option ">sign in</button></>}
              
                </div>

                </div>
                <nav>
                    <li>
                        Store
                    </li>
                    <li>
                        <Link to="/my-account">My Account</Link>
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Customer Care
                    </li>
                </nav>
                
                {
                    isLoggedIn ?   <button className="logout-button">log out</button> : ""
                }
               
            </div>
        </div>
    )
}

export default Sidebar
