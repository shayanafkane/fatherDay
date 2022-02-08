import React, { Component } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./assets/styles/Slider.css";

export default class Slider1 extends Component {

    state = {
        product: [],
        loading: true
    }
    componentDidMount() {
        this.getData()
    }
    async getData() {


        axios.get(`https://etebarkala.com/wooapi/woo.php`, {
            params: {
                category: '1019',
                stock_status: "instock"
            }
        }).then(response => {
            this.setState({ product: response.data })
            console.log(this.state.product)

        }).catch(error => console.log(error))
            .finally(() => {
                this.setState({ loading: false })
            });


    }


    render() {
        return (
            <section className='SliderBox'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        500: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper px-4 py-4"
                >

                    <SwiperSlide className='SwiperTitle d-flex flex-column'>
                        <a href="#" className='btnSliderTitle d-flex flex-column justify-content-center align-items-center'>
                            <h2 className='mb-3'>انواع ساعت هوشمند</h2>
                            <img src="https://res.cloudinary.com/dpzrxnav1/image/upload/v1644307861/pngfind.com-apple-watch-png-99752_paeaym.png" alt="" />

                        </a>
                    </SwiperSlide>
                    {this.state.loading == true &&
                        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    }
                    {this.state.product.map(product => {
                        return (
                            <SwiperSlide className='SwiperProductSlide d-flex flex-column'>
                                <a href={product.permalink} className='d-flex flex-column align-items-center'>


                                    <img src={product.images[0].src} alt="" />
                                    <p className='text-dark'>{product.name}</p>
                                    {/* <p className='priceOrginal'>1/127/000</p> */}
                                    <p className='priceOffer text-dark' >{Intl.NumberFormat('fa-IR').format(product.price)} تومان</p>
                                </a>
                            </SwiperSlide>
                        )
                    })

                    }


                </Swiper>
            </section>
        );
    }
}
