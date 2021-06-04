import React, { Component } from "react";
import Header from "../../shared/Header";
import { withRouter } from "react-router-dom";
import BG from "../../assets/img/contact-bg-desktop.png";
//import BG from "../../assets/img/contactus-bg-desktop.jpg";
import BG360 from "../../assets/img/contact-bg-mobile.png";
class ContactUs extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (this.props.location.pathname == "/contact-us") {
      document.querySelector(".Footer").classList.add("d-none");
    }
  }
  componentWillUnmount() {
    document.querySelector(".Footer").classList.remove("d-none");
  }

  render() {
    return (
      <div className="contact-us__container container-fluid">
        <img
          src={BG}
          className="contact-us__bg d-none d-sm-block"
          draggable={false}
        />

<img
          src={BG360}
          className="contact-us__bg d-sm-none"
          draggable={false}
        />

<div className="contact-us__atom">
        <svg viewBox="0 0 524 525" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M262.01 422.801C350.813 422.801 422.802 350.812 422.802 262.009C422.802 173.206 350.813 101.217 262.01 101.217C173.208 101.217 101.219 173.206 101.219 262.009C101.219 350.812 173.208 422.801 262.01 422.801Z" stroke="#7AF0D1" stroke-opacity="0.25" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M262.008 392.995C334.349 392.995 392.994 334.351 392.994 262.009C392.994 189.667 334.349 131.023 262.008 131.023C189.666 131.023 131.021 189.667 131.021 262.009C131.021 334.351 189.666 392.995 262.008 392.995Z" stroke="#7AF0D1" stroke-opacity="0.25" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M262.008 362.016C317.24 362.016 362.014 317.241 362.014 262.009C362.014 206.777 317.24 162.003 262.008 162.003C206.776 162.003 162.002 206.777 162.002 262.009C162.002 317.241 206.776 362.016 262.008 362.016Z" stroke="#7AF0D1" stroke-opacity="0.25" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M0 262.009H213.465" stroke="#7AF0D1" stroke-opacity="0.25" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M310.553 262.009H523.999" stroke="#7AF0D1" stroke-opacity="0.25" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M262.008 310.553V524.018" stroke="#7AF0D1" stroke-opacity="0.25" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M262.008 0V213.465" stroke="#7AF0D1" stroke-opacity="0.25" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M428.398 420.287L500.49 491.332" stroke="#7AF0D1" stroke-opacity="0.25" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M30.209 22.0973L102.3 93.1606" stroke="#7AF0D1" stroke-opacity="0.25" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M102.3 420.287L30.209 491.332" stroke="#7AF0D1" stroke-opacity="0.25" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M500.49 22.0973L428.398 93.1606" stroke="#7AF0D1" stroke-opacity="0.25" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>

        </div>

        <div className="container">
          <div className="row yukari2">
            <div className="contact-us__title">
              We value transparency and
              <br />
              integrity.
            </div>
          </div>

          <div className="row yukari2 contact-top">
            <div className="col-md-5 col-12 mb-5">
              <div className="contact-us__info-container">
                <h1>Our Contact Info</h1>
                <p>Meininger Strasse 83, Berlin, Germany</p>
                <p>+ 34 2454 3459 21</p>
                <p>hello@georgelewis.com</p>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <form action="">
                <div className="row gx-5">
                  {" "}
                  <div className="col-sm-6">
                    <input placeholder="Name" />
                  </div>
                  <div className="col-sm-6">
                    <input placeholder="E-mail" />
                  </div>
                  <div className="col-sm-12">
                    <input placeholder="Message" />
                  </div>
                </div>
                <div className="row">
                  <button>Ask Us</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ContactUs);
