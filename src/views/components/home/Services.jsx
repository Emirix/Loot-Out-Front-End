import React from 'react'
import "../../../assets/css/Emir.css"
import LogoIkon from '../../../assets/img/logo/LogoIkon.svg'

import LogoYazi from '../../../assets/img/logo/LogoYazi.svg'
import BigServiceCircleSol from '../../../assets/img/atom-sag.png'
import BigServiceCircleSag from '../../../assets/img/atom-sol.png'
import aga from "../../../assets/svg/atomx.svg"
import SmallServiceCircle from '../../../assets/img/small-circle-service.png'
import ServiceBox from '../../../assets/img/service-box.png'
import ServiceBoxBorder from '../../../assets/img/service-box-border.png'
import ServiceCard from './ServiceCard'
import AuthService from '../../../assets/svg/AuthService.svg'
import CustomService from '../../../assets/svg/CustomService.svg'
import SellFastService from '../../../assets/svg/SellFastService.svg'
import ServiceGraph from '../../../assets/svg/ServiceGraph.svg'
import ServicePolicy from '../../../assets/svg/ServicePolicy.svg'
import ServiceShipping from '../../../assets/svg/ServiceShipping.svg'
function Services({ServiceDesktopSlash}) {
    return (<>
            <div className="Services" >
             
            <img src={aga} alt="" className="left-big-service-circle" />
            <img src={aga} alt="" className="left-big-service-circle lbs-sag" />
            <img src={aga} alt="" className="left-big-service-circle lbs-sol d-none d-md-block d-lg-none" />
            <img src={aga} alt="" className="left-big-service-circle lbs-sag-2 d-none d-md-block d-lg-none" />

             <div className="services-top">
                <img src={LogoIkon} alt="" />
                <img src={LogoYazi} alt="" />
                </div>
            <div className="service-body">
                <div className="service-body-info">
                    <div className="service-body-info-left-side">
                        <button>Services</button>
                       

                    </div>
                    





                   <div className="service-body-cards-container">
                   <div className="service-body-info-cards">
                            <ServiceCard servicetype="auth" icon={AuthService} heading="Authentication Guaranteed" description="In our authentcation center, we are checking the shoes if it is fake or not with our advenced technology tools and experienced authenticators, we are being sure that sending to our customers %100 authentic shoes. " />
                            <ServiceCard servicetype="CustomerService" icon={CustomService} heading="24/7 Customer Service" description="We are providing to our sellers and buyers 24/7 customer service. Our stakeholders can ask any question on their mind comfortably to our experienced call center staffs about any topic."/>
                            <ServiceCard servicetype="GraphicService" icon={ServiceGraph} heading="Graphics" description="As First Sneaker Stock Market we are providing to our customers day by day graphics which shows value of the sneakers in their hand. We are providing these prices from the sales which made via our platform." />
                           
                            
                            <div className={`ServiceCard SellSneakers`}>
                                <img src={SellFastService} alt=""/>
                                <h3>Sell Your Sneakers Fast</h3>
                                <p>At <span className="mavi">hypestuffs.com</span> you can sell your sneakers fast and with best prices, our customer audiance is ready to buy the hype sneakers from your hand.</p>
                            </div>
                            
                            
                            <ServiceCard servicetype="policy" icon={ServicePolicy}heading="Return policy" description="If you had bad experience from our service please contact us. Our customer service will help you about your complaint. But we only accept “Returns” if we did not properly serve our service. "/>
                             <div className={`ServiceCard FreeShipping`}>
                                <img src={ServiceShipping} alt=""/>
                                <h3>Free Shipping</h3>
                                <p>In <span className="mavi">hypestuffs.com</span> buyers and sellers does not have to pay shipping prices. Sellers when they are sending their items to our “Authentication Center” they do not have to pay the shipping price. Also when we are sending the items to our customers we are not charging for shipping.</p>
                            </div>
                    </div>
                   </div>
                    <img src={ServiceBox} alt=""/>
                    <img src={ServiceBoxBorder} alt="" className="service-box-border"/>
                </div>
            </div>
        </div>
   </> )
}

export default Services
