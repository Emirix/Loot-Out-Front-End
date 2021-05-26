import React from 'react'
import Header from '../../shared/Header'
import BG from "../../assets/img/blog-bg1366.jpg"

function Blog() {
    return (
        <div className="blog-page-container container-fluid">
            <Header/>
            <img className="blog-bg" src={BG}/>
        </div>
    )
}

export default Blog
