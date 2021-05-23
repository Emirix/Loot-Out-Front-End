import React, { Component } from 'react'
import Header from "../../shared/Header"

export default class Blog extends Component {
    render() {
        return (
            <div>
                <Header/>

                    <div className="container-fluid bg-white p-5">
                    <div class="section over-hide padding-top-120 padding-top-mob-nav padding-bottom-120 section-background-20 background-img-top">	
			<div class="section-1400 pt-xl-4">
				<div class="container-fluid padding-top-bottom-80">
					<div class="row">
						<div class="col-lg">
							<h2 class="display-8 mb-3">
								Mixed masonry
							</h2>
							<p class="lead mb-0 title-text-left-line-small">
								Latest news
							</p>
						</div>
						<div class="col-lg-auto align-self-center mt-4 mt-lg-0">
							<nav aria-label="breadcrumb">
								<ol class="breadcrumb no-border">
									<li class="breadcrumb-item"><a href="#" class="link link-dark-primary size-14" data-hover="Home">Home</a></li>
									<li class="breadcrumb-item active font-weight-500" aria-current="page"><span class="size-14">Blog</span></li>
								</ol>
							</nav>				
						</div>
					</div>
				</div>
			</div>
			<div class="section-1400">
				<div class="container-fluid">
					<div class="row">
						<div class="col-12 text-left filter-sorting pb-4">
							<button class="btn btn-filter-tag-small font-weight-700 filter me-3 position-relative active" data-filter="*">all posts<span class="btn-filter-icon-small bg-dark color-white">9</span></button>
							<button class="btn btn-filter-tag-small font-weight-700 filter me-3 position-relative" data-filter=".fashion">fashion <span class="btn-filter-icon-small bg-dark color-white">2</span></button>
							<button class="btn btn-filter-tag-small font-weight-700 filter me-3 position-relative" data-filter=".lifestyle">lifestyle <span class="btn-filter-icon-small bg-dark color-white">4</span></button>
							<button class="btn btn-filter-tag-small font-weight-700 filter me-3 position-relative" data-filter=".health">health <span class="btn-filter-icon-small bg-dark color-white">4</span></button>
							<button class="btn btn-filter-tag-small font-weight-700 filter me-3 position-relative" data-filter=".travel">travel <span class="btn-filter-icon-small bg-dark color-white">6</span></button>
							<button class="btn btn-filter-tag-small font-weight-700 filter me-3 position-relative" data-filter=".tech">tech <span class="btn-filter-icon-small bg-dark color-white">3</span></button>
							<button class="btn btn-filter-tag-small font-weight-700 filter position-relative" data-filter=".sports">sports <span class="btn-filter-icon-small bg-dark color-white">3</span></button>
						</div>
					</div>
				</div>
			</div>
			<div class="filter-wrapper-mix portfolio-1400 with-gutter mixed-fix">
				<div class="mix poftfolio-showcase showcase-4-col tech travel lifestyle">
					<div class="section blog-wrap-3 ver-2-blog-pages img-wrap">
						<img src="img/blog-1.jpg" alt=""/>
						<div class="blog-wrap-3-mask"></div>
						<div class="blog-wrap-3-text">
							<p class="mb-2 size-18">
								<a href="#" class="tag new blog-wrap-3-tag">couple</a>
								<a href="#" class="tag popular blog-wrap-3-tag">trip</a>
								<a href="#" class="tag sale blog-wrap-3-tag">road</a>
							</p>
							<p class="mb-1 size-16 color-light">
								10.Sep. by						
								<a href="about-me-creative.html" class="link link-normal size-16 animsition-link" data-hover="Fred Johnston">Fred Johnston</a>
							</p>
							<h6 class="mb-0">
								<a href="post-1.html" class="link-heading-light animsition-link">View of couple on road trip</a>
							</h6>
						</div>
					</div>
				</div>
				<div class="mix poftfolio-showcase showcase-4-col sports travel health">
					<div class="section blog-wrap-3 ver-2-blog-pages img-wrap">
						<img src="img/blog-2.jpg" alt=""/>
						<div class="blog-wrap-3-mask"></div>
						<div class="blog-wrap-3-text">
							<p class="mb-2 size-18">
								<a href="#" class="tag info blog-wrap-3-tag">people</a>
								<a href="#" class="tag sale blog-wrap-3-tag">camping</a>
								<a href="#" class="tag hot blog-wrap-3-tag">river</a>
							</p>
							<p class="mb-1 size-16 color-light">
								08.Sep. by						
								<a href="about-me-creative.html" class="link link-normal size-16 animsition-link" data-hover="Fred Johnston">Fred Johnston</a>
							</p>
							<h6 class="mb-0">
								<a href="post-1.html" class="link-heading-light animsition-link">People camping by the river</a>
							</h6>
						</div>
					</div>
				</div>							
				<div class="mix poftfolio-showcase showcase-2-col travel health">
					<div class="section blog-wrap-3 ver-2-blog-pages img-wrap">
						<img src="img/blog-3.jpg" alt=""/>
						<div class="blog-wrap-3-mask"></div>
						<div class="blog-wrap-3-text">
							<p class="mb-2 size-18">
								<a href="#" class="tag hot blog-wrap-3-tag">man</a>
								<a href="#" class="tag info blog-wrap-3-tag">dog</a>
								<a href="#" class="tag popular blog-wrap-3-tag">trip</a>
								<a href="#" class="tag sale blog-wrap-3-tag">road</a>
							</p>
							<p class="mb-1 size-16 color-light">
								05.Sep. by						
								<a href="about-me-creative.html" class="link link-normal size-16 animsition-link" data-hover="Fred Johnston">Fred Johnston</a>
							</p>
							<h6 class="mb-0">
								<a href="post-1.html" class="link-heading-light animsition-link">Man with dog on road trip</a>
							</h6>
						</div>
					</div>
				</div>
				<div class="mix poftfolio-showcase showcase-2-col tech">
					<a href="#">
						<div class="section services-wrap-3 ver-blog-pages bg-purple px-4 pt-4 pb-3">
							<h6 class="mb-5 pb-4">
								Weekend<br/>top 
							</h6>
							<p class="mb-0 text-right"><i class="uil uil-favorite size-28"></i></p>
						</div>
					</a>
				</div>
				<div class="mix poftfolio-showcase showcase-4-col tech travel health lifestyle">
					<div class="section blog-wrap-3 ver-2-blog-pages img-wrap">
						<img src="img/blog-4.jpg" alt=""/>
						<div class="blog-wrap-3-mask"></div>
						<div class="blog-wrap-3-text">
							<p class="mb-2 size-18">
								<a href="#" class="tag popular blog-wrap-3-tag">smiling</a>
								<a href="#" class="tag new blog-wrap-3-tag">couple</a>
								<a href="#" class="tag sale blog-wrap-3-tag">signpost</a>
							</p>
							<p class="mb-1 size-16 color-light">
								02.Sep. by						
								<a href="about-me-creative.html" class="link link-normal size-16 animsition-link" data-hover="Fred Johnston">Fred Johnston</a>
							</p>
							<h6 class="mb-0">
								<a href="post-1.html" class="link-heading-light animsition-link">Smiling couple at signpost</a>
							</h6>
						</div>
					</div>
				</div>
				<div class="mix poftfolio-showcase showcase-2-col lifestyle fashion">
					<div class="section blog-wrap-3 ver-2-blog-pages img-wrap">
						<img src="img/blog-15.jpg" alt=""/>
						<div class="blog-wrap-3-mask"></div>
						<div class="blog-wrap-3-text">
							<p class="mb-2 size-18">
								<a href="#" class="tag hot blog-wrap-3-tag">smiling</a>
								<a href="#" class="tag info blog-wrap-3-tag">pretty</a>
								<a href="#" class="tag sale blog-wrap-3-tag">customer</a>
							</p>
							<p class="mb-1 size-16 color-light">
								28.Aug. by						
								<a href="about-me-creative.html" class="link link-normal size-16 animsition-link" data-hover="Fred Johnston">Fred Johnston</a>
							</p>
							<h6 class="mb-0">
								<a href="post-1.html" class="link-heading-light animsition-link">Smiling pretty customer</a>
							</h6>
						</div>
					</div>
				</div>
				<div class="mix poftfolio-showcase showcase-4-col travel">
					<a href="#">
						<div class="section services-wrap-3 ver-blog-pages-2 bg-red px-4 pt-4 pb-3">
							<h6 class="mb-5 pb-4 pb-xl-5">
								Do not<br/>miss
							</h6>
							<div class="w-100 pt-xl-5 pb-xl-3"></div>
							<p class="mb-0 mt-xl-5 pt-xl-5 text-right"><i class="uil uil-glass-martini-alt size-28"></i></p>
						</div>
					</a>
				</div>
				<div class="mix poftfolio-showcase showcase-2-col sports lifestyle">
					<div class="section blog-wrap-3 ver-2-blog-pages img-wrap">
						<img src="img/blog-12.jpg" alt=""/>
						<div class="blog-wrap-3-mask"></div>
						<div class="blog-wrap-3-text">
							<p class="mb-2 size-18">
								<a href="#" class="tag hot blog-wrap-3-tag">man</a>
								<a href="#" class="tag info blog-wrap-3-tag">exercising</a>
							</p>
							<p class="mb-1 size-16 color-light">
								25.Aug. by						
								<a href="about-me-creative.html" class="link link-normal size-16 animsition-link" data-hover="Fred Johnston">Fred Johnston</a>
							</p>
							<h6 class="mb-0">
								<a href="post-1.html" class="link-heading-light animsition-link">Man exercising</a>
							</h6>
						</div>
					</div>
				</div>
				<div class="mix poftfolio-showcase showcase-4-col sports health">
					<div class="section blog-wrap-3 ver-2-blog-pages img-wrap">
						<img src="img/blog-13.jpg" alt=""/>
						<div class="blog-wrap-3-mask"></div>
						<div class="blog-wrap-3-text">
							<p class="mb-2 size-18">
								<a href="#" class="tag popular blog-wrap-3-tag">indoor</a>
								<a href="#" class="tag new blog-wrap-3-tag">climbing</a>
							</p>
							<p class="mb-1 size-16 color-light">
								21.Aug. by						
								<a href="about-me-creative.html" class="link link-normal size-16 animsition-link" data-hover="Fred Johnston">Fred Johnston</a>
							</p>
							<h6 class="mb-0">
								<a href="post-1.html" class="link-heading-light animsition-link">Indoor climbing</a>
							</h6>
						</div>
					</div>
				</div>
				<div class="mix poftfolio-showcase showcase-2-col travel fashion">
					<div class="section blog-wrap-3 ver-2-blog-pages img-wrap">
						<img src="img/blog-14.jpg" alt=""/>
						<div class="blog-wrap-3-mask"></div>
						<div class="blog-wrap-3-text">
							<p class="mb-2 size-18">
								<a href="#" class="tag sale blog-wrap-3-tag">couple</a>
								<a href="#" class="tag new blog-wrap-3-tag">beautiful</a>
								<a href="#" class="tag hot blog-wrap-3-tag">wedding</a>
							</p>
							<p class="mb-1 size-16 color-light">
								17.Aug. by						
								<a href="about-me-creative.html" class="link link-normal size-16 animsition-link" data-hover="Fred Johnston">Fred Johnston</a>
							</p>
							<h6 class="mb-0">
								<a href="post-1.html" class="link-heading-light animsition-link">Beautiful wedding couple</a>
							</h6>
						</div>
					</div>
				</div>
			</div>
			<div class="section-1400">
				<div class="container-fluid">
					<div class="row justify-content-center">
						<div class="col-12 pt-5">
							<nav aria-label="Page navigation example">
								<ul class="pagination justify-content-center">
									<li class="page-item disabled">
										<a class="page-link" href="#" tabindex="-1" aria-disabled="true">
											<span aria-hidden="true"><i class="uil uil-arrow-left"></i></span>
										</a>
									</li>
									<li class="page-item active"><a class="page-link" href="#">1</a></li>
									<li class="page-item"><a class="page-link" href="#">2</a></li>
									<li class="page-item"><a class="page-link" href="#">3</a></li>
									<li class="page-item">
										<a class="page-link" href="#" aria-label="Next">
											<span aria-hidden="true"><i class="uil uil-arrow-right"></i></span>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>

                    </div>

                     
            </div>
        )
    }
}
