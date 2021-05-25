import React from 'react'
import {Link} from "react-router-dom"
import AirJordan1 from "../../../assets/img/air-jordan1.png"
import AirJordan2 from "../../../assets/img/air-jordan2.png"
import Buyutec from "../../../assets/svg/buyutec.svg"
function PBDropdown({sag,title,p,to,img1,img2,img3,img4}) {
    return (
        <div className="popular-brands-dropdown-container" style={sag ? {right:"30px"}: {}}>
            <div className="popular-brands-dropdown-container__sol">
                <h4>{title}</h4>
                <p>{p}</p>
                <Link to={to}><button>SEE ALL <img src={Buyutec}/></button></Link>
            </div>
            <div className="popular-brands-dropdown-container__sag">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
            </div>
        </div>
    )
}

export default PBDropdown
