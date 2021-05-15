import React from 'react'
import img from "../../assets/img/sneaker-add-product.png"

export default function OnSaleItem() {
    return (
        <div className="on-sale-item">
            <img src={img} alt="" />
            <div className="about ps-2">
                <div className="urun-adi">Air jordan m1</div>
                <div className="added-date">added on 28 March</div>
            </div>

            <div className="fiyat">2 000 £</div>
            <div className="edit">Edit</div>
            <div className="remove">Remove</div>
        </div>
    )
}
