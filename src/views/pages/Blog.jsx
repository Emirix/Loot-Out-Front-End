import React from 'react'
import Header from '../../shared/Header'
import BG from "../../assets/img/blog-bg1440.jpg"
import Atom from "../../assets/img/blog-atom.png"

function Blog() {
    return (
        <div className="blog-page-container container-fluid">
            <Header/>  
            <img className="blog-bg" src={BG}/>
        </div> 
    )
}

export default Blog
