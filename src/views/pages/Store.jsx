import React from "react";
import Header from "../../shared/Header";
import {Link} from "react-router-dom";
import InputRange from "react-input-range";
import Recent1 from "../../assets/img/recent-1.png";
import Footer from "../../shared/Footer"

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
                        <div className="col-2 ">
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
                                        <h5 className="title">Air Jordan</h5>
                                        <div className="button" onClick={(e)=>{this.drop(e,"i-3")}}>+</div>
                                    </div>

                                    <div className="filter-dropdown__icerik" id="i-3">
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
                   
                       <div className="col-10">
                           <div className="store-products">
                                <div className="store-products__top">
                                <div className="filtered">
                                   <div className="filtered-item">
                                   Air Jordan 1 Mid
                                   <div className="close"></div>
                                   </div>
                                   <div className="filtered-item">38.5  <div className="close"></div></div>
                                   <div className="filtered-item">300-1500  <div className="close"></div></div>
                               </div>
                            
                                <div className="sorters ms-auto">
                                    <div className="sort-by">Sort by :</div>
                                    <select>
                                        <option value="">Popularity</option>
                                        <option value="">Popularity</option>
                                        <option value="">Popularity</option>
                                    </select>

                                    <div className="ayar-box"><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 6.63158C9.08551 6.63158 10.4248 5.63281 10.8551 4.26316L20 4.26316L20 2.36842L10.8551 2.36842C10.4248 0.998768 9.08551 -2.78505e-07 7.5 -2.29903e-07C5.567 -1.7065e-07 4 1.48453 4 3.31579C4 5.14705 5.567 6.63158 7.5 6.63158ZM9 3.31579C9 4.10061 8.32843 4.73684 7.5 4.73684C6.67157 4.73684 6 4.10061 6 3.31579C6 2.53096 6.67157 1.89474 7.5 1.89474C8.32843 1.89474 9 2.53096 9 3.31579Z" fill="#ADADAD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 12.3158C16.0855 12.3158 17.4248 11.317 17.8551 9.94737L20 9.94737L20 8.05263L17.8551 8.05263C17.4248 6.68298 16.0855 5.68421 14.5 5.68421C12.567 5.68421 11 7.16874 11 9C11 10.8313 12.567 12.3158 14.5 12.3158ZM14.5 10.4211C15.3284 10.4211 16 9.78483 16 9C16 8.21517 15.3284 7.57895 14.5 7.57895C13.6716 7.57895 13 8.21517 13 9C13 9.78483 13.6716 10.4211 14.5 10.4211Z" fill="#ADADAD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 18C7.433 18 9 16.5155 9 14.6842C9 12.8529 7.433 11.3684 5.5 11.3684C3.91449 11.3684 2.57521 12.3672 2.14494 13.7368L-4.21087e-07 13.7368L-4.79168e-07 15.6316L2.14494 15.6316C2.57521 17.0012 3.91449 18 5.5 18ZM5.5 16.1053C6.32843 16.1053 7 15.469 7 14.6842C7 13.8994 6.32843 13.2632 5.5 13.2632C4.67157 13.2632 4 13.8994 4 14.6842C4 15.469 4.67157 16.1053 5.5 16.1053Z" fill="#ADADAD"/>
<path d="M10 13.7368L20 13.7368L20 15.6316L10 15.6316L10 13.7368Z" fill="#ADADAD"/>
<path d="M10 8.05263L-2.46844e-07 8.05263L-3.04925e-07 9.94737L10 9.94737L10 8.05263Z" fill="#ADADAD"/>
<path d="M3 2.36842L-7.26011e-08 2.36842L-1.30682e-07 4.26316L3 4.26316L3 2.36842Z" fill="#ADADAD"/>
</svg>
</div>
                                    <div className="ayar-box"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="9" height="9" rx="2" stroke="#252B42" stroke-width="2"/>
<rect x="14" y="1" width="9" height="9" rx="2" stroke="#252B42" stroke-width="2"/>
<rect x="1" y="14" width="9" height="9" rx="2" stroke="#252B42" stroke-width="2"/>
<rect x="14" y="14" width="9" height="9" rx="2" stroke="#252B42" stroke-width="2"/>
</svg>
</div>
                                </div>
                                </div>
                           
                             <div className="row">
                                 <div className="store-urunler">
                                     <div className="store-urun">
                                         <Link to="/product/2">
                                         <img src={Recent1} alt="" />
                                         <div className="store-urun__isim">Air Jordan 1 Mid</div>
                                         <div className="store-urun__fiyat">145 €</div>
                                         </Link>
                                     </div>

                                     <div className="store-urun">
                                         <Link to="/product/2">
                                         <img src={Recent1} alt="" />
                                         <div className="store-urun__isim">Air Jordan 1 Mid</div>
                                         <div className="store-urun__fiyat">145 €</div>
                                         </Link>
                                     </div>

                                     <div className="store-urun">
                                         <Link to="/product/2">
                                         <img src={Recent1} alt="" />
                                         <div className="store-urun__isim">Air Jordan 1 Mid</div>
                                         <div className="store-urun__fiyat">145 €</div>
                                         </Link>
                                     </div>

                                     <div className="store-urun">
                                         <Link to="/product/2">
                                         <img src={Recent1} alt="" />
                                         <div className="store-urun__isim">Air Jordan 1 Mid</div>
                                         <div className="store-urun__fiyat">145 €</div>
                                         </Link>
                                     </div>

                                     <div className="store-urun">
                                         <Link to="/product/2">
                                         <img src={Recent1} alt="" />
                                         <div className="store-urun__isim">Air Jordan 1 Mid</div>
                                         <div className="store-urun__fiyat">145 €</div>
                                         </Link>
                                     </div>

                                     <div className="store-urun">
                                         <Link to="/product/2">
                                         <img src={Recent1} alt="" />
                                         <div className="store-urun__isim">Air Jordan 1 Mid</div>
                                         <div className="store-urun__fiyat">145 €</div>
                                         </Link>
                                     </div>

                                     <div className="store-urun">
                                         <Link to="/product/2">
                                         <img src={Recent1} alt="" />
                                         <div className="store-urun__isim">Air Jordan 1 Mid</div>
                                         <div className="store-urun__fiyat">145 €</div>
                                         </Link>
                                     </div>

                                     <div className="store-urun">
                                         <Link to="/product/2">
                                         <img src={Recent1} alt="" />
                                         <div className="store-urun__isim">Air Jordan 1 Mid</div>
                                         <div className="store-urun__fiyat">145 €</div>
                                         </Link>
                                     </div>

                                     <div className="store-urun">
                                         <Link to="/product/2">
                                         <img src={Recent1} alt="" />
                                         <div className="store-urun__isim">Air Jordan 1 Mid</div>
                                         <div className="store-urun__fiyat">145 €</div>
                                         </Link>
                                     </div>

                                     <div className="store-urun">
                                         <Link to="/product/2">
                                         <img src={Recent1} alt="" />
                                         <div className="store-urun__isim">Air Jordan 1 Mid</div>
                                         <div className="store-urun__fiyat">145 €</div>
                                         </Link>
                                     </div>

                                     <div className="store-urun">
                                         <Link to="/product/2">
                                         <img src={Recent1} alt="" />
                                         <div className="store-urun__isim">Air Jordan 1 Mid</div>
                                         <div className="store-urun__fiyat">145 €</div>
                                         </Link>
                                     </div>
                          
                                 </div>
                             
                                
                             </div>

                             <div className="row">
                                 <div className="pagination">
                                     <Link className="pagination__gray">
                                     <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.50002C0 7.89782 0.15804 8.27942 0.439336 8.56067L6.43938 14.5607C7.02513 15.1464 7.97493 15.1464 8.56069 14.5607C9.14644 13.9749 9.14644 13.0251 8.56069 12.4394L3.62132 7.50002L8.56069 2.56067C9.14644 1.97488 9.14644 1.02513 8.56069 0.439336C7.97493 -0.146445 7.02513 -0.146445 6.43938 0.439336L0.439336 6.43937C0.15804 6.72062 0 7.10222 0 7.50002Z" fill="#8c8c8c"/>
</svg>
Prev
                                     </Link>

                                     <Link className="pagination__gray">
                                         1<svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.36823 7.13297L12.8189 1.56972C13.2057 1.17496 12.9318 0.5 12.3849 0.5H0.615154C0.0682035 0.5 -0.205701 1.17496 0.181041 1.56972L5.63182 7.13297C6.11129 7.62234 6.88876 7.62234 7.36823 7.13297Z" fill="black"/>
</svg>

                                     </Link>

                                     <div className="of">
                                     of 10
                                     </div>

                                     <Link className="pagination__active">Next<svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 7.49998C9 7.10218 8.84196 6.72058 8.56066 6.43933L2.56062 0.439314C1.97487 -0.146438 1.02507 -0.146438 0.439314 0.439314C-0.146439 1.02507 -0.146439 1.97487 0.439314 2.56062L5.37868 7.49998L0.439314 12.4393C-0.146439 13.0251 -0.146439 13.9749 0.439314 14.5607C1.02507 15.1464 1.97487 15.1464 2.56062 14.5607L8.56066 8.56063C8.84196 8.27938 9 7.89778 9 7.49998Z" fill="#4CAA91"/>
</svg>
</Link>
                                 </div>
                             </div>
                           </div>
                       </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}