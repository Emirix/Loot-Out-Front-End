import React from "react";
import Header from "../../shared/Header";
import {Link} from "react-router-dom";
import InputRange from "react-input-range";

export default class Store extends React.Component{
    constructor(){
        super();
        this.drop = this.drop.bind(this);

        this.state = {
            sliderValue: {
                min:0,
                max:1000
            }
        }
    }

    componentDidMount(){
        for(var i = 0; i <document.querySelectorAll(".filter-dropdown__icerik .icerik").length; i++ ){
            document.querySelectorAll(".filter-dropdown__icerik .icerik")[i].addEventListener("click",(e)=>{
                if(e.target.querySelector("div").classList[0] == "tick"){
                    e.target.querySelector("div").classList.remove("tick")
                }else{
                    e.target.querySelector("div").classList.add("tick")
                }
            }) 
        }

    }

    drop(e,item){
        if(document.getElementById(item).style.maxHeight == "300px"){
            document.getElementById(item).style.maxHeight = "0px";
            e.currentTarget.innerText = "+";
            e.currentTarget.style.backgroundColor = "#F1F1F1";
            e.currentTarget.style.color="rgba(189, 189, 189, 1)";
            e.currentTarget.style.boxShadow="none"
        }else{
            document.getElementById(item).style.maxHeight = "300px";
            e.currentTarget.innerText = "-";
            e.currentTarget.style.backgroundColor = "rgba(122, 240, 209, 1)";
            e.currentTarget.style.color="white";
            e.currentTarget.style.boxShadow="0px 2px 4px 0px rgba(0, 0, 0, 0.1)"

        }
          
       
    }
    render(){
        return(
            <div className="store container-fluid">
                <Header/>

                <div className="store-container p-2 text-dark">
                    <div className="store-container__top">
                        <div className="bread">
                            <Link to="/" className="bread__item">Home</Link>
                            <div className="bread__ok"></div>
                            <Link to="/store" className="bread__item">Marketplace Products</Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3 ">
                            <div className="filter-container">
                                <div className="filter-container__search">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3257 12.8992L19.7057 18.2792C19.8948 18.4685 20.001 18.7251 20.0009 18.9926C20.0008 19.2601 19.8945 19.5166 19.7052 19.7057C19.516 19.8948 19.2594 20.001 18.9919 20.0009C18.7244 20.0008 18.4678 19.8945 18.2787 19.7052L12.8987 14.3252C11.2905 15.5709 9.26802 16.1571 7.24287 15.9646C5.21772 15.7721 3.34198 14.8153 1.99723 13.2888C0.652477 11.7624 -0.0602651 9.78105 0.00399633 7.74778C0.0682577 5.71451 0.904695 3.78209 2.34315 2.34364C3.7816 0.905183 5.71402 0.068746 7.74729 0.00448461C9.78056 -0.0597768 11.7619 0.652965 13.2884 1.99771C14.8148 3.34246 15.7716 5.21821 15.9641 7.24336C16.1566 9.26851 15.5704 11.2909 14.3247 12.8992H14.3257ZM8.00074 14.0002C9.59204 14.0002 11.1182 13.3681 12.2434 12.2429C13.3686 11.1177 14.0007 9.59153 14.0007 8.00023C14.0007 6.40893 13.3686 4.88281 12.2434 3.75759C11.1182 2.63237 9.59204 2.00023 8.00074 2.00023C6.40944 2.00023 4.88332 2.63237 3.7581 3.75759C2.63289 4.88281 2.00074 6.40893 2.00074 8.00023C2.00074 9.59153 2.63289 11.1177 3.7581 12.2429C4.88332 13.3681 6.40944 14.0002 8.00074 14.0002Z" fill="#737373"/>
                                </svg>
                                <input type="text" placeholder="Search"/>

                                </div>

                              
                                <div className="filter-dropdown">
                                    <div className="filter-dropdown__top">
                                        <h5 className="title">Air Jordan 1</h5>
                                        <div className="button" onClick={(e)=>{this.drop(e,"i-1")}}>+</div>
                                    </div>

                                    <div className="filter-dropdown__icerik" id="i-1">
                                        <div className="icerik">
                                            <h5>Air Jordan 1 High OG <div></div></h5>
                                            
                                        </div>
                                        <div className="icerik">
                                            <h5>Air Jordan 1 Mid <div></div></h5>
                                      
                                        </div>

                                        <div className="icerik">
                                            <h5>Air Jordan 1 Low <div></div></h5>
                                           
                                        </div>

                                        <div className="icerik">
                                            <h5>Cosmetics <div></div></h5>
                                            
                                        </div>

                                        <div className="icerik">
                                            <h5>Hats <div></div></h5>
                                            
                                        </div>

                                        <div className="icerik">
                                            <h5>Jewelyr <div></div></h5>
                                            
                                        </div>

                                        <div className="bottomx"></div>
                                    </div>
                                </div>

                                <div className="filter-dropdown">
                                    <div className="filter-dropdown__top">
                                        <h5 className="title">Yeezy</h5>
                                        <div className="button" onClick={(e)=>{this.drop(e,"i-2")}}>+</div>
                                    </div>

                                    <div className="filter-dropdown__icerik" id="i-2">
                                        <div className="icerik">
                                            <h5>Air Jordan 1 High OG</h5>
                                            <div className="tick"></div>
                                        </div>
                                        <div className="icerik">
                                            <h5>Air Jordan 1 Mid</h5>
                                            <div className="tick"></div>
                                        </div>

                                        <div className="icerik">
                                            <h5>Air Jordan 1 Low</h5>
                                           
                                        </div>

                                        <div className="icerik">
                                            <h5>Cosmetics</h5>
                                            
                                        </div>

                                        <div className="icerik">
                                            <h5>Hats</h5>
                                            
                                        </div>

                                        <div className="icerik">
                                            <h5>Jewelyr</h5>
                                            
                                        </div>

                                        <div className="bottomx"></div>
                                    </div>
                                </div>
                            
                                <div className="filter-dropdown">
                                    <div className="filter-dropdown__top">
                                        <h5 className="title">Air Jordan</h5>
                                        <div className="button" onClick={(e)=>{this.drop(e,"i-3")}}>+</div>
                                    </div>

                                    <div className="filter-dropdown__icerik" id="i-3">
                                        <div className="icerik">
                                            <h5>Air Jordan 1 High OG</h5>
                                            <div className="tick"></div>
                                        </div>
   

                                        <div className="icerik">
                                            <h5>Cosmetics</h5>
                                            
                                        </div>


                                        <div className="icerik">
                                            <h5>Jewelyr</h5>
                                            
                                        </div>

                                        <div className="bottomx"></div>
                                    </div>
                                </div>
                            
                            </div>
                        
                            <div className="size-container">
                                <h5>Size</h5>
                                <select name="cars" id="cars">
                                    <option value="volvo">35</option>
                                    <option value="saab">36</option>
                                    <option value="opel">37</option>
                                    <option value="audi">38</option>
                                </select>
                            </div>

                            <div className="filter-price-container">
                                <h5 className="mb-5">Filter by price</h5>

                                <InputRange
                                    maxValue={1000}
                                    minValue={0}
                                    value={this.state.sliderValue}
                                    onChange={value => {
                                        this.setState({sliderValue:value})
                                    }} 
                                    
                                    onChangeStart={()=>{
                                        document.querySelectorAll(".input-range__label-container")[2].style.opacity = "1"
                                        document.querySelectorAll(".input-range__label-container")[1].style.opacity = "1"
                                    }}

                                    onChangeComplete={()=>{
                                        document.querySelectorAll(".input-range__label-container")[2].style.opacity = "0"
                                        document.querySelectorAll(".input-range__label-container")[1].style.opacity = "0"
 
                                    }}
                                    
                                    />

                                    <div className="price-filter-flex">
                                        <div className="price-filter-flex__min-max">
                                            <input type="number"
                                            value={this.state.sliderValue.min}
                                            min={this.state.sliderValue.min}
                                            max={this.state.sliderValue.max}
                                            onChange={e=>{
                                                this.setState(prev=>({
                                                    sliderValue:{
                                                        ...prev.sliderValue,
                                                        min:e.target.value
                                                    }
                                                }))
                                            }}
                                            />
                                                                             <div className="tl">₺</div>
                                        </div>

                                        <div className="price-filter-flex__min-max">
                                            <input type="number"
                                            value={this.state.sliderValue.max}
                                            min={this.state.sliderValue.min}
                                            max={this.state.sliderValue.max}
                                            onChange={e=>{
                                                this.setState(prev=>({
                                                    sliderValue:{
                                                        ...prev.sliderValue,
                                                        max:e.target.value
                                                    }
                                                }))
                                            }}
                                            />
                                            <div className="tl">₺</div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}