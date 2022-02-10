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
                                    <a href="index.html" className="font-weight-bold"><img src="https://res.cloudinary.com/dpzrxnav1/image/upload/v1643462603/Logo_Text-4-2_atcrc1.png" width={'150px'} alt="" /></a>
                                </div>
                            </div>

                            <div className="col-9 customMobile text-right">


                                <span className="d-inline-block d-lg-none"><a href="#" className="text-primary site-menu-toggle js-menu-toggle py-5"><span className="icon-menu h3 text-white"></span></a></span>


                                <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                                    <ul className="site-menu main-menu js-clone-nav ml-auto ">

                                        <li><a href="#phone" className="nav-link">گوشی</a></li>
                                        <li><a href="#smartwatch" className="nav-link">ساعت هوشمند</a></li>
                                        <li><a href="#headphone" className="nav-link">هدفون و هدست</a></li>

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
                        <div className="boxForm d-flex flex-column justify-content-start align-items-start">
                            <p>برای اینکه زودتر از همه از تخفیف ها با خبر شید فرم زیر را پر کنید !</p>
                            <div className='d-flex'>
                                <input className='form-control' type="text" name='tel' placeholder='شماره موبایل خودرا وارد کنید' onChange={e => this.setState({ tel: e.target.value })} />
                                <button className='btn btn-primary' onClick={() => {
                                    let formData = new FormData();
                                    formData.append("tel", this.state.tel);
                                   
                                    axios.post('https://etebarkala.com/black-friday/index.php', formData)
                                        .then((response) => {
                                            console.log(response.data);
                                            if (response.data.result == true) {
                                                toast.success("اطلاعات شما با موفقیت ثبت شد");
                                                this.state.disabled = false;

                                            } else if (response.data.result == false) {
                                                toast.error("شماره موبایل اشتباه وارد شده است");
                                                this.state.disabled = false;
                                            } else if (response.data.result == "duplicate") {
                                                toast.error("شماره موبایل وارد شده تکراری است");
                                                this.state.disabled = false;
                                            }
                                        })
                                }}>ثبت</button>
                            </div>
                        </div>
                        <p>برای دیدن محصولات ویژه روز پدر صفحه را اسکرول کنید</p>
                        <div class="aroowDown">
                            <div class="chevron"></div>
                            <div class="chevron"></div>
                            <div class="chevron"></div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
