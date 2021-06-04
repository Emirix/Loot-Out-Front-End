import React, { Component } from "react";
import { Link } from "react-router-dom";
import BigIMG from "./31.png";
import $ from "jquery";
import { Line as LineChart } from "react-chartjs-2";
import Recent1 from "../../assets/img/recent-1.png";


export default class ProductPage extends Component {
  constructor() {
    super();
    this.slide = this.slide.bind(this);
    this.state = {
      urun: null,
      model: null,

      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            fill: true,
            lineTension: 0.5,
            backgroundColor: "rgba(122, 240, 209, 0.2)",
            borderColor: "#51d7bf",
            borderWidth: 1,
            borderJoinStyle: "miter",
            borderCapStyle: "butt",
            pointBackgroundColor: "#51d7bf",
            pointBorderColor: "#51d7bf",
            pointBorderWidth: 2,
            pointRadius: 7,
            pointHoverRadius: 10,
            borderWidth: 5,
            data: [250, 300, 270, 300, 350, 400, 450],
          },
        ],
      },
    };
  }

  slide(w, to) {
    if (to == "right") {
      var now = $(w).scrollLeft();
      $(w).scrollLeft(now + window.innerWidth - 50);
    } else {
      var now = $(w).scrollLeft() - window.innerWidth;
      $(w).scrollLeft(now);
    }
  }

  render() {
    return (
      <div className="product-page-container container-fluid" >
          <div className="calis-artik-orr">
        <div className="product-page-container__bread">
          <Link to="/">Home</Link> / <Link to="/store">AIR JORDAN</Link> /
          <Link to="/product/1">AIR JORDAN XXXV PARIS</Link>
        </div>

        <div className="product-page-container__name">
          AIR JORDAN XXXV PARIS
          <svg  viewBox="0 0 210 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M208.881 1L172.867 39.6613" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M191.693 1.00879L155.679 39.67" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M174.505 1.00879L138.491 39.6785" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M157.325 1.01672L121.302 39.6865" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M140.137 1.02515L104.114 39.6864" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M122.948 1.03406L86.9336 39.6953" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M105.759 1.04199L69.7451 39.7032" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M88.5794 1.0509L52.5566 39.7122" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M71.3909 1.0592L35.3682 39.7205" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M54.2029 1.0592L18.1802 39.7289" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M37.0143 1.06763L1 39.7374" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
</svg>

        </div>

        <div className="product-page-container__urun">
          <div className="pp-urun-sol">
            <div className="pp-urun-sol__big-img">
              <img src={BigIMG} alt="" />
            </div>
            <div className="pp-urun-sol__alt-img">
              <img src={BigIMG} alt="" />
              <img src={BigIMG} alt="" />
              <img src={BigIMG} alt="" />
              <img src={BigIMG} alt="" />
            </div>
          </div>

          <div className="pp-urun-sag">
            <div className="pp-urun-sag__select-size">SELECT SIZE</div>
            <div className="sizes-selector size-buttons">
              <div className="size">
                <input type="radio" name="size" id="size1" />
                <label htmlFor="size1">US 3.5 (EU 35.5)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size2" disabled />
                <label htmlFor="size2">US 4 (EU 36)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size3" disabled />
                <label htmlFor="size3">US 4.5 (EU 36.5)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size4" />
                <label htmlFor="size4">US 5 (EU 37)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size5" disabled />
                <label htmlFor="size5">US 5 (EU 37.5)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size6" disabled />
                <label htmlFor="size6">US 6 (EU 38)</label>
              </div>

              <div className="size">
                <input type="radio" name="size" id="size7" />
                <label htmlFor="size7">US 7 (EU 38.5)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size8" disabled />
                <label htmlFor="size8">US 4 (EU 39)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size9" />
                <label htmlFor="size9">US 4 (EU 40)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size10" />
                <label htmlFor="size10">US 4 (EU 40.5)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size11" disabled />
                <label htmlFor="size11">US 4 (EU 41)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size12" disabled />
                <label htmlFor="size12">US 4 (EU 42)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size13" disabled />
                <label htmlFor="size13">US 4 (EU 42.5)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size14" disabled />
                <label htmlFor="size14">US 4 (EU 43)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size15" disabled />
                <label htmlFor="size15">US 4 (EU 44)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size16" disabled />
                <label htmlFor="size16">US 4 (EU 44.5)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size17" disabled />
                <label htmlFor="size17">US 4 (EU 45)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size18" disabled />
                <label htmlFor="size18">US 4 (EU 45.5)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size19" disabled />
                <label htmlFor="size19">US 4 (EU 46)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size20" disabled />
                <label htmlFor="size20">US 4 (EU 46.5)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size21" disabled />
                <label htmlFor="size21">US 4 (EU 47)</label>
              </div>

              <div className="size">
                <input type="radio" name="size" id="size22" disabled />
                <label htmlFor="size22">US 4 (EU 48)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size23" disabled />
                <label htmlFor="size23">US 4 (EU 49)</label>
              </div>
              <div className="size">
                <input type="radio" name="size" id="size24" disabled />
                <label htmlFor="size24">US 4 (EU 50)</label>
              </div>
            </div>
            <div className="pp-urun-sag__buy">
              <div className="pp-fiyat">250 $</div>
              <button>BUY</button>
            </div>
          </div>
        </div>

        <div className="product-page-container__bilgi mt-5 pt-5 mb-5">
          <div className="pp-bilgi-sol">
            <div className="pp-bilgi-sol__title">
              <svg
                className="price-changes-svg"
                viewBox="0 0 551 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.06 15.05V9.8H22.03C22.63 9.8 23.13 9.71 23.53 9.53C23.95 9.33 24.16 8.92 24.16 8.3C24.16 7.66 23.95 7.25 23.53 7.07C23.13 6.89 22.63 6.8 22.03 6.8H7.54V20H0.0400001V0.799999H20.86C22.36 0.799999 23.76 0.909999 25.06 1.13C26.38 1.33 27.53 1.7 28.51 2.24C29.49 2.78 30.26 3.54 30.82 4.52C31.38 5.5 31.66 6.76 31.66 8.3C31.66 9.84 31.38 11.06 30.82 11.96C30.26 12.86 29.49 13.53 28.51 13.97C27.53 14.41 26.38 14.7 25.06 14.84C23.76 14.98 22.36 15.05 20.86 15.05H7.06ZM35.4027 20V0.799999H58.5927C60.4127 0.799999 62.0427 1.01 63.4827 1.43C64.9427 1.83 66.0927 2.51 66.9327 3.47C67.7927 4.43 68.2227 5.74 68.2227 7.4C68.2227 8.5 68.0227 9.41 67.6227 10.13C67.2227 10.85 66.6727 11.41 65.9727 11.81C65.2727 12.21 64.4727 12.5 63.5727 12.68C62.6727 12.86 61.7327 12.97 60.7527 13.01L58.5627 12.59C60.9427 12.61 62.7727 12.71 64.0527 12.89C65.3527 13.07 66.2527 13.4 66.7527 13.88C67.2727 14.34 67.5327 15.01 67.5327 15.89V20H60.0327V16.79C60.0327 16.19 59.9127 15.74 59.6727 15.44C59.4527 15.12 58.9527 14.9 58.1727 14.78C57.4127 14.66 56.2327 14.6 54.6327 14.6H42.9027V20H35.4027ZM42.9027 9.59H58.5927C59.1927 9.59 59.6927 9.49 60.0927 9.29C60.5127 9.09 60.7227 8.71 60.7227 8.15C60.7227 7.63 60.5127 7.28 60.0927 7.1C59.6927 6.9 59.1927 6.8 58.5927 6.8H42.9027V9.59ZM72.8254 0.799999H80.3254V20H72.8254V0.799999ZM120.523 11.99C120.423 13.89 119.733 15.48 118.453 16.76C117.173 18.04 115.283 19 112.783 19.64C110.303 20.28 107.163 20.6 103.363 20.6C100.463 20.6 97.863 20.44 95.563 20.12C93.263 19.82 91.303 19.3 89.683 18.56C88.063 17.8 86.823 16.77 85.963 15.47C85.103 14.17 84.673 12.53 84.673 10.55C84.673 8.57 85.103 6.92 85.963 5.6C86.823 4.26 88.063 3.2 89.683 2.42C91.303 1.62 93.263 1.05 95.563 0.71C97.863 0.369999 100.463 0.199999 103.363 0.199999C107.163 0.199999 110.313 0.549999 112.813 1.25C115.313 1.93 117.203 2.94 118.483 4.28C119.763 5.62 120.453 7.25 120.553 9.17H112.753C112.513 8.53 112.073 7.97 111.433 7.49C110.793 6.99 109.833 6.6 108.553 6.32C107.273 6.04 105.543 5.9 103.363 5.9C100.803 5.9 98.723 6.06 97.123 6.38C95.523 6.68 94.353 7.17 93.613 7.85C92.873 8.53 92.503 9.43 92.503 10.55C92.503 11.57 92.873 12.4 93.613 13.04C94.353 13.68 95.523 14.15 97.123 14.45C98.723 14.75 100.803 14.9 103.363 14.9C105.543 14.9 107.263 14.77 108.523 14.51C109.803 14.25 110.763 13.9 111.403 13.46C112.043 13 112.483 12.51 112.723 11.99H120.523ZM131.965 11.9V14.3H154.765V20H124.465V0.799999H154.705V6.5H131.965V8.9H150.565V11.9H131.965ZM203.492 11.99C203.392 13.89 202.702 15.48 201.422 16.76C200.142 18.04 198.252 19 195.752 19.64C193.272 20.28 190.132 20.6 186.332 20.6C183.432 20.6 180.832 20.44 178.532 20.12C176.232 19.82 174.272 19.3 172.652 18.56C171.032 17.8 169.792 16.77 168.932 15.47C168.072 14.17 167.642 12.53 167.642 10.55C167.642 8.57 168.072 6.92 168.932 5.6C169.792 4.26 171.032 3.2 172.652 2.42C174.272 1.62 176.232 1.05 178.532 0.71C180.832 0.369999 183.432 0.199999 186.332 0.199999C190.132 0.199999 193.282 0.549999 195.782 1.25C198.282 1.93 200.172 2.94 201.452 4.28C202.732 5.62 203.422 7.25 203.522 9.17H195.722C195.482 8.53 195.042 7.97 194.402 7.49C193.762 6.99 192.802 6.6 191.522 6.32C190.242 6.04 188.512 5.9 186.332 5.9C183.772 5.9 181.692 6.06 180.092 6.38C178.492 6.68 177.322 7.17 176.582 7.85C175.842 8.53 175.472 9.43 175.472 10.55C175.472 11.57 175.842 12.4 176.582 13.04C177.322 13.68 178.492 14.15 180.092 14.45C181.692 14.75 183.772 14.9 186.332 14.9C188.512 14.9 190.232 14.77 191.492 14.51C192.772 14.25 193.732 13.9 194.372 13.46C195.012 13 195.452 12.51 195.692 11.99H203.492ZM213.854 7.43H234.974V13.13H213.854V7.43ZM234.134 0.799999H241.634V20H234.134V0.799999ZM207.434 0.799999H214.934V20H207.434V0.799999ZM250.762 17.09V12.59H271.282V17.09H250.762ZM244.042 20L256.912 0.799999H265.252L278.242 20H269.992L258.862 2.81H263.332L252.292 20H244.042ZM310.737 14.12L307.947 15.71V0.799999H315.447V20H307.947L285.357 6.92L288.147 5.3V20H280.647V0.799999H288.147L310.737 14.12ZM337.131 20.6C334.531 20.6 332.141 20.44 329.961 20.12C327.801 19.82 325.921 19.3 324.321 18.56C322.741 17.8 321.511 16.77 320.631 15.47C319.771 14.17 319.341 12.53 319.341 10.55C319.341 8.57 319.781 6.92 320.661 5.6C321.541 4.26 322.801 3.2 324.441 2.42C326.101 1.62 328.071 1.05 330.351 0.71C332.651 0.369999 335.211 0.199999 338.031 0.199999C341.731 0.199999 344.831 0.539999 347.331 1.22C349.851 1.9 351.771 2.87 353.091 4.13C354.411 5.37 355.121 6.85 355.221 8.57H347.421C347.181 8.13 346.741 7.71 346.101 7.31C345.461 6.89 344.501 6.55 343.221 6.29C341.941 6.03 340.211 5.9 338.031 5.9C335.471 5.9 333.391 6.06 331.791 6.38C330.191 6.68 329.021 7.17 328.281 7.85C327.541 8.53 327.171 9.43 327.171 10.55C327.171 11.53 327.551 12.34 328.311 12.98C329.071 13.62 330.291 14.1 331.971 14.42C333.651 14.74 335.871 14.9 338.631 14.9C340.571 14.9 342.251 14.82 343.671 14.66C345.111 14.48 346.411 14.21 347.571 13.85C348.751 13.49 349.921 13.04 351.081 12.5L351.801 13.37C350.561 15.71 348.721 17.5 346.281 18.74C343.841 19.98 340.791 20.6 337.131 20.6ZM349.761 20C349.761 19.4 349.841 18.72 350.001 17.96C350.161 17.2 350.361 16.41 350.601 15.59C350.861 14.75 351.111 13.96 351.351 13.22H339.651V10.07H355.641V20H349.761ZM367.336 11.9V14.3H390.136V20H359.836V0.799999H390.076V6.5H367.336V8.9H385.936V11.9H367.336ZM392.976 12.95H401.166C401.306 13.37 401.716 13.73 402.396 14.03C403.076 14.31 403.986 14.53 405.126 14.69C406.286 14.83 407.626 14.9 409.146 14.9C410.646 14.9 411.826 14.86 412.686 14.78C413.566 14.68 414.186 14.52 414.546 14.3C414.906 14.06 415.086 13.74 415.086 13.34C415.086 12.96 414.796 12.67 414.216 12.47C413.636 12.25 412.606 12.1 411.126 12.02C409.646 11.94 407.566 11.9 404.886 11.9C402.886 11.9 401.156 11.81 399.696 11.63C398.256 11.43 397.066 11.13 396.126 10.73C395.206 10.31 394.526 9.79 394.086 9.17C393.646 8.53 393.426 7.77 393.426 6.89C393.426 5.37 393.936 4.12 394.956 3.14C395.996 2.14 397.556 1.4 399.636 0.919999C401.736 0.419999 404.356 0.17 407.496 0.17C412.096 0.17 415.606 0.839999 418.026 2.18C420.466 3.5 421.686 5.41 421.686 7.91H413.916C413.816 7.25 413.196 6.75 412.056 6.41C410.916 6.05 409.296 5.87 407.196 5.87C405.116 5.87 403.566 5.99 402.546 6.23C401.546 6.47 401.046 6.88 401.046 7.46C401.046 7.76 401.186 8 401.466 8.18C401.746 8.36 402.226 8.51 402.906 8.63C403.606 8.73 404.586 8.8 405.846 8.84C407.106 8.88 408.706 8.9 410.646 8.9C412.786 8.9 414.606 9.01 416.106 9.23C417.606 9.43 418.816 9.74 419.736 10.16C420.676 10.58 421.356 11.12 421.776 11.78C422.196 12.42 422.406 13.18 422.406 14.06C422.406 15.58 421.926 16.82 420.966 17.78C420.006 18.74 418.486 19.45 416.406 19.91C414.326 20.37 411.606 20.6 408.246 20.6C406.346 20.6 404.596 20.49 402.996 20.27C401.416 20.05 400.006 19.73 398.766 19.31C397.526 18.87 396.476 18.34 395.616 17.72C394.756 17.08 394.096 16.37 393.636 15.59C393.196 14.79 392.976 13.91 392.976 12.95Z"
                  fill="white"
                />
                <path
                  d="M550 1L528.667 20.8466"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M540.667 1L519.334 20.8466"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M530 1L510 20.8466"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M520.666 1L500.666 20.8466"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M511.333 1L492.666 20.8466"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M500.667 1L483.334 20.8466"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M491.333 1L472.666 20.8466"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M483.334 1L463.334 20.8466"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M474 1L454 20.8466"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M464.667 1L443.334 20.8466"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M455.333 1L434 20.8466"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>

            <div className="pp-bilgi-kontrols mt-4">
                <select  name="" id="">
                    <option value="not">Select Size</option>
                    <option value="">38</option>
                    <option value="">37</option>
                    <option value="">36</option>
                    <option value="">35</option>
                </select>

                <div className="button-group">
                    <div className="grp-btn">1 Week</div>
                    <div className="grp-btn active">1 Month</div>
                    <div className="grp-btn">3 Month</div>
                </div>
            </div>

            <div className="pp-bilgi-chart mt-5">
              <LineChart
                data={this.state.data}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,


                  plugins: {
                    legend: {
                      display: false,
                        
                    },
                  },
                }}
              />
            </div>
          
            <div className="pp-bilgi-table">
                <table>
                    <tr>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>

                    <tr>
                        <td>31</td>
                        <td>400 $</td>
                        <td>02.06.2021</td>
                        <td>20.54</td>
                    </tr>

                    
                    <tr>
                        <td>31</td>
                        <td>400 $</td>
                        <td>02.06.2021</td>
                        <td>20.54</td>

                    </tr>

                    
                    <tr>
                        <td>31</td>
                        <td>400 $</td>
                        <td>02.06.2021</td>
                        <td>20.54</td>

                    </tr>

                    
                    <tr>
                        <td>31</td>
                        <td>400 $</td>
                        <td>02.06.2021</td>
                        <td>20.54</td>

                    </tr>

                    
                    <tr>
                        <td>31</td>
                        <td>400 $</td>
                        <td>02.06.2021</td>
                        <td>20.54</td>

                    </tr>
                </table>

                <div className="d-flex align-items-center mt-2">
                    <div className="s">Showing Last 5 Sales</div>
                    <div className="view-all-table ms-auto">View All  </div>
                </div>
            </div>
          </div>
          <div className="pp-bilgi-sag">
            <div className="price-info-container">
              <svg
                viewBox="0 0 662 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="662" height="75" />
                <path
                  d="M383.619 6L364.821 26.1791"
                  stroke="url(#paint0_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M374.647 6L355.85 26.1835"
                  stroke="url(#paint1_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M365.68 6.00439L346.878 26.1835"
                  stroke="url(#paint2_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M356.709 6.00854L337.907 26.1877"
                  stroke="url(#paint3_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M347.737 6.01343L328.939 26.1926"
                  stroke="url(#paint4_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M338.766 6.01782L319.969 26.1969"
                  stroke="url(#paint5_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M329.799 6.02222L310.997 26.2013"
                  stroke="url(#paint6_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M320.827 6.02661L302.025 26.2057"
                  stroke="url(#paint7_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M311.856 6.02661L293.054 26.2102"
                  stroke="url(#paint8_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M302.884 6.03101L284.087 26.2146"
                  stroke="url(#paint9_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M293.913 6.0354L275.115 26.2145"
                  stroke="url(#paint10_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M284.947 6.04004L266.145 26.2192"
                  stroke="url(#paint11_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M275.975 6.04443L257.173 26.2236"
                  stroke="url(#paint12_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M267.004 6.04883L248.206 26.228"
                  stroke="url(#paint13_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M258.032 6.05298L239.234 26.2321"
                  stroke="url(#paint14_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M249.06 6.05298L230.263 26.2365"
                  stroke="url(#paint15_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M240.093 6.05762L221.291 26.2412"
                  stroke="url(#paint16_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M231.122 6.06177L212.32 26.2409"
                  stroke="url(#paint17_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M222.15 6.06665L203.353 26.2458"
                  stroke="url(#paint18_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M213.178 6.0708L194.381 26.2499"
                  stroke="url(#paint19_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M204.212 6.07544L185.41 26.2546"
                  stroke="url(#paint20_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M195.24 6.07959L176.438 26.2587"
                  stroke="url(#paint21_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M186.269 6.07959L167.467 26.2631"
                  stroke="url(#paint22_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M177.298 6.08423L158.5 26.2678"
                  stroke="url(#paint23_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M626.811 348H36.1849C17.0319 348 1.5 334.978 1.5 318.915V65.7604C1.5 49.6976 17.0278 36.6762 36.1849 36.6762L376.5 36.6765L402.357 4.5H630.5C649.653 4.5 661.5 21.0211 661.5 37.0839V318.915C661.496 334.978 645.968 348 626.811 348Z"
                  stroke="url(#paint24_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M138.977 30H18.0232C11.6584 30 6.5 26.2377 6.5 21.5956V8.4044C6.5 3.7623 11.6584 0 18.0232 0H138.977C145.342 0 150.5 3.7623 150.5 8.4044V15V21.5956C150.5 26.2377 145.342 30 138.977 30Z"
                  stroke="url(#paint25_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M0.103843 70.9376C0.0465464 53.2241 14.3901 38.8341 32.1037 38.8341H359.796C370.262 38.8341 380.041 33.6948 386.207 25.2383C393.995 14.5584 401.339 5 402.04 5H628.011C631.317 5 634.603 5.51234 637.752 6.51879L641.474 7.70803C643.475 8.34781 645.348 9.33671 647.006 10.629C648.026 11.4243 648.956 12.3283 649.78 13.325L654.66 19.226C659.404 24.963 662 32.1746 662 39.6192V319C662 336.673 647.673 351 630 351H32.5C14.8269 351 0.5 336.673 0.5 319V193.411L0.103843 70.9376Z"
                  fill="#C4C4C4"
                  fillOpacity="0.1"
                />
                <path
                  d="M59.42 8.06H62.08V21H59.42V8.06ZM65.1844 11.06H67.7844V21H65.1844V11.06ZM72.4044 10.84C73.0177 10.84 73.5844 10.92 74.1044 11.08C74.6244 11.24 75.0777 11.4867 75.4644 11.82C75.851 12.1533 76.151 12.58 76.3644 13.1C76.5777 13.6067 76.6844 14.2133 76.6844 14.92V21H74.0844V15.38C74.0844 14.54 73.8777 13.9267 73.4644 13.54C73.0644 13.14 72.4044 12.94 71.4844 12.94C70.791 12.94 70.1644 13.0733 69.6044 13.34C69.0444 13.6067 68.591 13.9467 68.2444 14.36C67.8977 14.76 67.6977 15.18 67.6444 15.62L67.6244 14.6C67.691 14.1333 67.8444 13.68 68.0844 13.24C68.3244 12.8 68.6444 12.4 69.0444 12.04C69.4577 11.6667 69.9444 11.3733 70.5044 11.16C71.0644 10.9467 71.6977 10.84 72.4044 10.84ZM78.3516 11.24H86.3516V13.22H78.3516V11.24ZM84.4316 7.06H86.4916V9.16H85.0516C84.6649 9.14667 84.3316 9.18667 84.0516 9.28C83.7716 9.37333 83.5582 9.54667 83.4116 9.8C83.2649 10.04 83.1916 10.3867 83.1916 10.84V21H80.5916V10.52C80.5916 9.72 80.7382 9.06667 81.0316 8.56C81.3249 8.04 81.7582 7.66 82.3316 7.42C82.9049 7.18 83.6049 7.06 84.4316 7.06ZM93.7006 21.24C92.4473 21.24 91.3406 21.04 90.3806 20.64C89.434 20.24 88.694 19.66 88.1606 18.9C87.6273 18.1267 87.3606 17.18 87.3606 16.06C87.3606 14.94 87.6273 13.9933 88.1606 13.22C88.694 12.4333 89.434 11.84 90.3806 11.44C91.3406 11.04 92.4473 10.84 93.7006 10.84C94.954 10.84 96.0473 11.04 96.9806 11.44C97.9273 11.84 98.6673 12.4333 99.2006 13.22C99.734 13.9933 100.001 14.94 100.001 16.06C100.001 17.18 99.734 18.1267 99.2006 18.9C98.6673 19.66 97.9273 20.24 96.9806 20.64C96.0473 21.04 94.954 21.24 93.7006 21.24ZM93.7006 19.24C94.394 19.24 95.014 19.12 95.5606 18.88C96.1206 18.6267 96.5606 18.2667 96.8806 17.8C97.2006 17.32 97.3606 16.74 97.3606 16.06C97.3606 15.38 97.2006 14.8 96.8806 14.32C96.5606 13.8267 96.1273 13.4533 95.5806 13.2C95.034 12.9467 94.4073 12.82 93.7006 12.82C93.0073 12.82 92.3806 12.9467 91.8206 13.2C91.2606 13.4533 90.814 13.82 90.4806 14.3C90.1606 14.78 90.0006 15.3667 90.0006 16.06C90.0006 16.74 90.1606 17.32 90.4806 17.8C90.8006 18.2667 91.2406 18.6267 91.8006 18.88C92.3606 19.12 92.994 19.24 93.7006 19.24Z"
                  fill="url(#paint26_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="374.22"
                    y1="6"
                    x2="374.22"
                    y2="26.1791"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="365.248"
                    y1="6"
                    x2="365.248"
                    y2="26.1835"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear"
                    x1="356.279"
                    y1="6.00439"
                    x2="356.279"
                    y2="26.1835"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear"
                    x1="347.308"
                    y1="6.00854"
                    x2="347.308"
                    y2="26.1877"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear"
                    x1="338.338"
                    y1="6.01343"
                    x2="338.338"
                    y2="26.1926"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear"
                    x1="329.368"
                    y1="6.01782"
                    x2="329.368"
                    y2="26.1969"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear"
                    x1="320.398"
                    y1="6.02222"
                    x2="320.398"
                    y2="26.2013"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear"
                    x1="311.426"
                    y1="6.02661"
                    x2="311.426"
                    y2="26.2057"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear"
                    x1="302.455"
                    y1="6.02661"
                    x2="302.455"
                    y2="26.2102"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint9_linear"
                    x1="293.486"
                    y1="6.03101"
                    x2="293.486"
                    y2="26.2146"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint10_linear"
                    x1="284.514"
                    y1="6.0354"
                    x2="284.514"
                    y2="26.2145"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint11_linear"
                    x1="275.546"
                    y1="6.04004"
                    x2="275.546"
                    y2="26.2192"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint12_linear"
                    x1="266.574"
                    y1="6.04443"
                    x2="266.574"
                    y2="26.2236"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint13_linear"
                    x1="257.605"
                    y1="6.04883"
                    x2="257.605"
                    y2="26.228"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint14_linear"
                    x1="248.633"
                    y1="6.05298"
                    x2="248.633"
                    y2="26.2321"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint15_linear"
                    x1="239.661"
                    y1="6.05298"
                    x2="239.661"
                    y2="26.2365"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint16_linear"
                    x1="230.692"
                    y1="6.05762"
                    x2="230.692"
                    y2="26.2412"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint17_linear"
                    x1="221.721"
                    y1="6.06177"
                    x2="221.721"
                    y2="26.2409"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint18_linear"
                    x1="212.751"
                    y1="6.06665"
                    x2="212.751"
                    y2="26.2458"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint19_linear"
                    x1="203.78"
                    y1="6.0708"
                    x2="203.78"
                    y2="26.2499"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint20_linear"
                    x1="194.811"
                    y1="6.07544"
                    x2="194.811"
                    y2="26.2546"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint21_linear"
                    x1="185.839"
                    y1="6.07959"
                    x2="185.839"
                    y2="26.2587"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint22_linear"
                    x1="176.868"
                    y1="6.07959"
                    x2="176.868"
                    y2="26.2631"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint23_linear"
                    x1="167.899"
                    y1="6.08423"
                    x2="167.899"
                    y2="26.2678"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.555208" stopColor="#8AF2D6" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint24_linear"
                    x1="331.5"
                    y1="4.5"
                    x2="331.5"
                    y2="348"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint25_linear"
                    x1="78.5"
                    y1="0"
                    x2="78.5"
                    y2="30"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint26_linear"
                    x1="80"
                    y1="2"
                    x2="80"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="0.55" stopColor="#92F3D9" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="price-info-container-middle">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente impedit minima, est officiis nisi consequatur
                  blanditiis praesentium assumenda necessitatibus eum amet
                  fugiat repudiandae in tempora magnam quidem beatae optio
                  aliquid? lorem
                </p>
                <p>
                  <span>Model color: </span> Pale ivory/black /crimson
                </p>
                <p>
                  <span>Model: </span> DD3668
                </p>
              </div>

              <svg
                viewBox="0 0 662 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="662" height="34" />
                <path
                  d="M626.811 30.9996H36.1849C17.0319 30.9996 1.5 17.9782 1.5 1.91547V-251.24C1.5 -267.302 17.0278 -280.324 36.1849 -280.324L376.5 -280.324L402.357 -312.5H630.5C649.653 -312.5 661.5 -295.979 661.5 -279.916V1.91547C661.496 17.9782 645.968 30.9996 626.811 30.9996Z"
                  stroke="url(#paint0_linear)"
                  strokeMiterlimit="10"
                />
                <path
                  d="M0.103843 -246.062C0.0465464 -263.776 14.3901 -278.166 32.1037 -278.166H359.796C370.262 -278.166 380.041 -283.305 386.207 -291.762C393.995 -302.442 401.339 -312 402.04 -312H628.011C631.317 -312 634.603 -311.488 637.752 -310.481L641.474 -309.292C643.475 -308.652 645.348 -307.663 647.006 -306.371C648.026 -305.576 648.956 -304.672 649.78 -303.675L654.66 -297.774C659.404 -292.037 662 -284.825 662 -277.381V2C662 19.6731 647.673 34 630 34H32.5C14.8269 34 0.5 19.6731 0.5 2V-123.589L0.103843 -246.062Z"
                  fill="#C4C4C4"
                  fillOpacity="0.1"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="331.5"
                    y1="-312.5"
                    x2="331.5"
                    y2="30.9996"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7AF0D1" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="pp-bilgi-sag"></div>
        </div>
      
        <div className="most-recent-item-container">
          <div className="most-recent-item-presentation">
          <svg className="d-md-block d-none rrrr" viewBox="0 0 1069 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1067.35 0.999512L1033.54 37.2924" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M1051.21 1.00748L1017.41 37.3003" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M1035.09 1.01546L1001.27 37.3083" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M1018.95 1.02342L985.136 37.3163" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M1002.82 1.02342L969 37.3242" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M986.681 1.0314L952.873 37.3322" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M970.545 1.03937L936.737 37.3322" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M954.418 1.04735L920.602 37.3402" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M938.282 1.05531L904.466 37.3482" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M922.147 1.06329L888.339 37.3561" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M906.011 1.07126L872.203 37.3641" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M889.875 1.07126L856.067 37.3721" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M873.749 1.07924L839.933 37.3801" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M857.613 1.0872L823.797 37.3801" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M841.477 1.09517L807.669 37.388" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M825.342 1.10295L791.534 37.3958" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M809.214 1.11093L775.398 37.4038" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M793.079 1.1189L759.263 37.4117" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M776.944 1.1189L743.128 37.4197" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M760.808 1.12686L727 37.4277" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M48.99 3.55951L30.36 25.5015V32.9995H18.86V25.5015L0.23 3.55951H13.8L28.934 22.6495H20.424L35.42 3.55951H48.99ZM76.59 33.9195C69.9047 33.9195 64.5227 33.3368 60.444 32.1715C56.3653 30.9755 53.3907 29.2275 51.52 26.9275C49.68 24.5968 48.76 21.7142 48.76 18.2795C48.76 14.8448 49.68 11.9775 51.52 9.67751C53.3907 7.34684 56.3653 5.59884 60.444 4.43351C64.5227 3.23751 69.9047 2.63951 76.59 2.63951C83.2753 2.63951 88.6573 3.23751 92.736 4.43351C96.8147 5.59884 99.774 7.34684 101.614 9.67751C103.485 11.9775 104.42 14.8448 104.42 18.2795C104.42 21.7142 103.485 24.5968 101.614 26.9275C99.774 29.2275 96.8147 30.9755 92.736 32.1715C88.6573 33.3368 83.2753 33.9195 76.59 33.9195ZM76.59 25.1795C79.7487 25.1795 82.478 24.9955 84.778 24.6275C87.078 24.2288 88.8567 23.5388 90.114 22.5575C91.3713 21.5455 92 20.1195 92 18.2795C92 16.4395 91.3713 15.0288 90.114 14.0475C88.8567 13.0355 87.078 12.3455 84.778 11.9775C82.478 11.5788 79.7487 11.3795 76.59 11.3795C73.4313 11.3795 70.656 11.5788 68.264 11.9775C65.9027 12.3455 64.0473 13.0355 62.698 14.0475C61.3793 15.0288 60.72 16.4395 60.72 18.2795C60.72 20.1195 61.3793 21.5455 62.698 22.5575C64.0473 23.5388 65.9027 24.2288 68.264 24.6275C70.656 24.9955 73.4313 25.1795 76.59 25.1795ZM151.758 16.2095V3.55951H163.258V18.2795C163.258 20.8862 162.767 23.1095 161.786 24.9495C160.835 26.7588 159.501 28.2615 157.784 29.4575C156.066 30.6228 154.088 31.5275 151.85 32.1715C149.611 32.8155 147.204 33.2602 144.628 33.5055C142.082 33.7815 139.491 33.9195 136.854 33.9195C134.063 33.9195 131.364 33.7815 128.758 33.5055C126.151 33.2602 123.728 32.8155 121.49 32.1715C119.282 31.5275 117.35 30.6228 115.694 29.4575C114.038 28.2615 112.734 26.7588 111.784 24.9495C110.864 23.1095 110.404 20.8862 110.404 18.2795V3.55951H121.904V16.2095C121.904 18.6628 122.502 20.5335 123.698 21.8215C124.894 23.1095 126.596 23.9988 128.804 24.4895C131.042 24.9495 133.726 25.1795 136.854 25.1795C139.89 25.1795 142.527 24.9495 144.766 24.4895C147.004 23.9988 148.722 23.1095 149.918 21.8215C151.144 20.5335 151.758 18.6628 151.758 16.2095ZM220.465 29.5035H213.565L238.681 3.55951H250.181V32.9995H238.681V12.9435L242.131 14.3695L223.961 32.9995H210.161L191.945 14.4155L195.441 12.9895V32.9995H183.941V3.55951H195.441L220.465 29.5035ZM257.314 3.55951H268.814V32.9995H257.314V3.55951ZM302.759 33.9195C298.772 33.9195 295.107 33.6742 291.765 33.1835C288.453 32.7235 285.57 31.9262 283.117 30.7915C280.694 29.6262 278.808 28.0468 277.459 26.0535C276.14 24.0602 275.481 21.5455 275.481 18.5095C275.481 15.4735 276.155 12.9435 277.505 10.9195C278.854 8.86484 280.786 7.23951 283.301 6.04351C285.846 4.81684 288.867 3.94284 292.363 3.42151C295.889 2.90018 299.815 2.63951 304.139 2.63951C309.812 2.63951 314.565 3.16084 318.399 4.20351C322.263 5.24618 325.207 6.73351 327.231 8.66551C329.255 10.5668 330.343 12.8362 330.497 15.4735H318.537C318.169 14.7988 317.494 14.1548 316.513 13.5415C315.531 12.8975 314.059 12.3762 312.097 11.9775C310.134 11.5788 307.481 11.3795 304.139 11.3795C300.213 11.3795 297.024 11.6248 294.571 12.1155C292.117 12.5755 290.323 13.3268 289.189 14.3695C288.054 15.4122 287.487 16.7922 287.487 18.5095C287.487 20.0122 288.069 21.2542 289.235 22.2355C290.4 23.2168 292.271 23.9528 294.847 24.4435C297.423 24.9342 300.827 25.1795 305.059 25.1795C308.033 25.1795 310.609 25.0568 312.787 24.8115C314.995 24.5355 316.988 24.1215 318.767 23.5695C320.576 23.0175 322.37 22.3275 324.149 21.4995L325.253 22.8335C323.351 26.4215 320.53 29.1662 316.789 31.0675C313.047 32.9688 308.371 33.9195 302.759 33.9195ZM322.125 32.9995C322.125 32.0795 322.247 31.0368 322.493 29.8715C322.738 28.7062 323.045 27.4948 323.413 26.2375C323.811 24.9495 324.195 23.7382 324.563 22.6035H306.623V17.7735H331.141V32.9995H322.125ZM347.418 13.7255H379.802V22.4655H347.418V13.7255ZM378.514 3.55951H390.014V32.9995H378.514V3.55951ZM337.574 3.55951H349.074V32.9995H337.574V3.55951ZM394.626 3.55951H442.466V12.2995H394.626V3.55951ZM412.796 11.7015H424.296V32.9995H412.796V11.7015ZM472.788 3.55951V24.2595H499.606V32.9995H461.288V3.55951H472.788ZM505.373 3.55951H516.873V32.9995H505.373V3.55951ZM548.517 18.5095V15.9335L575.059 32.9995H557.947L535.407 17.3595L556.199 3.55951H572.575L548.517 18.5095ZM523.999 3.55951H535.499V32.9995H523.999V3.55951ZM591.382 20.5795V24.2595H626.342V32.9995H579.882V3.55951H626.25V12.2995H591.382V15.9795H619.902V20.5795H591.382ZM647.236 3.55951H658.736V32.9995H647.236V3.55951ZM664.023 3.55951H711.863V12.2995H664.023V3.55951ZM682.193 11.7015H693.693V32.9995H682.193V11.7015Z" fill="white"/>
</svg>

      <svg className="d-md-none xxxx" viewBox="0 0 258 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.56 0.639999L15.84 12.088V16H9.84V12.088L0.12 0.639999H7.2L15.096 10.6H10.656L18.48 0.639999H25.56ZM39.96 16.48C36.472 16.48 33.664 16.176 31.536 15.568C29.408 14.944 27.856 14.032 26.88 12.832C25.92 11.616 25.44 10.112 25.44 8.32C25.44 6.528 25.92 5.032 26.88 3.832C27.856 2.616 29.408 1.704 31.536 1.096C33.664 0.471999 36.472 0.159999 39.96 0.159999C43.448 0.159999 46.256 0.471999 48.384 1.096C50.512 1.704 52.056 2.616 53.016 3.832C53.992 5.032 54.48 6.528 54.48 8.32C54.48 10.112 53.992 11.616 53.016 12.832C52.056 14.032 50.512 14.944 48.384 15.568C46.256 16.176 43.448 16.48 39.96 16.48ZM39.96 11.92C41.608 11.92 43.032 11.824 44.232 11.632C45.432 11.424 46.36 11.064 47.016 10.552C47.672 10.024 48 9.28 48 8.32C48 7.36 47.672 6.624 47.016 6.112C46.36 5.584 45.432 5.224 44.232 5.032C43.032 4.824 41.608 4.72 39.96 4.72C38.312 4.72 36.864 4.824 35.616 5.032C34.384 5.224 33.416 5.584 32.712 6.112C32.024 6.624 31.68 7.36 31.68 8.32C31.68 9.28 32.024 10.024 32.712 10.552C33.416 11.064 34.384 11.424 35.616 11.632C36.864 11.824 38.312 11.92 39.96 11.92ZM79.1779 7.24V0.639999H85.1779V8.32C85.1779 9.68 84.9219 10.84 84.4099 11.8C83.9139 12.744 83.2179 13.528 82.3219 14.152C81.4259 14.76 80.3939 15.232 79.2259 15.568C78.0579 15.904 76.8019 16.136 75.4579 16.264C74.1299 16.408 72.7779 16.48 71.4019 16.48C69.9459 16.48 68.5379 16.408 67.1779 16.264C65.8179 16.136 64.5539 15.904 63.3859 15.568C62.2339 15.232 61.2259 14.76 60.3619 14.152C59.4979 13.528 58.8179 12.744 58.3219 11.8C57.8419 10.84 57.6019 9.68 57.6019 8.32V0.639999H63.6019V7.24C63.6019 8.52 63.9139 9.496 64.5379 10.168C65.1619 10.84 66.0499 11.304 67.2019 11.56C68.3699 11.8 69.7699 11.92 71.4019 11.92C72.9859 11.92 74.3619 11.8 75.5299 11.56C76.6979 11.304 77.5939 10.84 78.2179 10.168C78.8579 9.496 79.1779 8.52 79.1779 7.24ZM115.025 14.176H111.425L124.529 0.639999H130.529V16H124.529V5.536L126.329 6.28L116.849 16H109.649L100.145 6.304L101.969 5.56V16H95.9691V0.639999H101.969L115.025 14.176ZM134.251 0.639999H140.251V16H134.251V0.639999ZM157.961 16.48C155.881 16.48 153.969 16.352 152.225 16.096C150.497 15.856 148.993 15.44 147.713 14.848C146.449 14.24 145.465 13.416 144.761 12.376C144.073 11.336 143.729 10.024 143.729 8.44C143.729 6.856 144.081 5.536 144.785 4.48C145.489 3.408 146.497 2.56 147.809 1.936C149.137 1.296 150.713 0.839999 152.537 0.568C154.377 0.296 156.425 0.159999 158.681 0.159999C161.641 0.159999 164.121 0.431999 166.121 0.975999C168.137 1.52 169.673 2.296 170.729 3.304C171.785 4.296 172.353 5.48 172.433 6.856H166.193C166.001 6.504 165.649 6.168 165.137 5.848C164.625 5.512 163.857 5.24 162.833 5.032C161.809 4.824 160.425 4.72 158.681 4.72C156.633 4.72 154.969 4.848 153.689 5.104C152.409 5.344 151.473 5.736 150.881 6.28C150.289 6.824 149.993 7.544 149.993 8.44C149.993 9.224 150.297 9.872 150.905 10.384C151.513 10.896 152.489 11.28 153.833 11.536C155.177 11.792 156.953 11.92 159.161 11.92C160.713 11.92 162.057 11.856 163.193 11.728C164.345 11.584 165.385 11.368 166.313 11.08C167.257 10.792 168.193 10.432 169.121 10L169.697 10.696C168.705 12.568 167.233 14 165.281 14.992C163.329 15.984 160.889 16.48 157.961 16.48ZM168.065 16C168.065 15.52 168.129 14.976 168.257 14.368C168.385 13.76 168.545 13.128 168.737 12.472C168.945 11.8 169.145 11.168 169.337 10.576H159.977V8.056H172.769V16H168.065ZM181.261 5.944H198.157V10.504H181.261V5.944ZM197.485 0.639999H203.485V16H197.485V0.639999ZM176.125 0.639999H182.125V16H176.125V0.639999ZM205.892 0.639999H230.852V5.2H205.892V0.639999ZM215.372 4.888H221.372V16H215.372V4.888ZM7.68 29.64V40.44H21.672V45H1.68V29.64H7.68ZM24.6806 29.64H30.6806V45H24.6806V29.64ZM47.1908 37.44V36.096L61.0388 45H52.1108L40.3508 36.84L51.1988 29.64H59.7428L47.1908 37.44ZM34.3988 29.64H40.3988V45H34.3988V29.64ZM69.555 38.52V40.44H87.795V45H63.555V29.64H87.747V34.2H69.555V36.12H84.435V38.52H69.555ZM98.6963 29.64H104.696V45H98.6963V29.64ZM107.454 29.64H132.414V34.2H107.454V29.64ZM116.934 33.888H122.934V45H116.934V33.888Z" fill="white"/>
<path d="M257 25L236 47" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M247 25L227 47" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M237 25L217 47" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M227 25L206 47" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M218 25L196 47" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M208 25L186 47" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M197 25L176 47" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M187 25L167 47" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M177 25L157 47" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M167 25L147 47" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
</svg>

<div className="slider-arrow">
            <div onClick={()=>{this.slide(".pu","left")}} className="slide-mobile sola-ok d-md-none d-lg-block"></div>

            <div  onClick={()=>{this.slide(".pu","right")}} className="slide-mobile saga-ok d-md-none d-lg-block"></div>

            <div  onClick={()=>{this.slide(".pu","left")}} className="d-none d-md-block slide-tablet tablet-sola-ok d-lg-none"></div>
            <div  onClick={()=>{this.slide(".pu","right")}} className="d-none d-md-block slide-tablet tablet-saga-ok d-lg-none"></div>
          </div>
          </div>
          <div className="urunler pu">
          <Link to="/product/2">
            <div className="urun product-urun">
              <img src={Recent1} alt="" />
              <h1 className="urun-adi">Air Jordan 1 Mid</h1>
              <h2>145 €</h2>
            </div>
            </Link>
            <Link to="/product/2">
            <div className="urun product-urun">
              <img src={Recent1} alt="" />
              <h1 className="urun-adi">Air Jordan 1 Mid</h1>
              <h2>145 €</h2>
            </div>
            </Link>
            <Link to="/product/2">
            <div className="urun product-urun">
              <img src={Recent1} alt="" />
              <h1 className="urun-adi">Air Jordan 1 Mid</h1>
              <h2>145 €</h2>
            </div>
            </Link>
            <Link to="/product/2">
            <div className="urun product-urun">
              <img src={Recent1} alt="" />
              <h1 className="urun-adi">Air Jordan 1 Mid</h1>
              <h2>145 €</h2>
            </div>
            </Link>
            <Link to="/product/2">
            <div className="urun product-urun">
              <img src={Recent1} alt="" />
              <h1 className="urun-adi">Air Jordan 1 Mid</h1>
              <h2>145 €</h2>
            </div>
            </Link>
            
          </div>
        </div>
     
        </div>
      </div>
    );
  }
}
