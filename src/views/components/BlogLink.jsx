import React from 'react'
import {Link} from "react-router-dom"
import Img from "../../assets/img/blog-image.jpg"

function BlogLink() {

      
    return (
        <div className="blog-link-container">
           <Link to="/">
                <img src={Img} alt=""/>
            </Link>
            <div className="tarih">26 Mayıs 2021</div>
            <p>Sales market growth hacking direct mailing stock lean startup analytics termsheet return </p>         
        </div>
    )
}

export default BlogLink
