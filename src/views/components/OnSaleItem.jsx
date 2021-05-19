import React from 'react'
import img from "../../assets/img/sneaker-add-product.png"

export default function OnSaleItem() {
    return (
        <div className="on-sale-item">
            <img src={img} alt="" />
            <div className="about ps-2">
                <div className="urun-adi">Air jordan m1</div>
                <div className="added-date">added on 28 March</div>
                <div className="mobile-fer-fiyat">2000 €</div>
            </div>

            <div className="fiyat ">2 000 €</div>
            <div className="edit otuzbir">Edit</div>
            <div className="remove otuzbir">Remove</div>
            <div className="mobile-fer">
            <div className="otuzbir">Edit</div>
            <div className="otuzbir">Remove</div>
          
            </div>
        </div>
    )
}
