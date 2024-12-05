import React from 'react'
import './Banner.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
export default function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 200,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <>
        <div className="main-banner">
            <div className="container">
                <div className='banner-section'>
                    <div className='baner-data'>
                        <h2>
                        Let's find you <br></br>
                        the Best Insurance
                        </h2>
                    </div>
                    <div className='banner-slider'>
                        <div className='d-flex' style={{width:'100%'}}>
                            <Slider style={{height:'450px'}} className='d-flex media-navbar-banner-height' {...settings}>
                                <div style={{overflow:'hidden'}}>
                                        <img className='bnr-slider-img' src="https://i.ibb.co/rmHyZ0c/Life-carousel-img-ced9f16ba9.png" alt="" />
                                    <div className='bmr-slider-data'>
                                        <h4>
                                        Will your family be financially okay without your income?
                                        </h4>
                                        <p>Start with low coverage, increase later.</p>
                                    </div>
                                </div>
                                <div>
                                        <img className='bnr-slider-img' src="https://i.ibb.co/tzyJLdJ/Bike-carousel-img-153cc0bd22.png" alt="" />
                                    <div className='bmr-slider-data'>
                                        <h4>
                                        Will your family be financially okay without your income?
                                        </h4>
                                        <p>Start with low coverage, increase later.</p>
                                    </div>
                                </div>
                                <div>
                                        <img className='bnr-slider-img' src="https://i.ibb.co/ZmjPQJH/Travel-carousel-img-94834ae9d7.png" alt="" />
                                    <div className='bmr-slider-data'>
                                        <h4>
                                        Will your family be financially okay without your income?
                                        </h4>
                                        <p>Start with low coverage, increase later.</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className='banner-cards'>
                        <div className='bnr-card-contain'>
                            <Link to='/car' className='bnr-card-1'> 
                                <img  src="https://i.ibb.co/F4CgZdx/Group-74.png" alt="" />
                            </Link>
                            <Link to='/health' className='bnr-card-1'>
                                <img src="https://i.ibb.co/yR3ymtc/Group-75.png" alt="" />
                            </Link>
                            <Link to='/travel' className='bnr-card-2'>
                                <img src="https://i.ibb.co/McsHbYc/Group-76.png" alt="" />
                            </Link>
                            <Link to='/bikein' className='bnr-card-2'>
                                <img  src="https://i.ibb.co/NF6Z6Bq/Group-77.png" alt="" />
                            </Link>
                            <Link to='/life' className='bnr-card-2'>
                                <img src="https://i.ibb.co/c6fgNsJ/Group-78.png" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
