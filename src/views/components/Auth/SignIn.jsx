import React from 'react'
import SignInShoe from '../../../assets/img/sign-in-shoe.png'
import SignInShoeMobile from '../../../assets/img/sign-up-mobile-show.png'
class SignIn extends React.Component {

    constructor(){
        super();
        this.state={
            email:"",
            pass:"",
            passAgain:"",
            checkbox:false,
            hataMesaji:""
        }
        
        this.handleKayit = this.handleKayit.bind(this);
    }

    handleKayit(e){
        e.preventDefault();
        this.setState({email: e.target[0].value.trim()})
        this.setState({check: e.target[3].value})
        
        // Şifre veya, şifre tekrar boş ise
        // Email kontrol'unu input[type=email] otomatik yapıyor.
        if(this.state.pass == "" || this.state.passAgain == ""){
            this.setState({hataMesaji:"Please do not leave blank space."})
        }
        if(this.state.pass != this.state.passAgain){
            // Şifre ve girilen şifre eşleşmiyor ise
            this.setState({hataMesaji:"Passwords do not match"})
        }

        if(this.state.pass == this.state.passAgain && this.state.pass != "" && this.state.passAgain!= ""){
            //Formlar başarılı, backende kayıt için post gönder ( axios )
            alert("basarili")
        }

        
   
    }


   render(){
    return (
        <div className="SignIn">
            <img src={SignInShoe} alt="" className="sign-in-desktop-image"/>
            <img src={SignInShoeMobile} alt="" className="sign-in-Mobile-image"/>
            <form className="SignInForm" onSubmit={this.handleKayit}>
                <h3>SIGN UP</h3>
                <div className="input-wrapper">
                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="Password">Password</label>
                    <input 
                    value={this.state.pass}
                    onChange={e=>{
                        this.setState({pass:e.target.value})
                    }}
                    type="password" id="Password" placeholder="Password"/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="PasswordAgain">Password Again</label>
                    <input
                                        value={this.state.passAgain}
                                        onChange={e=>{
                                            this.setState({passAgain:e.target.value})
                                        }} type="password" id="PasswordAgain" placeholder="Password"/>
                </div>

               
                    <p className="text-danger">{this.state.hataMesaji}</p>
                  

                <div className="checkbox-wrapper">
                    <input type="checkbox" id="sign-in-checkbox" />
                    <label htmlFor="sign-in-checkbox">Loot-Out E Bülteninden Haberdar Olmak İstiyorum</label>
                </div>


                <input type="submit" value="Sign Up" className="popup-sign-up-button"/>
            </form>
        </div>
    )
   }
}

export default SignIn
