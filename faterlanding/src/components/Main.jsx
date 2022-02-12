import React, { Component } from 'react'
import './assets/styles/Main.css'
import axios from 'axios'
export default class Main extends Component {
    state = {
        mobile: [],
        loadingMobile: true,
        smartWatch: [],
        lodingWatch: true,
        headphone: [],
        loadingheadphone: true,
        hard: [],
        loadinghard: true,
    }
    componentDidMount() {
        this.getData()
    }
    async getData() {
        axios.all([
            axios.get('https://etebarkala.com/wooapi/woo.php', {
                params: {
                    tag: '12783',
                    category: '1008',
                    stock_status: 'instock'
                }
            })
                .then(response => {
               
                    this.setState({ mobile: response.data })
                })
                .finally(() => {
                    this.setState({ loadingMobile: false })
                })
            ,
            axios.get('https://etebarkala.com/wooapi/woo.php', {
                params: {
                    tag: '12783',
                    category: '1019',
                    stock_status: 'instock'

                }
            })
                .then(response => {
            
                    this.setState({ smartWatch: response.data })
                })
                .finally(() => {
                    this.setState({ lodingWatch: false })
                })
            ,

            axios.get('https://etebarkala.com/wooapi/woo.php', {
                params: {
                    tag: '12783',
                    category: '1033',
                    stock_status: 'instock'

                }
            })
                .then(response => {
                  
                    this.setState({ headphone: response.data })
                })
                .finally(() => {
                    this.setState({ loadingheadphone: false })
                })
            ,
            axios.get('https://etebarkala.com/wooapi/woo.php', {
                params: {
                    tag: '12783',
                    category: '1026',
                    stock_status: 'instock'

                }
            })
                .then(response => {
                    
                    this.setState({ hard: response.data })
                })
                .finally(() => {
                    this.setState({ loadinghard: false })
                })
        ])




    }
    render() {

        return (
            <section className='container'>
                <div className="box1" id='phone'>
                    <h2 className='text-center'>گوشی موبایل</h2>
                    <hr className='hrCustom' />
                    {this.state.loadingMobile == true &&
                        <div class="loader">Loading...</div>

                    }
                    <div className="row">

                        {this.state.mobile.map(mobile => {
                            return (
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="product">
                                        <a href={mobile.permalink}>
                                            <img src={mobile.images[0].src} className='imageProduct' alt="" />
                                            <p className='px-2'>{mobile.name}
                                            </p>
                                            <p className='priceOffer '>{Intl.NumberFormat('fa-IR').format(mobile.price)} تومان</p>
                                        </a>
                                    </div>
                                </div>
                            )
                        })

                        }


                    </div>
                </div>
                <div className="box2 mt-5" id='smartwatch'>
                    <h2 className='text-center'>ساعت هوشمند</h2>
                    <hr className='hrCustom' />
                    {this.state.lodingWatch == true &&
                        <div class="loader">Loading...</div>

                    }
                    <div className="row">
                        {this.state.smartWatch.map(smart => {
                            return (
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="product">
                                        <a href={smart.permalink}>
                                            <img src={smart.images[0].src} className='imageProduct' alt="" />
                                            <p className='px-2'>{smart.name}
                                            </p>
                                            <p className='priceOffer '>{Intl.NumberFormat('fa-IR').format(smart.price)} تومان</p>
                                        </a>
                                    </div>
                                </div>
                            )
                        })

                        }

                    </div>
                </div>
                <div className="box3 mt-5" id='headphone'>
                    <h2 className='text-center'>هدفون و هدست</h2>
                    <hr className='hrCustom' />
                    {this.state.loadingheadphone == true &&
                        <div class="loader">Loading...</div>

                    }
                    <div className="row">
                        {this.state.headphone.map(headphone => {
                            return (
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="product">
                                        <a href={headphone.permalink}>
                                            <img src={headphone.images[0].src} className='imageProduct' alt="" />
                                            <p className='px-2'>{headphone.name}
                                            </p>
                                            <p className='priceOffer '>{Intl.NumberFormat('fa-IR').format(headphone.price)} تومان</p>
                                        </a>
                                    </div>
                                </div>
                            )
                        })

                        }


                    </div>
                </div>
                <div className="box4 mt-5" id='hard'>
                    <h2 className='text-center'>هارد</h2>
                    <hr className='hrCustom' />
                    {this.state.hard == true &&
                        <div class="loader">Loading...</div>

                    }
                    <div className="row">
                        {this.state.hard.map(hard => {
                            return (
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="product">
                                        <a href={hard.permalink}>
                                            <img src={hard.images[0].src} className='imageProduct' alt="" />
                                            <p className='px-2'>{hard.name}
                                            </p>
                                            <p className='priceOffer '>{Intl.NumberFormat('fa-IR').format(hard.price)} تومان</p>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
