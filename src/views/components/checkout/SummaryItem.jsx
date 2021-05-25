import React from "react";

import star from "../../../assets/svg/star.svg"
import starFill from "../../../assets/svg/star-fill.svg"
export default function SummaryItem({title,model,size,yildizs,price,oldPrice,img}) {

  function yildiz(e){
    var i = 0;
   
    var yildizlar = [];

   
    for(i; i < e;i++){
        yildizlar[i] = <img className="star" alt="star" src={starFill}/>
    }

    if(yildizlar.length == 3){
        yildizlar[4] = <img className="star" alt="star" src={star}/>
        yildizlar[5] = <img className="star" alt="star" src={star}/>
    }
    
    if(yildizlar.length == 1){
        yildizlar[2] = <img className="star" alt="star" src={star}/>
        yildizlar[3] = <img className="star" alt="star" src={star}/>
        yildizlar[4] = <img className="star" alt="star" src={star}/>
        yildizlar[5] = <img className="star" alt="star" src={star}/>
    }

    
    if(yildizlar.length == 2){
        yildizlar[3] = <img className="star" alt="star" src={star}/>
        yildizlar[4] = <img className="star" alt="star" src={star}/>
        yildizlar[5] = <img className="star" alt="star" src={star}/>
    }


    if(yildizlar.length == 4){
        yildizlar[5] = <img className="star" alt="star" src={star}/>
    }




 
    return yildizlar;
  }

  return (
    <div className="summary-product">
      <div className="sol">
        <img src={img} alt="{}" />
        <div className="img-alt-i">
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.6551 1.69047C7.13249 1.21308 7.77997 0.944885 8.4551 0.944885C9.13023 0.944885 9.77771 1.21308 10.2551 1.69047C10.7325 2.16786 11.0007 2.81534 11.0007 3.49047C11.0007 4.1656 10.7325 4.81308 10.2551 5.29047L9.6001 5.94547L6.0001 9.54547L2.4001 5.94547L1.7451 5.29047C1.26771 4.81308 0.999512 4.1656 0.999512 3.49047C0.999512 2.81534 1.26771 2.16786 1.7451 1.69047C2.22249 1.21308 2.86997 0.944885 3.5451 0.944885C4.22023 0.944885 4.86771 1.21308 5.3451 1.69047L6.0001 2.34547L6.6551 1.69047Z"
              stroke="#E6704B"
              stroke-linecap="round"
              stroke-linejoin="bevel"
            />
          </svg>
          Wishlist
        </div>

        <div className="img-alt-i">
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.17982 7.42543L0.819824 1.06543"
              stroke="#151515"
              stroke-linecap="round"
              stroke-linejoin="bevel"
            />
            <path
              d="M7.17982 1.06543L0.819824 7.42543"
              stroke="#151515"
              stroke-linecap="round"
              stroke-linejoin="bevel"
            />
          </svg>
          Remove
        </div>
      </div>

   

      <div className="summary-product__info">
          <div className="__title">{title}</div>
          <div className="__model-size-info">
              <div className="left">
                  <div className="model-name">Model:</div>
                  <div className="model-name">Size:</div>
              </div>
              <div className="right">
                  <div className="model-des">{model}</div>
                  <div className="model-des">{size}</div>
              </div>
          </div>
          <div className="stars">

            {yildiz(yildizs)}
          </div>

          <div className="fiyat-bilgisi">
              <div className="fiyat-sol">
                  <h1>{price}  USD</h1>
                  <h2>{oldPrice}  USD</h2>
              </div>

              <div className="pcs-select">
                  <div className="pcs-sol">1 pcs</div>
                  <div className="pcs-cizgi"></div>
                  <div className="pcs-sag">PCS <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.60986 1.64551L3.66486 3.70051C3.75854 3.79363 3.88527 3.84591 4.01736 3.84591C4.14946 3.84591 4.27618 3.79363 4.36986 3.70051L6.36986 1.70051" stroke="#151515" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="bevel"/>
</svg>
</div>
              </div>
          </div>
      </div>
    </div>
  );
}
