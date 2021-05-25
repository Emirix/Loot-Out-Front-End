import React from 'react'
import SearchIcon from '../assets/svg/search-icon.svg'
import ResultPic from '../assets/img/search-result-box.png'
import axios from 'axios';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor(){
        super();
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            searchString:"",
            loading:null,
            result:null,
            sonucYok:""
        }
    }

    handleSearch(e){
        e.preventDefault();
        const url = "http://127.0.0.1:8000";
        const j = "/?format=json";
        document.querySelector("#result-helper").innerText = ""
        this.setState({searchString:e.target.value})
        this.setState({loading:true})
        this.setState({result:null})
        axios.get(url+"/products/search/?search="+this.state.searchString+"&format=json").then(res=>{
            this.setState({result:res.data})
            this.setState({loading:false})
            if(this.state.result.length == 0 || this.state.result == null){
                document.querySelector("#result-helper").innerText = "Not found"
            }

        })
    }
   render(){
    return (
        <div className="search"> 
        <div className="close-search" onClick={e=>{
            document.querySelector(".home-search-wrapper").style.display = "none";
            document.querySelector(".AppFrontWrapper").style.height = "0";
            document.body.classList.remove("kes-lan")

        }}><svg width="137" height="137" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M131.5 5L5 131.5M131.5 131.5L5 5" stroke="#FFEFEF" stroke-width="14"/>
</svg>
</div>
            <form>
                <div className="input-container">
                    <label htmlFor="home-search">Search Sneaker</label>
                    <div className="input-wrapper">
                        <input
                        autoComplete="off"
                        value={this.state.searchString}
                        onChange={this.handleSearch}
                        type="text" placeholder="Search" id="home-search"/>
                        <img src={SearchIcon} alt=""/>
                    </div>
                </div>
            </form>
            <div className="results">
            <div className="text-center text-white" id="result-helper">Lütfen Aranacak Kelimeyi Giriniz</div>
                {this.state.result === null ? "" : this.state.result.map(val=>{

   
    return(

        <div key={val.id} className="result-box">
            
        <div className="left-area">
                <img src={val.image} alt=""/>
             
        </div>
        <div className="result-presentation">
       <div className="left">
        <p className="product-title"><Link to={"/product/"+val.id}>{val.name}</Link></p>
        <p className="product-information">Last Sale: <span>VERİ YOK</span></p>
       </div>
       <div className="right">
           <p className="product-price">VERİ YOK</p>
       </div>
    
        </div>   
    
        </div>
    )
}) }
            </div>
        </div>
    )
   }
}

export default Search
