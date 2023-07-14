import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from '../../../assets/banner/banner_.jpg';
import banner2 from '../../../assets/banner/banner_2.jpg';
import banner3 from '../../../assets/banner/banner_3.jpg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                speed={1000}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <div className='relative'>
                    <SwiperSlide>
                        <div className='carousel-img'>
                            <img src={banner1} alt="" style={{ height: '460px', width: '2000px' }} />
                        </div>
                        <div className="absolute transform -translate-y-1/2 left-204 top-2/3">
                            <h1 className='text-5xl font-bold mb-12'>We are always ready to<br />
                                Delivery your Emergency<br />
                                Medicine</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='carousel-img'>
                            <img src={banner2} alt="" style={{ height: '460px', width: '2000px' }} />
                        </div>
                        <div className="absolute transform -translate-y-1/2 left-204 top-2/3">
                            <h1 className='text-5xl font-bold mb-12'>Medicine, Health-Care and<br />
                                Surgical Products all are<br />
                                Available</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='carousel-img'>
                            <img src={banner3} alt="" style={{ height: '460px', width: '2000px' }} />
                        </div>
                        <div className="absolute transform -translate-y-1/2 left-204 top-2/3">
                            <h1 className='text-5xl font-bold mb-12'>Just upload your prescription<br />
                                And order your necessary<br />
                                Medicine</h1>
                        </div>
                    </SwiperSlide>
                </div>

            </Swiper>
        </div>
    );
};

export default Banner;