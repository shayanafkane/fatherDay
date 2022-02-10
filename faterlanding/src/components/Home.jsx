import React, { Component } from 'react';
import Main from './Main';
import Nav from './Nav';
import {ToastContainer} from 'react-toastify'
import Slider1 from './Slider1';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        {/* <Slider1 /> */}
        <Main />
        <ToastContainer />
      </div>
    );
  }
}
