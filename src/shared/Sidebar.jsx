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
import Search from "./Search"

function Sidebar({logged,openPopup}) {

   
    const [isDropdown, setIsDropDown] = useState(false)

    return (
        <div className="Sidebar">        
            <div className="sidebar-top">
                <div className="left-side">
                    <Link to="/">
                    <img src={SidebarLogo} alt=""/>
                    </Link>
                </div>
                <div className="right-side">
                <img src={SideBarSearch} alt="" className="search-header-icon"/>
                <img src={CloseIcon} alt=""  onClick={e=>{
                    document.querySelector(".Sidebar").classList.remove("active")
                }}/>
                </div>
            </div>
            <div className="sidebar-body" style={logged ? {justifyContent:"space-between" } : {justifyContent:"normal"}}>
            <div className="d-flex align-items-center" style={{width:"100%"}}>

            
            {
            logged ?
            <div className="profile-con"  onClick={()=>{
                setIsDropDown(!isDropdown)
            }}>
            
                <div className="person-icon">
                    <img src={Person} 
/>
                        
    
                </div>
     
                <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.0466 2.08561L13 14.0427L2.04675 2" stroke="#7AF0D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
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
                    {logged ? <Link to="/be-seller" className="sell-button ms-auto sell-btn-side">SELL</Link>: <>
                    <button className="sign-in-button" onClick={openPopup} >sign up</button>
                    <button className="login-option " onClick={openPopup}>sign in</button></>}
              
                </div>

                </div>
                <nav>
                    <li>
                    <Link to="/store">
                        Store
                    </Link>
                    </li>
                    <li>
                        <Link to="/my-account">My Account</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                       <Link to="/customer-care">Customer Care</Link>
                    </li>
                </nav>
                
                {
                    logged ?   <button className="logout-button">log out</button> : ""
                }
               
            </div>
        </div>
    )
}

export default Sidebar
