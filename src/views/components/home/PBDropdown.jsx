import React from 'react'
import {Link} from "react-router-dom"
import AirJordan1 from "../../../assets/img/air-jordan1.png"
import AirJordan2 from "../../../assets/img/air-jordan2.png"
import Buyutec from "../../../assets/svg/buyutec.svg"
function PBDropdown({sag}) {
    return (
        <div className="popular-brands-dropdown-container" style={sag ? {right:"30px"}: {}}>
            <div className="popular-brands-dropdown-container__sol">
                <h4>AIR JORDAN 1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit itaque ex vitae </p>
                <Link to="/"><button>SEE ALL <img src={Buyutec}/></button></Link>
            </div>
            <div className="popular-brands-dropdown-container__sag">
                    <img src={AirJordan1} alt="" />
                    <img src={AirJordan2} alt="" />
                    <img src={AirJordan1} alt="" />
                    <img src={AirJordan2} alt="" />
            </div>
        </div>
    )
}

export default PBDropdown
