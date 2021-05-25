import React from "react";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import Sidebar from "../../shared/Sidebar";
import Slash from "../../assets/svg/most-recent-desktop-slash.svg";
import Atom from "../../assets/img/atom-sol.png";

export default class Myaccount extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      surname: "",
      phone: "",
      adress: "",
      currentPassword: "",
      newPassword: "",
      againNewPassWord: "",
      showPass: false,
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <img src={Atom} className="atom-my-accout d-none d-xl-block" />

        <div className="container text-white mt-4 user-info-container">
          <h1 className="title-slash cek-sola">
            USER INFORMATION <img src={Slash} className="d-none d-xl-block" />
          </h1>
          <div className="row g-5 text-white">
            <div className="col-sm-12 col-lg-12">
              <div className="row gy-md-3 g-lg-5">
                <div className="col-lg-6">
                  <div className="input-wrapper">
                    <label>
                      E-mail{" "}
                      <img
                        src={Slash}
                        className="kucuk-slash"
                        alt="slash"
                        draggable="false"
                      />
                    </label>
                    <input type="mail" placeholder="Mail" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-wrapper">
                    <label>
                      Name{" "}
                      <img
                        src={Slash}
                        className="kucuk-slash"
                        alt="slash"
                        draggable="false"
                      />
                    </label>
                    <input type="text" placeholder="Name" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-wrapper">
                    <label>
                      Surname{" "}
                      <img
                        src={Slash}
                        className="kucuk-slash"
                        alt="slash"
                        draggable="false"
                      />
                    </label>
                    <input type="text" placeholder="Surname" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-wrapper">
                    <label>
                      Phone
                      <img
                        src={Slash}
                        className="kucuk-slash"
                        alt="slash"
                        draggable="false"
                      />
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="input-wrapper daha-kisa-input-wrapper">
                    <label>
                      Adress
                      <img
                        src={Slash}
                        className="kucuk-slash"
                        alt="slash"
                        draggable="false"
                      />
                    </label>
                    <textarea
                      cols="30"
                      rows="6"
                      placeholder="Adress"
                    ></textarea>
                    <button>Save Changes</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-lg-12 mb-55">
              <h1 className="title-slash ">
                CHANGE PASSSWORD{" "}
                <img src={Slash} className="d-none d-xl-block" />
              </h1>

              <div className="row mb-5">
                <div className="col-lg-3 col-sm-12 ">
                  <div className="input-wrapper">
                    <label>
                      CURRENT PASSWORD
                      <img
                        src={Slash}
                        className="kucuk-slash"
                        alt="slash"
                        draggable="false"
                      />
                    </label>

                    <input
                      type={this.state.showPass ? "password" : "text"}
                      placeholder="**********"
                      className="cp"
                    />

                    <div
                      className="show-pass-togle-con"
                      onClick={(e) => {
                        e.currentTarget
                          .querySelector(".show-pasword-toggle")
                          .classList.toggle("xxc-active");
                        this.setState({ showPass: !this.state.showPass });
                      }}
                    >
                      <button className="show-pasword-toggle xxc-active">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                        </svg>
                      </button>
                      <span>Show Password</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="input-wrapper">
                    <label>
                      {" "}
                      <label>
                        NEW PASSWORD{" "}
                        <img
                          src={Slash}
                          className="kucuk-slash"
                          alt="slash"
                          draggable="false"
                        />
                      </label>
                    </label>
                    <input type="password" placeholder="**********" />
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="input-wrapper">
                    <label>
                      APPROVE NEW PASSWORD
                      <img
                        src={Slash}
                        className="kucuk-slash"
                        alt="slash"
                        draggable="false"
                      />
                    </label>
                    <input type="password" placeholder="**********" />
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="input-wrapper">
                    <button className="mb-0">Change Password</button>
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
