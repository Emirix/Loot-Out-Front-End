import React from 'react'
import Sneaker1 from '../../../assets/img/sneaker-add-product.png'
function Sneaker({resim,isim,fiyat,oc}) {
    return (
        <div className="Sneaker" onClick={oc}>
            <img src={resim} alt=""/>
            <div className="presentation">
                <h1>{isim}</h1>
                <small>Last Sale: <span>{fiyat}₺</span></small>
            </div>
        </div>
    )
}

export default Sneaker
