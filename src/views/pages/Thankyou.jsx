import Header from "../../shared/Header"
import Footer  from "../../shared/Footer"
import Check from "../../assets/svg/check.svg"
import {Link} from "react-router-dom"

export default function Thankyou(){
    return(
        <div className="container-fluid">
            <Header/>
            <div className="container thankyou-container ">
                <img src={Check}/>
                <h1>ORDER COMPLETED</h1>
                <p>Thanks for your shoppıng your order ıs on ıts way.
Stay drıpped, stay hype.</p>
            <Link to="/">HOMEPAGE</Link>
            </div>
            <Footer/>
        </div>
    )
}