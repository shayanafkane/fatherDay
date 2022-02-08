import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./assets/styles/Slider.css";
export default class Slider1 extends Component {
    render() {
        return (
            <section className='SliderBox'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper px-4 py-4"
                >

                    <SwiperSlide className='SwiperTitle d-flex flex-column'>
                        <a href="#" className='btnSliderTitle d-flex flex-column justify-content-center align-items-center'>
                            <h2 className='mb-3'>انواع ساعت هوشمند</h2>
                            <img src="https://res.cloudinary.com/dpzrxnav1/image/upload/v1644307861/pngfind.com-apple-watch-png-99752_paeaym.png" alt="" />
                            <a href="#">مشاهده همه محصولات <i class="fas fa-arrow-left"></i></a>

                        </a>
                    </SwiperSlide>

                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </section>
        );
    }
}
