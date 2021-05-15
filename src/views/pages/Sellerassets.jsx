import React, { Component } from "react";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import Slash from "../../assets/svg/most-recent-desktop-slash.svg";
import SlashMobile from "../../assets/svg/most-recent-mobile-slash.svg";
import { Link } from "react-router-dom";
import OnSaleItem from "../components/OnSaleItem";
import { Pie, Line } from "react-chartjs-2";

export class Sellerassets extends Component {
  constructor() {
    super();

    this.state = {
      pie: {
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: "Rainfall",
            backgroundColor: ["#75CCB5", "#61A794", "#96E7D1"],
            hoverBackgroundColor: ["#75CCB5", "#61A794", "#96E7D1"],
            data: [65, 30, 21],
          },
        ],
      },
      line: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Rainfall",
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: [65, 59, 80, 81, 56],
          },
        ],
      },
    };
  }

  componentDidMount() {}

  render() {

    return (
      <div className="container-fluid">
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bg-on-sale">
                <div className="top">
                  <h1 className="rrr">
                    PRODUCTS ON SALE
                    <img src={SlashMobile} className="slash-bg" />
                  </h1>

                  <Link to="/add-product" className="d-none d-md-flex add-btn">
                    + ADD PRODUCT
                  </Link>
                </div>
                <div className="items">
                  <div className="on-sale-item-wrapper">
                    <OnSaleItem />
                  </div>

                  <div className="on-sale-item-wrapper">
                    <OnSaleItem />
                  </div>
                </div>
                <div className="bottom"></div>
              </div>
            </div>
          </div>

          <div className="row mt-5 mb-5 profile-container">
            <h1>
              PROFILE <img src={Slash} alt="slash" />
            </h1>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="profile-graph-item">
                <h2>ASSETS ON SALE</h2>

                <Pie
                  data={this.state.pie}
                  options={{
                    borderWidth: 0,
                    title: {
                      display: true,
                      text: "Average Rainfall per month",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />

                <div className="total-earning">
                  <div className="te-title">Total Earning</div>
                  <div className="te-price">$12.875</div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-6">
              <div className="profile-graph-item">
                <div className="top">
                  <h2>ASSETS SOLD</h2>
                  <div className="d-flex ms-auto btn-grupweek">
                  <Line
          data={this.state.line}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sellerassets;
