import "./App.css";
import "./assets/css/SpecialComponentStyle.css";
import "./assets/css/Emir.css";
import React, {useEffect,useState}from "react"
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import {HandleSigninPopUp} from "./assets/js/Events/PopUp"
import AddProduct from "./views/pages/AddProduct";
import Product from "./views/pages/Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Magaza from "./views/pages/Store";
import CheckOut from "./views/pages/CheckOut";
import MyAccount2 from "./views/pages/MyAccount2";
import Thankyou from "./views/pages/Thankyou";
import BigServiceCircleSol from "./assets/img/atom-sag.png"
import SellerGuide from "./views/pages/Sellerguide";
import SellerAssets from "./views/pages/Sellerassets";
import MyOrders from "./views/pages/MyOrders";
import Index from "./views/pages/Index";
import Sidebar from "./shared/Sidebar";
import Search from "./shared/Search"

import SLPopup from "./views/components/SLPopup";
import ContactUs from "./views/pages/ContactUs";





function App() {

  const [isLogged,setLogged] = useState(false);
  const [isPopup,setPopup] = useState(false)

  return (
    <div className="App ">
      <button onClick={()=>{setLogged(!isLogged)}} style={{zIndex:1000000,position:"absolute",top:"0",left:0}}>login</button>
      <span className="AppFrontWrapper"></span>
      
      <Router>

      {window.location.pathname == "/contact-us" ?  <></>: <Header logged={isLogged} openPopup={()=>{   
          setPopup(true);
          document.body.classList.add("kes-lan")
        }}/>}
        <Sidebar logged={isLogged} openPopup={()=>{
          setPopup(true);
          document.body.classList.add("kes-lan")
        }}/>


        <div className="home-search-wrapper">
          <Search />
        </div>

        <SLPopup visible={isPopup} onClose={()=>{
            setPopup(false)
            document.body.classList.remove("kes-lan")
        }}/>

        
        

        <Switch>

          <Route path="/" exact>
            <Index /> 
          </Route>
          <Route path="/product/:id" exact>
            <Product />
          </Route>
          <Route path="/add-product" exact>
            <AddProduct />
          </Route>
          <Route path="/store" exact>
            <Magaza />
          </Route>

          <Route path="/contact-us" exact>
            <ContactUs/>
          </Route>

          <Route path="/my-orders" exact>
            <MyOrders/>
          </Route>


          <Route path="/checkout" exact>
            <CheckOut />
          </Route>

          <Route path="/my-account" exact>
            <MyAccount2 />
          </Route>

          <Route path="/thank-you" exact>
            <Thankyou />
          </Route>


          <Route path="/seller-guide" exact>
            <SellerGuide  />
          </Route>

          
          <Route path="/seller-assets" exact>
            <SellerAssets  />
          </Route>
        </Switch>
       
        {window.location.pathname == "/contact-us" ?  <></>: <Footer />}
      </Router>
      
    </div>
  );
}

export default App;
