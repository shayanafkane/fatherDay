import React, { Component } from 'react'
import { ToastContainer } from 'react-toastify'
import Hero from './Hero'

export default class Home extends Component {
    render() {
        return (
            <>
                <Hero />
                <section class="main mt-2 container">



                    <div class="row boxProduct">

                        <div class="col-12 col-md-6 titleProduct phoneBox">

                            <p>گوشی موبایل</p>

                            <h3> تا 10 درصد تخفیف</h3>


                            <button disabled onclick="location.href='https://etebarkala.com/product-tag/mpedar/'" id="btnProduct"
                                class="btn btn-primary">لیست گوشی ها ( به زودی )</button>

                        </div>

                        <div class="col-12 col-md-6 imgProduct d-flex justify-content-center align-items-center">

                            <img class="" src="https://freebiescloud.com/wp-content/uploads/2020/10/1-87.png" alt="" />

                        </div>



                    </div>

                    <div class="row boxProduct mt-5">



                        <div class="col-12 col-md-6 imgProduct d-flex justify-content-center align-items-center">

                            <img class="imgHeadphone"
                                src="https://res.cloudinary.com/dpzrxnav1/image/upload/v1644418257/qcy-t10-vga_klc1hu.png" alt="" />

                        </div>

                        <div class="col-12 col-md-6 titleProduct">

                            <p>هدفون</p>

                            <h3>تا 150 هزارتومان تخفیف</h3>

                            <button disabled onclick="location.href='https://etebarkala.com/product-tag/hpedar/'" id="btnProduct"
                                class="btn btn-primary">لیست هدفون ها ( به زودی )</button>

                        </div>

                    </div>

                    <div class="row boxProduct">

                        <div class="col-12 col-md-6 titleProduct smartWatchBox">

                            <p>ساعت هوشمند و پاور بانک</p>

                            <h3>تا 10 درصد تخفیف</h3>

                            <button disabled onclick="location.href='https://etebarkala.com/product-tag/popedar/'" id="btnProduct"
                                class="btn btn-primary">لیست ساعت و پاور بانک ها ( به زودی )</button>

                        </div>

                        <div class="col-12 col-md-6 imgProduct d-flex justify-content-center align-items-center">

                            <img class="" src="https://res.cloudinary.com/dpzrxnav1/image/upload/v1644418059/1-111_asvj4p.png"
                                alt="" />

                        </div>



                    </div>

                    <div class="row boxProduct mt-5">



                        <div class="col-12 col-md-6 imgProduct d-flex justify-content-center align-items-center">

                            <img class=""
                                src="https://res.cloudinary.com/dpzrxnav1/image/upload/v1644392670/favpng_iphone-7-iphone-6s-smartphone-screen-protector_frgxx4.png"
                                alt="" />

                        </div>

                        <div class="col-12 col-md-6 titleProduct">

                            <p>انواع گلس</p>

                            <h3>تا 50 درصد تخفیف</h3>

                            <button
                                onclick="location.href='https://etebarkala.com/product-category/phone-accessories/glass/?pr_stock=instock'"
                                disabled id="btnProduct" class="btn btn-primary">لیست گلس ها ( به زودی )</button>

                        </div>

                    </div>
                    <button
                        onclick="location.href='https://etebarkala.com/product-category/phone-accessories/glass/?pr_stock=instock'"
                        disabled id="btnProduct" class="btnEnd btn btn-primary">همه محصولات ( به زودی )</button>

                </section>

            </>
        )
    }
}
