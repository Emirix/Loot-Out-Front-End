import React from 'react'
import Header from '../../shared/Header'
import BG from "../../assets/img/blog-bg1366.jpg"
import BG320 from "../../assets/img/blog-bg320.png"
import Atom from "../../assets/img/blog-atom.png"
import BlogLink from '../components/BlogLink'
import * as $ from "jquery"
import {withRouter } from "react-router-dom"
import Swipale from 'react-swipeable';
 

 class Blog extends React.Component {

  constructor(){
    super();
    this.slide = this.slide.bind(this)
  }
  
  slide(w, to ) {
    if (to == "right") {
      var now = $(w).scrollLeft()
      $(w).scrollLeft((now + window.innerWidth) - 70)
    } else {
    
      var now = $(w).scrollLeft() - window.innerWidth;
      $(w).scrollLeft(now);
    }
  }

  componentDidMount(){
    window.scrollTo(0,0)

    const slider = document.querySelector('.blog-list-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});


if(this.props.location.pathname == "/blog"){
  document.querySelector(".Footer").classList.add("d-none")
}

}

componentWillUnmount(){
  document.querySelector(".Footer").classList.remove("d-none")

}


    render(){
      return (
        <div className="blog-page-container container-fluid">
            <img className="blog-bg d-none d-sm-block" src={BG} draggable={false}/>
            <img className="blog-bg d-block d-sm-none" src={BG320} draggable={false}/>
            <img className="blog-atom" src={Atom} draggable={false}/>

            <div className="yukarii">
            <div className="row">

              
                <div className="ortala1">
                <div className="sneaker-blog-title">Sneaker Blog</div>

<div className="slider-arrow-blog ms-auto d-flex">
   <div className="arrow"  onClick={()=>{this.slide(".blog-list-container","left")}}><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1L1 8L9 15" stroke="#7AF0D1"/>
</svg>
</div>
   <div className="arrow" onClick={()=>{this.slide(".blog-list-container","right")}}><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 15L9 8L0.999999 1" stroke="#F3F3F3"/>
</svg>
</div>
</div>

                </div>

                
            </div>
            </div>
        

           
           <div className="blog-list-container yukarii">
               
                    
                 <BlogLink/>
                <BlogLink/>
                <BlogLink/>
                <BlogLink/>
                <BlogLink/>
                <BlogLink/>
                <BlogLink/>
                <BlogLink/>
                <BlogLink/>
                <BlogLink/>
                <BlogLink/>
                <BlogLink/>
                <BlogLink/>

            </div>      


        
     
          <div className="row yukarii mt-5  d-sm-none d-flex">
            
<div className="slider-arrow-blog ms-auto d-flex">
   <div className="arrow"  onClick={()=>{this.slide(".blog-list-container","left")}}><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1L1 8L9 15" stroke="#7AF0D1"/>
</svg>
</div>
   <div className="arrow" onClick={()=>{this.slide(".blog-list-container","right")}}><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 15L9 8L0.999999 1" stroke="#F3F3F3"/>
</svg>
</div>
</div>
          </div>
            <div className="blog-list-container yukarii d-sm-none d-flex">
               
                    
               <BlogLink/>
              <BlogLink/>
              <BlogLink/>
              <BlogLink/>
              <BlogLink/>
              <BlogLink/>
              <BlogLink/>
              <BlogLink/>
              <BlogLink/>
              <BlogLink/>
              <BlogLink/>
              <BlogLink/>
              <BlogLink/>

          </div>      
         

            <div className="row yukarii mt-4">
            <div className="pager">
              <div className="first">01</div>
              <div className="second">/09</div>
            </div>
          </div>
        </div> 
    )
    }
}
export default withRouter(Blog)