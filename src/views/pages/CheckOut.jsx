import React, { Component } from "react";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import "../../assets/css/Emir.css";
import SummaryItem from "../components/checkout/SummaryItem";
import resim from "../../assets/img/xxx.png";
import {Link} from "react-router-dom"
export default class CheckOut extends Component {

  constructor(){
    super();
    this.topla = this.topla.bind(this);
    this.totalMobile = React.createRef();
    this.state = {
      mobileWidth:null,
      subtotal:0,
      summaryItems : [
        {
          title:"Nike Air Max",
          model:"Tharims Farm",
          size:"47",
          price:20,
          oldPrice:20,
          img:resim,
          yildizs:3
        },
        {
          title:"Adibadabas",
          model:"2021 New",
          size:"40",
          price:20,
          oldPrice:20,
          img:resim,
          yildizs:5
        }
,
        {
          title:"Adibadabas",
          model:"2021 New",
          size:"40",
          price:60,
          oldPrice:2.99,
          img:resim,
          yildizs:5
        }
      ]
    }
  }

  componentDidMount(){
    this.setState({mobileWidth:window.innerWidth})
    window.addEventListener("resize",()=>{
      this.setState({mobileWidth:window.innerWidth})
    })
  }



  topla(){
    var i= 0;
    var toplam=0;
   for(this.state.summaryItems; i <  this.state.summaryItems.length; i++){
    toplam += this.state.summaryItems[i].price;
   }

   return toplam
  }

  

  render() {
    return (
      <div className="checkout-container">
       <div className="container"></div>
        <div className="container-fluid bg-white">
          <div className="container pt-4">
            <div className="d-flex row zaa">
              <div className="col-lg-7 d-none d-lg-block" id="next-2">
                <h1 className="order-info-title">Order Info</h1>
                <p className="caption">Please Enter Your Billing Info</p>

                <form action="">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="input-with-title mt-4">
                        <h3>First Name</h3>
                        <input
                          type="text"
                          className="c-input"
                          placeholder="First Name"
                        />
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div className="input-with-title mt-4">
                        <h3>Last Name</h3>
                        <input
                          type="text"
                          className="c-input"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="input-with-title mt-4">
                        <h3>Email adress</h3>
                        <input
                          type="text"
                          className="c-input"
                          placeholder="Email adress"
                        />
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div className="input-with-title mt-4">
                        <h3>Phone Number</h3>
                        <input
                          type="text"
                          className="c-input"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="input-with-title mt-4">
                        <h3>Adress</h3>
                        <input
                          type="text"
                          className="c-input"
                          placeholder="Adress"
                        />
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div className="input-with-title mt-4">
                        <h3>Town / City</h3>
                        <input
                          type="text"
                          className="c-input"
                          placeholder="Town/City"
                        />
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div className="input-with-title mt-4">
                        <h3>State</h3>
                        <input
                          type="text"
                          className="c-input"
                          placeholder="Town/City"
                        />
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div className="input-with-title mt-4">
                        <h3>ZIP / Postal Code</h3>
                        <input
                          type="text"
                          className="c-input"
                          placeholder="Town/City"
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{width:this.state.mobileWidth}} ref={this.totalMobile} className="input-with-title total-div mt-4 d-sm-none">
                    <h4>Total</h4>
                    <h1>89.84 USD</h1>
                  </div>

                  <div className="input-with-title mt-4">
                    <h3>Adress</h3>
                    <textarea
                      type="text"
                      className="c-input"
                      placeholder="Adress"
                      row="5"
                      cols="6"
                    ></textarea>
                  </div>

                  <h1 className="order-info-title mt-5">Confirmation</h1>
                  <div className="d-flex">
                    <p className="caption">We are getting to the end. Just few clicks and your order si ready!</p>
                    <p className="ms-auto caption">Step 5 of 5</p>
                  </div>

                  <div className="confirm-input" onClick={e=>{
                   
                   if(e.currentTarget.querySelector("input").getAttribute("checked") === null){
                    e.currentTarget.querySelector("input").setAttribute("checked","true")
                    e.currentTarget.querySelector(".checkmark").classList.add("active")
                  }else{
                    e.currentTarget.querySelector("input").removeAttribute("checked")
                    e.currentTarget.querySelector(".checkmark").classList.remove("active")
                   }
                    }}>
                    <input type="checkbox" />
                    <div className="checkmark" ></div>
                    <label htmlFor="c1">I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>
                  </div>

                  <div className="confirm-input" onClick={e=>{
                   
                   if(e.currentTarget.querySelector("input").getAttribute("checked") === null){
                    e.currentTarget.querySelector("input").setAttribute("checked","true")
                    e.currentTarget.querySelector(".checkmark").classList.add("active")
                  }else{
                    e.currentTarget.querySelector("input").removeAttribute("checked")
                    e.currentTarget.querySelector(".checkmark").classList.remove("active")
                   }
                    }}>
                    <input type="checkbox" />
                    <div className="checkmark" ></div>
                    <label htmlFor="c1">I agree with our <Link to="/terms-and-conditions" target="blank">terms and conditions</Link> and <Link target="blank" to="/privacy-policy">privacy policy.</Link></label>
                  </div>

                  <div className="cpbutton mt-2">
                    Contiune To Payment
                  </div>
                  <div className="guvenlik mt-5">
                  <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.0532 5.96004C23.1587 6.01116 22.2615 5.93938 21.3865 5.74671C20.3311 5.38531 19.344 4.84894 18.4665 4.16004C17.7159 3.62789 17.003 3.04427 16.3332 2.41338C16.0492 2.14812 15.6751 2.00058 15.2865 2.00058C14.8979 2.00058 14.5238 2.14812 14.2399 2.41338C13.5878 3.02432 12.9023 3.59854 12.1865 4.13338C11.3036 4.83133 10.3128 5.38076 9.2532 5.76004C8.25659 5.98523 7.23279 6.06605 6.2132 6.00004C5.37834 5.96547 4.54599 5.88535 3.71986 5.76004C3.51799 5.73012 3.31216 5.74115 3.11464 5.79248C2.91712 5.84381 2.73197 5.93439 2.57021 6.05882C2.40845 6.18325 2.2734 6.33898 2.17313 6.51672C2.07285 6.69447 2.00939 6.89058 1.98653 7.09338C1.91986 7.73338 1.74653 9.40004 1.66653 11.2534C1.55442 13.1051 1.67085 14.9635 2.0132 16.7867C2.97859 19.8073 4.75413 22.5052 7.14653 24.5867C9.04811 26.3804 11.1101 27.996 13.3065 29.4134C13.8952 29.8176 14.5925 30.0339 15.3065 30.0339C16.0206 30.0339 16.7179 29.8176 17.3065 29.4134C19.3865 27.9591 21.3321 26.3214 23.1199 24.52C25.3722 22.4233 27.0402 19.7766 27.9599 16.84" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.6667 14.6667L17.48 18.48C17.5038 18.5059 17.5326 18.5265 17.5647 18.5406C17.5969 18.5548 17.6316 18.5621 17.6667 18.5621C17.7018 18.5621 17.7365 18.5548 17.7686 18.5406C17.8008 18.5265 17.8296 18.5059 17.8534 18.48L28.3334 8" stroke="#7AF0D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

<h2 className="order-info-title">
  All your data are safe
</h2>
<p className="caption kucuk-caption">
We are using the most advanced security to provide you the best experience ever.
</p>
                  </div>


                </form>


              </div>

              <div className="col-lg  " id="next-1">

              <div className="order-summary">

              
              <h1 className="order-info-title">Order Summary</h1>

              <p className="caption">Price can change depending on shipping method and taxes of your state.</p>

              {this.state.summaryItems.map((val,index)=>{
                  return(
                    <SummaryItem 
                    title={val.title}
                    model={val.model}
                    yildizs={val.yildizs}
                    size={val.size}
                    price={val.price}
                    oldPrice={val.oldPrice}
                    img={val.img} 
                    />

                  )
              })}
               

                <div className="totals">
                  <h2>Subtotal <div className="i">{this.topla()} USD
                  </div></h2>
                  <h2>Tax <div className="i"><span style={{marginRight:10}}>17%</span>   {(this.topla() *17)/100} USD</div></h2>
                  <h2>Shipping <div className="i">0 USD</div></h2>
                </div>


                <div className="promo-code mt-4">
                  <input type="text" placeholder="Apply promo code" />
                  <button>Apply Now</button>
                </div>

                <div className="gr">
                  <div>
                    <h5 className="order-info-title">Total Order</h5>
                    <p>Guaranteed delivery day:  June 12, 2020</p>
                  </div>
                  <h1>89.84 USD</h1>
                </div>

             
                
              </div><button onClick={()=>{
                document.querySelector("#next-1").classList.add("d-none")
                document.querySelector("#next-2").classList.remove("d-none")
                window.scrollTo(0,0)
              }} className="cpbutton d-lg-none mx-auto mt-5">Go To Next Step</button></div>
            </div>
          </div>
        </div>
   
      </div>
    );
  }
}
