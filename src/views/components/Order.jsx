import React, { useState, useRef, useEffect} from "react";
import Img from "../../assets/img/air-jordan4.png";
import {Link} from "react-router-dom";

function Order({ statusColor, status }) {
  const dropdown = useRef(null);
  const [durum,setDurum] = useState(false);

  function drop() {
      if(durum==false){
        for(var i = 0;i < document.querySelectorAll(".order-dropdown").length;i++){
            document.querySelectorAll(".order-dropdown")[i].style.height="0";
        }
        dropdown.current.style.height="500px"
        dropdown.current.style.padding="0.5rem"

        setDurum(true)
      }else{        
          dropdown.current.style.height="0"
          dropdown.current.style.padding="0"
          setDurum(false)
      }

  }

  return (
    <div>
      <div className="order">
        <div className="order__bas">
          <h2>AIR JORDAN 1</h2>
          <h4 className="gri">
            Order No: <span>32472382</span>
          </h4>
          <h4 className="gri">29.05.2021</h4>
        </div>
        <div className="order__fiyat">
          <h3>32,00 Tl</h3>
          <h4 className="gri">1 pieces</h4>
        </div>
        <div className="order__status">
          <div className={"status status-" + statusColor}>
            <div className="ball"></div>
            <h5>{status}</h5>
          </div>
        </div>
        <div className="order__detay">
          <button onClick={()=>{drop()}}>
            {!durum ? "DETAIL" : "MINIMIZE"}
            {!durum ?             <svg
              viewBox="0 0 121 204"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 10L102 102L10 194"
                stroke="#002A3F"
                stroke-width="26"
              />
            </svg> :
            <svg  viewBox="0 0 204 121" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M194 10L102 102L9.99999 10" stroke="#002A3F" stroke-width="26"/>
            </svg>
            
            }

          </button>
        </div>
      </div>

      <div className="order-dropdown" ref={dropdown}>
        <div className="order-dropdown__sol">
          <img src={Img} alt="" />
          <h1>AIR JORDAN 1</h1>

          <Link className="blue" to="/product/2" target="blank">Product Page</Link>
          <button className="red">Cancel Order</button>
        </div>
        <div className="order-dropdown__orta droo">
            <h6>Teslimat Adress: </h6>
            <p>
Indianapolis, Indiana(IN), 46268 asd sadas 
Odenton, Maryland(MD), 21113s
            </p>
            <h6>Cargo : <span>Free Cargo - MNG Kargo</span></h6>
            <h6>Teslim Alacak Kişi : <span>Yalın Kılıç</span></h6>
            <h6>Phone : <span>+905443816590</span></h6>
            <h6>Order No : <span>34829414</span></h6>
        </div>
        <div className="order-dropdown__sag droo">
        <h6>Fatura Adress: </h6>
            <p>
Indianapolis, Indiana(IN), 46268 asd sadas 
Odenton, Maryland(MD), 21113s
            </p>
        </div>
      </div>
    </div>
  );
}

export default Order;
