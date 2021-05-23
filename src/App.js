import "./App.css";
import "./assets/css/SpecialComponentStyle.css";
import "./assets/css/Emir.css";
import Header from "./shared/Header";
import AddProduct from "./views/pages/AddProduct";
import Home from "./views/pages/Home";
import Product from "./views/pages/Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Magaza from "./views/pages/Store";
import CheckOut from "./views/pages/CheckOut";
import MyAccount from "./views/pages/Myaccount";
import Thankyou from "./views/pages/Thankyou";
import BigServiceCircleSol from "./assets/img/atom-sag.png"
import SellerGuide from "./views/pages/Sellerguide";
import SellerAssets from "./views/pages/Sellerassets";
import MyOrders from "./views/pages/MyOrders";
import Index from "./views/pages/Index";
import Blog from "./views/pages/Blog";

function App() {
  return (
    <div className="App ">
      
      <span className="AppFrontWrapper"></span>

      <Router>
        <Header/>
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

          <Route path="/my-orders" exact>
            <MyOrders/>
          </Route>


          <Route path="/checkout" exact>
            <CheckOut />
          </Route>

          <Route path="/my-account" exact>
            <MyAccount />
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
      </Router>
    </div>
  );
}

export default App;
