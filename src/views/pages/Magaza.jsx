import React,{useEffect} from 'react'
import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import Login from '../components/Auth/Login'
import Search from '../../shared/Search'
import Sidebar from '../../shared/Sidebar'
import SignIn from '../components/Auth/SignIn'
import {HandleSigninPopUp} from '../../assets/js/Events/PopUp'
import '../../assets/css/magaza.css'
import ServiceCard from '../components/home/ServiceCard'
import HomeItemCard from '../components/home/HomeItemCard'
import Recent1 from '../../assets/img/recent-1.png'
import Recent2 from '../../assets/img/recent-2.png'
import Recent3 from '../../assets/img/recent-3.png'
import Recent4 from '../../assets/img/recent-4.png'
import AirJordan1 from '../../assets/img/air-jordan1.png'
import AirJordan2 from '../../assets/img/air-jordan2.png'
import AirJordan3 from '../../assets/img/air-jordan3.png'
import AirJordan4 from '../../assets/img/air-jordan4.png'
import Sneakers1 from '../../assets/img/sneakers1.png'
import Sneakers2 from '../../assets/img/sneakers2.png'
import Sneakers3 from '../../assets/img/sneakers3.png'
import Sneakers4 from '../../assets/img/sneakers4.png'
import DownArrow from '../../assets/svg/down-arrow-add-product.svg'
function Magaza() {
    useEffect(() => {
        HandleSigninPopUp()
    }, [])
    return (
        <div className="Magaza">
               <Sidebar/>
            <div className="home-sign-in-wrapper">
                <SignIn/>
            </div>
            <div className="home-login-wrapper">
                <Login />
            </div>

            <div className="home-search-wrapper">
                <Search/>
            </div>

            <Header/>

            <div className="magaza-boxes">
                <div className="magaza-filter">
                    <div className="magaza-filter-heading">
                        <h1>FILTER</h1>
                        <p>/////////</p>
                    </div>
                    <form>
                        <div className="input-minmax-cont">
                            <div className="input-wrapper">
                                <label htmlFor="MinNumberMagazaFilter">Min</label>
                                <input type="number" id="MinNumberMagazaFilter"/>
                            </div>
                            <span className='line'> -</span>
                            <div className="input-wrapper">
                                <label htmlFor="MaxNumberMagazaFilter">Max</label>
                                <input type="number"  id="MaxNumberMagazaFilter"/>
                            </div>


                        </div>
                        <div className="advance-filter">
                            <div className="checkbox-wrapper">
                                <input type="checkbox" id="filter-checkbox"/>
                                <label htmlFor="filter-checkbox" id="tick-checkbox-label">
                                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.55981 5.85003L4.61981 8.91003L12.4398 1.09003" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </label>
                                <label htmlFor="filter-checkbox" id="filter-text-label">
                                Filtre
                                </label>

                                <span className="badge">
                                12
                                </span>
                            </div>
                            
                            <div className="magaza-drop-down-select">
                                <div className="magaza-drop-down-heading" onClick={e=>{
                                    document.querySelector(".magaza-drop-down-content").classList.toggle("active")
                                }}>
                                    <p>Select Size</p>
                                    <img src={DownArrow} alt=""/>
                                </div>
                                <nav className="magaza-drop-down-content">
                                    <li>
                                        1
                                    </li>
                                    <li>
                                        2
                                    </li>
                                    <li>
                                        3
                                    </li>
                                </nav>

                              
                            </div> 
                            
                        </div>
                        <div className="reset-button-wrapper">
                            <button>Reset</button>
                        </div>
                       
                    </form>
                </div>
                <div>
                <HomeItemCard img={Recent1} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                </div>
                <div>
                <HomeItemCard img={Recent2} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                </div>
                <div>
                <HomeItemCard img={Recent3} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                </div>
                <div>
                <HomeItemCard img={Recent4} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                </div>
                <div>
                <HomeItemCard img={AirJordan1} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                </div>
                <div>
                <HomeItemCard img={AirJordan2} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                </div>
                <div>
                <HomeItemCard img={AirJordan3} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                </div>
                <div>
                <HomeItemCard img={AirJordan4} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                </div>
                <div>
                <HomeItemCard img={Sneakers1} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                </div>
                <div>
                <HomeItemCard img={Sneakers2} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                </div>
                <div>
                <HomeItemCard img={Sneakers3} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                </div>
                <div>
                <HomeItemCard img={Sneakers4} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                </div>
                <div>
                <HomeItemCard img={Recent1} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                </div>
                <div>
                <HomeItemCard img={AirJordan1} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                </div>
                <div>
                <HomeItemCard img={Sneakers3} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                </div>
                <div>
                <HomeItemCard img={Sneakers1} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                </div>
               
                
            
            </div>


            <Footer/>
        </div>
    )
}

export default Magaza
