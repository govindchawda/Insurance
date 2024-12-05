import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowRightLong ,FaArrowLeftLong} from "react-icons/fa6";
import './review.css'


function Review() {
    return (

        <>

             <div className="container reviews">
                <div className="row">
                    <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".gn-btn",
            prevEl: ".gp-btn",
            // nextEl: ".card-slider-button-next",
            // prevEl: ".card-slider-button-prev",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1064: { slidesPerView: 3 },
            1440: { slidesPerView: 3 },
          }}
        >
            <SwiperSlide>

            <div className="col-sm-12 col-md-6 col-lg-4 hello mt-3" style={{width:'100%'}}>
                        <div class="card hello">
                            <img src="https://i.ibb.co/TR2qqV5/2024-awards.png" class="card-img-top review" alt="Award 3"></img>
                            <div class="card-body text-center">
                                <p class="card-text">Shop Insurance exceeds 21,000 Google reviews with a 4.8-star rating</p>
                                <h5 class="card-title">Sachin</h5>
                            </div>
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide>

            <div className="col-sm-12 col-md-6 col-lg-4 hello2 mt-3" style={{width:'100%'}}>
                        <div class="card hello">
                        <img src="https://i.ibb.co/2SYLY6k/Qorus-Awards-24-Generali-Teams-Protect-Me-Work-Force-Transformation-2024-06-07-12-20-22.jpg" class="card-img-top review" alt="Award 2"/>
                            <div class="card-body text-center">
                                <p class="card-text">New year, new outlook, new you with Insurance Shop</p>
                                <h5 class="card-title">Kirshan Kumar</h5>
                            </div>
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide>

            <div className="col-sm-12 col-md-6 col-lg-4 mt-3 hello2" style={{width:'100%'}}>
                        <div class="card hello">
                        <img src="https://i.ibb.co/HD7gFCY/17-innovative-product-award.jpg" class="card-img-top review" alt="Award 4"/>
                            <div class="card-body text-center">
                                <p class="card-text">Talking about their pet subject with Insurance Shop</p>
                                <h5 class="card-title">Govind </h5>
                            </div>
                        </div>
                    </div>

            </SwiperSlide>
            <SwiperSlide>

            <div className="col-sm-12 col-md-6 col-lg-4 hello mt-3" style={{width:'100%'}}>
                        <div class="card hello">
                            <img src="https://i.ibb.co/TR2qqV5/2024-awards.png" class="card-img-top review" alt="Award 3"></img>
                            <div class="card-body text-center">
                                <p class="card-text">Shop Insurance exceeds 21,000 Google reviews with a 4.8-star rating</p>
                                <h5 class="card-title">Aditya </h5>
                            </div>
                        </div>
                    </div>
            </SwiperSlide>
        </Swiper>

                  
        <div className="card-slider-button-prev gp-btn">
          <FaArrowLeftLong />
          {/* <img src="	https://cdn.policybazaar.ae/prequote/public/src/assets/images/long-left-arrow..svg" alt="" /> */}
        </div>
        <div className="card-slider-button-next gn-btn">
          <FaArrowRightLong />
          {/* <img src="	https://cdn.policybazaar.ae/prequote/public/src/assets/images/long-right-arrow..svg" alt="" /> */}
        </div>
                    

                    
                </div>
            </div>
 

           


        </>
    )
}

export default Review
