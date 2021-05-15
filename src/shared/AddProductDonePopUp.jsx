import React from 'react'
import CloseIcon from '../assets/img/close-icon.png'
import ShoePopUp from '../assets/img/sneakers pop-up.png'
import {Link} from "react-router-dom"
function AddProductDonePopUp() {
    return (
        <div className="AddProductDonePopUp">
            <div className="image-wrapper">
            <img src={CloseIcon} alt="" className="close-icon-add-product-popup"/>
            </div>
            <div className="image-wrapper">
            <img src={ShoePopUp} alt="" className="shoe-product-done-popup"/>
            </div>
            <h2>Item Successfully Qued</h2>
            <p>We Are Going To Pre-Check Your Item According To  Appearence, We Are Going To Notify You When It Displays, Please Remove Your Item If It Would Sold Via Different Way.</p>

            <div className="button-wrapper">
                <Link to="/addproduct" onClick={e=>{
                    window.location.reload();
                    document.querySelector(".AppFrontWrapper").style.display="none"}}>ADD ANOTHER ONE</Link>
                <Link to="/" onClick={e=>{document.querySelector(".AppFrontWrapper").style.display="none"}}>GO TO HOMEPAGE</Link>
            </div>
        </div>
    )
}

export default AddProductDonePopUp
