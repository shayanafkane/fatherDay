import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios'
import './assets/styles/bootstrap/bootstrap.rtl.min.css';
import './assets/styles/Nav/Nav.css';
import './assets/styles/Nav/owl.carousel.min.css';
import './assets/icomoon/style.css'
export default class Nav extends Component {
    state = {
        tel: '',
    }

    render() {
        return (
            <>
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">

                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body">

                    </div>
                </div>
                <header className="site-navbar site-navbar-target" role="banner">

                    <div className="container">
                        <div className="row align-items-center position-relative">

                            <div className="col-3">
                                <div className="site-logo">
                                    <a href="https://etebarkala.com/" className="font-weight-bold"><img src="https://res.cloudinary.com/dpzrxnav1/image/upload/v1643462603/Logo_Text-4-2_atcrc1.png" width={'150px'} alt="" /></a>
                                </div>
                            </div>

                            <div className="col-9 customMobile text-right">


                                <span className="d-inline-block d-lg-none"><a href="#" className="text-primary site-menu-toggle js-menu-toggle py-5"><span className="icon-menu h3 text-white"></span></a></span>


                                <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                                    <ul className="site-menu main-menu js-clone-nav ml-auto ">

                                        <li><a href="#phone" className="nav-link">گوشی</a></li>
                                        <li><a href="#smartwatch" className="nav-link">ساعت هوشمند</a></li>
                                        <li><a href="#headphone" className="nav-link">هدفون و هدست</a></li>
                                        <li><a href="#hard" className="nav-link">هارد</a></li>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                </header>

                <div className="hero d-flex justify-content-center flex-column" >
                    <div className="d-flex  boxTitle">
                        <h2 className='fatherDayTitle' >روز پدر</h2>
                        <h2 className='fatherDayHappy'>مبارک</h2>

                    </div>

                    <div className="boxTitle d-flex flex-column">

                        <p>برای دیدن محصولات ویژه پدران لاکچری صفحه را اسکرول کنید</p>
                        <a href="#phone">
                            <div class="aroowDown">
                                <div class="chevron"></div>
                                <div class="chevron"></div>
                                <div class="chevron"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </>
        );
    }
}
