import React from 'react'
import Footer from '../../shared/Footer'
import Header from '../../shared/Header'
import Sidebar from '../../shared/Sidebar'
import Zil from "../../assets/svg/zil.svg"
import Pano from "../../assets/svg/pano.svg"
import Box from "../../assets/svg/box.svg"
import Money from "../../assets/svg/money.svg"
import GuideBox from "../../assets/svg/guide-box.svg"
import HeadPhone from "../../assets/svg/headphone.svg"
import {Link} from "react-router-dom"
export default function Sellerguide() {
    return (
        <div className="container-fluid ">
            <Header/>
      <Sidebar/>
            <div className="container text-center">
                <h1 className="title-slash text-white d-flex justify-content-center mt-5 ">SELLER GUIDE</h1>
                <div className="guide-box">
                
                    <div className="guide">
                        <img src={Zil} alt="zil" />
                        <p>When Your Item Sold Or Bidded We are going to notifty you via e-mail or whatsapp with free cargo code. You Need To Give Product To Cargo In 3 Days</p>
                    </div>

                    <div className="guide">
                        <img src={Pano} alt="zil" />
                        <p>We Are only Accepting Authentic and Deadstock Shoes otherwise We Are Going To Send Your Shoes Back With Reverse Cargo Fee </p>
                    </div>

                    <div className="guide">
                        <img src={Box} alt="zil" />
                        <p>Always Double Box Your Shoe Boxes While Sending We Are Not Accepting Damaged Box Pairs. (Lightly Damaged Boxes Accepted)</p>
                    </div>

                    <div className="guide">
                        <img src={Money} alt="zil" />
                        <p>We are going to transfer money to your bank account after we authenticate your sneaker.</p>
                    </div>

                    <div className="guide">
                        <img src={HeadPhone} alt="zil" />
                        <p>If you have any questions contact with us via <br/><br/><span className="tel-no">444 25 25</span></p>
                    </div>
                </div>

                <Link to="/" >UNDERSTAND!</Link>

            </div>
            <Footer/>
        </div>
    )
}
