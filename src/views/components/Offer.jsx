import React from 'react'
import img from "../../assets/img/sneaker-add-product.png"

export default function OnSaleItem() {
    return (
        <div className="offer">
            <img src={img} alt="" />
            <div className="mobile-offer-info d-md-none d-block">
                <div className="offer__title">Air Jordan 1 Mid</div>
                <div className="offer__price text-start ms-2">2 000 €</div>
           
            </div>
            <div className="d-md-block d-none offer__title">Air Jordan 1 Mid</div>
            <div className="d-md-block d-none offer__price">2 000 €</div>
            <div className="buttons">
                <button>ACCEPT</button>
                <button>DECLINE</button>
            </div>
        </div>
    )
}
