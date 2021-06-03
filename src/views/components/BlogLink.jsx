import React from 'react'
import {Link} from "react-router-dom"

function BlogLink({img}) {

      
    return (
        <div className="blog-link-container">
           <Link to="/">
                <img src={img} alt=""/>
            </Link>
            <div className="tarih">26 Mayıs 2021</div>
            <p>Sales market growth hacking direct mailing stock lean startup analytics termsheet return </p>         
        </div>
    )
}

export default BlogLink
