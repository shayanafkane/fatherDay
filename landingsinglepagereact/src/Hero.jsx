import React, { Component } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
export default class Hero extends Component {
    state = {
        tel: '',
    }
    render() {
        return (
            <>
                <div className="logo m-4">

                    <a href="https://etebarkala.com">

                        <img width="180px"
                            src="https://res.cloudinary.com/dpzrxnav1/image/upload/v1643462603/Logo_Text-4-2_atcrc1.png" alt="" />

                    </a>



                </div>

                <div className="hero d-flex justify-content-center flex-column">

                    <div className="d-flex  boxTitle">

                        <h2 className='fatherDayTitle'>روز پدر</h2>

                        <h2 className='fatherDayHappy'>مبارک</h2>

                    </div>

                    <div className="boxTitle d-flex flex-column">
                        <p className='textLast'>اگه میخوای زودتر از بقیه از تخفیف ها با خبر بشی این فرم رو پر کن</p>
                        <div className="d-flex flex-row boxInput">
                            <input className='form-control' onChange={e => this.setState({ tel: e.target.value })} type="text" name="tel" placeholder="شماره موبایل خودرا وارد کنید" />
                            <button onClick={() => {
                                let formData = new FormData();
                                formData.append("tel", this.state.tel);
                                formData.append("source", "heroDad");
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
                            }} className="btn btn-primary submitBtn">ثبت</button>
                        </div>
                        <p>برای دیدن محصولات ویژه پدران قهرمان صفحه را اسکرول کنید</p>

                        <div className="aroowDown">

                            <div className="chevron"></div>

                            <div className="chevron"></div>

                            <div className="chevron"></div>
                        </div>
                    </div>
                    <ToastContainer />
                </div>

            </>

        )
    }
}
