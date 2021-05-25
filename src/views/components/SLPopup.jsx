import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class SLPopup extends Component {
    constructor(){
        super();
        this.state = {
            isForgotPass:false
        }
    }
    render() {
        return ( 
            <div className={this.props.visible ? "login-register-popup " : "d-none"}>
                
                {
                    this.state.isForgotPass ?
                <div className="forgot-pass-container">
                <svg onClick={this.props.onClose} width="20" height="20" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 1L0.5 8M0.5 1L7.5 8" stroke="black"/>
</svg>              

                    <h4>Reset Password</h4>
                    <div className="kisa-cizgi"></div>
                    <label >Email:</label>
                    <input type="text" placeholder="Email" />
                    <p>We'll send password reset link to your email.</p>
                    <button>Send Reset Link</button>
                    <p className="mt-3"
                    onClick={()=>{
                        this.setState({isForgotPass:false})
                    }}>Back to Login/Register</p>
                </div> :
                
                
                <div className="login-register-popup__container">
                <svg onClick={this.props.onClose} width="20" height="20" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 1L0.5 8M0.5 1L7.5 8" stroke="black"/>
</svg>              

                  
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <h4>REGISTER NOW</h4>
                            <div className="kisa-cizgi"></div>
                            <p>Kayıt olarak ürünleri alabilir veya satabilirsiniz bu yazı sonra değiştirilir.</p>
                        
                            <form action="">
                                <label>Email</label>
                                <input type="mail" placeholder="Email" />

                                <label>Password</label>
                                <input type="password" placeholder="Password" />
                                
                                <label>Password Again</label>
                                <input type="password" placeholder="Password again" />
                                <label class="b-contain">
	                                <span>I read and accept <Link to="/terms">the terms.</Link></span>
	                                <input type="checkbox"/>
	                                <div class="b-input"></div>
                                </label>

                                <label class="b-contain">
	                                <span>I want get emails from Loot Out.</span>
	                                <input type="checkbox"/>
	                                <div class="b-input"></div>
                                </label>
                                <button className="bg-dark text-white">REGISTER TO LOOT OUT</button>
                            </form>
                        </div>
                        <div className="col-lg-6 col-12">
                            <h4>LOGIN TO LOOT OUT</h4>
                            <div className="kisa-cizgi"></div>
                            <form>
                                <label>E-mail</label>
                                <input type="mail" placeholder="Email"/>

                                <label>Password</label>
                                <input type="password" placeholder="Password"/>
                                <div className="d-flex align-items-center">
                                <label class="b-contain">
	                                <span>Stay logged</span>
	                                <input type="checkbox"/>
	                                <div class="b-input"></div>
                                </label>

                                <div onClick={()=>{this.setState({isForgotPass:true})}} className="ms-auto forgot-pass-link">Forgot Password?</div>
                                </div>

                                <button>LOGIN</button>
                            </form>
                        </div>
                    </div>
               </div>}
            </div>
        )
    }
}
