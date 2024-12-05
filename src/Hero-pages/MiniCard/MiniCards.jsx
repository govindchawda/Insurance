import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination ,Autoplay} from "swiper/modules";
import './Minicard.css'
export default function MiniCards() {
  return (
    <>
    <div className='mt-1 desk-insurence-slide'>

        <section
            className="mb-5"
            style={{ width: "100%", padding: "34px 0 0" }}
        >
            <div className="container">
                <div className="row mini-cardsbb" >
                    <div className="col-md-4 col-md-4 col-12 mt-3 mb-3">
                        <img
                            src="https://static.pbcdn.in/cdn/images/home-v1/beware-of-fraudsters.png"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    <div className="col-md-4 col-md-4 col-12 mt-3 mb-3">
                        <img
                            src="https://static.pbcdn.in/cdn/images/home/fraud_detection_policy.png"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    <div className="col-md-4 col-md-4 col-12 mt-3 mb-3">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/680c/34aa/d0dd71f44ff6106e1d9e8ef10aab68e9?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iCAvPXFmQwko5bEVJ7iYuSURj3IXdO2QfIQ5XS213ISz-tRzVvRM21gkt9BjQr-adGSGt1deWkLY~taNXzI46cU7C~PE35PRv4AzJ6IestbgnO5oE2hH12GW~-AURFUaQxPhja1tWnh~e1qZ1bmpvZJ9iv~abNjTekGXMIFoG7slorEyTDHPklYYHFmeKuL6YQDUVDGHKBddXN9jtfx39yFay8~9kMnJ-aP5eRIIXCsnClJNFu4QwJyJuUAs6B1EsCEAsNctw0jdiRorum~lDJht1bcFOWYla5IO0KTee6tlnWBH~PUixc13Kdqn7DYbyvPU65Z5RHuoPO7XpUq4kQ__"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
             
                </div>
            </div>
        </section>


    </div>
        <Swiper
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination ,Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      className="mob-insurence-slide p-4" 
      style={{height: "auto"}}
    >
        <SwiperSlide className=' mini-cardsbb'>
        <div className="col-md-4 col-md-4 col-12 mt-3 mb-3">
                        <img
                            src="https://static.pbcdn.in/cdn/images/home-v1/beware-of-fraudsters.png"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        
                    <div className="col-md-4 col-md-4 col-12 mt-3 mb-3">
                        <img
                            src="https://static.pbcdn.in/cdn/images/home/fraud_detection_policy.png"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="col-md-4 col-md-4 col-12 mt-3 mb-3">
                        <img
                            src="https://static.pbcdn.in/cdn/images/home-v1/banner-24x7.png"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
        </SwiperSlide>
    </Swiper>
    </>
  )
}
