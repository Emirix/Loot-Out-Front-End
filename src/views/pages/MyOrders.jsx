import React from "react";
import Header from "../../shared/Header";
import MyOrdersSVG from "../../assets/svg/my-orders.svg";

export default class MyOrders extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="my-orders container-fluid">
   
        <div className="p-4" style={{background:"#ededed"}}>
          <div className="my-orders-title">
            <img src={MyOrdersSVG} alt="" />
          </div>

          <table>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Date</th>
              <th>Position</th>
              <th>Phone</th>
              <th>Phone</th>
              <th>Phone</th>
              <th>Phone</th>
            </tr>

            <tr>
              <td>1</td>
              <td>Air Jordan 1 “Mid” Chicagoasdasd </td>
              <td>11.05.2021 - 11:03:22</td>
              <td>CEO, Founder</td>
              <td>+3 555 68 70</td>
              <td>+3 555 68 70</td>
              <td>+3 555 68 70</td>
              <td>+3 555 68 70</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Air Jordan 1 “Mid” Chicagoasdasd </td>
              <td>11.05.2021 - 11:03:22</td>
              <td>CEO, Founder</td>
              <td>+3 555 68 70</td>
              <td>+3 555 68 70</td>
              <td>+3 555 68 70</td>
              <td>+3 555 68 70</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Air Jordan 1 “Mid” Chicagoasdasd </td>
              <td>11.05.2021 - 11:03:22</td>
              <td>CEO, Founder</td>
              <td>+3 555 68 70</td>
              <td>+3 555 68 70</td>
              <td>+3 555 68 70</td>
              <td>+3 555 68 70</td>
            </tr>

                        <tr>
              <td>1</td>
              <td>Air Jordan 1 “Mid” Chicagoasdasd </td>
              <td>11.05.2021 - 11:03:22</td>
              <td>CEO, Founder</td>
              <td>+3 555 68 70</td>
              <td>+3 555 68 70</td>
              <td>+3 555 68 70</td>
              <td>+3 555 68 70</td>
            </tr>


   
          </table>
        </div>
      </div>
    );
  }
}
